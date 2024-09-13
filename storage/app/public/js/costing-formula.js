
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

        $('#costing_'+categories[i]+'_total_fob' +', '+'#costing_summary_'+categories[i]+'_total_fob')
            .val(category_total_cost.toFixed(2));

    }

    let costing_fabric_total_fob = $('#costing_fabric_total_fob');
    let costing_trim_total_fob = $('#costing_trim_total_fob');
    let costing_zipper_total_fob = $('#costing_zipper_total_fob');
    let costing_embelishment_total_fob = $('#costing_embelishment_total_fob');
    let costing_label_total_fob = $('#costing_label_total_fob');
    let costing_thread_total_fob = $('#costing_thread_total_fob');
    let costing_package_total_fob = $('#costing_package_total_fob');
    let costing_finish_total_fob = $('#costing_finish_total_fob');
    let costing_export_total_fob = $('#costing_export_total_fob');
    let costing_testing_total_fob = $('#costing_testing_total_fob');
    let costing_other_total_fob = $('#costing_other_total_fob');
    let costing_labor_total_fob = $('#costing_labor_total_fob');

    let final_total_cost = parseFloat(costing_fabric_total_fob.val())+
        parseFloat(costing_trim_total_fob.val())+
        parseFloat(costing_embelishment_total_fob.val())+
        parseFloat(costing_zipper_total_fob.val())+
        parseFloat(costing_label_total_fob.val())+
        parseFloat(costing_thread_total_fob.val())+
        parseFloat(costing_package_total_fob.val())+
        parseFloat(costing_finish_total_fob.val())+
        parseFloat(costing_export_total_fob.val())+
        parseFloat(costing_testing_total_fob.val())+
        parseFloat(costing_other_total_fob.val())+
        parseFloat(costing_labor_total_fob.val());

    $('#costing_total_cost_fob,#costing_summary_total_cost_fob,#costing_total_fob_header').val(final_total_cost.toFixed(2));

    let fabric_percent = (costing_fabric_total_fob.val()/final_total_cost)*100;
    let trim_percent = (costing_trim_total_fob.val()/final_total_cost)*100;
    let zipper_percent = (costing_zipper_total_fob.val()/final_total_cost)*100;
    let embelishment_percent = (costing_embelishment_total_fob.val()/final_total_cost)*100;
    let label_percent = (costing_label_total_fob.val()/final_total_cost)*100;
    let thread_percent = (costing_thread_total_fob.val()/final_total_cost)*100;
    let package_percent = (costing_package_total_fob.val()/final_total_cost)*100;
    let finish_percent = (costing_finish_total_fob.val()/final_total_cost)*100;
    let export_percent = (costing_export_total_fob.val()/final_total_cost)*100;
    let testing_percent = (costing_testing_total_fob.val()/final_total_cost)*100;
    let other_percent = (costing_other_total_fob.val()/final_total_cost)*100;
    let labor_percent = (costing_labor_total_fob.val()/final_total_cost)*100;


    $('#costing_summary_fabric_percent').val(fabric_percent.toFixed(2));
    $('#costing_summary_trim_percent').val(trim_percent.toFixed(2));
    $('#costing_summary_zipper_percent').val(zipper_percent.toFixed(2));
    $('#costing_summary_embelishment_percent').val(embelishment_percent.toFixed(2));
    $('#costing_summary_label_percent').val(label_percent.toFixed(2));
    $('#costing_summary_thread_percent').val(thread_percent.toFixed(2));
    $('#costing_summary_package_percent').val(package_percent.toFixed(2));
    $('#costing_summary_finish_percent').val(finish_percent.toFixed(2));
    $('#costing_summary_export_percent').val(export_percent.toFixed(2));
    $('#costing_summary_testing_percent').val(testing_percent.toFixed(2));
    $('#costing_summary_other_percent').val(other_percent.toFixed(2));
    $('#costing_summary_labor_percent').val(labor_percent.toFixed(2));

    updateCostingPieChart(
        costing_fabric_total_fob.val(),
        costing_trim_total_fob.val(),
        costing_zipper_total_fob.val(),
        costing_embelishment_total_fob.val(),
        costing_label_total_fob.val(),
        costing_thread_total_fob.val(),
        costing_package_total_fob.val(),
        costing_finish_total_fob.val(),
        costing_export_total_fob.val(),
        costing_testing_total_fob.val(),
        costing_other_total_fob.val(),
        costing_labor_total_fob.val(),
    );


    $('#costing_lop_fob').val(costing_labor_total_fob.val());
    $('#costing_lop_percent').val(labor_percent.toFixed(2));
    let material_cost = final_total_cost - costing_labor_total_fob.val();
    let material_percent = (material_cost/final_total_cost)*100;

    $('#costing_material_cost_fob').val(material_cost.toFixed(2));
    $('#costing_material_cost_percent').val(material_percent.toFixed(2));

    let moq_fob1 = final_total_cost * (1+($('#costing_moq_upcharge_1').val()/100));
    let moq_fob2 = final_total_cost * (1+($('#costing_moq_upcharge_2').val()/100));
    let moq_fob3 = final_total_cost * (1+($('#costing_moq_upcharge_3').val()/100));
    let moq_fob4 = final_total_cost * (1+($('#costing_moq_upcharge_4').val()/100));
    let moq_fob5 = final_total_cost * (1+($('#costing_moq_upcharge_5').val()/100));
    let moq_fob6 = final_total_cost * (1+($('#costing_moq_upcharge_6').val()/100));

    $('#costing_moq_fob_1').val(moq_fob1.toFixed(2));
    $('#costing_moq_fob_2').val(moq_fob2.toFixed(2));
    $('#costing_moq_fob_3').val(moq_fob3.toFixed(2));
    $('#costing_moq_fob_4').val(moq_fob4.toFixed(2));
    $('#costing_moq_fob_5').val(moq_fob5.toFixed(2));
    $('#costing_moq_fob_6').val(moq_fob6.toFixed(2));
}

