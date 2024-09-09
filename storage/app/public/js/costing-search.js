
let costing_search_row_single = $('#costing_search_row_single');
let costing_search_row_multi = $('#costing_search_row_multi');

costing_search_row_multi.hide();

$('#costing_search_switch_multi_btn').click(function(e){
    e.preventDefault();
    costing_search_row_multi.show();
    costing_search_row_single.hide();
});

$('#costing_search_switch_single_btn').click(function(e){
    e.preventDefault();
    costing_search_row_multi.hide();
    costing_search_row_single.show();
});
