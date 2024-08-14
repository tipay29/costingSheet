<?php

namespace App\Http\Controllers;

use App\Models\CostingSheet;
use Illuminate\Http\Request;

class CostingSheetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('costing-sheet.index');
    }


    public function create()
    {
        $costingsheet = new CostingSheet();

        return view('costing-sheet.create', compact('costingsheet'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CostingSheet  $costingSheet
     * @return \Illuminate\Http\Response
     */
    public function show(CostingSheet $costingSheet)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CostingSheet  $costingSheet
     * @return \Illuminate\Http\Response
     */
    public function edit(CostingSheet $costingSheet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CostingSheet  $costingSheet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CostingSheet $costingSheet)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CostingSheet  $costingSheet
     * @return \Illuminate\Http\Response
     */
    public function destroy(CostingSheet $costingSheet)
    {
        //
    }
}
