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
                               class="btn btn-outline-secondary"
                            >Create</a>

                            <a href="{{url()->previous()}}"
                               class="btn btn-outline-secondary">
                                Back</a>
                        </div>
                    </div>

                    <div class="card-body">

                        <div class="table-responsive">
                            <table class="table">
                                <thead class="thead-light">
                                <tr>
                                    <th scope="col">No</th>
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
                                                {{$key+1}}
                                                <i class="fa fa-eye" aria-hidden="true" style="color:dodgerblue;"></i>
                                                <i class="fa fa-external-link" aria-hidden="true" style="color:grey"></i>
                                                <i class="fa fa-trash-o" aria-hidden="true" style="color:firebrick;"></i>
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
                                                    $material_percent = ($material_fob/($material_fob+$lop_fob))*100;
                                                    echo round($material_percent,2);
                                                @endphp
                                                %</td>
                                            <td>{{$costing_sheet->cost_lop_fob}}</td>
                                            <td>
                                                @php
                                                    $lop_percent = ($lop_fob/($material_fob+$lop_fob))*100;
                                                    echo round($lop_percent,2);
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

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
