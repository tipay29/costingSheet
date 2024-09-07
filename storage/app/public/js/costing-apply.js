let cs_body = $(".cost_container_main_cs");

cs_body.click(function(e){

    if(!$(".tbl-container input").is(":focus")) {
        $('.btn_apply').hide();

    }

    if($(".tbl-container input, .tbl-container select").is(":focus")) {


        let input_id = $("input:focus").attr('id');
        let base = input_id.replace(/[0-9]/g, '');
        let category = base.split('_')[1];
        // let numbers = parseInt(last_focus_id.match(/\d+/g));

        let column = '';
        if(base.split('_')[3] === undefined){
            column = base.split('_')[2];
        }else{
            column = base.split('_')[2] + '_' + base.split('_')[3];
        }

        sessionStorage.setItem('cost_last_focus_id',input_id)

        showBTNApply(base,column,category);

    }

});

cs_body.keyup(function(e){

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code === 9) {

        if($(".tbl-container input, .tbl-container select").is(":focus")) {

            let input_id = $("input:focus").attr('id');
            let base = input_id.replace(/[0-9]/g, '');
            let category = base.split('_')[1];
            // let numbers = parseInt(last_focus_id.match(/\d+/g));

            let column = '';
            if(base.split('_')[3] === undefined){
                column = base.split('_')[2];
            }else{
                column = base.split('_')[2] + '_' + base.split('_')[3];
            }

            sessionStorage.setItem('cost_last_focus_id',input_id)

            showBTNApply(base,column,category);

        }

    }

});


function showBTNApply(base,column,category){

    $('.btn_apply').hide();
    $('.btn_apply_content').parent().css('text-align','start');
    $('.btn_apply_content').show();

    let btn_up = '#'+base+'_btn_apply_up';
    let btn_down = '#'+base+'_btn_apply_down';

    let categories = ['fabric','trim','zipper',
                    'embelishment','label','thread',
                    'package','finish','export',
                    'testing','other','labor'];

    let cat_span = '';
    if(categories.includes(category) && column === 'categories'){
        cat_span = '.btn_apply_'+category+'_'+column;
    }else if(categories.includes(category)){
        if(column === 'wedth' || column === 'usage' || column === 'wastage'){
        cat_span = '.btn_apply_'+category+'_'+'total_cost';
        }
    }

    $(cat_span).hide();
    $(cat_span).parent().css('text-align','center');
    $(btn_up).show();
    $(btn_down).show();

}



function applyUp(category){

    let key = 'costing_'+category+'_row';
    let row = parseInt(sessionStorage.getItem(key));
    let last_focus_id = '#' + sessionStorage.getItem('cost_last_focus_id');

    let numbers = parseInt(last_focus_id.match(/\d+/g));

    if(numbers < row){
        let category_column =  last_focus_id.replace(/[0-9]/g, '');
        let column = category_column.split("_")[2];
        for(let i = numbers;i >= 1;i--){
            let column_id = category_column+i;
            $(column_id).val($(last_focus_id).val());
            // if(column === 'usage'){
            //     $('body').delegate(column_id,'change');
            // }else if(column === 'wastage'){
            //     $('body').delegate(column_id,'change');
            // }
            $(column_id).trigger("change");
        }
    }

    $(last_focus_id).focus();
}

function applyDown(category){

    let key = 'costing_'+category+'_row';
    let row = parseInt(sessionStorage.getItem(key));
    let last_focus_id = '#' + sessionStorage.getItem('cost_last_focus_id');

    let numbers = parseInt(last_focus_id.match(/\d+/g));

    if(numbers < row){
        let category_column =  last_focus_id.replace(/[0-9]/g, '');
        for(let i = numbers;i < row;i++){
            let column_id = category_column+(i+1);
            $(column_id).val($(last_focus_id).val());
            $(column_id).trigger("change");
        }
    }

    $(last_focus_id).focus();
}

///FABRIC
$('#costing_fabric_component_btn_apply_up').click(function(e){      applyUp('fabric');});
$('#costing_fabric_component_btn_apply_down').click(function(e){    applyDown('fabric');});

$('#costing_fabric_material_id_btn_apply_up').click(function(e){    applyUp('fabric');});
$('#costing_fabric_material_id_btn_apply_down').click(function(e){  applyDown('fabric');});

$('#costing_fabric_categories_btn_apply_up').click(function(e){     applyUp('fabric');});
$('#costing_fabric_categories_btn_apply_down').click(function(e){   applyDown('fabric');});

$('#costing_fabric_nominated_btn_apply_up').click(function(e){     applyUp('fabric');});
$('#costing_fabric_nominated_btn_apply_down').click(function(e){   applyDown('fabric');});

$('#costing_fabric_coo_btn_apply_up').click(function(e){     applyUp('fabric');});
$('#costing_fabric_coo_btn_apply_down').click(function(e){   applyDown('fabric');});

$('#costing_fabric_supplier_ref_btn_apply_up').click(function(e){     applyUp('fabric');});
$('#costing_fabric_supplier_ref_btn_apply_down').click(function(e){   applyDown('fabric');});

