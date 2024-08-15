sessionStorage.setItem("costing_fabric_row", 10);
sessionStorage.setItem("costing_trim_row", 30);
sessionStorage.setItem("costing_zipper_row", 5);
sessionStorage.setItem("costing_embelishment_row", 5);
sessionStorage.setItem("costing_label_row", 10);
sessionStorage.setItem("costing_thread_row", 10);
sessionStorage.setItem("costing_package_row", 10);
sessionStorage.setItem("costing_finish_row", 5);
sessionStorage.setItem("costing_export_row", 5);
sessionStorage.setItem("costing_testing_row", 5);
sessionStorage.setItem("costing_other_row", 5);
sessionStorage.setItem("costing_labor_row", 3);
sessionStorage.setItem("costing_total_column_orig", 20);
sessionStorage.setItem("costing_total_column", 20);
sessionStorage.setItem("costing_no_of_color", 0);
sessionStorage.setItem("costing_no_of_size", 0);

let costing_fabric_tbody = $('#costing_fabric_tbody');
getFabricRow();
let costing_trim_tbody = $('#costing_trim_tbody');
getTrimRow();
let costing_zipper_tbody = $('#costing_zipper_tbody');
getZipperRow();
let costing_embelishment_tbody = $('#costing_embelishment_tbody');
getEmbelishmentRow();
let costing_label_tbody = $('#costing_label_tbody');
getLabelRow();
let costing_thread_tbody = $('#costing_thread_tbody');
getThreadRow();
let costing_package_tbody = $('#costing_package_tbody');
getPackageRow();
let costing_finish_tbody = $('#costing_finish_tbody');
getFinishRow();
let costing_export_tbody = $('#costing_export_tbody');
getExportRow();
let costing_testing_tbody = $('#costing_testing_tbody');
getTestingRow();
let costing_other_tbody = $('#costing_other_tbody');
getOtherRow();
let costing_labor_tbody = $('#costing_labor_tbody');
getLaborRow();


