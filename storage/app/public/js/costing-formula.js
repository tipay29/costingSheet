$('input.costing_formula_usage').change(function(e){
    let id = $(this).attr('id');
    let id_number = id.replace(/[^0-9]/g,"");
    let category = id.split('_')[1];
    let column_name = 'usage';

    console.log(category);

});

$('input.costing_formula_wastage').change(function(e){
    let id = $(this).attr('id');
    let id_number = id.replace(/[^0-9]/g,"");
    let category = id.split('_')[1];
    let column_name = 'wastage';

    console.log(category);
});

$('input.costing_formula_unit_cost').change(function(e){
    let id = $(this).attr('id');
    let id_number = id.replace(/[^0-9]/g,"");
    let category = id.split('_')[1];
    let column_name = 'unit_cost';

    console.log(category);
});

$('input.costing_formula_handling').change(function(e){
    let id = $(this).attr('id');
    let id_number = id.replace(/[^0-9]/g,"");
    let category = id.split('_')[1];
    let column_name = 'handling';

    console.log(category);
});
