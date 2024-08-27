
<input id="user_id" name="user_id" type="hidden" value="{{auth()->user()->id}}">

<input id="costing_fabric_row_names" name="costing_fabric_row_names" type="hidden" value="1-10">
<input id="costing_trim_row_names" name="costing_trim_row_names" type="hidden" value="11-40">
<input id="costing_zipper_row_names" name="costing_zipper_row_names" type="hidden" value="41-45">
<input id="costing_embelishment_row_names" name="costing_embelishment_row_names" type="hidden" value="46-50">
<input id="costing_label_row_names" name="costing_label_row_names" type="hidden" value="51-60">
<input id="costing_thread_row_names" name="costing_thread_row_names" type="hidden" value="61-70">
<input id="costing_package_row_names" name="costing_package_row_names" type="hidden" value="71-80">
<input id="costing_finish_row_names" name="costing_finish_row_names" type="hidden" value="81-85">
<input id="costing_export_row_names" name="costing_export_row_names" type="hidden" value="86-90">
<input id="costing_testing_row_names" name="costing_testing_row_names" type="hidden" value="91-95">
<input id="costing_other_row_names" name="costing_other_row_names" type="hidden" value="96-100">
<input id="costing_labor_row_names" name="costing_labor_row_names" type="hidden" value="101-103">

<input id="costing_size_head_names" name="costing_size_head_names" type="hidden" value="">
<input id="costing_color_head_names" name="costing_color_head_names" type="hidden" value="">


<h2 class="text-center" id="costing_header_vendor">Galaxy International Trading Company Ltd.</h2>

<h3 class="text-bg-success text-center" style="border:1px solid black;">COSTING SHEET</h3>


@include('costing-sheet.first-header')

<div class="row my-2" style="border:1px solid black;">

</div>

@include('costing-sheet.second-header')

<div class="row my-2" style="border:1px solid black;">

</div>

@include('costing-sheet.table-fabric')
@include('costing-sheet.table-trim')
@include('costing-sheet.table-zipper')
@include('costing-sheet.table-embelishment')
@include('costing-sheet.table-label')
@include('costing-sheet.table-thread')
@include('costing-sheet.table-package')
@include('costing-sheet.table-finish')
@include('costing-sheet.table-import-export')
@include('costing-sheet.table-testing')
@include('costing-sheet.table-other')
@include('costing-sheet.table-labor')
@include('costing-sheet.first-bottom')
@include('costing-sheet.second-bottom')


