
let loc = window.location;
let loc_split = loc.pathname.split('/');

sessionStorage.clear()
sessionStorage.setItem("costing_total_column_orig", 20);
sessionStorage.setItem("costing_total_column", 20);
sessionStorage.setItem("costing_no_of_color", 0);
sessionStorage.setItem("costing_no_of_size", 0);
sessionStorage.setItem("costing_uom", [
    'MM','CM','M','FT','YD','CM2','M2','in2',"f't2",
    'EA','Pair','PCS','ROLL','SET','UNIT','GM','KG'
]);



//get Selected use also by Costing show-details
function getSelected(option,data){
    if(option === data){
        return 'selected';
    }else if(option === "Invalid" && data === null){
        return 'selected';
    }
}
function getSelectedUOM(option,data){

    let val = '';
    if(data === undefined){
        val = '';
    }else if(data === null){
        val = '';
    }else{
        val = data['cost_uom'];
    }

    if(option === val){
        return 'selected';
    }else if(option === "Invalid" && data === null){
        return 'selected';
    }
}

function getSelectedEmb(option,data){

    let val = '';
    if(data === undefined){
        val = '';
    }else if(data === null){
        val = '';
    }else{
        val = data['cost_category_data'];
    }

    if(option === val){
        return 'selected';
    }else if(option === "Invalid" && data === null){
        return 'selected';
    }
}


let costing_fabric_tbody = $('#costing_fabric_tbody');
let costing_trim_tbody = $('#costing_trim_tbody');
let costing_zipper_tbody = $('#costing_zipper_tbody');
let costing_embelishment_tbody = $('#costing_embelishment_tbody');
let costing_label_tbody = $('#costing_label_tbody');
let costing_thread_tbody = $('#costing_thread_tbody');
let costing_package_tbody = $('#costing_package_tbody');
let costing_finish_tbody = $('#costing_finish_tbody');
let costing_export_tbody = $('#costing_export_tbody');
let costing_testing_tbody = $('#costing_testing_tbody');
let costing_other_tbody = $('#costing_other_tbody');
let costing_labor_tbody = $('#costing_labor_tbody');


if(loc_split.includes('costing-sheets') && loc_split.includes('create')){

    let costing_fabric_row = 10;
    let costing_trim_row = 30;
    let costing_zipper_row = 5;
    let costing_embelishment_row = 5;
    let costing_label_row = 10;
    let costing_thread_row = 10;
    let costing_package_row = 10;
    let costing_finish_row = 5;
    let costing_export_row = 5;
    let costing_testing_row = 5;
    let costing_other_row = 5;
    let costing_labor_row = 3;


    sessionStorage.setItem("costing_fabric_row", costing_fabric_row);
    sessionStorage.setItem("costing_trim_row", costing_trim_row);
    sessionStorage.setItem("costing_zipper_row", costing_zipper_row);
    sessionStorage.setItem("costing_embelishment_row", costing_embelishment_row);
    sessionStorage.setItem("costing_label_row", costing_label_row);
    sessionStorage.setItem("costing_thread_row", costing_thread_row);
    sessionStorage.setItem("costing_package_row", costing_package_row);
    sessionStorage.setItem("costing_finish_row", costing_finish_row);
    sessionStorage.setItem("costing_export_row", costing_export_row);
    sessionStorage.setItem("costing_testing_row", costing_testing_row);
    sessionStorage.setItem("costing_other_row", costing_other_row);
    sessionStorage.setItem("costing_labor_row", costing_labor_row);

    // sessionStorage.setItem("costing_labor_row", costing_labor_row);
    // sessionStorage.setItem("costing_labor_row", costing_labor_row);


    getFabricRow();
    getTrimRow();
    getZipperRow();
    getEmbelishmentRow();
    getLabelRow();
    getThreadRow();
    getPackageRow();
    getFinishRow();
    getExportRow();
    getTestingRow();
    getOtherRow();
    getLaborRow();
}

