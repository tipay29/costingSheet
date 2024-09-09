<?php

namespace App\Http\Controllers;

use App\Exports\CostingSheetExport;
use App\Models\CostingSheet;
use App\Models\CostSketch;
use Illuminate\Http\Request;
use Illuminate\Pipeline\Pipeline;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Maatwebsite\Excel\Facades\Excel;
use function Maatwebsite\Excel\Cache\delete;

class CostingSheetController extends Controller
{

    public function index()
    {
        $costing_sheets = CostingSheet::with('user')->orderBy('id', 'DESC')->paginate(10);

        return view('costing-sheet.index',compact('costing_sheets'));
    }


    public function create()
    {
        $costingsheet = new CostingSheet();
        $sketches = new CostSketch();

        return view('costing-sheet.create', compact('costingsheet','sketches'));
    }

    public function edit($costingsheet)
    {
        $sketches = CostSketch::where('costing_sheet_id',$costingsheet)->first();

        return view('costing-sheet.edit',compact('costingsheet','sketches'));
    }

    public function export(CostingSheet $costingSheet){
        $costingSheet->load([
            'cost_fabrics','cost_trims','cost_zippers','cost_embelishments',
            'cost_labels','cost_threads','cost_packages','cost_finishes',
            'cost_exports','cost_testings','cost_others','cost_labors','cost_sketches',
            'cost_remarks','cost_labor_details','cost_moqs',
        ]);
//        dd($costingSheet->cost_fabrics);
        return Excel::download(new CostingSheetExport($costingSheet), 'costingSheet.xlsx');


    }


    public function destroy(CostingSheet $costingSheet)
    {

        $costingSheet->cost_fabrics()->delete(); $costingSheet->cost_trims()->delete();$costingSheet->cost_zippers()->delete();
        $costingSheet->cost_embelishments()->delete(); $costingSheet->cost_labels()->delete();$costingSheet->cost_threads()->delete();
        $costingSheet->cost_packages()->delete(); $costingSheet->cost_finishes()->delete();$costingSheet->cost_exports()->delete();
        $costingSheet->cost_testings()->delete(); $costingSheet->cost_others()->delete();$costingSheet->cost_labors()->delete();
        $costingSheet->cost_remarks()->delete();$costingSheet->cost_labor_details()->delete();$costingSheet->cost_moqs()->delete();
        if(count($costingSheet->cost_sketches) > 0){

            if($costingSheet->cost_sketches[0]->cost_front_sketch !== null){
                unlink(public_path($costingSheet->cost_sketches[0]->cost_front_sketch)); // delete file from default disk
            }
            if($costingSheet->cost_sketches[0]->cost_back_sketch !== null){
                unlink(public_path($costingSheet->cost_sketches[0]->cost_back_sketch)); // delete file from default disk
            }
            if($costingSheet->cost_sketches[0]->cost_left_sketch !== null){
                unlink(public_path($costingSheet->cost_sketches[0]->cost_left_sketch)); // delete file from default disk
            }
            if($costingSheet->cost_sketches[0]->cost_right_sketch !== null){
                unlink(public_path($costingSheet->cost_sketches[0]->cost_right_sketch)); // delete file from default disk
            }

            $costingSheet->cost_sketches()->delete();
        }
        $costingSheet->delete();

        return redirect()->back();
    }

