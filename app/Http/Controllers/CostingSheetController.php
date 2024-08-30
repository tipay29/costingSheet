<?php

namespace App\Http\Controllers;

use App\Exports\CostingSheetExport;
use App\Models\CostingSheet;
use App\Models\CostSketch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;

class CostingSheetController extends Controller
{

    public function index()
    {
        $costing_sheets = CostingSheet::with('user')->get();

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
}
