function showCostingSheetDetails(costing_sheet){

    sessionStorage.setItem('costing_sheet_id',costing_sheet['id']);

    $('#costing_customer_name').val(costing_sheet['cost_customer_name']);
    $('#costing_brand').val(costing_sheet['cost_brand']);
    $('#costing_season').val(costing_sheet['cost_season']);

    $('#costing_product_category').html('' +
        '    <option value="Apparel" '+getSelected('Apparel',costing_sheet['cost_product_category'])+' >Apparel成衣</option>\n' +
        '    <option value="Equipment" '+getSelected('Equipment',costing_sheet['cost_product_category'])+'>Equipment箱包设备</option>' +
        '');


    $('#costing_product_category_one').html('' +
        '<option value="Invalid" ' + getSelected('Invalid',costing_sheet['cost_product_category_one']) + ' disabled>Select Category One</option>' +
        '  <option value="TOPS" ' + getSelected('TOPS',costing_sheet['cost_product_category_one']) + '>TOPS上装</option>\n' +
        '                        <option value="BOTTOMS" '+ getSelected('BOTTOMS',costing_sheet['cost_product_category_one']) +' >BOTTOMS下装</option>\n' +
        '                        <option value="ONCESET" '+getSelected('ONCESET',costing_sheet['cost_product_category_one'])+' >ONCESET套装</option>' +
        '');

    let product_cat_two = getProductCatTwo(costing_sheet['cost_product_category_one'],costing_sheet['cost_product_category_two']);
    $('#costing_product_category_two_div').html(product_cat_two);

    let size_codes = getSizeCodes(costing_sheet['cost_product_category_one'],costing_sheet['cost_size_code']);
    $('#costing_size_code_div').html(size_codes);

    $('#costing_division').val(costing_sheet['cost_division']);
    $('#costing_version').val(costing_sheet['cost_version']);
    $('#costing_special_construction').html('' +
        '                        <option value="BONDING" '+getSelected("BONDING" ,costing_sheet['cost_special_cons'])+'>BONDING粘合剂</option>\n' +
        '                        <option value="DOWN" '+getSelected("DOWN" ,costing_sheet['cost_special_cons'])+'>DOWN羽绒</option>\n' +
        '                        <option value="ECO-DOWN" '+getSelected("ECO-DOWN" ,costing_sheet['cost_special_cons'])+'>ECO-DOWN手塞棉</option>\n' +
        '                        <option value="PADDED" '+getSelected("PADDED" ,costing_sheet['cost_special_cons'])+'>PADDED充棉</option>\n' +
        '                        <option value="QUILTING" '+getSelected("QUILTING" ,costing_sheet['cost_special_cons'])+'>QUILTING绗棉</option>\n' +
        '                        <option value="SEAM-SEAL" '+getSelected("SEAM-SEAL" ,costing_sheet['cost_special_cons'])+'>SEAM-SEAL压胶</option>' +
        '');

    $('#costing_gender').html('' +
        '   <option value="Invalid" '+getSelected("Invalid" ,costing_sheet['cost_gender'])+' disabled>Select Gender</option>' +
        '    <option value="MENS" '+getSelected("MENS" ,costing_sheet['cost_gender'])+'>MENS男装</option>\n ' +
        '                        <option value="WOMENS" '+getSelected("WOMENS" ,costing_sheet['cost_gender'])+'>WOMENS女装</option>\n' +
        '                        <option value="UNISEX" '+getSelected("UNISEX" ,costing_sheet['cost_gender'])+'>UNISEX中性</option>\n' +
        '                        <option value="KIDS" '+getSelected("KIDS" ,costing_sheet['cost_gender'])+'>KIDS童装</option>' +
        '');



    $('#costing_size').val(costing_sheet['cost_costing_size']);
    $('#costing_style').val(costing_sheet['cost_style']);
    $('#costing_style_name').val(costing_sheet['cost_style_name']);
    $('#costing_color').val(costing_sheet['cost_color']);
    $('#costing_color_name').val(costing_sheet['cost_color_name']);
    $('#costing_no_of_color').val(costing_sheet['cost_no_of_color']);
    $('#costing_tp_code').val(costing_sheet['cost_tp_code']);
    $('#costing_date').val(costing_sheet['cost_date']);

    $('#costing_stage').html('' +
        '<option value="Development Sample" '+getSelected("Development Sample",costing_sheet['cost_costing_stage'])+'>Development Sample</option>\n' +
        '    <option value="Costing Sample" '+getSelected("Costing Sample",costing_sheet['cost_costing_stage'])+'>Costing Sample</option>\n' +
        '    <option value="Counter Sample" '+getSelected("Counter Sample",costing_sheet['cost_costing_stage'])+'>Counter Sample</option>\n' +
        '    <option value="Proto Sample" '+getSelected("Proto Sample",costing_sheet['cost_costing_stage'])+'>Proto Sample</option>\n' +
        '    <option value="Salesman Sample" '+getSelected("Salesman Sample",costing_sheet['cost_costing_stage'])+'>Salesman Sample</option>\n' +
        '    <option value="Pre-production Sample" '+getSelected("Pre-production Sample",costing_sheet['cost_costing_stage'])+'>Pre-production Sample</option>\n' +
        '    <option value="Red Seal Sample" '+getSelected("Red Seal Sample",costing_sheet['cost_costing_stage'])+'>Red Seal Sample</option>\n' +
        '    <option value="Fitting Sample" '+getSelected("Fitting Sample",costing_sheet['cost_costing_stage'])+'>Fitting Sample</option>\n' +
        '    <option value="Size Set Sample" '+getSelected("Size Set Sample",costing_sheet['cost_costing_stage'])+'>Size Set Sample</option>\n' +
        '    <option value="TOP Sample" '+getSelected("TOP Sample",costing_sheet['cost_costing_stage'])+'>TOP Sample</option>\n' +
        '    <option value="Production Sample" '+getSelected("Production Sample",costing_sheet['cost_costing_stage'])+'>Production Sample</option>\n' +
        '    <option value="QA Sample" '+getSelected("QA Sample",costing_sheet['cost_costing_stage'])+'>QA Sample</option>\n' +
        '    <option value="Photo Shooting Sample" '+getSelected("Photo Shooting Sample",costing_sheet['cost_costing_stage'])+'>Photo Shooting Sample</option>\n' +
        '    <option value="Testing Sample" '+getSelected("Testing Sample",costing_sheet['cost_costing_stage'])+'>Testing Sample</option>\n' +
        '    <option value="Shipment Sample" '+getSelected("Shipment Sample",costing_sheet['cost_costing_stage'])+'>Shipment Sample</option>\n' +
        '    <option value="Meeting Sample" '+getSelected("Meeting Sample",costing_sheet['cost_costing_stage'])+'>Meeting Sample</option>\n' +
        '    <option value="Floorset Sample" '+getSelected("Floorset Sample",costing_sheet['cost_costing_stage'])+'>Floorset Sample</option>\n' +
        '    <option value="Electronic Commerce Sample" '+getSelected("Electronic Commerce Sample",costing_sheet['cost_costing_stage'])+'>Electronic Commerce Sample</option>\n' +
        '    <option value="Keeping Sample" '+getSelected("Keeping Sample",costing_sheet['cost_costing_stage'])+'>Keeping Sample</option>\n' +
        '    <option value="Mock-up" '+getSelected("Mock-up",costing_sheet['cost_costing_stage'])+'>Mock-up</option>' +
        '');

    $('#costing_status').html('' +
        '      <option value="DRAFT" '+getSelected("DRAFT",costing_sheet['cost_status'])+'>DRAFT</option>\n' +
        '      <option value="PENDING" '+getSelected("PENDING",costing_sheet['cost_status'])+'>PENDING FOR APPROVAL</option>' +
        '');

    $('#costing_currency').html('' +
        '   <option value="$" '+getSelected("$",costing_sheet['cost_currency'])+'>USD $</option>\n' +
        '                        <option value="¥" '+getSelected("¥",costing_sheet['cost_currency'])+'>RMB ¥</option>' +
        '');

    $('#costing_target_fob').val(costing_sheet['cost_target_fob']);

    $('#costing_total_fob_cm').html('' +
        '     <option value="TOTAL FOB" '+getSelected("TOTAL FOB",costing_sheet['cost_total_fob_cm'])+'>TOTAL FOB :</option>\n' +
        '                        <option value="CM" '+getSelected("CM",costing_sheet['cost_total_fob_cm'])+'>CM :</option>' +
        '');

    $('#costing_vendor').html('' +
        ' <option value="Galaxy International Trading Company Ltd." '+getSelected("Galaxy International Trading Company Ltd.",costing_sheet['cost_vendor'])+'>Galaxy International Trading Company Ltd.</option>\n' +
        '                        <option value="Horizon Outdoor (Cambodia) Co., Ltd" '+getSelected("Horizon Outdoor (Cambodia) Co., Ltd",costing_sheet['cost_vendor'])+'>Horizon Outdoor (Cambodia) Co., Ltd</option>\n' +
        '                        <option value="Vicmark Fashions (Cambodia) Co., Ltd." >Vicmark Fashions (Cambodia) Co., Ltd.</option>\n' +
        '                        <option value="HZ Int\'l Co., Ltd." '+getSelected("HZ Int\'l Co., Ltd.",costing_sheet['cost_vendor'])+'>HZ Int\'l Co., Ltd.</option>\n' +
        '                        <option value="HZ Outdoor Int’l Co., Ltd" '+getSelected("HZ Outdoor Int’l Co., Ltd",costing_sheet['cost_vendor'])+'>HZ Outdoor Int’l Co., Ltd </option>\n' +
        '                        <option value="Ningbo Horizon Outdoor Production Co., Ltd." '+getSelected("Ningbo Horizon Outdoor Production Co., Ltd.",costing_sheet['cost_vendor'])+'>Ningbo Horizon Outdoor Production Co., Ltd.</option>' +
        '');

    $('#costing_manufacturer_one').html('' +
        '<option value="Invalid Vendor" disabled>Select Manufacturer</option>\n' +
        '                        <option value="Horizon Outdoor (Cambodia) Co., Ltd" '+getSelected("Horizon Outdoor (Cambodia) Co., Ltd",costing_sheet['cost_manufacturer_one'])+'>Horizon Outdoor (Cambodia) Co., Ltd</option>\n' +
        '                        <option value="Vicmark Fashions (Cambodia) Co., Ltd." '+getSelected("Vicmark Fashions (Cambodia) Co., Ltd.",costing_sheet['cost_manufacturer_one'])+'>Vicmark Fashions (Cambodia) Co., Ltd.</option>\n' +
        '                        <option value="HZ Int\'l Co., Ltd." '+getSelected("HZ Int\'l Co., Ltd.",costing_sheet['cost_manufacturer_one'])+'>HZ Int\'l Co., Ltd.</option>\n' +
        '                        <option value="HZ Outdoor Int’l Co., Ltd" '+getSelected("HZ Outdoor Int’l Co., Ltd",costing_sheet['cost_manufacturer_one'])+'>HZ Outdoor Int’l Co., Ltd </option>\n' +
        '                        <option value="Ningbo Horizon Outdoor Production Co., Ltd." '+getSelected("Ningbo Horizon Outdoor Production Co., Ltd.",costing_sheet['cost_manufacturer_one'])+'>Ningbo Horizon Outdoor Production Co., Ltd.</option>' +
        '');

    $('#costing_manufacturer_two').html('' +
        '                        <option value="Horizon Outdoor (Cambodia) Co., Ltd" '+getSelected("Horizon Outdoor (Cambodia) Co., Ltd",costing_sheet['cost_manufacturer_two'])+'>Horizon Outdoor (Cambodia) Co., Ltd</option>\n' +
        '                        <option value="Vicmark Fashions (Cambodia) Co., Ltd." '+getSelected("Vicmark Fashions (Cambodia) Co., Ltd.",costing_sheet['cost_manufacturer_two'])+'>Vicmark Fashions (Cambodia) Co., Ltd.</option>\n' +
        '                        <option value="HZ Int\'l Co., Ltd." '+getSelected("HZ Int\'l Co., Ltd.",costing_sheet['cost_manufacturer_two'])+'>HZ Int\'l Co., Ltd.</option>\n' +
        '                        <option value="HZ Outdoor Int’l Co., Ltd" '+getSelected("HZ Outdoor Int’l Co., Ltd",costing_sheet['cost_manufacturer_two'])+'>HZ Outdoor Int’l Co., Ltd </option>\n' +
        '                        <option value="Ningbo Horizon Outdoor Production Co., Ltd." '+getSelected("Ningbo Horizon Outdoor Production Co., Ltd.",costing_sheet['cost_manufacturer_two'])+'>Ningbo Horizon Outdoor Production Co., Ltd.</option>' +
        '');

    $('#costing_coo').val(costing_sheet['cost_coo']);
    $('#costing_port').val(costing_sheet['cost_shipping_port']);
    $('#costing_forecast_qty').val(costing_sheet['cost_forecast_qty']);
    $('#costing_moq_style').val(costing_sheet['cost_moq_style']);
    $('#costing_mcq_color').val(costing_sheet['cost_mcq_color']);
    $('#costing_inco_terms').val(costing_sheet['cost_incoterms']);
    $('#costing_payment_terms').val(costing_sheet['cost_payment_terms']);
    $('#costing_production_lead_time').val(costing_sheet['cost_production_lead_time']);
    $('#costing_greige_reduced').val(costing_sheet['cost_griege_reduced']);


    //total per category pluss summarry
    $('#costing_fabric_total_fob,#costing_summary_fabric_total_fob').val(costing_sheet['cost_fabric_total_fob']);
    $('#costing_trim_total_fob,#costing_summary_trim_total_fob').val(costing_sheet['cost_trim_total_fob']);
    $('#costing_zipper_total_fob,#costing_summary_zipper_total_fob').val(costing_sheet['cost_zipper_total_fob']);
    $('#costing_embelishment_total_fob,#costing_summary_embelishment_total_fob').val(costing_sheet['cost_embelishment_total_fob']);
    $('#costing_label_total_fob,#costing_summary_label_total_fob').val(costing_sheet['cost_label_total_fob']);
    $('#costing_thread_total_fob,#costing_summary_thread_total_fob').val(costing_sheet['cost_thread_total_fob']);
    $('#costing_package_total_fob,#costing_summary_package_total_fob').val(costing_sheet['cost_package_total_fob']);
    $('#costing_finish_total_fob,#costing_summary_finish_total_fob').val(costing_sheet['cost_finish_total_fob']);
    $('#costing_export_total_fob,#costing_summary_export_total_fob').val(costing_sheet['cost_export_total_fob']);
    $('#costing_testing_total_fob,#costing_summary_testing_total_fob').val(costing_sheet['cost_testing_total_fob']);
    $('#costing_other_total_fob,#costing_summary_other_total_fob').val(costing_sheet['cost_other_total_fob']);
    $('#costing_labor_total_fob,#costing_summary_labor_total_fob').val(costing_sheet['cost_labor_total_fob']);

    $('#costing_total_cost_fob,#costing_summary_total_cost_fob,#costing_total_fob_header').val(costing_sheet['cost_total_fob']);

    let fabric_percent = (costing_sheet['cost_fabric_total_fob']/costing_sheet['cost_total_fob'])*100;
    let trim_percent = (costing_sheet['cost_trim_total_fob']/costing_sheet['cost_total_fob'])*100;
    let zipper_percent = (costing_sheet['cost_zipper_total_fob']/costing_sheet['cost_total_fob'])*100;
    let embelishment_percent = (costing_sheet['cost_embelishment_total_fob']/costing_sheet['cost_total_fob'])*100;
    let label_percent = (costing_sheet['cost_label_total_fob']/costing_sheet['cost_total_fob'])*100;
    let thread_percent = (costing_sheet['cost_thread_total_fob']/costing_sheet['cost_total_fob'])*100;
    let package_percent = (costing_sheet['cost_package_total_fob']/costing_sheet['cost_total_fob'])*100;
    let finish_percent = (costing_sheet['cost_finish_total_fob']/costing_sheet['cost_total_fob'])*100;
    let export_percent = (costing_sheet['cost_export_total_fob']/costing_sheet['cost_total_fob'])*100;
    let testing_percent = (costing_sheet['cost_testing_total_fob']/costing_sheet['cost_total_fob'])*100;
    let other_percent = (costing_sheet['cost_other_total_fob']/costing_sheet['cost_total_fob'])*100;
    let labor_percent = (costing_sheet['cost_labor_total_fob']/costing_sheet['cost_total_fob'])*100;

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
    $('#costing_summary_labor_percent,#costing_lop_percent').val(labor_percent.toFixed(2));

    $('#costing_lop_fob').val(costing_sheet['cost_labor_total_fob']);

    let material_cost = costing_sheet['cost_total_fob'] - costing_sheet['cost_labor_total_fob'];
    let material_percent = (material_cost/costing_sheet['cost_total_fob'])*100;

    $('#costing_material_cost_fob').val(material_cost.toFixed(2));
    $('#costing_material_cost_percent').val(material_percent.toFixed(2));

    updateCostingPieChart(
        costing_sheet['cost_fabric_total_fob'],
        costing_sheet['cost_trim_total_fob'],
        costing_sheet['cost_zipper_total_fob'],
        costing_sheet['cost_embelishment_total_fob'],
        costing_sheet['cost_label_total_fob'],
        costing_sheet['cost_thread_total_fob'],
        costing_sheet['cost_package_total_fob'],
        costing_sheet['cost_finish_total_fob'],
        costing_sheet['cost_export_total_fob'],
        costing_sheet['cost_testing_total_fob'],
        costing_sheet['cost_other_total_fob'],
        costing_sheet['cost_labor_total_fob'],
    );

    showCostingSheetRemarks(costing_sheet['cost_remarks'][0]);
    showCostingSheetMoqs(costing_sheet['cost_moqs'][0],costing_sheet['cost_total_fob']);
    showCostingSheetLaborDetails(costing_sheet['cost_labor_details'][0]);
}

