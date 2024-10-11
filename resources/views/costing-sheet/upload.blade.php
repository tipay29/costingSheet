@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">

                    <div class="card-header d-flex justify-content-between">
                        <h5 class="mt-2">Upload Costing Sheet</h5>

                        <div>


                            <a href="{{url()->previous()}}"
                               class="btn btn-outline-secondary">
                                Back</a>

                        </div>
                    </div>

                    <div class="card-body">

                        <form action="{{route('costing-sheets.import')}}" method="post" enctype="multipart/form-data"
                              class="dropzone dz-clickable mt-2" id="costing-sheet">
                            @csrf

                            <div>

                                <h4 class="text-center">Make sure Cell Range were correct</h4>

                            </div>

                            <div class="dz-default dz-message">

                                <h1> DROP here or CLICK&CHOOSE your Upload File</h1>
                            </div>
                            <h4 class="text-center"> check the excel extension (xlsx,xl,xls)</h4>


                        </form>

                    </div>

                </div>
            </div>
        </div>
    </div>


@endsection
