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
