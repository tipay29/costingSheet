@extends('layouts.app')

@section('content')
    <div class="container"
         style="width: 1580px !important;max-width:1580px;margin:0px !important;"
    >
        <div class="row">
            <div class="col-md-12" >
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <h5 class="mt-2">Edit Costing Sheet</h5>

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

                        <input id="costing_sheet_id" type="hidden" value="{{$costingsheet}}">

                        <form id="costing_form_update" action="#" method="post" enctype="multipart/form-data">

                            @csrf
                            @include('costing-sheet.form')


                            <div class="d-flex justify-content-center mt-3">
                                <button type="submit"  class="btn btn-primary" id="costing_update_btn">Update </button>
                            </div>

                        </form>


                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
