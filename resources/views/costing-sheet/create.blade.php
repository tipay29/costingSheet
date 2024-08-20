@extends('layouts.app')

@section('content')
    <div class="container"
 style="width: 1580px !important;max-width:1580px;margin:0px !important;"
    >
        <div class="row">
            <div class="col-md-12" >
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <h5 class="mt-2">Create Costing Sheet</h5>

                        <div>

                            <a href="#"
                               class="btn btn-outline-success">
                                Approve</a>
                            <a href="{{url()->previous()}}"
                               class="btn btn-outline-secondary">
                                Back</a>
                        </div>
                    </div>

                    <div class="card-body" >

                        <form id="costing_form" action="#" method="post" enctype="multipart/form-data">

                            @include('costing-sheet.form')

                            <input id="costing_fabric_row_names" name="costing_fabric_row_names" type="hidden" value="1-10">
                            <input id="costing_trim_row_names" name="costing_trim_row_names" type="hidden" value="11-40">
                            <input id="costing_zipper_row_names" name="costing_zipper_row_names" type="hidden" value="41-45">
                            <input id="costing_embelishment_row_names" name="costing_embelishment_row_names" type="hidden" value="46-50">
                            <input id="costing_label_row_names" name="costing_label_row_names" type="hidden" value="51-60">
                            <input id="costing_thread_row_names" name="costing_thread_row_names" type="hidden" value="61-70">
                            <input id="costing_package_row_names" name="costing_package_row_names" type="hidden" value="71-80">
                            <input id="costing_finish_row_names" name="costing_finish_row_names" type="hidden" value="81-85">
                            <input id="costing_export_row_names" name="costing_export_row_names" type="hidden" value="86-90">
                            <input id="costing_testing_row_names" name="osting_testing_row_names" type="hidden" value="91-95">
                            <input id="costing_other_row_names" name="costing_other_row_names" type="hidden" value="96-100">
                            <input id="costing_labor_row_names" name="costing_labor_row_names" type="hidden" value="101-103">

                            @csrf

                            <div class="d-flex justify-content-center mt-3">
                                <button type="submit"  class="btn btn-primary" id="costing_save_btn">Save </button>
                            </div>

                        </form>


                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
