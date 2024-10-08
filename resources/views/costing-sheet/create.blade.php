@extends('layouts.app')

@section('content')
    <div class="container cost_container_main_cs"

    >
        <div class="row">
            <div class="col-md-12" >
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <h5 class="mt-2">Create Costing Sheet</h5>

                        <div>


                            <a href="{{url()->previous()}}"
                               class="btn btn-outline-secondary">
                                Back</a>
                        </div>
                    </div>

                    <div class="card-body" >

                        <form id="costing_form_create"  action="#" method="post" enctype="multipart/form-data">

                            @include('costing-sheet.form')

                            @csrf

                            <div class="d-flex justify-content-center mt-3" >
                                <button type="submit"  class="btn btn-primary" id="costing_save_btn" style="position: fixed;bottom: 10px;">Save </button>
                            </div>

                        </form>


                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
