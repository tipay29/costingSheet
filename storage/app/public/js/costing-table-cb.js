

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
    sessionStorage.setItem("costing_cb_fabric", 1);
    $('.costing_fabric_cb').show();
});

costing_fabric_hide_cb_item_btn.click(function(e){
    costing_fabric_hide_cb_item_btn.hide();
    costing_fabric_show_cb_item_btn.show();
    sessionStorage.setItem("costing_cb_fabric", 0);
    $('.costing_fabric_cb').hide();
});

costing_trim_show_cb_item_btn.click(function(e){
    costing_trim_hide_cb_item_btn.show();
    costing_trim_show_cb_item_btn.hide();
    sessionStorage.setItem("costing_cb_trim", 1);
    $('.costing_trim_cb').show();
});

costing_trim_hide_cb_item_btn.click(function(e){
    costing_trim_hide_cb_item_btn.hide();
    costing_trim_show_cb_item_btn.show();
    sessionStorage.setItem("costing_cb_trim", 0);
    $('.costing_trim_cb').hide();
});

costing_zipper_show_cb_item_btn.click(function(e){
    costing_zipper_hide_cb_item_btn.show();
    costing_zipper_show_cb_item_btn.hide();
    sessionStorage.setItem("costing_cb_zipper", 1);
    $('.costing_zipper_cb').show();
});

costing_zipper_hide_cb_item_btn.click(function(e){
    costing_zipper_hide_cb_item_btn.hide();
    costing_zipper_show_cb_item_btn.show();
    sessionStorage.setItem("costing_cb_zipper", 0);
    $('.costing_zipper_cb').hide();
});

costing_embelishment_show_cb_item_btn.click(function(e){
    costing_embelishment_hide_cb_item_btn.show();
    costing_embelishment_show_cb_item_btn.hide();
    sessionStorage.setItem("costing_cb_embelishment", 1);
    $('.costing_embelishment_cb').show();
});

costing_embelishment_hide_cb_item_btn.click(function(e){
    costing_embelishment_hide_cb_item_btn.hide();
    costing_embelishment_show_cb_item_btn.show();
    sessionStorage.setItem("costing_cb_embelishment", 0);
    $('.costing_embelishment_cb').hide();
});

costing_label_show_cb_item_btn.click(function(e){
    costing_label_hide_cb_item_btn.show();
    costing_label_show_cb_item_btn.hide();
    sessionStorage.setItem("costing_cb_label", 1);
    $('.costing_label_cb').show();
});

costing_label_hide_cb_item_btn.click(function(e){
    costing_label_hide_cb_item_btn.hide();
    costing_label_show_cb_item_btn.show();
    sessionStorage.setItem("costing_cb_label", 0);
    $('.costing_label_cb').hide();
});

costing_thread_show_cb_item_btn.click(function(e){
    costing_thread_hide_cb_item_btn.show();
    costing_thread_show_cb_item_btn.hide();
    sessionStorage.setItem("costing_cb_thread", 1);
    $('.costing_thread_cb').show();
});

costing_thread_hide_cb_item_btn.click(function(e){
    costing_thread_hide_cb_item_btn.hide();
    costing_thread_show_cb_item_btn.show();
    sessionStorage.setItem("costing_cb_thread", 0);
    $('.costing_thread_cb').hide();
});

costing_package_show_cb_item_btn.click(function(e){
    costing_package_hide_cb_item_btn.show();
    costing_package_show_cb_item_btn.hide();
    sessionStorage.setItem("costing_cb_package", 1);
    $('.costing_package_cb').show();
});

costing_package_hide_cb_item_btn.click(function(e){
    costing_package_hide_cb_item_btn.hide();
    costing_package_show_cb_item_btn.show();
    sessionStorage.setItem("costing_cb_package", 0);
    $('.costing_package_cb').hide();
});

costing_finish_show_cb_item_btn.click(function(e){
    costing_finish_hide_cb_item_btn.show();
    costing_finish_show_cb_item_btn.hide();
    sessionStorage.setItem("costing_cb_finish", 1);
    $('.costing_finish_cb').show();
});

costing_finish_hide_cb_item_btn.click(function(e){
    costing_finish_hide_cb_item_btn.hide();
    costing_finish_show_cb_item_btn.show();
    sessionStorage.setItem("costing_cb_finish", 0);
    $('.costing_finish_cb').hide();
});

costing_export_show_cb_item_btn.click(function(e){
    costing_export_hide_cb_item_btn.show();
    costing_export_show_cb_item_btn.hide();
    sessionStorage.setItem("costing_cb_export", 1);
    $('.costing_export_cb').show();
});

costing_export_hide_cb_item_btn.click(function(e){
    costing_export_hide_cb_item_btn.hide();
    costing_export_show_cb_item_btn.show();
    sessionStorage.setItem("costing_cb_export", 0);
    $('.costing_export_cb').hide();
});

costing_testing_show_cb_item_btn.click(function(e){
    costing_testing_hide_cb_item_btn.show();
    costing_testing_show_cb_item_btn.hide();
    sessionStorage.setItem("costing_cb_testing", 1);
    $('.costing_testing_cb').show();
});

costing_testing_hide_cb_item_btn.click(function(e){
    costing_testing_hide_cb_item_btn.hide();
    costing_testing_show_cb_item_btn.show();
    sessionStorage.setItem("costing_cb_testing", 0);
    $('.costing_testing_cb').hide();
});

costing_other_show_cb_item_btn.click(function(e){
    costing_other_hide_cb_item_btn.show();
    costing_other_show_cb_item_btn.hide();
    sessionStorage.setItem("costing_cb_other", 1);
    $('.costing_other_cb').show();
});

costing_other_hide_cb_item_btn.click(function(e){
    costing_other_hide_cb_item_btn.hide();
    costing_other_show_cb_item_btn.show();
    sessionStorage.setItem("costing_cb_other", 0);
    $('.costing_other_cb').hide();
});

costing_labor_show_cb_item_btn.click(function(e){
    costing_labor_hide_cb_item_btn.show();
    costing_labor_show_cb_item_btn.hide();
    sessionStorage.setItem("costing_cb_labor", 1);
    $('.costing_labor_cb').show();
});

costing_labor_hide_cb_item_btn.click(function(e){
    costing_labor_hide_cb_item_btn.hide();
    costing_labor_show_cb_item_btn.show();
    sessionStorage.setItem("costing_cb_labor", 0);
    $('.costing_labor_cb').hide();
});