$('#costing_fabric_description_btn_apply_up').click(function(e){     applyUp('fabric');});
$('#costing_fabric_description_btn_apply_down').click(function(e){   applyDown('fabric');});

$('#costing_fabric_location_btn_apply_up').click(function(e){     applyUp('fabric');});
$('#costing_fabric_location_btn_apply_down').click(function(e){   applyDown('fabric');});

$('#costing_fabric_mill_supplier_btn_apply_up').click(function(e){     applyUp('fabric');});
$('#costing_fabric_mill_supplier_btn_apply_down').click(function(e){   applyDown('fabric');});

$('#costing_fabric_uom_btn_apply_up').click(function(e){     applyUp('fabric');});
$('#costing_fabric_uom_btn_apply_down').click(function(e){   applyDown('fabric');});

$('#costing_fabric_wedth_btn_apply_up').click(function(e){     applyUp('fabric');});
$('#costing_fabric_wedth_btn_apply_down').click(function(e){   applyDown('fabric');});

$('#costing_fabric_usage_btn_apply_up').click(function(e){     applyUp('fabric');});
$('#costing_fabric_usage_btn_apply_down').click(function(e){   applyDown('fabric');});

$('#costing_fabric_wastage_btn_apply_up').click(function(e){     applyUp('fabric');});
$('#costing_fabric_wastage_btn_apply_down').click(function(e){   applyDown('fabric');});

$('#costing_fabric_unit_cost_btn_apply_up').click(function(e){     applyUp('fabric');});
$('#costing_fabric_unit_cost_btn_apply_down').click(function(e){   applyDown('fabric');});

$('#costing_fabric_handling_btn_apply_up').click(function(e){     applyUp('fabric');});
$('#costing_fabric_handling_btn_apply_down').click(function(e){   applyDown('fabric');});

$('#costing_fabric_comment_btn_apply_up').click(function(e){     applyUp('fabric');});
$('#costing_fabric_comment_btn_apply_down').click(function(e){   applyDown('fabric');});
//FABRIC
///FABRIC
$('#costing_trim_component_btn_apply_up').click(function(e){      applyUp('trim');});
$('#costing_trim_component_btn_apply_down').click(function(e){    applyDown('trim');});

$('#costing_trim_material_id_btn_apply_up').click(function(e){    applyUp('trim');});
$('#costing_trim_material_id_btn_apply_down').click(function(e){  applyDown('trim');});

$('#costing_trim_categories_btn_apply_up').click(function(e){     applyUp('trim');});
$('#costing_trim_categories_btn_apply_down').click(function(e){   applyDown('trim');});

$('#costing_trim_nominated_btn_apply_up').click(function(e){     applyUp('trim');});
$('#costing_trim_nominated_btn_apply_down').click(function(e){   applyDown('trim');});

$('#costing_trim_coo_btn_apply_up').click(function(e){     applyUp('trim');});
$('#costing_trim_coo_btn_apply_down').click(function(e){   applyDown('trim');});

$('#costing_trim_supplier_ref_btn_apply_up').click(function(e){     applyUp('trim');});
$('#costing_trim_supplier_ref_btn_apply_down').click(function(e){   applyDown('trim');});

$('#costing_trim_description_btn_apply_up').click(function(e){     applyUp('trim');});
$('#costing_trim_description_btn_apply_down').click(function(e){   applyDown('trim');});

$('#costing_trim_location_btn_apply_up').click(function(e){     applyUp('trim');});
$('#costing_trim_location_btn_apply_down').click(function(e){   applyDown('trim');});

$('#costing_trim_mill_supplier_btn_apply_up').click(function(e){     applyUp('trim');});
$('#costing_trim_mill_supplier_btn_apply_down').click(function(e){   applyDown('trim');});

$('#costing_trim_uom_btn_apply_up').click(function(e){     applyUp('trim');});
$('#costing_trim_uom_btn_apply_down').click(function(e){   applyDown('trim');});

$('#costing_trim_wedth_btn_apply_up').click(function(e){     applyUp('trim');});
$('#costing_trim_wedth_btn_apply_down').click(function(e){   applyDown('trim');});

$('#costing_trim_usage_btn_apply_up').click(function(e){     applyUp('trim');});
$('#costing_trim_usage_btn_apply_down').click(function(e){   applyDown('trim');});

$('#costing_trim_wastage_btn_apply_up').click(function(e){     applyUp('trim');});
$('#costing_trim_wastage_btn_apply_down').click(function(e){   applyDown('trim');});

$('#costing_trim_unit_cost_btn_apply_up').click(function(e){     applyUp('trim');});
$('#costing_trim_unit_cost_btn_apply_down').click(function(e){   applyDown('trim');});

$('#costing_trim_handling_btn_apply_up').click(function(e){     applyUp('trim');});
$('#costing_trim_handling_btn_apply_down').click(function(e){   applyDown('trim');});

$('#costing_trim_comment_btn_apply_up').click(function(e){     applyUp('trim');});
$('#costing_trim_comment_btn_apply_down').click(function(e){   applyDown('trim');});
//FABRIC
///ZIPPER
$('#costing_zipper_component_btn_apply_up').click(function(e){      applyUp('zipper');});
$('#costing_zipper_component_btn_apply_down').click(function(e){    applyDown('zipper');});