    public function copy(){

        $costing_sheet = CostingSheet::with(
            'cost_fabrics','cost_trims','cost_zippers','cost_embelishments',
            'cost_labels','cost_threads','cost_packages','cost_finishes',
            'cost_exports','cost_testings','cost_others','cost_labors','cost_sketches',
            'cost_remarks','cost_labor_details','cost_moqs'
        )->where('id',request()->costing_id)->first();

        if($costing_sheet === null){
            return redirect()->back()->with('message','Invalid Costing Sheet ID!!!');
        }

        $new_costing_sheet = $costing_sheet->replicate();
        $new_costing_sheet->save();

        foreach ($costing_sheet->getRelations() as $relation => $entries){
            foreach($entries as $entry){
                $e = $entry->replicate();
                $new_costing_sheet->{$relation}()->save($e);
            }
        }

        if(count($new_costing_sheet->cost_sketches) > 0){

            if($new_costing_sheet->cost_sketches[0]['cost_front_sketch'] !== null){
                $oldPath = public_path($new_costing_sheet->cost_sketches[0]['cost_front_sketch']);

                $fileExtension = pathinfo($oldPath, PATHINFO_EXTENSION);
                $newName = 'cs'.$new_costing_sheet->id.'front.'.$fileExtension;
                $newPathWithName = 'storage/images/costing-sheet/'.$newName;

               \File::copy($oldPath , $newPathWithName);
                $new_costing_sheet->cost_sketches()->update(['cost_front_sketch'=>$newPathWithName]);
            }
            if($new_costing_sheet->cost_sketches[0]['cost_back_sketch'] !== null){
                $oldPath = public_path($new_costing_sheet->cost_sketches[0]['cost_back_sketch']);

                $fileExtension = pathinfo($oldPath, PATHINFO_EXTENSION);
                $newName = 'cs'.$new_costing_sheet->id.'back.'.$fileExtension;
                $newPathWithName = 'storage/images/costing-sheet/'.$newName;

                \File::copy($oldPath , $newPathWithName);
                $new_costing_sheet->cost_sketches()->update(['cost_back_sketch'=>$newPathWithName]);
            }
            if($new_costing_sheet->cost_sketches[0]['cost_left_sketch'] !== null){
                $oldPath = public_path($new_costing_sheet->cost_sketches[0]['cost_left_sketch']);

                $fileExtension = pathinfo($oldPath, PATHINFO_EXTENSION);
                $newName = 'cs'.$new_costing_sheet->id.'left.'.$fileExtension;
                $newPathWithName = 'storage/images/costing-sheet/'.$newName;

               \File::copy($oldPath , $newPathWithName);
                $new_costing_sheet->cost_sketches()->update(['cost_left_sketch'=>$newPathWithName]);
            }
            if($new_costing_sheet->cost_sketches[0]['cost_right_sketch'] !== null){
                $oldPath = public_path($new_costing_sheet->cost_sketches[0]['cost_right_sketch']);

                $fileExtension = pathinfo($oldPath, PATHINFO_EXTENSION);
                $newName = 'cs'.$new_costing_sheet->id.'right.'.$fileExtension;
                $newPathWithName = 'storage/images/costing-sheet/'.$newName;

              \File::copy($oldPath , $newPathWithName);
                $new_costing_sheet->cost_sketches()->update(['cost_right_sketch'=>$newPathWithName]);
            }

        }

      return redirect()->back();

    }

    public function searchSingle(){


        $search = request('costing_search_solo');


        $costing_sheets = CostingSheet::where(function($query) use ($search){
            $query->where('cost_brand','like','%'.$search.'%')
                ->orWhere('cost_color','like','%'.$search.'%')
                ->orWhere('cost_color_head_names','like','%'.$search.'%')
                ->orWhere('cost_style','like','%'.$search.'%')
                ->orWhere('cost_style_name','like','%'.$search.'%')
                ->orWhere('cost_vendor','like','%'.$search.'%')
                ->orWhere('cost_season','like','%'.$search.'%')
                ->orWhere('cost_gender','like','%'.$search.'%')
                ->orWhere('cost_product_category','like','%'.$search.'%')
                ->orWhere('cost_customer_name','like','%'.$search.'%');
        })->orderBy('id', 'DESC')
            ->with([
                'user',
            ])->paginate(10);

        return view('costing-sheet.index',compact('costing_sheets'));
    }

    public function searchMulti(){

        $costing_sheets = app(Pipeline::class)
            ->send(
                CostingSheet::query()
            )
            ->through([
                \App\QueryFilters\Costing\Index\Brand::class,
                \App\QueryFilters\Costing\Index\Color::class,
                \App\QueryFilters\Costing\Index\Gender::class,
                \App\QueryFilters\Costing\Index\ProductCategory::class,
                \App\QueryFilters\Costing\Index\Style::class,
                \App\QueryFilters\Costing\Index\Season::class,
            ])
            ->thenReturn()
            ->orderBy('id', 'DESC')
            ->with([
                'user',
            ])
            ->paginate(10);
        return view('costing-sheet.index',compact('costing_sheets'));
    }
}
