<?php

namespace App\Http\Controllers;

use App\Exports\CostingSheetExport;
use App\Models\CostingSheet;
use App\Models\CostSketch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
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
        //
    }
}
