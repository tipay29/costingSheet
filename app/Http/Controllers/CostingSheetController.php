<?php

namespace App\Http\Controllers;

use App\Models\CostingSheet;
use App\Models\CostSketch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

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

    public function store(Request $request)
    {
        //
    }


    public function show(CostingSheet $costingSheet)
    {
        //
    }

    public function edit($costingsheet)
    {
        $sketches = CostSketch::where('costing_sheet_id',$costingsheet)->first();

        return view('costing-sheet.edit',compact('costingsheet','sketches'));
    }

    public function update(Request $request, CostingSheet $costingSheet)
    {
        //
    }


    public function destroy(CostingSheet $costingSheet)
    {
        //
    }
}
