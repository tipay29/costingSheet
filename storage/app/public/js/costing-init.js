let costing_add_fabric_row_btn = $('#costing_add_fabric_row_btn');
let costing_rmv_fabric_row_btn = $('#costing_rmv_fabric_row_btn');
let costing_add_trim_row_btn = $('#costing_add_trim_row_btn');
let costing_rmv_trim_row_btn = $('#costing_rmv_trim_row_btn');
let costing_add_zipper_row_btn = $('#costing_add_zipper_row_btn');
let costing_rmv_zipper_row_btn = $('#costing_rmv_zipper_row_btn');
let costing_add_embelishment_row_btn = $('#costing_add_embelishment_row_btn');
let costing_rmv_embelishment_row_btn = $('#costing_rmv_embelishment_row_btn');
let costing_add_label_row_btn = $('#costing_add_label_row_btn');
let costing_rmv_label_row_btn = $('#costing_rmv_label_row_btn');
let costing_add_thread_row_btn = $('#costing_add_thread_row_btn');
let costing_rmv_thread_row_btn = $('#costing_rmv_thread_row_btn');
let costing_add_package_row_btn = $('#costing_add_package_row_btn');
let costing_rmv_package_row_btn = $('#costing_rmv_package_row_btn');
let costing_add_finish_row_btn = $('#costing_add_finish_row_btn');
let costing_rmv_finish_row_btn = $('#costing_rmv_finish_row_btn');
let costing_add_export_row_btn = $('#costing_add_export_row_btn');
let costing_rmv_export_row_btn = $('#costing_rmv_export_row_btn');
let costing_add_testing_row_btn = $('#costing_add_testing_row_btn');
let costing_rmv_testing_row_btn = $('#costing_rmv_testing_row_btn');
let costing_add_other_row_btn = $('#costing_add_other_row_btn');
let costing_rmv_other_row_btn = $('#costing_rmv_other_row_btn');
let costing_add_labor_row_btn = $('#costing_add_labor_row_btn');
let costing_rmv_labor_row_btn = $('#costing_rmv_labor_row_btn');