$('#costing_zipper_material_id_btn_apply_up').click(function(e){    applyUp('zipper');});
$('#costing_zipper_material_id_btn_apply_down').click(function(e){  applyDown('zipper');});

$('#costing_zipper_categories_btn_apply_up').click(function(e){     applyUp('zipper');});
$('#costing_zipper_categories_btn_apply_down').click(function(e){   applyDown('zipper');});

$('#costing_zipper_nominated_btn_apply_up').click(function(e){     applyUp('zipper');});
$('#costing_zipper_nominated_btn_apply_down').click(function(e){   applyDown('zipper');});

$('#costing_zipper_coo_btn_apply_up').click(function(e){     applyUp('zipper');});
$('#costing_zipper_coo_btn_apply_down').click(function(e){   applyDown('zipper');});

$('#costing_zipper_supplier_ref_btn_apply_up').click(function(e){     applyUp('zipper');});
$('#costing_zipper_supplier_ref_btn_apply_down').click(function(e){   applyDown('zipper');});

$('#costing_zipper_description_btn_apply_up').click(function(e){     applyUp('zipper');});
$('#costing_zipper_description_btn_apply_down').click(function(e){   applyDown('zipper');});

$('#costing_zipper_location_btn_apply_up').click(function(e){     applyUp('zipper');});
$('#costing_zipper_location_btn_apply_down').click(function(e){   applyDown('zipper');});

$('#costing_zipper_mill_supplier_btn_apply_up').click(function(e){     applyUp('zipper');});
$('#costing_zipper_mill_supplier_btn_apply_down').click(function(e){   applyDown('zipper');});

$('#costing_zipper_uom_btn_apply_up').click(function(e){     applyUp('zipper');});
$('#costing_zipper_uom_btn_apply_down').click(function(e){   applyDown('zipper');});

$('#costing_zipper_wedth_btn_apply_up').click(function(e){     applyUp('zipper');});
$('#costing_zipper_wedth_btn_apply_down').click(function(e){   applyDown('zipper');});

$('#costing_zipper_usage_btn_apply_up').click(function(e){     applyUp('zipper');});
$('#costing_zipper_usage_btn_apply_down').click(function(e){   applyDown('zipper');});

$('#costing_zipper_wastage_btn_apply_up').click(function(e){     applyUp('zipper');});
$('#costing_zipper_wastage_btn_apply_down').click(function(e){   applyDown('zipper');});

$('#costing_zipper_unit_cost_btn_apply_up').click(function(e){     applyUp('zipper');});
$('#costing_zipper_unit_cost_btn_apply_down').click(function(e){   applyDown('zipper');});

$('#costing_zipper_handling_btn_apply_up').click(function(e){     applyUp('zipper');});
$('#costing_zipper_handling_btn_apply_down').click(function(e){   applyDown('zipper');});

$('#costing_zipper_comment_btn_apply_up').click(function(e){     applyUp('zipper');});
$('#costing_zipper_comment_btn_apply_down').click(function(e){   applyDown('zipper');});
//ZIPPER
///ZIPPER
$('#costing_embelishment_component_btn_apply_up').click(function(e){      applyUp('embelishment');});
$('#costing_embelishment_component_btn_apply_down').click(function(e){    applyDown('embelishment');});

$('#costing_embelishment_material_id_btn_apply_up').click(function(e){    applyUp('embelishment');});
$('#costing_embelishment_material_id_btn_apply_down').click(function(e){  applyDown('embelishment');});

$('#costing_embelishment_categories_btn_apply_up').click(function(e){     applyUp('embelishment');});
$('#costing_embelishment_categories_btn_apply_down').click(function(e){   applyDown('embelishment');});

$('#costing_embelishment_nominated_btn_apply_up').click(function(e){     applyUp('embelishment');});
$('#costing_embelishment_nominated_btn_apply_down').click(function(e){   applyDown('embelishment');});

$('#costing_embelishment_coo_btn_apply_up').click(function(e){     applyUp('embelishment');});
$('#costing_embelishment_coo_btn_apply_down').click(function(e){   applyDown('embelishment');});

$('#costing_embelishment_supplier_ref_btn_apply_up').click(function(e){     applyUp('embelishment');});
$('#costing_embelishment_supplier_ref_btn_apply_down').click(function(e){   applyDown('embelishment');});

$('#costing_embelishment_description_btn_apply_up').click(function(e){     applyUp('embelishment');});
$('#costing_embelishment_description_btn_apply_down').click(function(e){   applyDown('embelishment');});

$('#costing_embelishment_location_btn_apply_up').click(function(e){     applyUp('embelishment');});
$('#costing_embelishment_location_btn_apply_down').click(function(e){   applyDown('embelishment');});

$('#costing_embelishment_mill_supplier_btn_apply_up').click(function(e){     applyUp('embelishment');});
$('#costing_embelishment_mill_supplier_btn_apply_down').click(function(e){   applyDown('embelishment');});