$('#costing_moq_upcharge_1').change(function(){
    let costing_total_cost_fob = $('#costing_total_cost_fob').val();
    let moq_fob1 = costing_total_cost_fob * (1+($(this).val()/100))

    $('#costing_moq_fob_1').val(moq_fob1.toFixed(2));
});

$('#costing_moq_upcharge_2').change(function(){
    let costing_total_cost_fob = $('#costing_total_cost_fob').val();
    let moq_fob2 = costing_total_cost_fob * (1+($(this).val()/100))

    $('#costing_moq_fob_2').val(moq_fob2.toFixed(2));
});

$('#costing_moq_upcharge_3').change(function(){
    let costing_total_cost_fob = $('#costing_total_cost_fob').val();
    let moq_fob3 = costing_total_cost_fob * (1+($(this).val()/100))

    $('#costing_moq_fob_3').val(moq_fob3.toFixed(2));
});

$('#costing_moq_upcharge_4').change(function(){
    let costing_total_cost_fob = $('#costing_total_cost_fob').val();
    let moq_fob4 = costing_total_cost_fob * (1+($(this).val()/100))

    $('#costing_moq_fob_4').val(moq_fob4.toFixed(2));
});

$('#costing_moq_upcharge_5').change(function(){
    let costing_total_cost_fob = $('#costing_total_cost_fob').val();
    let moq_fob5 = costing_total_cost_fob * (1+($(this).val()/100))

    $('#costing_moq_fob_5').val(moq_fob5.toFixed(2));
});

$('#costing_moq_upcharge_6').change(function(){
    let costing_total_cost_fob = $('#costing_total_cost_fob').val();
    let moq_fob6 = costing_total_cost_fob * (1+($(this).val()/100))

    $('#costing_moq_fob_6').val(moq_fob6.toFixed(2));
});





     data = {
        labels: ['Fabric','Trim','Zipper',
            'Embelishment','Label','Thread',
            'Package','Finish','Éxport',
            'Testing','Other','Labor'],
        datasets: [{
            label: '$',
            data: [1, 1, 1,
                1,1,1,
                1,1,1,
                1,1,1],
            backgroundColor: [
                'rgb(198,0,124)',
                'rgb(146,185,56)',
                'rgb(204,3,21)',
                'rgb(84,209,239)',
                'rgb(254,229,41)',
                'rgb(65,64,109)',
                'rgb(179,230,255)',
                'rgb(255,229,150)',
                'rgb(255,103,103)',
                'rgb(137,45,45)',
                'rgb(78,108,126)',
                'rgb(105,83,83)',
            ],
            hoverOffset: 12
        }]
    };

     ctx = document.getElementById('myChart').getContext('2d');
     myChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            plugins: {
                legend: {
                    display: false,
                },
                labels: {
                    position: 'outside',
                },

            },
            layout: {
                padding: 25
            },
            font: {
                size: 1
            }
        }
    });

     function updateCostingPieChart(
         c_fabric,c_trim,c_zipper,
         c_embelishment,c_label,c_thread,
         c_package,c_finish,c_export,
         c_testing,c_other,c_labor){
            console.log(arguments);

             myChart.data.datasets[0].data[0] = parseFloat(c_fabric);


             myChart.data.datasets[0].data[1] = parseFloat(c_trim);


             myChart.data.datasets[0].data[2] = parseFloat(c_zipper);


             myChart.data.datasets[0].data[3] = parseFloat(c_embelishment);

             myChart.data.datasets[0].data[4] = parseFloat(c_label);

             myChart.data.datasets[0].data[5] = parseFloat(c_thread);

             myChart.data.datasets[0].data[6] = parseFloat(c_package);

             myChart.data.datasets[0].data[7] = parseFloat(c_finish);

            myChart.data.datasets[0].data[8] = parseFloat(c_export);

             myChart.data.datasets[0].data[9] = parseFloat(c_testing);

             myChart.data.datasets[0].data[10] = parseFloat(c_other);

             myChart.data.datasets[0].data[11] = parseFloat(c_labor);


        myChart.update();
     }