costing_add_fabric_row_btn.click(function(e){
    e.preventDefault();
    let fabric_row = parseInt(sessionStorage.getItem("costing_fabric_row"))+1;
    sessionStorage.setItem("costing_fabric_row", fabric_row);
    let fabric_row_tds_add = '';

    let no_of_size = sessionStorage.getItem('costing_no_of_size');
    if(no_of_size !== 0){
        for (let i = 1; i <= no_of_size; i++) {
            fabric_row_tds_add = fabric_row_tds_add.concat('' +
                '<td class="costing_table_size">' +
                '<input type="text" id="costing_fabric_size_'+i+'_'+fabric_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }
    let no_of_color = sessionStorage.getItem('costing_no_of_color');
    if(no_of_color !== 0){
        for (let i = 1; i <= no_of_color; i++) {
            fabric_row_tds_add = fabric_row_tds_add.concat('' +
                '<td class="costing_table_color">' +
                '<input type="text" id="costing_fabric_color_'+i+'_'+fabric_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }

    let fabric_row_string = fabric_row.toString();
    let fabric_row_tds = '' +
        '   <tr class="costing_fabric_data" id="costing_fabric_tr'+fabric_row_string+'">\n' +
        '                                    <td  id="costing_fabric_tr_tds'+fabric_row_string+'">' +
        '                                    <input type="checkbox" id="costing_fabric_cb'+fabric_row_string+'" class="css-costing-cb" >'+fabric_row_string.padStart(3,"0")+
        '                                    </td>\n' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_fabric_component'+fabric_row_string+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_fabric_material_id'+fabric_row_string+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_fabric_categories'+fabric_row_string+'" value="Fabric" class="css-input-costing-data-solo" style="text-align: start;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_fabric_nominated'+fabric_row_string+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_fabric_coo'+fabric_row_string+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_fabric_supplier_ref'+fabric_row_string+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_fabric_description'+fabric_row_string+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_fabric_location'+fabric_row_string+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_fabric_mill_supplier'+fabric_row_string+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                      <select id="costing_fabric_uom'+fabric_row_string+'" class="css-select-costing-table css-select-costing-table-uom"></select>' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_fabric_wedth'+fabric_row_string+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_fabric_usage'+fabric_row_string+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_fabric_wastage'+fabric_row_string+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_fabric_gross_yield'+fabric_row_string+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_fabric_unit_cost'+fabric_row_string+'" value="0" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_fabric_handling'+fabric_row_string+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_fabric_total_cost'+fabric_row_string+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_fabric_comment'+fabric_row_string+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        fabric_row_tds_add +
        '                                </tr>' ;

    costing_fabric_tbody.append(fabric_row_tds);

    let uom = '#costing_fabric_uom'+fabric_row_string;
    getUOM(uom);

    let fabric_row_control = sessionStorage.getItem('costing_fabric_row_ids').split('-');
    new_ids = fabric_row_control[0] + '-' + (parseInt(fabric_row_control[1])+1);
    sessionStorage.setItem('costing_fabric_row_ids',new_ids);

    updateItemNumber([2,3,4,5,6,7,8,9,10,11,12],'add');

});

costing_rmv_fabric_row_btn.click(function(e){
    e.preventDefault();

    let fabric_row_last_num = sessionStorage.getItem("costing_fabric_row");
    let fabric_row = parseInt(sessionStorage.getItem("costing_fabric_row"))-1;

    sessionStorage.setItem("costing_fabric_row", fabric_row);

    let fabric_row_id = '#costing_fabric_tr' + fabric_row_last_num;

    $(fabric_row_id).remove();

    let id_control = sessionStorage.getItem('costing_fabric_row_ids').split('-');
    new_ids = id_control[0] + '-' + (parseInt(id_control[1])-1);
    sessionStorage.setItem('costing_fabric_row_ids',new_ids);

    updateItemNumber([2,3,4,5,6,7,8,9,10,11,12],'rmv');
});

costing_add_trim_row_btn.click(function(e){
    e.preventDefault();

    let trim_row_control = sessionStorage.getItem("costing_trim_row_ids").split('-');
    let trim_row_last_num = parseInt(trim_row_control[1])+1;

    let trim_row = sessionStorage.getItem("costing_trim_row");
    trim_row = parseInt(trim_row)+1;
    sessionStorage.setItem("costing_trim_row", trim_row);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let trim_row_tds_add = '';

    let no_of_size = sessionStorage.getItem('costing_no_of_size');
    if(no_of_size !== 0){
        for (let i = 1; i <= no_of_size; i++) {
            trim_row_tds_add = trim_row_tds_add.concat('' +
                '<td class="costing_table_size">' +
                '<input type="text" id="costing_trim_size_'+i+'_'+trim_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }
    let no_of_color = sessionStorage.getItem('costing_no_of_color');
    if(no_of_color !== 0){
        for (let i = 1; i <= no_of_color; i++) {
            trim_row_tds_add = trim_row_tds_add.concat('' +
                '<td class="costing_table_color">' +
                '<input type="text" id="costing_trim_color_'+i+'_'+trim_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }

    let trim_row_string = trim_row_last_num.toString();
    let trim_row_tds = ' ' +
        '   <tr class="costing_trim_data" id="costing_trim_tr'+trim_row_string+'">\n' +
        '                                    <td  id="costing_trim_tr_tds'+trim_row_string+'">' +
        '                                    <input type="checkbox" id="costing_trim_cb'+trim_row_string+'" class="css-costing-cb" >'+trim_row_string.padStart(3,"0")+
        '                                    </td>\n' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_trim_component'+trim_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_trim_material_id'+trim_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_trim_categories'+trim_row+'" value="Trim" class="css-input-costing-data-solo" style="text-align: start;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_trim_nominated'+trim_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_trim_coo'+trim_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_trim_supplier_ref'+trim_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_trim_description'+trim_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_trim_location'+trim_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_trim_mill_supplier'+trim_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                      <select id="costing_trim_uom'+trim_row+'" class="css-select-costing-table css-select-costing-table-uom"></select>' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_trim_wedth'+trim_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_trim_usage'+trim_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_trim_wastage'+trim_row+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_trim_gross_yield'+trim_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_trim_unit_cost'+trim_row+'" value="0" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_trim_handling'+trim_row+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_trim_total_cost'+trim_row+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_trim_comment'+trim_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        trim_row_tds_add +
        '                                </tr>' ;

    costing_trim_tbody.append(trim_row_tds);

    let uom = '#costing_trim_uom'+trim_row;
    getUOM(uom);

    new_ids = trim_row_control[0] + '-' + (parseInt(trim_row_control[1])+1);
    sessionStorage.setItem('costing_trim_row_ids',new_ids);

    updateItemNumber([3,4,5,6,7,8,9,10,11,12],'add');

});

costing_rmv_trim_row_btn.click(function(e){
    e.preventDefault();

    let trim_row_control = sessionStorage.getItem('costing_trim_row_ids').split('-');
    let trim_row_last_num = trim_row_control[1];

    let trim_row = parseInt(sessionStorage.getItem("costing_trim_row"))-1;
    sessionStorage.setItem("costing_trim_row", trim_row);

    let trim_row_id = '#costing_trim_tr' + trim_row_last_num;

    $(trim_row_id).remove();

    new_ids = trim_row_control[0] + '-' + (parseInt(trim_row_control[1])-1);
    sessionStorage.setItem('costing_trim_row_ids',new_ids);

    updateItemNumber([3,4,5,6,7,8,9,10,11,12],'rmv');
});

costing_add_zipper_row_btn.click(function(e){
    e.preventDefault();

    let zipper_row_control = sessionStorage.getItem("costing_zipper_row_ids").split('-');
    let zipper_row_last_num = parseInt(zipper_row_control[1])+1;

    let zipper_row = sessionStorage.getItem("costing_zipper_row");
    zipper_row = parseInt(zipper_row)+1;
    sessionStorage.setItem("costing_zipper_row", zipper_row);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let zipper_row_tds_add = '';

    let no_of_size = sessionStorage.getItem('costing_no_of_size');
    if(no_of_size !== 0){
        for (let i = 1; i <= no_of_size; i++) {
            zipper_row_tds_add = zipper_row_tds_add.concat('' +
                '<td class="costing_table_size">' +
                '<input type="text" id="costing_zipper_size_'+i+'_'+zipper_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }
    let no_of_color = sessionStorage.getItem('costing_no_of_color');
    if(no_of_color !== 0){
        for (let i = 1; i <= no_of_color; i++) {
            zipper_row_tds_add = zipper_row_tds_add.concat('' +
                '<td class="costing_table_color">' +
                '<input type="text" id="costing_zipper_color_'+i+'_'+zipper_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }

    let zipper_row_string = zipper_row_last_num.toString();
    let zipper_row_tds = '' +
        '   <tr class="costing_zipper_data" id="costing_zipper_tr'+zipper_row_string+'">\n' +
        '                                    <td  id="costing_zipper_tr_tds'+zipper_row_string+'">' +
        '                                    <input type="checkbox" id="costing_zipper_cb'+zipper_row_string+'" class="css-costing-cb" >'+zipper_row_string.padStart(3,"0")+
        '                                    </td>\n' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_zipper_component'+zipper_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_zipper_material_id'+zipper_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_zipper_categories'+zipper_row+'" value="Zipper" class="css-input-costing-data-solo" style="text-align: start;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_zipper_nominated'+zipper_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_zipper_coo'+zipper_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_zipper_supplier_ref'+zipper_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_zipper_description'+zipper_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_zipper_location'+zipper_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_zipper_mill_supplier'+zipper_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                      <select id="costing_zipper_uom'+zipper_row+'" class="css-select-costing-table css-select-costing-table-uom"></select>' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_zipper_wedth'+zipper_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_zipper_usage'+zipper_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_zipper_wastage'+zipper_row+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_zipper_gross_yield'+zipper_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_zipper_unit_cost'+zipper_row+'" value="0" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_zipper_handling'+zipper_row+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_zipper_total_cost'+zipper_row+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_zipper_comment'+zipper_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        zipper_row_tds_add +
        '                                </tr>' ;

    costing_zipper_tbody.append(zipper_row_tds);

    let uom = '#costing_zipper_uom'+zipper_row;
    getUOM(uom);

    new_ids = zipper_row_control[0] + '-' + (parseInt(zipper_row_control[1])+1);
    sessionStorage.setItem('costing_zipper_row_ids',new_ids);

    updateItemNumber([4,5,6,7,8,9,10,11,12],'add');

});

costing_rmv_zipper_row_btn.click(function(e){
    e.preventDefault();

    let zipper_row_control = sessionStorage.getItem('costing_zipper_row_ids').split('-');
    let zipper_row_last_num = zipper_row_control[1];

    let zipper_row = parseInt(sessionStorage.getItem("costing_zipper_row"))-1;
    sessionStorage.setItem("costing_zipper_row", zipper_row);

    let zipper_row_id = '#costing_zipper_tr' + zipper_row_last_num;

    $(zipper_row_id).remove();

    new_ids = zipper_row_control[0] + '-' + (parseInt(zipper_row_control[1])-1);
    sessionStorage.setItem('costing_zipper_row_ids',new_ids);

    updateItemNumber([4,5,6,7,8,9,10,11,12],'rmv');
});

costing_add_embelishment_row_btn.click(function(e){
    e.preventDefault();

    let embelishment_row_control = sessionStorage.getItem("costing_embelishment_row_ids").split('-');
    let embelishment_row_last_num = parseInt(embelishment_row_control[1])+1;

    let embelishment_row = sessionStorage.getItem("costing_embelishment_row");
    embelishment_row = parseInt(embelishment_row)+1;
    sessionStorage.setItem("costing_embelishment_row", embelishment_row);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let embelishment_row_tds_add = '';

    let no_of_size = sessionStorage.getItem('costing_no_of_size');
    if(no_of_size !== 0){
        for (let i = 1; i <= no_of_size; i++) {
            embelishment_row_tds_add = embelishment_row_tds_add.concat('' +
                '<td class="costing_table_size">' +
                '<input type="text" id="costing_embelishment_size_'+i+'_'+embelishment_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }
    let no_of_color = sessionStorage.getItem('costing_no_of_color');
    if(no_of_color !== 0){
        for (let i = 1; i <= no_of_color; i++) {
            embelishment_row_tds_add = embelishment_row_tds_add.concat('' +
                '<td class="costing_table_color">' +
                '<input type="text" id="costing_embelishment_color_'+i+'_'+embelishment_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }

    let embelishment_row_string = embelishment_row_last_num.toString();
    let embelishment_row_tds = ' ' +
        '   <tr class="costing_embelishment_data" id="costing_embelishment_tr'+embelishment_row_string+'">\n' +
        '                                    <td  id="costing_embelishment_tr_tds'+embelishment_row_string+'">' +
        '                                    <input type="checkbox" id="costing_embelishment_cb'+embelishment_row_string+'" class="css-costing-cb" >'+embelishment_row_string.padStart(3,"0")+
        '                                    </td>\n' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_embelishment_component'+embelishment_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_embelishment_material_id'+embelishment_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <select class="css-select-costing-table" id="costing_embelishment_categories'+embelishment_row+'" style="text-align: start;">' +
        '                                     <option value="Embroidery" selected>Embroidery</option>' +
        '                                     <option value="Screen Print">Screen Print</option>' +
        '                                     <option value="Heat Transfer">Heat Transfer</option>' +
        '                                     <option value="Patch">Patch</option>' +
        '                                     </select>'+
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_embelishment_nominated'+embelishment_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_embelishment_coo'+embelishment_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_embelishment_supplier_ref'+embelishment_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_embelishment_description'+embelishment_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_embelishment_location'+embelishment_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_embelishment_mill_supplier'+embelishment_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                      <select id="costing_embelishment_uom'+embelishment_row+'" class="css-select-costing-table css-select-costing-table-uom"></select>' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_embelishment_wedth'+embelishment_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_embelishment_usage'+embelishment_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_embelishment_wastage'+embelishment_row+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_embelishment_gross_yield'+embelishment_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_embelishment_unit_cost'+embelishment_row+'" value="0" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_embelishment_handling'+embelishment_row+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_embelishment_total_cost'+embelishment_row+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_embelishment_comment'+embelishment_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        embelishment_row_tds_add +
        '                                </tr>' ;

    costing_embelishment_tbody.append(embelishment_row_tds);

    let uom = '#costing_embelishment_uom'+embelishment_row;
    getUOM(uom);

    new_ids = embelishment_row_control[0] + '-' + (parseInt(embelishment_row_control[1])+1);
    sessionStorage.setItem('costing_embelishment_row_ids',new_ids);

    updateItemNumber([5,6,7,8,9,10,11,12],'add');

});

costing_rmv_embelishment_row_btn.click(function(e){
    e.preventDefault();

    let embelishment_row_control = sessionStorage.getItem('costing_embelishment_row_ids').split('-');
    let embelishment_row_last_num = embelishment_row_control[1];

    let embelishment_row = parseInt(sessionStorage.getItem("costing_embelishment_row"))-1;
    sessionStorage.setItem("costing_embelishment_row", embelishment_row);

    let embelishment_row_id = '#costing_embelishment_tr' + embelishment_row_last_num;

    $(embelishment_row_id).remove();

    new_ids = embelishment_row_control[0] + '-' + (parseInt(embelishment_row_control[1])-1);
    sessionStorage.setItem('costing_embelishment_row_ids',new_ids);

    updateItemNumber([5,6,7,8,9,10,11,12],'rmv');
});

costing_add_label_row_btn.click(function(e){
    e.preventDefault();

    let label_row_control = sessionStorage.getItem("costing_label_row_ids").split('-');
    let label_row_last_num = parseInt(label_row_control[1])+1;

    let label_row = sessionStorage.getItem("costing_label_row");
    label_row = parseInt(label_row)+1;
    sessionStorage.setItem("costing_label_row", label_row);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let label_row_tds_add = '';

    let no_of_size = sessionStorage.getItem('costing_no_of_size');
    if(no_of_size !== 0){
        for (let i = 1; i <= no_of_size; i++) {
            label_row_tds_add = label_row_tds_add.concat('' +
                '<td class="costing_table_size">' +
                '<input type="text" id="costing_label_size_'+i+'_'+label_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }
    let no_of_color = sessionStorage.getItem('costing_no_of_color');
    if(no_of_color !== 0){
        for (let i = 1; i <= no_of_color; i++) {
            label_row_tds_add = label_row_tds_add.concat('' +
                '<td class="costing_table_color">' +
                '<input type="text" id="costing_label_color_'+i+'_'+label_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }

    let label_row_string = label_row_last_num.toString();
    let label_row_tds = '' +
        '   <tr class="costing_label_data" id="costing_label_tr'+label_row_string+'">\n' +
        '                                    <td  id="costing_label_tr_tds'+label_row_string+'">' +
        '                                    <input type="checkbox" id="costing_label_cb'+label_row_string+'" class="css-costing-cb" >'+label_row_string.padStart(3,"0")+
        '                                    </td>\n' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_label_component'+label_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_label_material_id'+label_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_label_categories'+label_row+'" value="" class="css-input-costing-data-solo" style="text-align: start;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_label_nominated'+label_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_label_coo'+label_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_label_supplier_ref'+label_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_label_description'+label_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_label_location'+label_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_label_mill_supplier'+label_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                      <select id="costing_label_uom'+label_row+'" class="css-select-costing-table css-select-costing-table-uom"></select>' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_label_wedth'+label_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_label_usage'+label_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_label_wastage'+label_row+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_label_gross_yield'+label_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_label_unit_cost'+label_row+'" value="0" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_label_handling'+label_row+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_label_total_cost'+label_row+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_label_comment'+label_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        label_row_tds_add +
        '                                </tr>' ;

    costing_label_tbody.append(label_row_tds);

    let uom = '#costing_label_uom'+label_row;
    getUOM(uom);

    new_ids = label_row_control[0] + '-' + (parseInt(label_row_control[1])+1);
    sessionStorage.setItem('costing_label_row_ids',new_ids);

    updateItemNumber([6,7,8,9,10,11,12],'add');

});

costing_rmv_label_row_btn.click(function(e){
    e.preventDefault();

    let label_row_control = sessionStorage.getItem('costing_label_row_ids').split('-');
    let label_row_last_num = label_row_control[1];

    let label_row = parseInt(sessionStorage.getItem("costing_label_row"))-1;
    sessionStorage.setItem("costing_label_row", label_row);

    let label_row_id = '#costing_label_tr' + label_row_last_num;

    $(label_row_id).remove();

    new_ids = label_row_control[0] + '-' + (parseInt(label_row_control[1])-1);
    sessionStorage.setItem('costing_label_row_ids',new_ids);

    updateItemNumber([6,7,8,9,10,11,12],'rmv');
});

costing_add_thread_row_btn.click(function(e){
    e.preventDefault();

    let thread_row_control = sessionStorage.getItem("costing_thread_row_ids").split('-');
    let thread_row_last_num = parseInt(thread_row_control[1])+1;

    let thread_row = sessionStorage.getItem("costing_thread_row");
    thread_row = parseInt(thread_row)+1;
    sessionStorage.setItem("costing_thread_row", thread_row);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let thread_row_tds_add = '';

    let no_of_size = sessionStorage.getItem('costing_no_of_size');
    if(no_of_size !== 0){
        for (let i = 1; i <= no_of_size; i++) {
            thread_row_tds_add = thread_row_tds_add.concat('' +
                '<td class="costing_table_size">' +
                '<input type="text" id="costing_thread_size_'+i+'_'+thread_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }
    let no_of_color = sessionStorage.getItem('costing_no_of_color');
    if(no_of_color !== 0){
        for (let i = 1; i <= no_of_color; i++) {
            thread_row_tds_add = thread_row_tds_add.concat('' +
                '<td class="costing_table_color">' +
                '<input type="text" id="costing_thread_color_'+i+'_'+thread_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }

    let thread_row_string = thread_row_last_num.toString();
    let thread_row_tds = ' ' +
        '   <tr class="costing_thread_data" id="costing_thread_tr'+thread_row_string+'">\n' +
        '                                    <td  id="costing_thread_tr_tds'+thread_row_string+'">' +
        '                                    <input type="checkbox" id="costing_thread_cb'+thread_row_string+'" class="css-costing-cb" >'+thread_row_string.padStart(3,"0")+
        '                                    </td>\n' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_thread_component'+thread_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_thread_material_id'+thread_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_thread_categories'+thread_row+'" value="Thread #'+(parseInt(thread_row)+1)+'" class="css-input-costing-data-solo" style="text-align: start;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_thread_nominated'+thread_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_thread_coo'+thread_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_thread_supplier_ref'+thread_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_thread_description'+thread_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_thread_location'+thread_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_thread_mill_supplier'+thread_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                      <select id="costing_thread_uom'+thread_row+'" class="css-select-costing-table css-select-costing-table-uom"></select>' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_thread_wedth'+thread_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_thread_usage'+thread_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_thread_wastage'+thread_row+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_thread_gross_yield'+thread_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_thread_unit_cost'+thread_row+'" value="0" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_thread_handling'+thread_row+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_thread_total_cost'+thread_row+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_thread_comment'+thread_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        thread_row_tds_add +
        '                                </tr>' ;

    costing_thread_tbody.append(thread_row_tds);

    let uom = '#costing_thread_uom'+thread_row;
    getUOM(uom);

    new_ids = thread_row_control[0] + '-' + (parseInt(thread_row_control[1])+1);
    sessionStorage.setItem('costing_thread_row_ids',new_ids);

    updateItemNumber([7,8,9,10,11,12],'add');

});

costing_rmv_thread_row_btn.click(function(e){
    e.preventDefault();

    let thread_row_control = sessionStorage.getItem('costing_thread_row_ids').split('-');
    let thread_row_last_num = thread_row_control[1];

    let thread_row = parseInt(sessionStorage.getItem("costing_thread_row"))-1;
    sessionStorage.setItem("costing_thread_row", thread_row);

    let thread_row_id = '#costing_thread_tr' + thread_row_last_num;

    $(thread_row_id).remove();

    new_ids = thread_row_control[0] + '-' + (parseInt(thread_row_control[1])-1);
    sessionStorage.setItem('costing_thread_row_ids',new_ids);

    updateItemNumber([7,8,9,10,11,12],'rmv');
});

costing_add_package_row_btn.click(function(e){
    e.preventDefault();

    let package_row_control = sessionStorage.getItem("costing_package_row_ids").split('-');
    let package_row_last_num = parseInt(package_row_control[1])+1;

    let package_row = sessionStorage.getItem("costing_package_row");
    package_row = parseInt(package_row)+1;
    sessionStorage.setItem("costing_package_row", package_row);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let package_row_tds_add = '';

    let no_of_size = sessionStorage.getItem('costing_no_of_size');
    if(no_of_size !== 0){
        for (let i = 1; i <= no_of_size; i++) {
            package_row_tds_add = package_row_tds_add.concat('' +
                '<td class="costing_table_size">' +
                '<input type="text" id="costing_package_size_'+i+'_'+package_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }
    let no_of_color = sessionStorage.getItem('costing_no_of_color');
    if(no_of_color !== 0){
        for (let i = 1; i <= no_of_color; i++) {
            package_row_tds_add = package_row_tds_add.concat('' +
                '<td class="costing_table_color">' +
                '<input type="text" id="costing_package_color_'+i+'_'+package_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }

    let package_row_string = package_row_last_num.toString();
    let package_row_tds = ' ' +
        '   <tr class="costing_package_data" id="costing_package_tr'+package_row_string+'">\n' +
        '                                    <td  id="costing_package_tr_tds'+package_row_string+'">' +
        '                                    <input type="checkbox" id="costing_package_cb'+package_row_string+'" class="css-costing-cb" >'+package_row_string.padStart(3,"0")+
        '                                    </td>\n' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_package_component'+package_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_package_material_id'+package_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_package_categories'+package_row+'" value="Packaging #'+(parseInt(package_row)+1)+'" class="css-input-costing-data-solo" style="text-align: start;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_package_nominated'+package_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_package_coo'+package_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_package_supplier_ref'+package_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_package_description'+package_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_package_location'+package_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_package_mill_supplier'+package_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                      <select id="costing_package_uom'+package_row+'" class="css-select-costing-table css-select-costing-table-uom"></select>' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_package_wedth'+package_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_package_usage'+package_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_package_wastage'+package_row+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_package_gross_yield'+package_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_package_unit_cost'+package_row+'" value="0" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_package_handling'+package_row+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_package_total_cost'+package_row+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_package_comment'+package_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        package_row_tds_add +
        '                                </tr>' ;

    costing_package_tbody.append(package_row_tds);

    let uom = '#costing_package_uom'+package_row;
    getUOM(uom);

    new_ids = package_row_control[0] + '-' + (parseInt(package_row_control[1])+1);
    sessionStorage.setItem('costing_package_row_ids',new_ids);

    updateItemNumber([8,9,10,11,12],'add');

});

costing_rmv_package_row_btn.click(function(e){
    e.preventDefault();

    let package_row_control = sessionStorage.getItem('costing_package_row_ids').split('-');
    let package_row_last_num = package_row_control[1];

    let package_row = parseInt(sessionStorage.getItem("costing_package_row"))-1;
    sessionStorage.setItem("costing_package_row", package_row);

    let package_row_id = '#costing_package_tr' + package_row_last_num;

    $(package_row_id).remove();

    new_ids = package_row_control[0] + '-' + (parseInt(package_row_control[1])-1);
    sessionStorage.setItem('costing_package_row_ids',new_ids);

    updateItemNumber([8,9,10,11,12],'rmv');
});

costing_add_finish_row_btn.click(function(e){
    e.preventDefault();

    let finish_row_control = sessionStorage.getItem("costing_finish_row_ids").split('-');
    let finish_row_last_num = parseInt(finish_row_control[1])+1;

    let finish_row = sessionStorage.getItem("costing_finish_row");
    finish_row = parseInt(finish_row)+1;
    sessionStorage.setItem("costing_finish_row", finish_row);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let finish_row_tds_add = '';

    let no_of_size = sessionStorage.getItem('costing_no_of_size');
    if(no_of_size !== 0){
        for (let i = 1; i <= no_of_size; i++) {
            finish_row_tds_add = finish_row_tds_add.concat('' +
                '<td class="costing_table_size">' +
                '<input type="text" id="costing_finish_size_'+i+'_'+finish_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }
    let no_of_color = sessionStorage.getItem('costing_no_of_color');
    if(no_of_color !== 0){
        for (let i = 1; i <= no_of_color; i++) {
            finish_row_tds_add = finish_row_tds_add.concat('' +
                '<td class="costing_table_color">' +
                '<input type="text" id="costing_finish_color_'+i+'_'+finish_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }

    let finish_row_string = finish_row_last_num.toString();
    let finish_row_tds = ' ' +
        '   <tr class="costing_finish_data" id="costing_finish_tr'+finish_row_string+'">\n' +
        '                                    <td  id="costing_finish_tr_tds'+finish_row_string+'">' +
        '                                    <input type="checkbox" id="costing_finish_cb'+finish_row_string+'" class="css-costing-cb" >'+finish_row_string.padStart(3,"0")+
        '                                    </td>\n' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_finish_component'+finish_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_finish_material_id'+finish_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_finish_categories'+finish_row+'" value="" class="css-input-costing-data-solo" style="text-align: start;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_finish_nominated'+finish_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_finish_coo'+finish_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_finish_supplier_ref'+finish_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_finish_description'+finish_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_finish_location'+finish_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_finish_mill_supplier'+finish_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                      <select id="costing_finish_uom'+finish_row+'" class="css-select-costing-table css-select-costing-table-uom"></select>' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_finish_wedth'+finish_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_finish_usage'+finish_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_finish_wastage'+finish_row+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_finish_gross_yield'+finish_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_finish_unit_cost'+finish_row+'" value="0" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_finish_handling'+finish_row+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_finish_total_cost'+finish_row+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_finish_comment'+finish_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        finish_row_tds_add +
        '                                </tr>' ;

    costing_finish_tbody.append(finish_row_tds);

    let uom = '#costing_finish_uom'+finish_row;
    getUOM(uom);

    new_ids = finish_row_control[0] + '-' + (parseInt(finish_row_control[1])+1);
    sessionStorage.setItem('costing_finish_row_ids',new_ids);

    updateItemNumber([9,10,11,12],'add');

});

costing_rmv_finish_row_btn.click(function(e){
    e.preventDefault();

    let finish_row_control = sessionStorage.getItem('costing_finish_row_ids').split('-');
    let finish_row_last_num = finish_row_control[1];

    let finish_row = parseInt(sessionStorage.getItem("costing_finish_row"))-1;
    sessionStorage.setItem("costing_finish_row", finish_row);

    let finish_row_id = '#costing_finish_tr' + finish_row_last_num;

    $(finish_row_id).remove();

    new_ids = finish_row_control[0] + '-' + (parseInt(finish_row_control[1])-1);
    sessionStorage.setItem('costing_finish_row_ids',new_ids);

    updateItemNumber([9,10,11,12],'rmv');
});

costing_add_export_row_btn.click(function(e){
    e.preventDefault();

    let export_row_control = sessionStorage.getItem("costing_export_row_ids").split('-');
    let export_row_last_num = parseInt(export_row_control[1])+1;

    let export_row = sessionStorage.getItem("costing_export_row");
    export_row = parseInt(export_row)+1;
    sessionStorage.setItem("costing_export_row", export_row);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let export_row_tds_add = '';

    let no_of_size = sessionStorage.getItem('costing_no_of_size');
    if(no_of_size !== 0){
        for (let i = 1; i <= no_of_size; i++) {
            export_row_tds_add = export_row_tds_add.concat('' +
                '<td class="costing_table_size">' +
                '<input type="text" id="costing_export_size_'+i+'_'+export_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }
    let no_of_color = sessionStorage.getItem('costing_no_of_color');
    if(no_of_color !== 0){
        for (let i = 1; i <= no_of_color; i++) {
            export_row_tds_add = export_row_tds_add.concat('' +
                '<td class="costing_table_color">' +
                '<input type="text" id="costing_export_color_'+i+'_'+export_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }

    let export_row_string = export_row_last_num.toString();
    let export_row_tds = '' +
        '   <tr class="costing_export_data" id="costing_export_tr'+export_row_string+'">\n' +
        '                                    <td  id="costing_export_tr_tds'+export_row_string+'">' +
        '                                    <input type="checkbox" id="costing_export_cb'+export_row_string+'" class="css-costing-cb" >'+export_row_string.padStart(3,"0")+
        '                                    </td>\n' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_export_component'+export_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_export_material_id'+export_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_export_categories'+export_row+'" value="" class="css-input-costing-data-solo" style="text-align: start;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_export_nominated'+export_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_export_coo'+export_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_export_supplier_ref'+export_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_export_description'+export_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_export_location'+export_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_export_mill_supplier'+export_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                      <select id="costing_export_uom'+export_row+'" class="css-select-costing-table css-select-costing-table-uom"></select>' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_export_wedth'+export_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_export_usage'+export_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_export_wastage'+export_row+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_export_gross_yield'+export_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_export_unit_cost'+export_row+'" value="0" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_export_handling'+export_row+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_export_total_cost'+export_row+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_export_comment'+export_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        export_row_tds_add +
        '                                </tr>' ;

    costing_export_tbody.append(export_row_tds);

    let uom = '#costing_export_uom'+export_row;
    getUOM(uom);

    new_ids = export_row_control[0] + '-' + (parseInt(export_row_control[1])+1);
    sessionStorage.setItem('costing_export_row_ids',new_ids);

    updateItemNumber([10,11,12],'add');

});

costing_rmv_export_row_btn.click(function(e){
    e.preventDefault();

    let export_row_control = sessionStorage.getItem('costing_export_row_ids').split('-');
    let export_row_last_num = export_row_control[1];

    let export_row = parseInt(sessionStorage.getItem("costing_export_row"))-1;
    sessionStorage.setItem("costing_export_row", export_row);

    let export_row_id = '#costing_export_tr' + export_row_last_num;

    $(export_row_id).remove();

    new_ids = export_row_control[0] + '-' + (parseInt(export_row_control[1])-1);
    sessionStorage.setItem('costing_export_row_ids',new_ids);

    updateItemNumber([10,11,12],'rmv');
});

costing_add_testing_row_btn.click(function(e){
    e.preventDefault();

    let testing_row_control = sessionStorage.getItem("costing_testing_row_ids").split('-');
    let testing_row_last_num = parseInt(testing_row_control[1])+1;

    let testing_row = sessionStorage.getItem("costing_testing_row");
    testing_row = parseInt(testing_row)+1;
    sessionStorage.setItem("costing_testing_row", testing_row);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let testing_row_tds_add = '';

    let no_of_size = sessionStorage.getItem('costing_no_of_size');
    if(no_of_size !== 0){
        for (let i = 1; i <= no_of_size; i++) {
            testing_row_tds_add = testing_row_tds_add.concat('' +
                '<td class="costing_table_size">' +
                '<input type="text" id="costing_testing_size_'+i+'_'+testing_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }
    let no_of_color = sessionStorage.getItem('costing_no_of_color');
    if(no_of_color !== 0){
        for (let i = 1; i <= no_of_color; i++) {
            testing_row_tds_add = testing_row_tds_add.concat('' +
                '<td class="costing_table_color">' +
                '<input type="text" id="costing_testing_color_'+i+'_'+testing_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }

    let testing_row_string = testing_row_last_num.toString();
    let testing_row_tds = ' ' +
        '   <tr class="costing_testing_data" id="costing_testing_tr'+testing_row_string+'">\n' +
        '                                    <td  id="costing_testing_tr_tds'+testing_row_string+'">' +
        '                                    <input type="checkbox" id="costing_testing_cb'+testing_row_string+'" class="css-costing-cb" >'+testing_row_string.padStart(3,"0")+
        '                                    </td>\n' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_testing_component'+testing_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_testing_material_id'+testing_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_testing_categories'+testing_row+'" value="Testing #'+(parseInt(testing_row)+1)+'" class="css-input-costing-data-solo" style="text-align: start;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_testing_nominated'+testing_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_testing_coo'+testing_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_testing_supplier_ref'+testing_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_testing_description'+testing_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_testing_location'+testing_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_testing_mill_supplier'+testing_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                      <select id="costing_testing_uom'+testing_row+'" class="css-select-costing-table css-select-costing-table-uom"></select>' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_testing_wedth'+testing_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_testing_usage'+testing_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_testing_wastage'+testing_row+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_testing_gross_yield'+testing_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_testing_unit_cost'+testing_row+'" value="0" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_testing_handling'+testing_row+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_testing_total_cost'+testing_row+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_testing_comment'+testing_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        testing_row_tds_add +
        '                                </tr>' ;

    costing_testing_tbody.append(testing_row_tds);

    let uom = '#costing_testing_uom'+testing_row;
    getUOM(uom);

    new_ids = testing_row_control[0] + '-' + (parseInt(testing_row_control[1])+1);
    sessionStorage.setItem('costing_testing_row_ids',new_ids);

    updateItemNumber([11,12],'add');

});

costing_rmv_testing_row_btn.click(function(e){
    e.preventDefault();

    let testing_row_control = sessionStorage.getItem('costing_testing_row_ids').split('-');
    let testing_row_last_num = testing_row_control[1];

    let testing_row = parseInt(sessionStorage.getItem("costing_testing_row"))-1;
    sessionStorage.setItem("costing_testing_row", testing_row);

    let testing_row_id = '#costing_testing_tr' + testing_row_last_num;

    $(testing_row_id).remove();

    new_ids = testing_row_control[0] + '-' + (parseInt(testing_row_control[1])-1);
    sessionStorage.setItem('costing_testing_row_ids',new_ids);

    updateItemNumber([11,12],'rmv');
});

costing_add_other_row_btn.click(function(e){
    e.preventDefault();

    let other_row_control = sessionStorage.getItem("costing_other_row_ids").split('-');
    let other_row_last_num = parseInt(other_row_control[1])+1;

    let other_row = sessionStorage.getItem("costing_other_row");
    other_row = parseInt(other_row)+1;
    sessionStorage.setItem("costing_other_row", other_row);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let other_row_tds_add = '';

    let no_of_size = sessionStorage.getItem('costing_no_of_size');
    if(no_of_size !== 0){
        for (let i = 1; i <= no_of_size; i++) {
            other_row_tds_add = other_row_tds_add.concat('' +
                '<td class="costing_table_size">' +
                '<input type="text" id="costing_other_size_'+i+'_'+other_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }
    let no_of_color = sessionStorage.getItem('costing_no_of_color');
    if(no_of_color !== 0){
        for (let i = 1; i <= no_of_color; i++) {
            other_row_tds_add = other_row_tds_add.concat('' +
                '<td class="costing_table_color">' +
                '<input type="text" id="costing_other_color_'+i+'_'+other_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }

    let other_row_string = other_row_last_num.toString();
    let other_row_tds = ' ' +
        '   <tr class="costing_other_data" id="costing_other_tr'+other_row_string+'">\n' +
        '                                    <td  id="costing_other_tr_tds'+other_row_string+'">' +
        '                                    <input type="checkbox" id="costing_other_cb'+other_row_string+'" class="css-costing-cb" >'+other_row_string.padStart(3,"0")+
        '                                    </td>\n' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_other_component'+other_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_other_material_id'+other_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_other_categories'+other_row+'" value="" class="css-input-costing-data-solo" style="text-align: start;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_other_nominated'+other_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_other_coo'+other_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_other_supplier_ref'+other_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_other_description'+other_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_other_location'+other_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_other_mill_supplier'+other_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                      <select id="costing_other_uom'+other_row+'" class="css-select-costing-table css-select-costing-table-uom"></select>' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_other_wedth'+other_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_other_usage'+other_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_other_wastage'+other_row+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_other_gross_yield'+other_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_other_unit_cost'+other_row+'" value="0" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_other_handling'+other_row+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_other_total_cost'+other_row+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_other_comment'+other_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        other_row_tds_add +
        '                                </tr>' ;

    costing_other_tbody.append(other_row_tds);

    let uom = '#costing_other_uom'+other_row;
    getUOM(uom);

    new_ids = other_row_control[0] + '-' + (parseInt(other_row_control[1])+1);
    sessionStorage.setItem('costing_other_row_ids',new_ids);

    updateItemNumber([12],'add');

});

costing_rmv_other_row_btn.click(function(e){
    e.preventDefault();

    let other_row_control = sessionStorage.getItem('costing_other_row_ids').split('-');
    let other_row_last_num = other_row_control[1];

    let other_row = parseInt(sessionStorage.getItem("costing_other_row"))-1;
    sessionStorage.setItem("costing_other_row", other_row);

    let other_row_id = '#costing_other_tr' + other_row_last_num;

    $(other_row_id).remove();

    new_ids = other_row_control[0] + '-' + (parseInt(other_row_control[1])-1);
    sessionStorage.setItem('costing_other_row_ids',new_ids);

    updateItemNumber([12],'rmv');
});

costing_add_labor_row_btn.click(function(e){
    e.preventDefault();

    let labor_row_control = sessionStorage.getItem("costing_labor_row_ids").split('-');
    let labor_row_last_num = parseInt(labor_row_control[1])+1;

    let labor_row = sessionStorage.getItem("costing_labor_row");
    labor_row = parseInt(labor_row)+1;
    sessionStorage.setItem("costing_labor_row", labor_row);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let labor_row_tds_add = '';

    let no_of_size = sessionStorage.getItem('costing_no_of_size');
    if(no_of_size !== 0){
        for (let i = 1; i <= no_of_size; i++) {
            labor_row_tds_add = labor_row_tds_add.concat('' +
                '<td class="costing_table_size">' +
                '<input type="text" id="costing_labor_size_'+i+'_'+labor_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }
    let no_of_color = sessionStorage.getItem('costing_no_of_color');
    if(no_of_color !== 0){
        for (let i = 1; i <= no_of_color; i++) {
            labor_row_tds_add = labor_row_tds_add.concat('' +
                '<td class="costing_table_color">' +
                '<input type="text" id="costing_labor_color_'+i+'_'+labor_row+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }
    }

    let labor_row_string = labor_row_last_num.toString();
    let labor_row_tds = '  ' +
        '   <tr class="costing_labor_data" id="costing_labor_tr'+labor_row_string+'">\n' +
        '                                    <td  id="costing_labor_tr_tds'+labor_row_string+'">' +
        '                                    <input type="checkbox" id="costing_labor_cb'+labor_row_string+'" class="css-costing-cb" >'+labor_row_string.padStart(3,"0")+
        '                                    </td>\n' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_labor_component'+labor_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_labor_material_id'+labor_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_labor_categories'+labor_row+'" value="" class="css-input-costing-data-solo" style="text-align: start;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_labor_nominated'+labor_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_labor_coo'+labor_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_labor_supplier_ref'+labor_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_labor_description'+labor_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_labor_location'+labor_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_labor_mill_supplier'+labor_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                      <select id="costing_labor_uom'+labor_row+'" class="css-select-costing-table css-select-costing-table-uom"></select>' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_labor_wedth'+labor_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_labor_usage'+labor_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_labor_wastage'+labor_row+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_labor_gross_yield'+labor_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_labor_unit_cost'+labor_row+'" value="0" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_labor_handling'+labor_row+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_labor_total_cost'+labor_row+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_labor_comment'+labor_row+'" value="" class="css-input-costing-data-solo" >\n' +
        '                                     </td>' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        labor_row_tds_add +
        '                                </tr>' ;

    costing_labor_tbody.append(labor_row_tds);

    let uom = '#costing_labor_uom'+labor_row;
    getUOM(uom);

    new_ids = labor_row_control[0] + '-' + (parseInt(labor_row_control[1])+1);
    sessionStorage.setItem('costing_labor_row_ids',new_ids);

});

costing_rmv_labor_row_btn.click(function(e){
    e.preventDefault();

    let labor_row_control = sessionStorage.getItem('costing_labor_row_ids').split('-');
    let labor_row_last_num = labor_row_control[1];

    let labor_row = parseInt(sessionStorage.getItem("costing_labor_row"))-1;
    sessionStorage.setItem("costing_labor_row", labor_row);

    let labor_row_id = '#costing_labor_tr' + labor_row_last_num;

    $(labor_row_id).remove();

    new_ids = labor_row_control[0] + '-' + (parseInt(labor_row_control[1])-1);
    sessionStorage.setItem('costing_labor_row_ids',new_ids);

});

function updateItemNumber(control_num,operator){

    if(control_num.includes(2)){
        updateTrimItemNumber(operator);
    }
    if(control_num.includes(3)){
        updateZipperItemNumber(operator);
    }
    if(control_num.includes(4)){
        updateEmbelishmentItemNumber(operator);
    }
    if(control_num.includes(5)){
        updateLabelItemNumber(operator);
    }
    if(control_num.includes(6)){
        updateThreadItemNumber(operator);
    }
    if(control_num.includes(7)){
        updatePackageItemNumber(operator);
    }
    if(control_num.includes(8)){
        updateFinishItemNumber(operator);
    }
    if(control_num.includes(9)){
        updateExportItemNumber(operator);
    }
    if(control_num.includes(10)){
        updateTestingItemNumber(operator);
    }
    if(control_num.includes(11)){
        updateOtherItemNumber(operator);
    }
    if(control_num.includes(12)){
        updateLaborItemNumber(operator);
    }
}


function updateTrimItemNumber(operator){

    let id_control = sessionStorage.getItem('costing_trim_row_ids').split('-');

    if(operator === 'add'){

        for (let i = parseInt(id_control[1]); i >= parseInt(id_control[0]); i--) {
            let new_id = parseInt(i)+1;

            let row = '#costing_trim_tr' + i;
            let row_new_id = 'costing_trim_tr'  + new_id;
            let item_num = '#costing_trim_tr_tds' + i;
            let item_num_new_id = 'costing_trim_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_trim_cb'+new_id+'" class="css-costing-cb">';

            $(row).attr('id',row_new_id);
            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])+1) + '-' + (parseInt(id_control[1])+1);
    }
    else if(operator === 'rmv'){
        for (let i = parseInt(id_control[0]); i <= parseInt(id_control[1]); i++) {
            let new_id = parseInt(i)-1;

            let row = '#costing_trim_tr' + i;
            let row_new_id = 'costing_trim_tr'  + new_id;
            $(row).attr('id',row_new_id);

            let item_num = '#costing_trim_tr_tds' + i;
            let item_num_new_id = 'costing_trim_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_trim_cb'+new_id+'" class="css-costing-cb">';

            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])-1) + '-' + (parseInt(id_control[1])-1);
    }

    sessionStorage.setItem('costing_trim_row_ids',new_ids);

}

function updateZipperItemNumber(operator){

    let id_control = sessionStorage.getItem('costing_zipper_row_ids').split('-');

    if(operator === 'add'){

        for (let i = parseInt(id_control[1]); i >= parseInt(id_control[0]); i--) {
            let new_id = parseInt(i)+1;

            let row = '#costing_zipper_tr' + i;
            let row_new_id = 'costing_zipper_tr'  + new_id;
            let item_num = '#costing_zipper_tr_tds' + i;
            let item_num_new_id = 'costing_zipper_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_zipper_cb'+new_id+'" class="css-costing-cb">';

            $(row).attr('id',row_new_id);
            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])+1) + '-' + (parseInt(id_control[1])+1);
    }
    else if(operator === 'rmv'){
        for (let i = parseInt(id_control[0]); i <= parseInt(id_control[1]); i++) {
            let new_id = parseInt(i)-1;

            let row = '#costing_zipper_tr' + i;
            let row_new_id = 'costing_zipper_tr'  + new_id;
            $(row).attr('id',row_new_id);

            let item_num = '#costing_zipper_tr_tds' + i;
            let item_num_new_id = 'costing_zipper_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_zipper_cb'+new_id+'" class="css-costing-cb">';

            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])-1) + '-' + (parseInt(id_control[1])-1);
    }

    sessionStorage.setItem('costing_zipper_row_ids',new_ids);

}

function updateEmbelishmentItemNumber(operator){

    let id_control = sessionStorage.getItem('costing_embelishment_row_ids').split('-');

    if(operator === 'add'){

        for (let i = parseInt(id_control[1]); i >= parseInt(id_control[0]); i--) {
            let new_id = parseInt(i)+1;

            let row = '#costing_embelishment_tr' + i;
            let row_new_id = 'costing_embelishment_tr'  + new_id;
            let item_num = '#costing_embelishment_tr_tds' + i;
            let item_num_new_id = 'costing_embelishment_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_embelishment_cb'+new_id+'" class="css-costing-cb">';

            $(row).attr('id',row_new_id);
            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])+1) + '-' + (parseInt(id_control[1])+1);
    }
    else if(operator === 'rmv'){
        for (let i = parseInt(id_control[0]); i <= parseInt(id_control[1]); i++) {
            let new_id = parseInt(i)-1;

            let row = '#costing_embelishment_tr' + i;
            let row_new_id = 'costing_embelishment_tr'  + new_id;
            $(row).attr('id',row_new_id);

            let item_num = '#costing_embelishment_tr_tds' + i;
            let item_num_new_id = 'costing_embelishment_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_embelishment_cb'+new_id+'" class="css-costing-cb">';

            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])-1) + '-' + (parseInt(id_control[1])-1);
    }

    sessionStorage.setItem('costing_embelishment_row_ids',new_ids);

}

function updateLabelItemNumber(operator){

    let id_control = sessionStorage.getItem('costing_label_row_ids').split('-');

    if(operator === 'add'){

        for (let i = parseInt(id_control[1]); i >= parseInt(id_control[0]); i--) {
            let new_id = parseInt(i)+1;

            let row = '#costing_label_tr' + i;
            let row_new_id = 'costing_label_tr'  + new_id;
            let item_num = '#costing_label_tr_tds' + i;
            let item_num_new_id = 'costing_label_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_label_cb'+new_id+'" class="css-costing-cb">';

            $(row).attr('id',row_new_id);
            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])+1) + '-' + (parseInt(id_control[1])+1);
    }
    else if(operator === 'rmv'){
        for (let i = parseInt(id_control[0]); i <= parseInt(id_control[1]); i++) {
            let new_id = parseInt(i)-1;

            let row = '#costing_label_tr' + i;
            let row_new_id = 'costing_label_tr'  + new_id;
            $(row).attr('id',row_new_id);

            let item_num = '#costing_label_tr_tds' + i;
            let item_num_new_id = 'costing_label_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_label_cb'+new_id+'" class="css-costing-cb">';

            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])-1) + '-' + (parseInt(id_control[1])-1);
    }

    sessionStorage.setItem('costing_label_row_ids',new_ids);

}


function updateThreadItemNumber(operator){

    let id_control = sessionStorage.getItem('costing_thread_row_ids').split('-');

    if(operator === 'add'){

        for (let i = parseInt(id_control[1]); i >= parseInt(id_control[0]); i--) {
            let new_id = parseInt(i)+1;

            let row = '#costing_thread_tr' + i;
            let row_new_id = 'costing_thread_tr'  + new_id;
            let item_num = '#costing_thread_tr_tds' + i;
            let item_num_new_id = 'costing_thread_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_thread_cb'+new_id+'" class="css-costing-cb">';

            $(row).attr('id',row_new_id);
            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])+1) + '-' + (parseInt(id_control[1])+1);
    }
    else if(operator === 'rmv'){
        for (let i = parseInt(id_control[0]); i <= parseInt(id_control[1]); i++) {
            let new_id = parseInt(i)-1;

            let row = '#costing_thread_tr' + i;
            let row_new_id = 'costing_thread_tr'  + new_id;
            $(row).attr('id',row_new_id);

            let item_num = '#costing_thread_tr_tds' + i;
            let item_num_new_id = 'costing_thread_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_thread_cb'+new_id+'" class="css-costing-cb">';

            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])-1) + '-' + (parseInt(id_control[1])-1);
    }

    sessionStorage.setItem('costing_thread_row_ids',new_ids);

}

function updatePackageItemNumber(operator){

    let id_control = sessionStorage.getItem('costing_package_row_ids').split('-');

    if(operator === 'add'){

        for (let i = parseInt(id_control[1]); i >= parseInt(id_control[0]); i--) {
            let new_id = parseInt(i)+1;

            let row = '#costing_package_tr' + i;
            let row_new_id = 'costing_package_tr'  + new_id;
            let item_num = '#costing_package_tr_tds' + i;
            let item_num_new_id = 'costing_package_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_package_cb'+new_id+'" class="css-costing-cb">';

            $(row).attr('id',row_new_id);
            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])+1) + '-' + (parseInt(id_control[1])+1);
    }
    else if(operator === 'rmv'){
        for (let i = parseInt(id_control[0]); i <= parseInt(id_control[1]); i++) {
            let new_id = parseInt(i)-1;

            let row = '#costing_package_tr' + i;
            let row_new_id = 'costing_package_tr'  + new_id;
            $(row).attr('id',row_new_id);

            let item_num = '#costing_package_tr_tds' + i;
            let item_num_new_id = 'costing_package_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_package_cb'+new_id+'" class="css-costing-cb">';

            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])-1) + '-' + (parseInt(id_control[1])-1);
    }

    sessionStorage.setItem('costing_package_row_ids',new_ids);

}

function updateFinishItemNumber(operator){

    let id_control = sessionStorage.getItem('costing_finish_row_ids').split('-');

    if(operator === 'add'){

        for (let i = parseInt(id_control[1]); i >= parseInt(id_control[0]); i--) {
            let new_id = parseInt(i)+1;

            let row = '#costing_finish_tr' + i;
            let row_new_id = 'costing_finish_tr'  + new_id;
            let item_num = '#costing_finish_tr_tds' + i;
            let item_num_new_id = 'costing_finish_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_finish_cb'+new_id+'" class="css-costing-cb">';

            $(row).attr('id',row_new_id);
            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])+1) + '-' + (parseInt(id_control[1])+1);
    }
    else if(operator === 'rmv'){
        for (let i = parseInt(id_control[0]); i <= parseInt(id_control[1]); i++) {
            let new_id = parseInt(i)-1;

            let row = '#costing_finish_tr' + i;
            let row_new_id = 'costing_finish_tr'  + new_id;
            $(row).attr('id',row_new_id);

            let item_num = '#costing_finish_tr_tds' + i;
            let item_num_new_id = 'costing_finish_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_finish_cb'+new_id+'" class="css-costing-cb">';

            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])-1) + '-' + (parseInt(id_control[1])-1);
    }

    sessionStorage.setItem('costing_finish_row_ids',new_ids);

}

function updateExportItemNumber(operator){

    let id_control = sessionStorage.getItem('costing_export_row_ids').split('-');

    if(operator === 'add'){

        for (let i = parseInt(id_control[1]); i >= parseInt(id_control[0]); i--) {
            let new_id = parseInt(i)+1;

            let row = '#costing_export_tr' + i;
            let row_new_id = 'costing_export_tr'  + new_id;
            let item_num = '#costing_export_tr_tds' + i;
            let item_num_new_id = 'costing_export_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_export_cb'+new_id+'" class="css-costing-cb">';

            $(row).attr('id',row_new_id);
            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])+1) + '-' + (parseInt(id_control[1])+1);
    }
    else if(operator === 'rmv'){
        for (let i = parseInt(id_control[0]); i <= parseInt(id_control[1]); i++) {
            let new_id = parseInt(i)-1;

            let row = '#costing_export_tr' + i;
            let row_new_id = 'costing_export_tr'  + new_id;
            $(row).attr('id',row_new_id);

            let item_num = '#costing_export_tr_tds' + i;
            let item_num_new_id = 'costing_export_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_export_cb'+new_id+'" class="css-costing-cb">';

            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])-1) + '-' + (parseInt(id_control[1])-1);
    }

    sessionStorage.setItem('costing_export_row_ids',new_ids);

}

function updateTestingItemNumber(operator){

    let id_control = sessionStorage.getItem('costing_testing_row_ids').split('-');

    if(operator === 'add'){

        for (let i = parseInt(id_control[1]); i >= parseInt(id_control[0]); i--) {
            let new_id = parseInt(i)+1;

            let row = '#costing_testing_tr' + i;
            let row_new_id = 'costing_testing_tr'  + new_id;
            let item_num = '#costing_testing_tr_tds' + i;
            let item_num_new_id = 'costing_testing_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_testing_cb'+new_id+'" class="css-costing-cb">';

            $(row).attr('id',row_new_id);
            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])+1) + '-' + (parseInt(id_control[1])+1);
    }
    else if(operator === 'rmv'){
        for (let i = parseInt(id_control[0]); i <= parseInt(id_control[1]); i++) {
            let new_id = parseInt(i)-1;

            let row = '#costing_testing_tr' + i;
            let row_new_id = 'costing_testing_tr'  + new_id;
            $(row).attr('id',row_new_id);

            let item_num = '#costing_testing_tr_tds' + i;
            let item_num_new_id = 'costing_testing_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_testing_cb'+new_id+'" class="css-costing-cb">';

            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])-1) + '-' + (parseInt(id_control[1])-1);
    }

    sessionStorage.setItem('costing_testing_row_ids',new_ids);

}

function updateOtherItemNumber(operator){

    let id_control = sessionStorage.getItem('costing_other_row_ids').split('-');

    if(operator === 'add'){

        for (let i = parseInt(id_control[1]); i >= parseInt(id_control[0]); i--) {
            let new_id = parseInt(i)+1;
            let row = '#costing_other_tr' + i;
            let row_new_id = 'costing_other_tr'  + new_id;
            let item_num = '#costing_other_tr_tds' + i;
            let item_num_new_id = 'costing_other_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_other_cb'+new_id+'" class="css-costing-cb">';

            $(row).attr('id',row_new_id);
            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }

        new_ids = (parseInt(id_control[0])+1) + '-' + (parseInt(id_control[1])+1);
    }
    else if(operator === 'rmv'){
        for (let i = parseInt(id_control[0]); i <= parseInt(id_control[1]); i++) {
            let new_id = parseInt(i)-1;

            let row = '#costing_other_tr' + i;
            let row_new_id = 'costing_other_tr'  + new_id;
            $(row).attr('id',row_new_id);

            let item_num = '#costing_other_tr_tds' + i;
            let item_num_new_id = 'costing_other_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_other_cb'+new_id+'" class="css-costing-cb">';

            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])-1) + '-' + (parseInt(id_control[1])-1);
    }

    sessionStorage.setItem('costing_other_row_ids',new_ids);

}

function updateLaborItemNumber(operator){

    let id_control = sessionStorage.getItem('costing_labor_row_ids').split('-');

    if(operator === 'add'){

        for (let i = parseInt(id_control[1]); i >= parseInt(id_control[0]); i--) {
            let new_id = parseInt(i)+1;

            let row = '#costing_labor_tr' + i;
            let row_new_id = 'costing_labor_tr'  + new_id;
            let item_num = '#costing_labor_tr_tds' + i;
            let item_num_new_id = 'costing_labor_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_labor_cb'+new_id+'" class="css-costing-cb">';

            $(row).attr('id',row_new_id);
            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])+1) + '-' + (parseInt(id_control[1])+1);
    }
    else if(operator === 'rmv'){
        for (let i = parseInt(id_control[0]); i <= parseInt(id_control[1]); i++) {
            let new_id = parseInt(i)-1;

            let row = '#costing_labor_tr' + i;
            let row_new_id = 'costing_labor_tr'  + new_id;
            $(row).attr('id',row_new_id);

            let item_num = '#costing_labor_tr_tds' + i;
            let item_num_new_id = 'costing_labor_tr_tds' + new_id;

            let new_cb = '<input type="checkbox" id="costing_labor_cb'+new_id+'" class="css-costing-cb">';

            $(item_num).html(new_cb + new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])-1) + '-' + (parseInt(id_control[1])-1);
    }

    sessionStorage.setItem('costing_labor_row_ids',new_ids);

}

function getUOM(uom){
    $(uom).html('<option value="MM">MM</option>\n' +
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
}