function showCostingSheetMoqs(moqs,final_total_cost){

    if(moqs !== undefined){

        $('#costing_moq_qty_1').val(moqs['cost_qty_pcs_1']);
        $('#costing_moq_qty_2').val(moqs['cost_qty_pcs_2']);
        $('#costing_moq_qty_3').val(moqs['cost_qty_pcs_3']);
        $('#costing_moq_qty_4').val(moqs['cost_qty_pcs_4']);
        $('#costing_moq_qty_5').val(moqs['cost_qty_pcs_5']);
        $('#costing_moq_qty_6').val(moqs['cost_qty_pcs_6']);
        $('#costing_moq_upcharge_1').val(moqs['cost_upcharge_1']);
        $('#costing_moq_upcharge_2').val(moqs['cost_upcharge_2']);
        $('#costing_moq_upcharge_3').val(moqs['cost_upcharge_3']);
        $('#costing_moq_upcharge_4').val(moqs['cost_upcharge_4']);
        $('#costing_moq_upcharge_5').val(moqs['cost_upcharge_5']);
        $('#costing_moq_upcharge_6').val(moqs['cost_upcharge_6']);

        let moq_fob1 = final_total_cost * (1+(moqs['cost_upcharge_1']/100));
        let moq_fob2 = final_total_cost * (1+(moqs['cost_upcharge_2']/100));
        let moq_fob3 = final_total_cost * (1+(moqs['cost_upcharge_3']/100));
        let moq_fob4 = final_total_cost * (1+(moqs['cost_upcharge_4']/100));
        let moq_fob5 = final_total_cost * (1+(moqs['cost_upcharge_5']/100));
        let moq_fob6 = final_total_cost * (1+(moqs['cost_upcharge_6']/100));

        $('#costing_moq_fob_1').val(moq_fob1.toFixed(2));
        $('#costing_moq_fob_2').val(moq_fob2.toFixed(2));
        $('#costing_moq_fob_3').val(moq_fob3.toFixed(2));
        $('#costing_moq_fob_4').val(moq_fob4.toFixed(2));
        $('#costing_moq_fob_5').val(moq_fob5.toFixed(2));
        $('#costing_moq_fob_6').val(moq_fob6.toFixed(2));
    }
}