$('#costing_embelishment_uom_btn_apply_up').click(function(e){     applyUp('embelishment');});
$('#costing_embelishment_uom_btn_apply_down').click(function(e){   applyDown('embelishment');});

$('#costing_embelishment_wedth_btn_apply_up').click(function(e){     applyUp('embelishment');});
$('#costing_embelishment_wedth_btn_apply_down').click(function(e){   applyDown('embelishment');});

$('#costing_embelishment_usage_btn_apply_up').click(function(e){     applyUp('embelishment');});
$('#costing_embelishment_usage_btn_apply_down').click(function(e){   applyDown('embelishment');});

$('#costing_embelishment_wastage_btn_apply_up').click(function(e){     applyUp('embelishment');});
$('#costing_embelishment_wastage_btn_apply_down').click(function(e){   applyDown('embelishment');});

$('#costing_embelishment_unit_cost_btn_apply_up').click(function(e){     applyUp('embelishment');});
$('#costing_embelishment_unit_cost_btn_apply_down').click(function(e){   applyDown('embelishment');});

$('#costing_embelishment_handling_btn_apply_up').click(function(e){     applyUp('embelishment');});
$('#costing_embelishment_handling_btn_apply_down').click(function(e){   applyDown('embelishment');});

$('#costing_embelishment_comment_btn_apply_up').click(function(e){     applyUp('embelishment');});
$('#costing_embelishment_comment_btn_apply_down').click(function(e){   applyDown('embelishment');});
//ZIPPER
///ZIPPER
$('#costing_label_component_btn_apply_up').click(function(e){      applyUp('label');});
$('#costing_label_component_btn_apply_down').click(function(e){    applyDown('label');});

$('#costing_label_material_id_btn_apply_up').click(function(e){    applyUp('label');});
$('#costing_label_material_id_btn_apply_down').click(function(e){  applyDown('label');});

$('#costing_label_categories_btn_apply_up').click(function(e){     applyUp('label');});
$('#costing_label_categories_btn_apply_down').click(function(e){   applyDown('label');});

$('#costing_label_nominated_btn_apply_up').click(function(e){     applyUp('label');});
$('#costing_label_nominated_btn_apply_down').click(function(e){   applyDown('label');});

$('#costing_label_coo_btn_apply_up').click(function(e){     applyUp('label');});
$('#costing_label_coo_btn_apply_down').click(function(e){   applyDown('label');});

$('#costing_label_supplier_ref_btn_apply_up').click(function(e){     applyUp('label');});
$('#costing_label_supplier_ref_btn_apply_down').click(function(e){   applyDown('label');});

$('#costing_label_description_btn_apply_up').click(function(e){     applyUp('label');});
$('#costing_label_description_btn_apply_down').click(function(e){   applyDown('label');});

$('#costing_label_location_btn_apply_up').click(function(e){     applyUp('label');});
$('#costing_label_location_btn_apply_down').click(function(e){   applyDown('label');});

$('#costing_label_mill_supplier_btn_apply_up').click(function(e){     applyUp('label');});
$('#costing_label_mill_supplier_btn_apply_down').click(function(e){   applyDown('label');});

$('#costing_label_uom_btn_apply_up').click(function(e){     applyUp('label');});
$('#costing_label_uom_btn_apply_down').click(function(e){   applyDown('label');});

$('#costing_label_wedth_btn_apply_up').click(function(e){     applyUp('label');});
$('#costing_label_wedth_btn_apply_down').click(function(e){   applyDown('label');});

$('#costing_label_usage_btn_apply_up').click(function(e){     applyUp('label');});
$('#costing_label_usage_btn_apply_down').click(function(e){   applyDown('label');});

$('#costing_label_wastage_btn_apply_up').click(function(e){     applyUp('label');});
$('#costing_label_wastage_btn_apply_down').click(function(e){   applyDown('label');});

$('#costing_label_unit_cost_btn_apply_up').click(function(e){     applyUp('label');});
$('#costing_label_unit_cost_btn_apply_down').click(function(e){   applyDown('label');});

$('#costing_label_handling_btn_apply_up').click(function(e){     applyUp('label');});
$('#costing_label_handling_btn_apply_down').click(function(e){   applyDown('label');});

$('#costing_label_comment_btn_apply_up').click(function(e){     applyUp('label');});
$('#costing_label_comment_btn_apply_down').click(function(e){   applyDown('label');});
//ZIPPER
///ZIPPER
$('#costing_thread_component_btn_apply_up').click(function(e){      applyUp('thread');});
$('#costing_thread_component_btn_apply_down').click(function(e){    applyDown('thread');});

$('#costing_thread_material_id_btn_apply_up').click(function(e){    applyUp('thread');});
$('#costing_thread_material_id_btn_apply_down').click(function(e){  applyDown('thread');});

$('#costing_thread_categories_btn_apply_up').click(function(e){     applyUp('thread');});
$('#costing_thread_categories_btn_apply_down').click(function(e){   applyDown('thread');});