function getFabricRow(){
    let costing_fabric_tds = '';
    let fabric_row_count = sessionStorage.getItem("costing_fabric_row");

    sessionStorage.setItem("costing_fabric_row_ids", (1 + '-'+ fabric_row_count));
    for (let i = 1; i <= fabric_row_count; i++) {
        let item_no = i.toString();
        costing_fabric_tds = costing_fabric_tds.concat('' +
            '   <tr class="costing_fabric_data" id="costing_fabric_tr'+item_no+'">\n' +
            '                                    <td  id="costing_fabric_tr_tds'+item_no+'">' +
            '                                    <input type="checkbox" id="costing_fabric_cb'+item_no+'" class="css-costing-cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_fabric_component'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_fabric_material_id'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_fabric_categories'+item_no+'" value="Fabric" class="css-input-costing-data-solo" style="text-align: start;" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_fabric_nominated'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_fabric_coo'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_fabric_supplier_ref'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_fabric_description'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_fabric_location'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_fabric_mill_supplier'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_fabric_uom" class="css-select-costing-table css-select-costing-table-uom"></select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_fabric_wedth'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_fabric_usage'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_fabric_wastage'+item_no+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_fabric_gross_yield'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_fabric_unit_cost'+item_no+'" value="0" class="css-input-costing-data" style="width: 57px;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_fabric_handling'+item_no+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +

            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_fabric_total_cost'+item_no+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_fabric_comment'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
    }

    //costing fob sign change currency
    //width change to colwidth so no problemw

    costing_fabric_tbody.append(costing_fabric_tds);
}

function getTrimRow(){
    let costing_trim_tds = '';
    let before_row_count = parseInt(sessionStorage.getItem("costing_fabric_row"));
    let trim_row_count = parseInt(sessionStorage.getItem("costing_trim_row")) +
        parseInt(sessionStorage.getItem("costing_fabric_row"));

    sessionStorage.setItem("costing_trim_row_ids", ((parseInt(before_row_count)+1) + '-'+ trim_row_count));
    for (let i = before_row_count+1; i <= trim_row_count; i++) {
        let item_no = i.toString();
        costing_trim_tds = costing_trim_tds.concat('' +
            '   <tr class="costing_trim_data" id="costing_trim_tr'+item_no+'">\n' +
            '                                    <td  id="costing_trim_tr_tds'+item_no+'">' +
            '                                    <input type="checkbox" id="costing_trim_cb'+item_no+'" class="css-costing-cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_trim_component'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_trim_material_id'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_trim_categories'+item_no+'" value="Trim" class="css-input-costing-data-solo" style="text-align: start;" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_trim_nominated'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_trim_coo'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_trim_supplier_ref'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_trim_description'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_trim_location'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_trim_mill_supplier'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_trim_uom" class="css-select-costing-table css-select-costing-table-uom"></select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_trim_wedth'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_trim_usage'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_trim_wastage'+item_no+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_trim_gross_yield'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_trim_unit_cost'+item_no+'" value="0" class="css-input-costing-data" style="width: 57px;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_trim_handling'+item_no+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_trim_total_cost'+item_no+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_trim_comment'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
    }

    costing_trim_tbody.append(costing_trim_tds);
}

function getZipperRow(){
    let costing_zipper_tds = '';
    let before_row_count = parseInt(sessionStorage.getItem("costing_fabric_row")) +
        parseInt(sessionStorage.getItem("costing_trim_row"));
    let zipper_row_count = parseInt(sessionStorage.getItem("costing_fabric_row")) +
        parseInt(sessionStorage.getItem("costing_trim_row")) +
        parseInt(sessionStorage.getItem("costing_zipper_row"));

    sessionStorage.setItem("costing_zipper_row_ids", ((parseInt(before_row_count)+1) + '-'+ zipper_row_count));
    for (let i = before_row_count+1; i <= zipper_row_count; i++) {
        let item_no = i.toString();
        costing_zipper_tds = costing_zipper_tds.concat('' +
            '   <tr class="costing_zipper_data" id="costing_zipper_tr'+item_no+'">\n' +
            '                                    <td  id="costing_zipper_tr_tds'+item_no+'">' +
            '                                    <input type="checkbox" id="costing_zipper_cb'+item_no+'" class="css-costing-cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_zipper_component'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_zipper_material_id'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_zipper_categories'+item_no+'" value="Zipper" class="css-input-costing-data-solo" style="text-align: start;" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_zipper_nominated'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_zipper_coo'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_zipper_supplier_ref'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_zipper_description'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_zipper_location'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_zipper_mill_supplier'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_zipper_uom" class="css-select-costing-table css-select-costing-table-uom"></select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_zipper_wedth'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_zipper_usage'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_zipper_wastage'+item_no+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_zipper_gross_yield'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_zipper_unit_cost'+item_no+'" value="0" class="css-input-costing-data" style="width: 57px;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_zipper_handling'+item_no+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_zipper_total_cost'+item_no+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_zipper_comment'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
    }

    costing_zipper_tbody.append(costing_zipper_tds);
}

function getEmbelishmentRow(){
    let costing_embelishment_tds = '';
    let before_row_count = parseInt(sessionStorage.getItem("costing_fabric_row")) +
        parseInt(sessionStorage.getItem("costing_trim_row"))+
        parseInt(sessionStorage.getItem("costing_zipper_row"));
    let embelishment_row_count = parseInt(sessionStorage.getItem("costing_trim_row")) +
        parseInt(sessionStorage.getItem("costing_fabric_row")) +
        parseInt(sessionStorage.getItem("costing_zipper_row")) +
        parseInt(sessionStorage.getItem("costing_embelishment_row"));

    sessionStorage.setItem("costing_embelishment_row_ids", ((parseInt(before_row_count)+1) + '-'+ embelishment_row_count));
    for (let i = before_row_count+1; i <= embelishment_row_count; i++) {
        let item_no = i.toString();
        costing_embelishment_tds = costing_embelishment_tds.concat('' +
            '   <tr class="costing_embelishment_data" id="costing_embelishment_tr'+item_no+'">\n' +
            '                                    <td  id="costing_embelishment_tr_tds'+item_no+'">' +
            '                                    <input type="checkbox" id="costing_embelishment_cb'+item_no+'" class="css-costing-cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_embelishment_component'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_embelishment_material_id'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <select class="css-select-costing-table" id="costing_embelishment_categories'+item_no+'" style="text-align: start;">' +
            '                                     <option value="Embroidery" selected>Embroidery</option>' +
            '                                     <option value="Screen Print">Screen Print</option>' +
            '                                     <option value="Heat Transfer">Heat Transfer</option>' +
            '                                     <option value="Patch">Patch</option>' +
            '                                     </select>'+
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_embelishment_nominated'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_embelishment_coo'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_embelishment_supplier_ref'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_embelishment_description'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_embelishment_location'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_embelishment_mill_supplier'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_embelishment_uom" class="css-select-costing-table css-select-costing-table-uom"></select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_embelishment_wedth'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_embelishment_usage'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_embelishment_wastage'+item_no+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_embelishment_gross_yield'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_embelishment_unit_cost'+item_no+'" value="0" class="css-input-costing-data" style="width: 57px;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_embelishment_handling'+item_no+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_embelishment_total_cost'+item_no+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_embelishment_comment'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
    }

    costing_embelishment_tbody.append(costing_embelishment_tds);
}

function getLabelRow(){
    let costing_label_tds = '';
    let before_row_count = parseInt(sessionStorage.getItem("costing_fabric_row")) +
        parseInt(sessionStorage.getItem("costing_trim_row")) +
        parseInt(sessionStorage.getItem("costing_zipper_row"))+
        parseInt(sessionStorage.getItem("costing_embelishment_row"));
    let label_row_count = parseInt(sessionStorage.getItem("costing_trim_row")) +
        parseInt(sessionStorage.getItem("costing_fabric_row")) +
        parseInt(sessionStorage.getItem("costing_zipper_row")) +
        parseInt(sessionStorage.getItem("costing_embelishment_row")) +
        parseInt(sessionStorage.getItem("costing_label_row"));

    sessionStorage.setItem("costing_label_row_ids", ((parseInt(before_row_count)+1) + '-'+ label_row_count));
    for (let i = before_row_count+1; i <= label_row_count; i++) {
        let item_no = i.toString();
        costing_label_tds = costing_label_tds.concat('' +
            '   <tr class="costing_label_data" id="costing_label_tr'+item_no+'">\n' +
            '                                    <td  id="costing_label_tr_tds'+item_no+'">' +
            '                                    <input type="checkbox" id="costing_label_cb'+item_no+'" class="css-costing-cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_label_component'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_label_material_id'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_label_categories'+item_no+'" value="" class="css-input-costing-data-solo" style="text-align: start;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_label_nominated'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_label_coo'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_label_supplier_ref'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_label_description'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_label_location'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_label_mill_supplier'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_label_uom" class="css-select-costing-table css-select-costing-table-uom"></select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_label_wedth'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_label_usage'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_label_wastage'+item_no+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_label_gross_yield'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_label_unit_cost'+item_no+'" value="0" class="css-input-costing-data" style="width: 57px;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_label_handling'+item_no+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_label_total_cost'+item_no+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_label_comment'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
    }

    costing_label_tbody.append(costing_label_tds);
}

function getThreadRow(){
    let costing_thread_tds = '';
    let before_row_count = parseInt(sessionStorage.getItem("costing_fabric_row")) +
        parseInt(sessionStorage.getItem("costing_trim_row")) +
        parseInt(sessionStorage.getItem("costing_zipper_row")) +
        parseInt(sessionStorage.getItem("costing_embelishment_row")) +
        parseInt(sessionStorage.getItem("costing_label_row"));
    let thread_row_count = parseInt(sessionStorage.getItem("costing_trim_row")) +
        parseInt(sessionStorage.getItem("costing_fabric_row")) +
        parseInt(sessionStorage.getItem("costing_zipper_row")) +
        parseInt(sessionStorage.getItem("costing_embelishment_row")) +
        parseInt(sessionStorage.getItem("costing_label_row")) +
        parseInt(sessionStorage.getItem("costing_thread_row"));

    sessionStorage.setItem("costing_thread_row_ids", ((parseInt(before_row_count)+1) + '-'+ thread_row_count));
    for (let i = before_row_count+1; i <= thread_row_count; i++) {
        let item_no = i.toString();
        costing_thread_tds = costing_thread_tds.concat('' +
            '   <tr class="costing_thread_data" id="costing_thread_tr'+item_no+'">\n' +
            '                                    <td  id="costing_thread_tr_tds'+item_no+'">' +
            '                                    <input type="checkbox" id="costing_thread_cb'+item_no+'" class="css-costing-cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_thread_component'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_thread_material_id'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_thread_categories'+item_no+'" value="Thread #'+(i-before_row_count)+'" class="css-input-costing-data-solo" style="text-align: start;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_thread_nominated'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_thread_coo'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_thread_supplier_ref'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_thread_description'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_thread_location'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_thread_mill_supplier'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_thread_uom" class="css-select-costing-table css-select-costing-table-uom"></select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_thread_wedth'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_thread_usage'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_thread_wastage'+item_no+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_thread_gross_yield'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_thread_unit_cost'+item_no+'" value="0" class="css-input-costing-data" style="width: 57px;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_thread_handling'+item_no+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_thread_total_cost'+item_no+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_thread_comment'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
    }

    costing_thread_tbody.append(costing_thread_tds);
}

function getPackageRow(){
    let costing_package_tds = '';
    let before_row_count = parseInt(sessionStorage.getItem("costing_fabric_row")) +
        parseInt(sessionStorage.getItem("costing_trim_row")) +
        parseInt(sessionStorage.getItem("costing_zipper_row")) +
        parseInt(sessionStorage.getItem("costing_embelishment_row")) +
        parseInt(sessionStorage.getItem("costing_label_row")) +
        parseInt(sessionStorage.getItem("costing_thread_row"));
    let package_row_count = parseInt(sessionStorage.getItem("costing_trim_row")) +
        parseInt(sessionStorage.getItem("costing_fabric_row")) +
        parseInt(sessionStorage.getItem("costing_zipper_row")) +
        parseInt(sessionStorage.getItem("costing_embelishment_row")) +
        parseInt(sessionStorage.getItem("costing_label_row")) +
        parseInt(sessionStorage.getItem("costing_thread_row")) +
        parseInt(sessionStorage.getItem("costing_package_row"));

    sessionStorage.setItem("costing_package_row_ids", ((parseInt(before_row_count)+1) + '-'+ package_row_count));
    for (let i = before_row_count+1; i <= package_row_count; i++) {
        let item_no = i.toString();
        costing_package_tds = costing_package_tds.concat('' +
            '   <tr class="costing_package_data" id="costing_package_tr'+item_no+'">\n' +
            '                                    <td  id="costing_package_tr_tds'+item_no+'">' +
            '                                    <input type="checkbox" id="costing_package_cb'+item_no+'" class="css-costing-cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_package_component'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_package_material_id'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_package_categories'+item_no+'" value="Package #'+(i-before_row_count)+'" class="css-input-costing-data-solo" style="text-align: start;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_package_nominated'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_package_coo'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_package_supplier_ref'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_package_description'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_package_location'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_package_mill_supplier'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_package_uom" class="css-select-costing-table css-select-costing-table-uom"></select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_package_wedth'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_package_usage'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_package_wastage'+item_no+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_package_gross_yield'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_package_unit_cost'+item_no+'" value="0" class="css-input-costing-data" style="width: 57px;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_package_handling'+item_no+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_package_total_cost'+item_no+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_package_comment'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
    }

    costing_package_tbody.append(costing_package_tds);
}

function getFinishRow(){
    let costing_finish_tds = '';
    let before_row_count = parseInt(sessionStorage.getItem("costing_fabric_row")) +
        parseInt(sessionStorage.getItem("costing_trim_row")) +
        parseInt(sessionStorage.getItem("costing_zipper_row")) +
        parseInt(sessionStorage.getItem("costing_embelishment_row")) +
        parseInt(sessionStorage.getItem("costing_label_row")) +
        parseInt(sessionStorage.getItem("costing_thread_row")) +
        parseInt(sessionStorage.getItem("costing_package_row"));
    let finish_row_count = parseInt(sessionStorage.getItem("costing_trim_row")) +
        parseInt(sessionStorage.getItem("costing_fabric_row")) +
        parseInt(sessionStorage.getItem("costing_zipper_row")) +
        parseInt(sessionStorage.getItem("costing_embelishment_row")) +
        parseInt(sessionStorage.getItem("costing_label_row")) +
        parseInt(sessionStorage.getItem("costing_thread_row")) +
        parseInt(sessionStorage.getItem("costing_package_row")) +
        parseInt(sessionStorage.getItem("costing_finish_row"));

    sessionStorage.setItem("costing_finish_row_ids", ((parseInt(before_row_count)+1) + '-'+ finish_row_count));
    for (let i = before_row_count+1; i <= finish_row_count; i++) {
        let item_no = i.toString();
        costing_finish_tds = costing_finish_tds.concat('' +
            '   <tr class="costing_finish_data" id="costing_finish_tr'+item_no+'">\n' +
            '                                    <td  id="costing_finish_tr_tds'+item_no+'">' +
            '                                    <input type="checkbox" id="costing_finish_cb'+item_no+'" class="css-costing-cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_finish_component'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_finish_material_id'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_finish_categories'+item_no+'" value="" class="css-input-costing-data-solo" style="text-align: start;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_finish_nominated'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_finish_coo'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_finish_supplier_ref'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_finish_description'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_finish_location'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_finish_mill_supplier'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_finish_uom" class="css-select-costing-table css-select-costing-table-uom"></select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_finish_wedth'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_finish_usage'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_finish_wastage'+item_no+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_finish_gross_yield'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_finish_unit_cost'+item_no+'" value="0" class="css-input-costing-data" style="width: 57px;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_finish_handling'+item_no+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_finish_total_cost'+item_no+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_finish_comment'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
    }

    costing_finish_tbody.append(costing_finish_tds);
}

function getExportRow(){
    let costing_export_tds = '';
    let before_row_count = parseInt(sessionStorage.getItem("costing_fabric_row")) +
        parseInt(sessionStorage.getItem("costing_trim_row")) +
        parseInt(sessionStorage.getItem("costing_zipper_row")) +
        parseInt(sessionStorage.getItem("costing_embelishment_row")) +
        parseInt(sessionStorage.getItem("costing_label_row")) +
        parseInt(sessionStorage.getItem("costing_thread_row")) +
        parseInt(sessionStorage.getItem("costing_package_row")) +
        parseInt(sessionStorage.getItem("costing_finish_row"));
    let export_row_count = parseInt(sessionStorage.getItem("costing_trim_row")) +
        parseInt(sessionStorage.getItem("costing_fabric_row")) +
        parseInt(sessionStorage.getItem("costing_zipper_row")) +
        parseInt(sessionStorage.getItem("costing_embelishment_row")) +
        parseInt(sessionStorage.getItem("costing_label_row")) +
        parseInt(sessionStorage.getItem("costing_thread_row")) +
        parseInt(sessionStorage.getItem("costing_package_row")) +
        parseInt(sessionStorage.getItem("costing_finish_row")) +
        parseInt(sessionStorage.getItem("costing_export_row"));

    sessionStorage.setItem("costing_export_row_ids", ((parseInt(before_row_count)+1) + '-'+ export_row_count));
    for (let i = before_row_count+1; i <= export_row_count; i++) {
        let item_no = i.toString();
        costing_export_tds = costing_export_tds.concat('' +
            '   <tr class="costing_export_data" id="costing_export_tr'+item_no+'">\n' +
            '                                    <td  id="costing_export_tr_tds'+item_no+'">' +
            '                                    <input type="checkbox" id="costing_export_cb'+item_no+'" class="css-costing-cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_export_component'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_export_material_id'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_export_categories'+item_no+'" value="" class="css-input-costing-data-solo" style="text-align: start;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_export_nominated'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_export_coo'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_export_supplier_ref'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_export_description'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_export_location'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_export_mill_supplier'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_export_uom" class="css-select-costing-table css-select-costing-table-uom"></select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_export_wedth'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_export_usage'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                     <td>\n' +
            '                                    <input type="text" id="costing_export_wastage'+item_no+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_export_gross_yield'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_export_unit_cost'+item_no+'" value="0" class="css-input-costing-data" style="width: 57px;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_export_handling'+item_no+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_export_total_cost'+item_no+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_export_comment'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
    }

    costing_export_tbody.append(costing_export_tds);
}

function getTestingRow(){
    let costing_testing_tds = '';
    let before_row_count = parseInt(sessionStorage.getItem("costing_fabric_row")) +
        parseInt(sessionStorage.getItem("costing_trim_row")) +
        parseInt(sessionStorage.getItem("costing_zipper_row")) +
        parseInt(sessionStorage.getItem("costing_embelishment_row")) +
        parseInt(sessionStorage.getItem("costing_label_row")) +
        parseInt(sessionStorage.getItem("costing_thread_row")) +
        parseInt(sessionStorage.getItem("costing_package_row")) +
        parseInt(sessionStorage.getItem("costing_finish_row")) +
        parseInt(sessionStorage.getItem("costing_export_row"));
    let testing_row_count = parseInt(sessionStorage.getItem("costing_trim_row")) +
        parseInt(sessionStorage.getItem("costing_fabric_row")) +
        parseInt(sessionStorage.getItem("costing_zipper_row")) +
        parseInt(sessionStorage.getItem("costing_embelishment_row")) +
        parseInt(sessionStorage.getItem("costing_label_row")) +
        parseInt(sessionStorage.getItem("costing_thread_row")) +
        parseInt(sessionStorage.getItem("costing_package_row")) +
        parseInt(sessionStorage.getItem("costing_finish_row")) +
        parseInt(sessionStorage.getItem("costing_export_row")) +
        parseInt(sessionStorage.getItem("costing_testing_row"));

    sessionStorage.setItem("costing_testing_row_ids", ((parseInt(before_row_count)+1) + '-'+ testing_row_count));
    for (let i = before_row_count+1; i <= testing_row_count; i++) {
        let item_no = i.toString();
        costing_testing_tds = costing_testing_tds.concat('' +
            '   <tr class="costing_testing_data" id="costing_testing_tr'+item_no+'">\n' +
            '                                    <td  id="costing_testing_tr_tds'+item_no+'">' +
            '                                    <input type="checkbox" id="costing_testing_cb'+item_no+'" class="css-costing-cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_testing_component'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_testing_material_id'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_testing_categories'+item_no+'" value="Testing #'+(i-before_row_count)+'" class="css-input-costing-data-solo" style="text-align: start;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_testing_nominated'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_testing_coo'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_testing_supplier_ref'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_testing_description'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_testing_location'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_testing_mill_supplier'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_testing_uom" class="css-select-costing-table css-select-costing-table-uom"></select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_testing_wedth'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_testing_usage'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_testing_wastage'+item_no+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_testing_gross_yield'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_testing_unit_cost'+item_no+'" value="0" class="css-input-costing-data" style="width: 57px;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_testing_handling'+item_no+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_testing_total_cost'+item_no+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_testing_comment'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
    }

    costing_testing_tbody.append(costing_testing_tds);
}

function getOtherRow(){
    let costing_other_tds = '';
    let before_row_count = parseInt(sessionStorage.getItem("costing_fabric_row")) +
        parseInt(sessionStorage.getItem("costing_trim_row")) +
        parseInt(sessionStorage.getItem("costing_zipper_row")) +
        parseInt(sessionStorage.getItem("costing_embelishment_row")) +
        parseInt(sessionStorage.getItem("costing_label_row")) +
        parseInt(sessionStorage.getItem("costing_thread_row")) +
        parseInt(sessionStorage.getItem("costing_package_row")) +
        parseInt(sessionStorage.getItem("costing_finish_row")) +
        parseInt(sessionStorage.getItem("costing_export_row")) +
        parseInt(sessionStorage.getItem("costing_testing_row"));
    let other_row_count = parseInt(sessionStorage.getItem("costing_trim_row")) +
        parseInt(sessionStorage.getItem("costing_fabric_row")) +
        parseInt(sessionStorage.getItem("costing_zipper_row")) +
        parseInt(sessionStorage.getItem("costing_embelishment_row")) +
        parseInt(sessionStorage.getItem("costing_label_row")) +
        parseInt(sessionStorage.getItem("costing_thread_row")) +
        parseInt(sessionStorage.getItem("costing_package_row")) +
        parseInt(sessionStorage.getItem("costing_finish_row")) +
        parseInt(sessionStorage.getItem("costing_export_row")) +
        parseInt(sessionStorage.getItem("costing_testing_row")) +
        parseInt(sessionStorage.getItem("costing_other_row"));

    sessionStorage.setItem("costing_other_row_ids", ((parseInt(before_row_count)+1) + '-'+ other_row_count));
    for (let i = before_row_count+1; i <= other_row_count; i++) {
        let item_no = i.toString();
        costing_other_tds = costing_other_tds.concat('' +
            '   <tr class="costing_other_data" id="costing_other_tr'+item_no+'">\n' +
            '                                    <td  id="costing_other_tr_tds'+item_no+'">' +
            '                                    <input type="checkbox" id="costing_other_cb'+item_no+'" class="css-costing-cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_other_component'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_other_material_id'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_other_categories'+item_no+'" value="" class="css-input-costing-data-solo" style="text-align: start;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_other_nominated'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_other_coo'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_other_supplier_ref'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_other_description'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_other_location'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_other_mill_supplier'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_other_uom" class="css-select-costing-table css-select-costing-table-uom"></select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_other_wedth'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_other_usage'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_other_wastage'+item_no+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_other_gross_yield'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_other_unit_cost'+item_no+'" value="0" class="css-input-costing-data" style="width: 57px;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_other_handling'+item_no+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_other_total_cost'+item_no+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_other_comment'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
    }

    costing_other_tbody.append(costing_other_tds);
}

function getLaborRow(){
    let costing_labor_tds = '';
    let before_row_count = parseInt(sessionStorage.getItem("costing_fabric_row")) +
        parseInt(sessionStorage.getItem("costing_trim_row")) +
        parseInt(sessionStorage.getItem("costing_zipper_row")) +
        parseInt(sessionStorage.getItem("costing_embelishment_row")) +
        parseInt(sessionStorage.getItem("costing_label_row")) +
        parseInt(sessionStorage.getItem("costing_thread_row")) +
        parseInt(sessionStorage.getItem("costing_package_row")) +
        parseInt(sessionStorage.getItem("costing_finish_row")) +
        parseInt(sessionStorage.getItem("costing_export_row")) +
        parseInt(sessionStorage.getItem("costing_testing_row")) +
        parseInt(sessionStorage.getItem("costing_other_row"));
    let labor_row_count = parseInt(sessionStorage.getItem("costing_trim_row")) +
        parseInt(sessionStorage.getItem("costing_fabric_row")) +
        parseInt(sessionStorage.getItem("costing_zipper_row")) +
        parseInt(sessionStorage.getItem("costing_embelishment_row")) +
        parseInt(sessionStorage.getItem("costing_label_row")) +
        parseInt(sessionStorage.getItem("costing_thread_row")) +
        parseInt(sessionStorage.getItem("costing_package_row")) +
        parseInt(sessionStorage.getItem("costing_finish_row")) +
        parseInt(sessionStorage.getItem("costing_export_row")) +
        parseInt(sessionStorage.getItem("costing_testing_row")) +
        parseInt(sessionStorage.getItem("costing_other_row")) +
        parseInt(sessionStorage.getItem("costing_labor_row"));

    sessionStorage.setItem("costing_labor_row_ids", ((parseInt(before_row_count)+1) + '-'+ labor_row_count));
    for (let i = before_row_count+1; i <= labor_row_count; i++) {
        let item_no = i.toString();
        costing_labor_tds = costing_labor_tds.concat('' +
            '   <tr class="costing_labor_data" id="costing_labor_tr'+item_no+'">\n' +
            '                                    <td  id="costing_labor_tr_tds'+item_no+'">' +
            '                                    <input type="checkbox" id="costing_labor_cb'+item_no+'" class="css-costing-cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_labor_component'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_labor_material_id'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_labor_categories'+item_no+'" value="" class="css-input-costing-data-solo" style="text-align: start;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_labor_nominated'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_labor_coo'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_labor_supplier_ref'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_labor_description'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_labor_location'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_labor_mill_supplier'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_labor_uom" class="css-select-costing-table css-select-costing-table-uom"></select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_labor_wedth'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_labor_usage'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_labor_wastage'+item_no+'" value="" class="css-input-costing-data" style="width: 62px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_labor_gross_yield'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_labor_unit_cost'+item_no+'" value="0" class="css-input-costing-data" style="width: 57px;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_labor_handling'+item_no+'" value="" class="css-input-costing-data" style="width: 57px;" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input type="text" id="costing_labor_total_cost'+item_no+'" value="0.00" class="css-input-costing-data" style="width: 68px;" disabled>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" id="costing_labor_comment'+item_no+'" value="" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
    }

    costing_labor_tbody.append(costing_labor_tds);
}