function showCostingSheetRemarks(remarks){
    if(remarks!== undefined){

            $('#costing_remark_1').val(remarks['cost_remarks_1']);

            $('#costing_remark_2').val(remarks['cost_remarks_2']);

            $('#costing_remark_3').val(remarks['cost_remarks_3']);

            $('#costing_remark_4').val(remarks['cost_remarks_4']);

            $('#costing_remark_5').val(remarks['cost_remarks_5']);

            $('#costing_remark_6').val(remarks['cost_remarks_6']);

            $('#costing_remark_7').val(remarks['cost_remarks_7']);

            $('#costing_remark_8').val(remarks['cost_remarks_8']);

            $('#costing_remark_9').val(remarks['cost_remarks_9']);

            $('#costing_remark_10').val(remarks['cost_remarks_10']);

    }

}

function showCostingSheetLaborDetails(labor){

    if(labor !== undefined) {

        $('#costing_smv_first').val(labor['cost_smv_1']);
        $('#costing_hours_first').val(labor['cost_hours_1']);
        $('#costing_hours_second').val(labor['cost_hours_2']);
        $('#costing_days_first').val(labor['cost_days_1']);
        $('#costing_days_second').val(labor['cost_days_2']);
        $('#costing_operators_first').val(labor['cost_operators_1']);
        $('#costing_operators_second').val(labor['cost_operators_2']);
        $('#costing_output_per_day_second').val(labor['cost_output_per_day_1']);
        $('#costing_monthly_wages_first').val(labor['cost_monthly_wage_1']);
        $('#costing_monthly_wages_second').val(labor['cost_monthly_wage_2']);

        let out_per_day_first = parseFloat((labor['cost_hours_1'] * labor['cost_operators_1']) / labor['cost_smv_1']);
        let smv_second = parseFloat((labor['cost_hours_1'] * labor['cost_operators_1']) / labor['cost_output_per_day_1']);
        $('#costing_output_per_day_first').html(out_per_day_first);
        $('#costing_smv_second').html(smv_second);

        let hourly_wage_first = parseFloat(labor['cost_monthly_wage_1'] / labor['cost_days_1'] / labor['cost_hours_1']);
        let hourly_wage_second = parseFloat(labor['cost_monthly_wage_2'] / labor['cost_days_2'] / labor['cost_hours_2']);
        let hourly_wage_first_id = hourly_wage_first * 1.4;
        let hourly_wage_second_id = hourly_wage_second * 1.4;
        let wage_per_min_first = hourly_wage_first / 60;
        let wage_per_min_second = hourly_wage_second / 60;
        let labor_per_pc_first = hourly_wage_first_id / labor['cost_smv_1'];
        let labor_per_pc_second = hourly_wage_second_id / smv_second;

        $('#costing_hourly_wages_first').html(hourly_wage_first.toFixed(2));
        $('#costing_hourly_wages_second').html(hourly_wage_second.toFixed(2));
        $('#costing_hourly_wages_id_first').html(hourly_wage_first_id.toFixed(2));
        $('#costing_hourly_wages_id_second').html(hourly_wage_second_id.toFixed(2));
        $('#costing_wages_per_min_first').html(wage_per_min_first.toFixed(2));
        $('#costing_wages_per_min_second').html(wage_per_min_second.toFixed(2));
        $('#costing_cost_per_pc_first').html(labor_per_pc_first.toFixed(2));
        $('#costing_cost_per_pc_second').html(labor_per_pc_second.toFixed(2));
    }
}