$('#costing_thread_nominated_btn_apply_up').click(function(e){     applyUp('thread');});
$('#costing_thread_nominated_btn_apply_down').click(function(e){   applyDown('thread');});

$('#costing_thread_coo_btn_apply_up').click(function(e){     applyUp('thread');});
$('#costing_thread_coo_btn_apply_down').click(function(e){   applyDown('thread');});

$('#costing_thread_supplier_ref_btn_apply_up').click(function(e){     applyUp('thread');});
$('#costing_thread_supplier_ref_btn_apply_down').click(function(e){   applyDown('thread');});

$('#costing_thread_description_btn_apply_up').click(function(e){     applyUp('thread');});
$('#costing_thread_description_btn_apply_down').click(function(e){   applyDown('thread');});

$('#costing_thread_location_btn_apply_up').click(function(e){     applyUp('thread');});
$('#costing_thread_location_btn_apply_down').click(function(e){   applyDown('thread');});

$('#costing_thread_mill_supplier_btn_apply_up').click(function(e){     applyUp('thread');});
$('#costing_thread_mill_supplier_btn_apply_down').click(function(e){   applyDown('thread');});

$('#costing_thread_uom_btn_apply_up').click(function(e){     applyUp('thread');});
$('#costing_thread_uom_btn_apply_down').click(function(e){   applyDown('thread');});

$('#costing_thread_wedth_btn_apply_up').click(function(e){     applyUp('thread');});
$('#costing_thread_wedth_btn_apply_down').click(function(e){   applyDown('thread');});

$('#costing_thread_usage_btn_apply_up').click(function(e){     applyUp('thread');});
$('#costing_thread_usage_btn_apply_down').click(function(e){   applyDown('thread');});

$('#costing_thread_wastage_btn_apply_up').click(function(e){     applyUp('thread');});
$('#costing_thread_wastage_btn_apply_down').click(function(e){   applyDown('thread');});

$('#costing_thread_unit_cost_btn_apply_up').click(function(e){     applyUp('thread');});
$('#costing_thread_unit_cost_btn_apply_down').click(function(e){   applyDown('thread');});

$('#costing_thread_handling_btn_apply_up').click(function(e){     applyUp('thread');});
$('#costing_thread_handling_btn_apply_down').click(function(e){   applyDown('thread');});

$('#costing_thread_comment_btn_apply_up').click(function(e){     applyUp('thread');});
$('#costing_thread_comment_btn_apply_down').click(function(e){   applyDown('thread');});
//ZIPPER
///ZIPPER
$('#costing_package_component_btn_apply_up').click(function(e){      applyUp('package');});
$('#costing_package_component_btn_apply_down').click(function(e){    applyDown('package');});

$('#costing_package_material_id_btn_apply_up').click(function(e){    applyUp('package');});
$('#costing_package_material_id_btn_apply_down').click(function(e){  applyDown('package');});

$('#costing_package_categories_btn_apply_up').click(function(e){     applyUp('package');});
$('#costing_package_categories_btn_apply_down').click(function(e){   applyDown('package');});

$('#costing_package_nominated_btn_apply_up').click(function(e){     applyUp('package');});
$('#costing_package_nominated_btn_apply_down').click(function(e){   applyDown('package');});

$('#costing_package_coo_btn_apply_up').click(function(e){     applyUp('package');});
$('#costing_package_coo_btn_apply_down').click(function(e){   applyDown('package');});

$('#costing_package_supplier_ref_btn_apply_up').click(function(e){     applyUp('package');});
$('#costing_package_supplier_ref_btn_apply_down').click(function(e){   applyDown('package');});

$('#costing_package_description_btn_apply_up').click(function(e){     applyUp('package');});
$('#costing_package_description_btn_apply_down').click(function(e){   applyDown('package');});

$('#costing_package_location_btn_apply_up').click(function(e){     applyUp('package');});
$('#costing_package_location_btn_apply_down').click(function(e){   applyDown('package');});

$('#costing_package_mill_supplier_btn_apply_up').click(function(e){     applyUp('package');});
$('#costing_package_mill_supplier_btn_apply_down').click(function(e){   applyDown('package');});

$('#costing_package_uom_btn_apply_up').click(function(e){     applyUp('package');});
$('#costing_package_uom_btn_apply_down').click(function(e){   applyDown('package');});

$('#costing_package_wedth_btn_apply_up').click(function(e){     applyUp('package');});
$('#costing_package_wedth_btn_apply_down').click(function(e){   applyDown('package');});

$('#costing_package_usage_btn_apply_up').click(function(e){     applyUp('package');});
$('#costing_package_usage_btn_apply_down').click(function(e){   applyDown('package');});

$('#costing_package_wastage_btn_apply_up').click(function(e){     applyUp('package');});
$('#costing_package_wastage_btn_apply_down').click(function(e){   applyDown('package');});

$('#costing_package_unit_cost_btn_apply_up').click(function(e){     applyUp('package');});
$('#costing_package_unit_cost_btn_apply_down').click(function(e){   applyDown('package');});

$('#costing_package_handling_btn_apply_up').click(function(e){     applyUp('package');});
$('#costing_package_handling_btn_apply_down').click(function(e){   applyDown('package');});

