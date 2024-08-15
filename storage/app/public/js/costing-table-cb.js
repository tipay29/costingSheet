$('.css-select-costing-table-uom').html('<option value="MM">MM</option>\n' +
    '    <option value="CM">CM</option>\n' +
    '    <option value="M">M</option>\n' +
    '    <option value="IN">IN</option>\n' +
    '    <option value="FT">FT</option>\n' +
    '    <option value="YD">YD</option>\n' +
    '    <option value="CM2">CM2</option>\n' +
    '    <option value="M2">M2</option>\n' +
    '    <option value="in2">in2</option>\n' +
    '    <option value="f\'t2">f\'t2</option>\n' +
    '<option value="EA">EA</option>\n' +
    '    <option value="Pair">Pair</option>\n' +
    '    <option value="PCS">PCS</option>\n' +
    '    <option value="ROLL">ROLL</option>\n' +
    '    <option value="SET">SET</option>\n' +
    '    <option value="UNIT">UNIT</option>\n' +
    '    <option value="UNIT">GM</option>\n' +
    '    <option value="UNIT">KG</option>');

let costing_fabric_show_cb_item_btn = $('#costing_fabric_show_cb_item_btn');
let costing_fabric_hide_cb_item_btn = $('#costing_fabric_hide_cb_item_btn');
costing_fabric_hide_cb_item_btn.hide();
let costing_trim_show_cb_item_btn = $('#costing_trim_show_cb_item_btn');
let costing_trim_hide_cb_item_btn = $('#costing_trim_hide_cb_item_btn');
costing_trim_hide_cb_item_btn.hide();
let costing_zipper_show_cb_item_btn = $('#costing_zipper_show_cb_item_btn');
let costing_zipper_hide_cb_item_btn = $('#costing_zipper_hide_cb_item_btn');
costing_zipper_hide_cb_item_btn.hide();
let costing_embelishment_show_cb_item_btn = $('#costing_embelishment_show_cb_item_btn');
let costing_embelishment_hide_cb_item_btn = $('#costing_embelishment_hide_cb_item_btn');
costing_embelishment_hide_cb_item_btn.hide();
let costing_label_show_cb_item_btn = $('#costing_label_show_cb_item_btn');
let costing_label_hide_cb_item_btn = $('#costing_label_hide_cb_item_btn');
costing_label_hide_cb_item_btn.hide();
let costing_thread_show_cb_item_btn = $('#costing_thread_show_cb_item_btn');
let costing_thread_hide_cb_item_btn = $('#costing_thread_hide_cb_item_btn');
costing_thread_hide_cb_item_btn.hide();
let costing_package_show_cb_item_btn = $('#costing_package_show_cb_item_btn');
let costing_package_hide_cb_item_btn = $('#costing_package_hide_cb_item_btn');
costing_package_hide_cb_item_btn.hide();
let costing_finish_show_cb_item_btn = $('#costing_finish_show_cb_item_btn');
let costing_finish_hide_cb_item_btn = $('#costing_finish_hide_cb_item_btn');
costing_finish_hide_cb_item_btn.hide();
let costing_export_show_cb_item_btn = $('#costing_export_show_cb_item_btn');
let costing_export_hide_cb_item_btn = $('#costing_export_hide_cb_item_btn');
costing_export_hide_cb_item_btn.hide();
let costing_testing_show_cb_item_btn = $('#costing_testing_show_cb_item_btn');
let costing_testing_hide_cb_item_btn = $('#costing_testing_hide_cb_item_btn');
costing_testing_hide_cb_item_btn.hide();
let costing_other_show_cb_item_btn = $('#costing_other_show_cb_item_btn');
let costing_other_hide_cb_item_btn = $('#costing_other_hide_cb_item_btn');
costing_other_hide_cb_item_btn.hide();
let costing_labor_show_cb_item_btn = $('#costing_labor_show_cb_item_btn');
let costing_labor_hide_cb_item_btn = $('#costing_labor_hide_cb_item_btn');
costing_labor_hide_cb_item_btn.hide();

