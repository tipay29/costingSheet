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

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let fabric_row_tds_add = '';
    total_column = total_column - total_column_orig;

    for (let i = 0; i < total_column; i++) {
        fabric_row_tds_add = fabric_row_tds_add.concat('<td contenteditable="true"></td>');
    }

    let fabric_row_string = fabric_row.toString();
    let fabric_row_tds = '   <tr class="costing_fabric_data" id="costing_fabric_tr'+fabric_row_string+'">\n' +
        '                                    <td contenteditable="true" id="costing_fabric_tr_tds'+fabric_row_string+'">'+fabric_row_string.padStart(3,"0")+'</td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true">Fabric</td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_fabric_unit_cost'+fabric_row_string+'" value="0" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_fabric_handling'+fabric_row_string+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" id="costing_fabric_wastage'+fabric_row_string+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
        '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
        '                                     </td>' +
        '                                    <td>\n' +
        '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
        '                                    <input type="text" id="costing_fabric_total_cost'+fabric_row_string+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
        '                                     </td>' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        fabric_row_tds_add +
        '                                </tr>' ;

    costing_fabric_tbody.append(fabric_row_tds);

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
    sessionStorage.setItem("costing_trim_row", parseInt(trim_row)+1);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let trim_row_tds_add = '';
    total_column = total_column - total_column_orig;

    for (let i = 0; i < total_column; i++) {
        trim_row_tds_add = trim_row_tds_add.concat('<td contenteditable="true"></td>');
    }

    let trim_row_string = trim_row_last_num.toString();
    let trim_row_tds = '   <tr class="costing_trim_data" id="costing_trim_tr'+trim_row_string+'">\n' +
        '                                    <td contenteditable="true" id="costing_trim_tr_tds'+trim_row_string+'">'+trim_row_string.padStart(3,"0")+'</td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true">Trim</td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        trim_row_tds_add +
        '                                </tr>' ;

    costing_trim_tbody.append(trim_row_tds);

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
    sessionStorage.setItem("costing_zipper_row", parseInt(zipper_row)+1);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let zipper_row_tds_add = '';
    total_column = total_column - total_column_orig;

    for (let i = 0; i < total_column; i++) {
        zipper_row_tds_add = zipper_row_tds_add.concat('<td contenteditable="true"></td>');
    }

    let zipper_row_string = zipper_row_last_num.toString();
    let zipper_row_tds = '   <tr class="costing_zipper_data" id="costing_zipper_tr'+zipper_row_string+'">\n' +
        '                                    <td contenteditable="true" id="costing_zipper_tr_tds'+zipper_row_string+'">'+zipper_row_string.padStart(3,"0")+'</td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true">Zipper</td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        zipper_row_tds_add +
        '                                </tr>' ;

    costing_zipper_tbody.append(zipper_row_tds);

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
    sessionStorage.setItem("costing_embelishment_row", parseInt(embelishment_row)+1);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let embelishment_row_tds_add = '';
    total_column = total_column - total_column_orig;

    for (let i = 0; i < total_column; i++) {
        embelishment_row_tds_add = embelishment_row_tds_add.concat('<td contenteditable="true"></td>');
    }

    let embelishment_row_string = embelishment_row_last_num.toString();
    let embelishment_row_tds = '   <tr class="costing_embelishment_data" id="costing_embelishment_tr'+embelishment_row_string+'">\n' +
        '                                    <td contenteditable="true" id="costing_embelishment_tr_tds'+embelishment_row_string+'">'+embelishment_row_string.padStart(3,"0")+'</td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true">Select</td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        embelishment_row_tds_add +
        '                                </tr>' ;

    costing_embelishment_tbody.append(embelishment_row_tds);

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
    sessionStorage.setItem("costing_label_row", parseInt(label_row)+1);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let label_row_tds_add = '';
    total_column = total_column - total_column_orig;

    for (let i = 0; i < total_column; i++) {
        label_row_tds_add = label_row_tds_add.concat('<td contenteditable="true"></td>');
    }

    let label_row_string = label_row_last_num.toString();
    let label_row_tds = '   <tr class="costing_label_data" id="costing_label_tr'+label_row_string+'">\n' +
        '                                    <td contenteditable="true" id="costing_label_tr_tds'+label_row_string+'">'+label_row_string.padStart(3,"0")+'</td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        label_row_tds_add +
        '                                </tr>' ;

    costing_label_tbody.append(label_row_tds);

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
    sessionStorage.setItem("costing_thread_row", parseInt(thread_row)+1);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let thread_row_tds_add = '';
    total_column = total_column - total_column_orig;

    for (let i = 0; i < total_column; i++) {
        thread_row_tds_add = thread_row_tds_add.concat('<td contenteditable="true"></td>');
    }

    let thread_row_string = thread_row_last_num.toString();
    let thread_row_tds = '   <tr class="costing_thread_data" id="costing_thread_tr'+thread_row_string+'">\n' +
        '                                    <td contenteditable="true" id="costing_thread_tr_tds'+thread_row_string+'">'+thread_row_string.padStart(3,"0")+'</td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true">Thread #'+ (parseInt(thread_row)+1) +'</td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        thread_row_tds_add +
        '                                </tr>' ;

    costing_thread_tbody.append(thread_row_tds);

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
    sessionStorage.setItem("costing_package_row", parseInt(package_row)+1);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let package_row_tds_add = '';
    total_column = total_column - total_column_orig;

    for (let i = 0; i < total_column; i++) {
        package_row_tds_add = package_row_tds_add.concat('<td contenteditable="true"></td>');
    }

    let package_row_string = package_row_last_num.toString();
    let package_row_tds = '   <tr class="costing_package_data" id="costing_package_tr'+package_row_string+'">\n' +
        '                                    <td contenteditable="true" id="costing_package_tr_tds'+package_row_string+'">'+package_row_string.padStart(3,"0")+'</td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true">Packaging #'+ (parseInt(package_row)+1) +'</td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        package_row_tds_add +
        '                                </tr>' ;

    costing_package_tbody.append(package_row_tds);

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
    sessionStorage.setItem("costing_finish_row", parseInt(finish_row)+1);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let finish_row_tds_add = '';
    total_column = total_column - total_column_orig;

    for (let i = 0; i < total_column; i++) {
        finish_row_tds_add = finish_row_tds_add.concat('<td contenteditable="true"></td>');
    }

    let finish_row_string = finish_row_last_num.toString();
    let finish_row_tds = '   <tr class="costing_finish_data" id="costing_finish_tr'+finish_row_string+'">\n' +
        '                                    <td contenteditable="true" id="costing_finish_tr_tds'+finish_row_string+'">'+finish_row_string.padStart(3,"0")+'</td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        finish_row_tds_add +
        '                                </tr>' ;

    costing_finish_tbody.append(finish_row_tds);

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
    sessionStorage.setItem("costing_export_row", parseInt(export_row)+1);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let export_row_tds_add = '';
    total_column = total_column - total_column_orig;

    for (let i = 0; i < total_column; i++) {
        export_row_tds_add = export_row_tds_add.concat('<td contenteditable="true"></td>');
    }

    let export_row_string = export_row_last_num.toString();
    let export_row_tds = '   <tr class="costing_export_data" id="costing_export_tr'+export_row_string+'">\n' +
        '                                    <td contenteditable="true" id="costing_export_tr_tds'+export_row_string+'">'+export_row_string.padStart(3,"0")+'</td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        export_row_tds_add +
        '                                </tr>' ;

    costing_export_tbody.append(export_row_tds);

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
    sessionStorage.setItem("costing_testing_row", parseInt(testing_row)+1);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let testing_row_tds_add = '';
    total_column = total_column - total_column_orig;

    for (let i = 0; i < total_column; i++) {
        testing_row_tds_add = testing_row_tds_add.concat('<td contenteditable="true"></td>');
    }

    let testing_row_string = testing_row_last_num.toString();
    let testing_row_tds = '   <tr class="costing_testing_data" id="costing_testing_tr'+testing_row_string+'">\n' +
        '                                    <td contenteditable="true" id="costing_testing_tr_tds'+testing_row_string+'">'+testing_row_string.padStart(3,"0")+'</td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true">Testing #'+ (parseInt(testing_row)+1) +'</td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        testing_row_tds_add +
        '                                </tr>' ;

    costing_testing_tbody.append(testing_row_tds);

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
    sessionStorage.setItem("costing_other_row", parseInt(other_row)+1);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let other_row_tds_add = '';
    total_column = total_column - total_column_orig;

    for (let i = 0; i < total_column; i++) {
        other_row_tds_add = other_row_tds_add.concat('<td contenteditable="true"></td>');
    }

    let other_row_string = other_row_last_num.toString();
    let other_row_tds = '   <tr class="costing_other_data" id="costing_other_tr'+other_row_string+'">\n' +
        '                                    <td contenteditable="true" id="costing_other_tr_tds'+other_row_string+'">'+other_row_string.padStart(3,"0")+'</td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        other_row_tds_add +
        '                                </tr>' ;

    costing_other_tbody.append(other_row_tds);

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
    sessionStorage.setItem("costing_labor_row", parseInt(labor_row)+1);

    let total_column_orig = sessionStorage.getItem("costing_total_column_orig");
    let total_column = sessionStorage.getItem("costing_total_column");
    let labor_row_tds_add = '';
    total_column = total_column - total_column_orig;

    for (let i = 0; i < total_column; i++) {
        labor_row_tds_add = labor_row_tds_add.concat('<td contenteditable="true"></td>');
    }

    let labor_row_string = labor_row_last_num.toString();
    let labor_row_tds = '   <tr class="costing_labor_data" id="costing_labor_tr'+labor_row_string+'">\n' +
        '                                    <td contenteditable="true" id="costing_labor_tr_tds'+labor_row_string+'">'+labor_row_string.padStart(3,"0")+'</td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td contenteditable="true"></td>\n' +
        '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
        labor_row_tds_add +
        '                                </tr>' ;

    costing_labor_tbody.append(labor_row_tds);

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

            $(row).attr('id',row_new_id);
            $(item_num).html(new_id.toString().padStart(3,"0"));
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
            $(item_num).html(new_id.toString().padStart(3,"0"));
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

            $(row).attr('id',row_new_id);
            $(item_num).html(new_id.toString().padStart(3,"0"));
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
            $(item_num).html(new_id.toString().padStart(3,"0"));
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

            $(row).attr('id',row_new_id);
            $(item_num).html(new_id.toString().padStart(3,"0"));
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
            $(item_num).html(new_id.toString().padStart(3,"0"));
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

            $(row).attr('id',row_new_id);
            $(item_num).html(new_id.toString().padStart(3,"0"));
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
            $(item_num).html(new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])-1) + '-' + (parseInt(id_control[1])-1);
    }

    sessionStorage.setItem('costing_label_row_ids',new_ids);

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

            $(row).attr('id',row_new_id);
            $(item_num).html(new_id.toString().padStart(3,"0"));
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
            $(item_num).html(new_id.toString().padStart(3,"0"));
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

            $(row).attr('id',row_new_id);
            $(item_num).html(new_id.toString().padStart(3,"0"));
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
            $(item_num).html(new_id.toString().padStart(3,"0"));
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

            $(row).attr('id',row_new_id);
            $(item_num).html(new_id.toString().padStart(3,"0"));
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
            $(item_num).html(new_id.toString().padStart(3,"0"));
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

            $(row).attr('id',row_new_id);
            $(item_num).html(new_id.toString().padStart(3,"0"));
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
            $(item_num).html(new_id.toString().padStart(3,"0"));
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

            $(row).attr('id',row_new_id);
            $(item_num).html(new_id.toString().padStart(3,"0"));
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
            $(item_num).html(new_id.toString().padStart(3,"0"));
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

            $(row).attr('id',row_new_id);
            $(item_num).html(new_id.toString().padStart(3,"0"));
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
            $(item_num).html(new_id.toString().padStart(3,"0"));
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

            $(row).attr('id',row_new_id);
            $(item_num).html(new_id.toString().padStart(3,"0"));
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
            $(item_num).html(new_id.toString().padStart(3,"0"));
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

            $(row).attr('id',row_new_id);
            $(item_num).html(new_id.toString().padStart(3,"0"));
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
            $(item_num).html(new_id.toString().padStart(3,"0"));
            $(item_num).attr('id',item_num_new_id);
        }
        new_ids = (parseInt(id_control[0])-1) + '-' + (parseInt(id_control[1])-1);
    }

    sessionStorage.setItem('costing_labor_row_ids',new_ids);

}
