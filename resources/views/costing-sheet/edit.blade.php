@extends('layouts.app')

@section('content')
    <div class="container cost_container_main_cs"

    >
        <div class="row">
            <div class="col-md-12" >
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <h5 class="mt-2">Edit Costing Sheet</h5>

                        <div>
                            <a href="{{route('costing-sheets.export', $costingsheet)}}"
                               class="btn btn-outline-success">
                                Excel</a>
                            <a href="#"
                               class="btn btn-outline-success">
                                Approve</a>
                            <a href="{{url()->previous()}}"
                               class="btn btn-outline-secondary">
                                Back</a>
                        </div>
                    </div>

                    <div class="card-body" >

                        <input id="costing_sheet_id" type="hidden" value="{{$costingsheet}}">

                        <form id="costing_form_update"  action="#" method="post" enctype="multipart/form-data">

                            @csrf
                            @include('costing-sheet.form')


                            <div class="d-flex justify-content-center mt-3">
                                <button type="submit"  class="btn btn-primary" id="costing_update_btn" style="position: fixed;bottom: 10px;">Update </button>
                            </div>

                        </form>


                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