$('#costing_package_comment_btn_apply_up').click(function(e){     applyUp('package');});
$('#costing_package_comment_btn_apply_down').click(function(e){   applyDown('package');});
//ZIPPER
///ZIPPER
$('#costing_finish_component_btn_apply_up').click(function(e){      applyUp('finish');});
$('#costing_finish_component_btn_apply_down').click(function(e){    applyDown('finish');});

$('#costing_finish_material_id_btn_apply_up').click(function(e){    applyUp('finish');});
$('#costing_finish_material_id_btn_apply_down').click(function(e){  applyDown('finish');});

$('#costing_finish_categories_btn_apply_up').click(function(e){     applyUp('finish');});
$('#costing_finish_categories_btn_apply_down').click(function(e){   applyDown('finish');});

$('#costing_finish_nominated_btn_apply_up').click(function(e){     applyUp('finish');});
$('#costing_finish_nominated_btn_apply_down').click(function(e){   applyDown('finish');});

$('#costing_finish_coo_btn_apply_up').click(function(e){     applyUp('finish');});
$('#costing_finish_coo_btn_apply_down').click(function(e){   applyDown('finish');});

$('#costing_finish_supplier_ref_btn_apply_up').click(function(e){     applyUp('finish');});
$('#costing_finish_supplier_ref_btn_apply_down').click(function(e){   applyDown('finish');});

$('#costing_finish_description_btn_apply_up').click(function(e){     applyUp('finish');});
$('#costing_finish_description_btn_apply_down').click(function(e){   applyDown('finish');});

$('#costing_finish_location_btn_apply_up').click(function(e){     applyUp('finish');});
$('#costing_finish_location_btn_apply_down').click(function(e){   applyDown('finish');});

$('#costing_finish_mill_supplier_btn_apply_up').click(function(e){     applyUp('finish');});
$('#costing_finish_mill_supplier_btn_apply_down').click(function(e){   applyDown('finish');});

$('#costing_finish_uom_btn_apply_up').click(function(e){     applyUp('finish');});
$('#costing_finish_uom_btn_apply_down').click(function(e){   applyDown('finish');});

$('#costing_finish_wedth_btn_apply_up').click(function(e){     applyUp('finish');});
$('#costing_finish_wedth_btn_apply_down').click(function(e){   applyDown('finish');});

$('#costing_finish_usage_btn_apply_up').click(function(e){     applyUp('finish');});
$('#costing_finish_usage_btn_apply_down').click(function(e){   applyDown('finish');});

$('#costing_finish_wastage_btn_apply_up').click(function(e){     applyUp('finish');});
$('#costing_finish_wastage_btn_apply_down').click(function(e){   applyDown('finish');});

$('#costing_finish_unit_cost_btn_apply_up').click(function(e){     applyUp('finish');});
$('#costing_finish_unit_cost_btn_apply_down').click(function(e){   applyDown('finish');});

$('#costing_finish_handling_btn_apply_up').click(function(e){     applyUp('finish');});
$('#costing_finish_handling_btn_apply_down').click(function(e){   applyDown('finish');});

$('#costing_finish_comment_btn_apply_up').click(function(e){     applyUp('finish');});
$('#costing_finish_comment_btn_apply_down').click(function(e){   applyDown('finish');});
//ZIPPER
///ZIPPER
$('#costing_export_component_btn_apply_up').click(function(e){      applyUp('export');});
$('#costing_export_component_btn_apply_down').click(function(e){    applyDown('export');});

$('#costing_export_material_id_btn_apply_up').click(function(e){    applyUp('export');});
$('#costing_export_material_id_btn_apply_down').click(function(e){  applyDown('export');});

$('#costing_export_categories_btn_apply_up').click(function(e){     applyUp('export');});
$('#costing_export_categories_btn_apply_down').click(function(e){   applyDown('export');});

$('#costing_export_nominated_btn_apply_up').click(function(e){     applyUp('export');});
$('#costing_export_nominated_btn_apply_down').click(function(e){   applyDown('export');});

$('#costing_export_coo_btn_apply_up').click(function(e){     applyUp('export');});
$('#costing_export_coo_btn_apply_down').click(function(e){   applyDown('export');});

$('#costing_export_supplier_ref_btn_apply_up').click(function(e){     applyUp('export');});
$('#costing_export_supplier_ref_btn_apply_down').click(function(e){   applyDown('export');});

$('#costing_export_description_btn_apply_up').click(function(e){     applyUp('export');});
$('#costing_export_description_btn_apply_down').click(function(e){   applyDown('export');});

$('#costing_export_location_btn_apply_up').click(function(e){     applyUp('export');});
$('#costing_export_location_btn_apply_down').click(function(e){   applyDown('export');});

$('#costing_export_mill_supplier_btn_apply_up').click(function(e){     applyUp('export');});
$('#costing_export_mill_supplier_btn_apply_down').click(function(e){   applyDown('export');});

$('#costing_export_uom_btn_apply_up').click(function(e){     applyUp('export');});
$('#costing_export_uom_btn_apply_down').click(function(e){   applyDown('export');});