costing_fabric_show_cb_item_btn.click(function(e){
    costing_fabric_hide_cb_item_btn.show();
    costing_fabric_show_cb_item_btn.hide();
});

costing_fabric_hide_cb_item_btn.click(function(e){
    costing_fabric_hide_cb_item_btn.hide();
    costing_fabric_show_cb_item_btn.show();
});

costing_trim_show_cb_item_btn.click(function(e){
    costing_trim_hide_cb_item_btn.show();
    costing_trim_show_cb_item_btn.hide();
});

costing_zipper_hide_cb_item_btn.click(function(e){
    costing_zipper_hide_cb_item_btn.hide();
    costing_zipper_show_cb_item_btn.show();
});

costing_zipper_show_cb_item_btn.click(function(e){
    costing_zipper_hide_cb_item_btn.show();
    costing_zipper_show_cb_item_btn.hide();
});

costing_trim_hide_cb_item_btn.click(function(e){
    costing_trim_hide_cb_item_btn.hide();
    costing_trim_show_cb_item_btn.show();
});

costing_embelishment_show_cb_item_btn.click(function(e){
    costing_embelishment_hide_cb_item_btn.show();
    costing_embelishment_show_cb_item_btn.hide();
});

costing_embelishment_hide_cb_item_btn.click(function(e){
    costing_embelishment_hide_cb_item_btn.hide();
    costing_embelishment_show_cb_item_btn.show();
});

costing_label_show_cb_item_btn.click(function(e){
    costing_label_hide_cb_item_btn.show();
    costing_label_show_cb_item_btn.hide();
});

costing_label_hide_cb_item_btn.click(function(e){
    costing_label_hide_cb_item_btn.hide();
    costing_label_show_cb_item_btn.show();
});

costing_thread_show_cb_item_btn.click(function(e){
    costing_thread_hide_cb_item_btn.show();
    costing_thread_show_cb_item_btn.hide();
});

costing_thread_hide_cb_item_btn.click(function(e){
    costing_thread_hide_cb_item_btn.hide();
    costing_thread_show_cb_item_btn.show();
});

costing_package_show_cb_item_btn.click(function(e){
    costing_package_hide_cb_item_btn.show();
    costing_package_show_cb_item_btn.hide();
});

costing_package_hide_cb_item_btn.click(function(e){
    costing_package_hide_cb_item_btn.hide();
    costing_package_show_cb_item_btn.show();
});

costing_finish_show_cb_item_btn.click(function(e){
    costing_finish_hide_cb_item_btn.show();
    costing_finish_show_cb_item_btn.hide();
});

costing_finish_hide_cb_item_btn.click(function(e){
    costing_finish_hide_cb_item_btn.hide();
    costing_finish_show_cb_item_btn.show();
});

costing_export_show_cb_item_btn.click(function(e){
    costing_export_hide_cb_item_btn.show();
    costing_export_show_cb_item_btn.hide();
});

costing_export_hide_cb_item_btn.click(function(e){
    costing_export_hide_cb_item_btn.hide();
    costing_export_show_cb_item_btn.show();
});

costing_testing_show_cb_item_btn.click(function(e){
    costing_testing_hide_cb_item_btn.show();
    costing_testing_show_cb_item_btn.hide();
});

costing_testing_hide_cb_item_btn.click(function(e){
    costing_testing_hide_cb_item_btn.hide();
    costing_testing_show_cb_item_btn.show();
});

costing_other_show_cb_item_btn.click(function(e){
    costing_other_hide_cb_item_btn.show();
    costing_other_show_cb_item_btn.hide();
});

costing_other_hide_cb_item_btn.click(function(e){
    costing_other_hide_cb_item_btn.hide();
    costing_other_show_cb_item_btn.show();
});

costing_labor_show_cb_item_btn.click(function(e){
    costing_labor_hide_cb_item_btn.show();
    costing_labor_show_cb_item_btn.hide();
});

costing_labor_hide_cb_item_btn.click(function(e){
    costing_labor_hide_cb_item_btn.hide();
    costing_labor_show_cb_item_btn.show();
});

