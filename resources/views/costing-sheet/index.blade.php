@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <h5 class="mt-2">Costing Sheets</h5>

                        <div>

                            <a href="{{route('costing-sheets.create')}}"
                               class="btn btn-outline-primary"
                            >Create</a>

                            <a id="costing_btn_copy_cs" type="button" class="btn btn-outline-warning" data-bs-toggle="modal"
                               data-bs-target="#showCopyCSModal">
                                Copy
                            </a>

                            <a href="{{url()->previous()}}"
                               class="btn btn-outline-secondary">
                                Back</a>
                            @if(session()->has('message'))
                                <p class="text-danger">{{session()->get('message')}}</p>
                            @endif
                        </div>
                    </div>

                    <div class="card-body">

                        <div class="row costing-search-row-single" id="costing_search_row_single">

                            <div class="col-md-9">
                                <button class="costing-search-switch-multi" id="costing_search_switch_multi_btn">
                                    <i class="fa fa-users" aria-hidden="true"></i></button>
                            </div>

                                <div class="col-md-3">
                                    <form action="{{route('costing-sheets.search-single')}}" method="get">

                                        <div class="input-group">

                                            <input value="{{old('costing_search_solo')}}" type="text" class="form-control" placeholder="Search..." id="costing_search_solo" name="costing_search_solo">
                                            <button class="input-group-text" id="costing_search_single_btn">
                                                <i class="fa fa-search" aria-hidden="true"></i></button>

                                        </div>
                                    </form>
                                </div>

                        </div>

                        <form action="{{route('costing-sheets.search-multi')}}" method="get">

                            <div class="row costing-search-row-multi" id="costing_search_row_multi">

                                <div class="d-flex justify-content-between">

                                    <button class="costing-search-switch-single" id="costing_search_switch_single_btn">

                                            <i class="fa fa-user" aria-hidden="true"></i></button>

                                            <input class="costing-search-input" type="text" placeholder="Brand" id="costing_search_brand" name="costing_search_brand">
                                            <input class="costing-search-input" type="text" placeholder="Color" id="costing_search_color" name="costing_search_color">
                                            <input class="costing-search-input" type="text" placeholder="Gender" id="costing_search_gender" name="costing_search_gender">
                                            <input class="costing-search-input" type="text" placeholder="Season" id="costing_search_season" name="costing_search_season">
                                            <input class="costing-search-input" type="text" placeholder="Style" id="costing_search_style" name="costing_search_style">
                                            <input class="costing-search-input" type="text" placeholder="Product Category" id="costing_search_product_category" name="costing_search_product_category">

                                            <button class="costing-search-multi-btn" id="costing_search_multi_btn"><i class="fa fa-search" aria-hidden="true"></i></button>

                                </div>

                            </div>
                        </form>

                        <div class="table-responsive">
                            <table class="table">
                                <thead class="thead-light">
                                <tr>
                                    <th scope="col" style="text-align: end;">No</th>
                                    <th scope="col">Brand</th>
                                    <th scope="col">Season</th>
                                    <th scope="col">Style</th>
                                    <th scope="col">Forecast QTY</th>
                                    <th scope="col">Targeted FOB</th>
                                    <th scope="col">Total FOB</th>
                                    <th scope="col">Material</th>
                                    <th scope="col">Material %</th>
                                    <th scope="col">LOP</th>
                                    <th scope="col">LOP %</th>
                                    <th scope="col">C/S Stage</th>
                                    <th scope="col">C/S Status</th>
                                    <th scope="col">Made by</th>
                                </tr>
                                </thead>
                                <tbody>

                                    @forelse($costing_sheets as $key => $costing_sheet)
                                        <tr>
                                            <td scope="row">
                                                <a href="{{route('costing-sheets.edit', $costing_sheet->id)}}"><i class="fa fa-eye" aria-hidden="true" style="color:dodgerblue;"></i></a>

                                                <a style="padding:0;margin: 0;" id="{{$costing_sheet->id}}" type="button" class="btn show_summary_btn" data-bs-toggle="modal"
                                                        data-bs-target="#showSummaryModal">
                                                    <i class="fa fa-external-link" aria-hidden="true" style="color:grey;"></i>
                                                </a>

                                                @if(auth()->user()->id == $costing_sheet->user_id)
                                                    <form style="display:inline;padding: 0;" action="{{route('costing-sheets.destroy', $costing_sheet->id)}}" method="post">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button style="border: none;background-color: white;color:darkred;"
                                                                onclick="return confirm('Delete Costing Sheet #{{$costing_sheet->id}}  ?')" >
                                                            <i class="fa fa-trash" aria-hidden="true"></i></button>
                                                    </form>
                                                @endif
                                                {{$costing_sheet->id}}
                                            </td>
                                            <td>{{$costing_sheet->cost_brand}}</td>
                                            <td>{{$costing_sheet->cost_season}}</td>
                                            <td>{{$costing_sheet->cost_style}}</td>
                                            <td>{{$costing_sheet->cost_forecast_qty}}</td>
                                            <td>{{$costing_sheet->cost_target_fob}}</td>
                                            <td>{{$costing_sheet->cost_total_fob}}</td>
                                            <td>{{$costing_sheet->cost_material_fob}}</td>
                                            <td>
                                                @php
                                                    $material_fob = floatval($costing_sheet->cost_material_fob);
                                                    $lop_fob = floatval($costing_sheet->cost_lop_fob);
                                                    if($material_fob > 0){
                                                    $material_percent = ($material_fob/($material_fob+$lop_fob))*100;
                                                    echo round($material_percent,2);
                                                    }
                                                @endphp
                                                %</td>
                                            <td>{{$costing_sheet->cost_lop_fob}}</td>
                                            <td>
                                                @php
                                                    if($lop_fob > 0){
                                                       $lop_percent = ($lop_fob/($material_fob+$lop_fob))*100;
                                                       echo round($lop_percent,2);
                                                   }
                                                @endphp
                                                %</td>
                                            <td>{{$costing_sheet->cost_costing_stage}}</td>
                                            <td>{{$costing_sheet->cost_status}}</td>
                                            <td>{{$costing_sheet->user->name}}</td>
                                        </tr>
                                    @empty
                                        <tr>
                                            <td colspan="14" class="text-danger">No Record. Please go to Create Costing Sheet.</td>
                                        </tr>
                                    @endforelse
                                </tbody>


                            </table>
                        </div>
                        <div class="row">
                            <div class="col-12 d-flex justify-content-center ">
                                {{$costing_sheets->withQueryString()->onEachSide(2)->links()}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    @include('costing-sheet.show-summary-modal')
    @include('costing-sheet.show-copy-cs-modal')

@endsection
