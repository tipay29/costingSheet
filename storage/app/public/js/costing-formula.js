
$('.costing_btn_add_remove').click(function(){
    getFinalTotalCost();
});

$('body').delegate('input.costing_formula_usage','change',function(e){
    let id = $(this).attr('id');
    let id_number = id.replace(/[^0-9]/g,"");
    let category = id.split('_')[1];
    let column_name = 'usage';

    // check if usage is valid value
    if($(this).val() > 0 && $(this).val() <= 100000){

        let wastage_id = '#costing_' + category + '_wastage' + id_number;
        let gross_yield_id = '#costing_' + category + '_gross_yield' + id_number;

        if($(wastage_id).val() > 0 && $(wastage_id).val() <= 100000){
            getGrossYield($(this).val(),$(wastage_id).val(),gross_yield_id);

            gross_yield_id = '#costing_' + category + '_gross_yield' + id_number;
            let handling_id = '#costing_' + category + '_handling' + id_number;
            let unit_cost_id = '#costing_' + category + '_unit_cost' + id_number;
            let total_cost_id = '#costing_' + category + '_total_cost' + id_number;

            if($(handling_id).val() > 0 && $(handling_id).val() <= 100000
                && $(unit_cost_id).val() > 0 && $(unit_cost_id).val() <= 100000){
                getTotalCost($(unit_cost_id).val(),$(gross_yield_id).val(),$(handling_id).val(),total_cost_id);

            }
        }

    }else{
        alert('Input only 1-100000');
        $(this).val('');
    }

    console.log(category);

});

$('body').delegate('input.costing_formula_wastage','change',function(e){
    let id = $(this).attr('id');
    let id_number = id.replace(/[^0-9]/g,"");
    let category = id.split('_')[1];
    let column_name = 'wastage';

    //check if usage is valid value
    if($(this).val() > 0 && $(this).val() <= 100000){

        let usage_id = '#costing_' + category + '_usage' + id_number;
        let gross_yield_id = '#costing_' + category + '_gross_yield' + id_number;

        if($(usage_id).val() > 0 && $(usage_id).val() <= 100000){
            getGrossYield($(usage_id).val(),$(this).val(),gross_yield_id);

            gross_yield_id = '#costing_' + category + '_gross_yield' + id_number;
            let handling_id = '#costing_' + category + '_handling' + id_number;
            let unit_cost_id = '#costing_' + category + '_unit_cost' + id_number;
            let total_cost_id = '#costing_' + category + '_total_cost' + id_number;

            if($(handling_id).val() > 0 && $(handling_id).val() <= 100000
                && $(unit_cost_id).val() > 0 && $(unit_cost_id).val() <= 100000){
                getTotalCost($(unit_cost_id).val(),$(gross_yield_id).val(),$(handling_id).val(),total_cost_id);

            }
        }


    }else{
        alert('Input only 1-100000');
        $(this).val('');
    }

    console.log(category);
});

$('body').delegate('input.costing_formula_unit_cost','change',function(e){
    let id = $(this).attr('id');
    let id_number = id.replace(/[^0-9]/g,"");
    let category = id.split('_')[1];
    let column_name = 'unit_cost';

    //check if usage is valid value
    if($(this).val() > 0 && $(this).val() <= 100000){


        let gross_yield_id = '#costing_' + category + '_gross_yield' + id_number;
        let handling_id = '#costing_' + category + '_handling' + id_number;
        let total_cost_id = '#costing_' + category + '_total_cost' + id_number;

        if($(gross_yield_id).val() > 0 && $(gross_yield_id).val() <= 100000
        && $(handling_id).val() > 0 && $(handling_id).val() <= 100000){
            getTotalCost($(this).val(),$(gross_yield_id).val(),$(handling_id).val(),total_cost_id);

        }



    }else{
        alert('Input only 1-100000');
        $(this).val('');
    }

    console.log(category);
});

$('body').delegate('input.costing_formula_handling','change',function(e){
    let id = $(this).attr('id');
    let id_number = id.replace(/[^0-9]/g,"");
    let category = id.split('_')[1];
    let column_name = 'handling';

    //check if usage is valid value
    if($(this).val() > 0 && $(this).val() <= 100000){


        let gross_yield_id = '#costing_' + category + '_gross_yield' + id_number;
        let unit_cost_id = '#costing_' + category + '_unit_cost' + id_number;
        let total_cost_id = '#costing_' + category + '_total_cost' + id_number;

        if($(gross_yield_id).val() > 0 && $(gross_yield_id).val() <= 100000
            && $(unit_cost_id).val() > 0 && $(unit_cost_id).val() <= 100000){
            getTotalCost($(unit_cost_id).val(),$(gross_yield_id).val(),$(this).val(),total_cost_id);

        }

    }else{
        alert('Input only 1-100000');
        $(this).val('');
    }

    console.log(category);
});



function getGrossYield(usage,wastage,gross_yield_id){

    let gross_yield_total = parseFloat(parseFloat(usage)*parseFloat(wastage/100)+parseFloat(usage));
    $(gross_yield_id).val(gross_yield_total.toFixed(2));

}

function getTotalCost(unit_cost,gross_yield,handling,total_cost_id){

    let total_cost = parseFloat(parseFloat(gross_yield)*parseFloat(unit_cost)*parseFloat(1+(parseFloat(handling)/100)));
    $(total_cost_id).val(total_cost.toFixed(2));

    getFinalTotalCost();
}

function getFinalTotalCost(){

    let categories = ['fabric','trim','zipper','embelishment','label','thread','package','finish','export'
                        ,'testing','other','labor'];

    for (let i = 0; i < categories.length; i++) {

        let category_rows = sessionStorage.getItem('costing_'+categories[i]+'_row_ids');
        let category_row_first = category_rows.split('-')[0];
        let category_row_second = category_rows.split('-')[1]
        let category_total_cost = 0.00;

        let y = 1;
        for (let x = parseInt(category_row_first); x <= parseInt(category_row_second); x++) {
            category_total_cost = category_total_cost + parseFloat($('#costing_'+categories[i]+'_total_cost'+y).val());
            // alert(category_total_cost);
            y++;
        }

        $('#costing_'+categories[i]+'_total_fob').val(category_total_cost.toFixed(2));

    }


    let final_total_cost = parseFloat($('#costing_fabric_total_fob').val())+
        parseFloat($('#costing_trim_total_fob').val())+
        parseFloat($('#costing_zipper_total_fob').val())+
        parseFloat($('#costing_embelishment_total_fob').val())+
        parseFloat($('#costing_label_total_fob').val())+
        parseFloat($('#costing_thread_total_fob').val())+
        parseFloat($('#costing_package_total_fob').val())+
        parseFloat($('#costing_finish_total_fob').val())+
        parseFloat($('#costing_export_total_fob').val())+
        parseFloat($('#costing_testing_total_fob').val())+
        parseFloat($('#costing_other_total_fob').val())+
        parseFloat($('#costing_labor_total_fob').val());

    $('#costing_total_cost_fob').val(final_total_cost.toFixed(2));
}