$('#costing_export_wedth_btn_apply_up').click(function(e){     applyUp('export');});
$('#costing_export_wedth_btn_apply_down').click(function(e){   applyDown('export');});

$('#costing_export_usage_btn_apply_up').click(function(e){     applyUp('export');});
$('#costing_export_usage_btn_apply_down').click(function(e){   applyDown('export');});

$('#costing_export_wastage_btn_apply_up').click(function(e){     applyUp('export');});
$('#costing_export_wastage_btn_apply_down').click(function(e){   applyDown('export');});

$('#costing_export_unit_cost_btn_apply_up').click(function(e){     applyUp('export');});
$('#costing_export_unit_cost_btn_apply_down').click(function(e){   applyDown('export');});

$('#costing_export_handling_btn_apply_up').click(function(e){     applyUp('export');});
$('#costing_export_handling_btn_apply_down').click(function(e){   applyDown('export');});

$('#costing_export_comment_btn_apply_up').click(function(e){     applyUp('export');});
$('#costing_export_comment_btn_apply_down').click(function(e){   applyDown('export');});
//ZIPPER
///ZIPPER
$('#costing_testing_component_btn_apply_up').click(function(e){      applyUp('testing');});
$('#costing_testing_component_btn_apply_down').click(function(e){    applyDown('testing');});

$('#costing_testing_material_id_btn_apply_up').click(function(e){    applyUp('testing');});
$('#costing_testing_material_id_btn_apply_down').click(function(e){  applyDown('testing');});

$('#costing_testing_categories_btn_apply_up').click(function(e){     applyUp('testing');});
$('#costing_testing_categories_btn_apply_down').click(function(e){   applyDown('testing');});

$('#costing_testing_nominated_btn_apply_up').click(function(e){     applyUp('testing');});
$('#costing_testing_nominated_btn_apply_down').click(function(e){   applyDown('testing');});

$('#costing_testing_coo_btn_apply_up').click(function(e){     applyUp('testing');});
$('#costing_testing_coo_btn_apply_down').click(function(e){   applyDown('testing');});

$('#costing_testing_supplier_ref_btn_apply_up').click(function(e){     applyUp('testing');});
$('#costing_testing_supplier_ref_btn_apply_down').click(function(e){   applyDown('testing');});

$('#costing_testing_description_btn_apply_up').click(function(e){     applyUp('testing');});
$('#costing_testing_description_btn_apply_down').click(function(e){   applyDown('testing');});

$('#costing_testing_location_btn_apply_up').click(function(e){     applyUp('testing');});
$('#costing_testing_location_btn_apply_down').click(function(e){   applyDown('testing');});

$('#costing_testing_mill_supplier_btn_apply_up').click(function(e){     applyUp('testing');});
$('#costing_testing_mill_supplier_btn_apply_down').click(function(e){   applyDown('testing');});

$('#costing_testing_uom_btn_apply_up').click(function(e){     applyUp('testing');});
$('#costing_testing_uom_btn_apply_down').click(function(e){   applyDown('testing');});

$('#costing_testing_wedth_btn_apply_up').click(function(e){     applyUp('testing');});
$('#costing_testing_wedth_btn_apply_down').click(function(e){   applyDown('testing');});

$('#costing_testing_usage_btn_apply_up').click(function(e){     applyUp('testing');});
$('#costing_testing_usage_btn_apply_down').click(function(e){   applyDown('testing');});

$('#costing_testing_wastage_btn_apply_up').click(function(e){     applyUp('testing');});
$('#costing_testing_wastage_btn_apply_down').click(function(e){   applyDown('testing');});

$('#costing_testing_unit_cost_btn_apply_up').click(function(e){     applyUp('testing');});
$('#costing_testing_unit_cost_btn_apply_down').click(function(e){   applyDown('testing');});

$('#costing_testing_handling_btn_apply_up').click(function(e){     applyUp('testing');});
$('#costing_testing_handling_btn_apply_down').click(function(e){   applyDown('testing');});

$('#costing_testing_comment_btn_apply_up').click(function(e){     applyUp('testing');});
$('#costing_testing_comment_btn_apply_down').click(function(e){   applyDown('testing');});
//ZIPPER
///ZIPPER
$('#costing_other_component_btn_apply_up').click(function(e){      applyUp('other');});
$('#costing_other_component_btn_apply_down').click(function(e){    applyDown('other');});

$('#costing_other_material_id_btn_apply_up').click(function(e){    applyUp('other');});
$('#costing_other_material_id_btn_apply_down').click(function(e){  applyDown('other');});

$('#costing_other_categories_btn_apply_up').click(function(e){     applyUp('other');});
$('#costing_other_categories_btn_apply_down').click(function(e){   applyDown('other');});

$('#costing_other_nominated_btn_apply_up').click(function(e){     applyUp('other');});
$('#costing_other_nominated_btn_apply_down').click(function(e){   applyDown('other');});

$('#costing_other_coo_btn_apply_up').click(function(e){     applyUp('other');});
$('#costing_other_coo_btn_apply_down').click(function(e){   applyDown('other');});