if(loc_split.includes('costing-sheets') && loc_split.includes('edit')){

    let costing_sheet_id = $('#costing_sheet_id').val();

    $.ajax({
        type:'GET',
        url: '/api/costing-sheets/' + costing_sheet_id ,
        dataType: 'JSON',
        contentType: false,
        cache: false,
        processData: false,
        success: function (response) {
            console.log(response);
            showCostingSheetDetails(response);

            sessionStorage.setItem("cost_fabrics", JSON.stringify(response['cost_fabrics']));
            sessionStorage.setItem("cost_trims", JSON.stringify(response['cost_trims']));
            sessionStorage.setItem("cost_zippers", JSON.stringify(response['cost_zippers']));
            sessionStorage.setItem("cost_embelishments", JSON.stringify(response['cost_embelishments']));
            sessionStorage.setItem("cost_labels", JSON.stringify(response['cost_labels']));
            sessionStorage.setItem("cost_threads", JSON.stringify(response['cost_threads']));
            sessionStorage.setItem("cost_packages", JSON.stringify(response['cost_packages']));
            sessionStorage.setItem("cost_finishes", JSON.stringify(response['cost_finishes']));
            sessionStorage.setItem("cost_exports", JSON.stringify(response['cost_exports']));
            sessionStorage.setItem("cost_testings", JSON.stringify(response['cost_testings']));
            sessionStorage.setItem("cost_others", JSON.stringify(response['cost_others']));
            sessionStorage.setItem("cost_labors", JSON.stringify(response['cost_labors']));
            sessionStorage.setItem("costing_fabric_row", getRowCount(response['cost_fabric_row_names']));
            sessionStorage.setItem("costing_trim_row", getRowCount(response['cost_trim_row_names']));
            sessionStorage.setItem("costing_zipper_row", getRowCount(response['cost_zipper_row_names']));
            sessionStorage.setItem("costing_embelishment_row", getRowCount(response['cost_embelishment_row_names']));
            sessionStorage.setItem("costing_label_row", getRowCount(response['cost_label_row_names']));
            sessionStorage.setItem("costing_thread_row", getRowCount(response['cost_thread_row_names']));
            sessionStorage.setItem("costing_package_row", getRowCount(response['cost_package_row_names']));
            sessionStorage.setItem("costing_finish_row", getRowCount(response['cost_finish_row_names']));
            sessionStorage.setItem("costing_export_row", getRowCount(response['cost_export_row_names']));
            sessionStorage.setItem("costing_testing_row", getRowCount(response['cost_testing_row_names']));
            sessionStorage.setItem("costing_other_row", getRowCount(response['cost_other_row_names']));
            sessionStorage.setItem("costing_labor_row", getRowCount(response['cost_labor_row_names']));

            $('#costing_target_fob_sign').val(response['cost_currency']);
            $('#costing_total_fob_sign').val(response['cost_currency']);
            $('.costing_fob_sign').val(response['cost_currency']);
            $('.costing_fob_sign').html(response['cost_currency']);

            getFabricRow();
            getTrimRow();
            getZipperRow();
            getEmbelishmentRow();
            getLabelRow();
            getThreadRow();
            getPackageRow();
            getFinishRow();
            getExportRow();
            getTestingRow();
            getOtherRow();
            getLaborRow();

            if(response['cost_product_category_one'] !== null && response['cost_size_code'] !== null)
            {

                displaySizes(response['cost_size_head_names'].split(','));
            }

            if(response['cost_no_of_color'] !== null)
            {
                sessionStorage.setItem('cost_color_head_names',response['cost_color_head_names']);
                $('#costing_color_head_names').val(response['cost_color_head_names']);
                displayColors(response['cost_no_of_color'],0);
            }

        },
        error: function (x,h,r) {
            console.log(x.responseText);
        }
    });



}




function getRowCount(row_names){
    let row_num = row_names.split('-');

    row_num = parseInt(row_num[1]) - parseInt(row_num[0]) + 1;

    return row_num;
}
