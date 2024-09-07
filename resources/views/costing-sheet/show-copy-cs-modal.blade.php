<div class="modal fade" id="showCopyCSModal" tabindex="-1" aria-labelledby="showCopyCSModal" aria-hidden="true">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <div class="modal-header d-flex justify-content-between">
                <h5 class="modal-title">Copy Costing Sheet</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                </button>
            </div>


            <form action="{{route('costing-sheets.copy')}}" method="post">
                <div class="modal-body">
                    @csrf
                    <div class="form-group">
                        <input type="number" class="form-control" id="costing_id" name="costing_id" placeholder="Enter ID">
                        <small id="emailHelp" class="form-text text-muted">Find CSID & Copy CS will be added to last row</small>
                    </div>
                </div>

                <div class="modal-footer">

                    <button type="submit" class="btn btn-warning">Copy</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </form>
        </div>
    </div>
</div>