$('#costing_other_supplier_ref_btn_apply_up').click(function(e){     applyUp('other');});
$('#costing_other_supplier_ref_btn_apply_down').click(function(e){   applyDown('other');});

$('#costing_other_description_btn_apply_up').click(function(e){     applyUp('other');});
$('#costing_other_description_btn_apply_down').click(function(e){   applyDown('other');});

$('#costing_other_location_btn_apply_up').click(function(e){     applyUp('other');});
$('#costing_other_location_btn_apply_down').click(function(e){   applyDown('other');});

$('#costing_other_mill_supplier_btn_apply_up').click(function(e){     applyUp('other');});
$('#costing_other_mill_supplier_btn_apply_down').click(function(e){   applyDown('other');});

$('#costing_other_uom_btn_apply_up').click(function(e){     applyUp('other');});
$('#costing_other_uom_btn_apply_down').click(function(e){   applyDown('other');});

$('#costing_other_wedth_btn_apply_up').click(function(e){     applyUp('other');});
$('#costing_other_wedth_btn_apply_down').click(function(e){   applyDown('other');});

$('#costing_other_usage_btn_apply_up').click(function(e){     applyUp('other');});
$('#costing_other_usage_btn_apply_down').click(function(e){   applyDown('other');});

$('#costing_other_wastage_btn_apply_up').click(function(e){     applyUp('other');});
$('#costing_other_wastage_btn_apply_down').click(function(e){   applyDown('other');});

$('#costing_other_unit_cost_btn_apply_up').click(function(e){     applyUp('other');});
$('#costing_other_unit_cost_btn_apply_down').click(function(e){   applyDown('other');});

$('#costing_other_handling_btn_apply_up').click(function(e){     applyUp('other');});
$('#costing_other_handling_btn_apply_down').click(function(e){   applyDown('other');});

$('#costing_other_comment_btn_apply_up').click(function(e){     applyUp('other');});
$('#costing_other_comment_btn_apply_down').click(function(e){   applyDown('other');});
//ZIPPER
///ZIPPER
$('#costing_labor_component_btn_apply_up').click(function(e){      applyUp('labor');});
$('#costing_labor_component_btn_apply_down').click(function(e){    applyDown('labor');});

$('#costing_labor_material_id_btn_apply_up').click(function(e){    applyUp('labor');});
$('#costing_labor_material_id_btn_apply_down').click(function(e){  applyDown('labor');});

$('#costing_labor_categories_btn_apply_up').click(function(e){     applyUp('labor');});
$('#costing_labor_categories_btn_apply_down').click(function(e){   applyDown('labor');});

$('#costing_labor_nominated_btn_apply_up').click(function(e){     applyUp('labor');});
$('#costing_labor_nominated_btn_apply_down').click(function(e){   applyDown('labor');});

$('#costing_labor_coo_btn_apply_up').click(function(e){     applyUp('labor');});
$('#costing_labor_coo_btn_apply_down').click(function(e){   applyDown('labor');});

$('#costing_labor_supplier_ref_btn_apply_up').click(function(e){     applyUp('labor');});
$('#costing_labor_supplier_ref_btn_apply_down').click(function(e){   applyDown('labor');});

$('#costing_labor_description_btn_apply_up').click(function(e){     applyUp('labor');});
$('#costing_labor_description_btn_apply_down').click(function(e){   applyDown('labor');});

$('#costing_labor_location_btn_apply_up').click(function(e){     applyUp('labor');});
$('#costing_labor_location_btn_apply_down').click(function(e){   applyDown('labor');});

$('#costing_labor_mill_supplier_btn_apply_up').click(function(e){     applyUp('labor');});
$('#costing_labor_mill_supplier_btn_apply_down').click(function(e){   applyDown('labor');});

$('#costing_labor_uom_btn_apply_up').click(function(e){     applyUp('labor');});
$('#costing_labor_uom_btn_apply_down').click(function(e){   applyDown('labor');});

$('#costing_labor_wedth_btn_apply_up').click(function(e){     applyUp('labor');});
$('#costing_labor_wedth_btn_apply_down').click(function(e){   applyDown('labor');});

$('#costing_labor_usage_btn_apply_up').click(function(e){     applyUp('labor');});
$('#costing_labor_usage_btn_apply_down').click(function(e){   applyDown('labor');});

$('#costing_labor_wastage_btn_apply_up').click(function(e){     applyUp('labor');});
$('#costing_labor_wastage_btn_apply_down').click(function(e){   applyDown('labor');});

$('#costing_labor_unit_cost_btn_apply_up').click(function(e){     applyUp('labor');});
$('#costing_labor_unit_cost_btn_apply_down').click(function(e){   applyDown('labor');});

$('#costing_labor_handling_btn_apply_up').click(function(e){     applyUp('labor');});
$('#costing_labor_handling_btn_apply_down').click(function(e){   applyDown('labor');});

$('#costing_labor_comment_btn_apply_up').click(function(e){     applyUp('labor');});
$('#costing_labor_comment_btn_apply_down').click(function(e){   applyDown('labor');});
//ZIPPER
