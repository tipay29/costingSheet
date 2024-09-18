

function getFabricRow(){
    let costing_fabric_tds = '';
    let fabric_row_count = sessionStorage.getItem("costing_fabric_row");

    let cost_fabrics = [];
    if(sessionStorage.getItem('cost_fabrics')){
        cost_fabrics = JSON.parse(sessionStorage.getItem('cost_fabrics'));
    }
    console.log('fabric');
    console.log(cost_fabrics[0]);

    sessionStorage.setItem("costing_fabric_row_ids", (1 + '-'+ fabric_row_count));
    $('#costing_fabric_row_names').val(1 + '-'+ fabric_row_count);

    for (let i = 1; i <= fabric_row_count; i++) {
        let item_no = i.toString();
        costing_fabric_tds = costing_fabric_tds.concat('' +
            '   <tr class="costing_fabric_data" id="costing_fabric_tr'+item_no+'">\n' +
            '                                    <td  id="costing_fabric_tr_tds'+item_no+'">' +
            '                                    <input style="display:none;"   type="checkbox" id="costing_fabric_cb'+item_no+'" name="costing_fabric_cb'+item_no+'" class="css-costing-cb costing_fabric_cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td >\n' +
            '                                    <input  value="'+getCategoryValue('component',cost_fabrics[i-1],'')+'" type="text" id="costing_fabric_component'+item_no+'" name="costing_fabric_component'+item_no+'" value="" class=" css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input  value="'+getCategoryValue('material_id',cost_fabrics[i-1],'')+'" type="text" id="costing_fabric_material_id'+item_no+'" name="costing_fabric_material_id'+item_no+'" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('category_data',cost_fabrics[i-1],'Fabric')+'"  type="text" id="costing_fabric_categories'+item_no+'" name="costing_fabric_categories'+item_no+'" value="Fabric" class="css-input-costing-data-solo" style="text-align: start;" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('nominated',cost_fabrics[i-1],'')+'" type="text" id="costing_fabric_nominated'+item_no+'" name="costing_fabric_nominated'+item_no+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('coo',cost_fabrics[i-1],'')+'" type="text" id="costing_fabric_coo'+item_no+'" name="costing_fabric_coo'+item_no+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('customer_mtl',cost_fabrics[i-1],'')+'" type="text" id="costing_fabric_customer_mtl'+item_no+'" name="costing_fabric_customer_mtl'+item_no+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('supplier_mtl',cost_fabrics[i-1],'')+'" type="text" id="costing_fabric_supplier_mtl'+item_no+'" name="costing_fabric_supplier_mtl'+item_no+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td >\n' +
            '                                    <input  value="'+getCategoryValue('description',cost_fabrics[i-1],'')+'" type="text" id="costing_fabric_description'+item_no+'" name="costing_fabric_description'+item_no+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('location',cost_fabrics[i-1],'')+'" type="text" id="costing_fabric_location'+item_no+'" name="costing_fabric_location'+item_no+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('mill_supplier',cost_fabrics[i-1],'')+'" type="text" id="costing_fabric_mill_supplier'+item_no+'" name="costing_fabric_mill_supplier'+item_no+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_fabric_uom'+item_no+'"   name="costing_fabric_uom'+item_no+'" class="css-select-costing-table css-select-costing-table-uom">' +
            '                                                <option value="MM" ' + getSelectedUOM('MM',cost_fabrics[i-1]) + '>MM</option>\n' +
            '                                                <option value="CM"  '+getSelectedUOM('CM',cost_fabrics[i-1])+'>CM</option><option value="M"  '+getSelectedUOM('M',cost_fabrics[i-1])+'>M</option><option value="IN" '+getSelectedUOM('IN',cost_fabrics[i-1])+'>IN</option>\n' +
            '                                                <option value="FT" '+getSelectedUOM('FT',cost_fabrics[i-1])+'>FT</option><option value="YD" '+getSelectedUOM('YD',cost_fabrics[i-1])+'>YD</option><option value="CM2" '+getSelectedUOM('CM2',cost_fabrics[i-1])+'>CM2</option>\n' +
            '                                                <option value="M2" '+getSelectedUOM('M2',cost_fabrics[i-1])+'>M2</option><option value="in2" '+getSelectedUOM('in2',cost_fabrics[i-1])+'>in2</option><option value="f\'t2" '+getSelectedUOM('f\'t2',cost_fabrics[i-1])+'>f\'t2</option>\n' +
            '                                                <option value="EA"  '+getSelectedUOM('EA',cost_fabrics[i-1])+'>EA</option><option value="Pair" '+getSelectedUOM('Pair',cost_fabrics[i-1])+'>Pair</option><option value="PCS" '+getSelectedUOM('PCS',cost_fabrics[i-1])+'>PCS</option>\n' +
            '                                                <option value="ROLL" '+getSelectedUOM('ROLL',cost_fabrics[i-1])+'>ROLL</option><option value="SET" '+getSelectedUOM('SET',cost_fabrics[i-1])+'>SET</option><option value="UNIT" '+getSelectedUOM('UNIT',cost_fabrics[i-1])+'>UNIT</option>\n' +
            '                                               <option value="GM" '+getSelectedUOM('GM',cost_fabrics[i-1])+'>GM</option><option value="KG" '+getSelectedUOM('KG',cost_fabrics[i-1])+'>KG</option>' +
            '                                       </select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('width',cost_fabrics[i-1],'')+'" type="text" id="costing_fabric_wedth'+item_no+'" name="costing_fabric_wedth'+item_no+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('usage',cost_fabrics[i-1],0)+'" type="number" id="costing_fabric_usage'+item_no+'" name="costing_fabric_usage'+item_no+'"  class="costing_formula_usage css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('wastage',cost_fabrics[i-1],0)+'" type="number" id="costing_fabric_wastage'+item_no+'" name="costing_fabric_wastage'+item_no+'"  class="costing_formula_wastage css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('gross_yield',cost_fabrics[i-1],0)+'" type="number" readonly id="costing_fabric_gross_yield'+item_no+'" name="costing_fabric_gross_yield'+item_no+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('unit_cost',cost_fabrics[i-1],0)+'" type="number" id="costing_fabric_unit_cost'+item_no+'" name="costing_fabric_unit_cost'+item_no+'" class="costing_formula_unit_cost css-input-costing-data" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('handling',cost_fabrics[i-1],0)+'" type="number" id="costing_fabric_handling'+item_no+'" name="costing_fabric_handling'+item_no+'"  class="costing_formula_handling css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +

            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('total',cost_fabrics[i-1],0)+'" type="number" id="costing_fabric_total_cost'+item_no+'" name="costing_fabric_total_cost'+item_no+'"  class="costing_formula_total_cost css-input-costing-data"  readonly>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('comment',cost_fabrics[i-1],'')+'" type="text" id="costing_fabric_comment'+item_no+'" name="costing_fabric_comment'+item_no+'"  class="css-input-costing-data-solo" >\n' +
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

    let cost_trims = [];
    if(sessionStorage.getItem('cost_trims')){
        cost_trims = JSON.parse(sessionStorage.getItem('cost_trims'));
    }
    console.log('trim');
    console.log(cost_trims[0]);

    let x = 1;
    sessionStorage.setItem("costing_trim_row_ids", ((parseInt(before_row_count)+1) + '-'+ trim_row_count));
    $('#costing_trim_row_names').val((parseInt(before_row_count)+1) + '-'+ trim_row_count);
    for (let i = before_row_count+1; i <= trim_row_count; i++) {
        let item_no = i.toString();

        costing_trim_tds = costing_trim_tds.concat('' +
            '   <tr class="costing_trim_data" id="costing_trim_tr'+item_no+'">\n' +
            '                                    <td  id="costing_trim_tr_tds'+item_no+'">' +
            '                                    <input style="display:none;" type="checkbox" id="costing_trim_cb'+item_no+'" name="costing_trim_cb'+item_no+'" class="css-costing-cb costing_trim_cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('component',cost_trims[x-1],'')+'"  type="text" id="costing_trim_component'+x+'" name="costing_trim_component'+x+'" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('material_id',cost_trims[x-1],'')+'" type="text" id="costing_trim_material_id'+x+'" name="costing_trim_material_id'+x+'" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('category_data',cost_trims[x-1],'Trim')+'" type="text" id="costing_trim_categories'+x+'" name="costing_trim_categories'+x+'" value="Trim" class="css-input-costing-data-solo" style="text-align: start;" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('nominated',cost_trims[x-1],'')+'" type="text" id="costing_trim_nominated'+x+'" name="costing_trim_nominated'+x+'" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('coo',cost_trims[x-1],'')+'" type="text" id="costing_trim_coo'+x+'" name="costing_trim_nominated'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('customer_mtl',cost_trims[x-1],'')+'" type="text" id="costing_trim_customer_mtl'+x+'" name="costing_trim_customer_mtl'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('supplier_mtl',cost_trims[x-1],'')+'" type="text" id="costing_trim_supplier_mtl'+x+'" name="costing_trim_supplier_mtl'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('description',cost_trims[x-1],'')+'" type="text" id="costing_trim_description'+x+'" name="costing_trim_description'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('location',cost_trims[x-1],'')+'" type="text" id="costing_trim_location'+x+'" name="costing_trim_location'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('mill_supplier',cost_trims[x-1],'')+'" type="text" id="costing_trim_mill_supplier'+x+'" name="costing_trim_mill_supplier'+x+'" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_trim_uom'+x+'"   name="costing_trim_uom'+x+'" class="css-select-costing-table css-select-costing-table-uom">' +
            '                                                <option value="MM" ' + getSelectedUOM('MM',cost_trims[i-1]) + '>MM</option>\n' +
            '                                                <option value="CM"  '+getSelectedUOM('CM',cost_trims[i-1])+'>CM</option><option value="M"  '+getSelectedUOM('M',cost_trims[i-1])+'>M</option><option value="IN" '+getSelectedUOM('IN',cost_trims[i-1])+'>IN</option>\n' +
            '                                                <option value="FT" '+getSelectedUOM('FT',cost_trims[i-1])+'>FT</option><option value="YD" '+getSelectedUOM('YD',cost_trims[i-1])+'>YD</option><option value="CM2" '+getSelectedUOM('CM2',cost_trims[i-1])+'>CM2</option>\n' +
            '                                                <option value="M2" '+getSelectedUOM('M2',cost_trims[i-1])+'>M2</option><option value="in2" '+getSelectedUOM('in2',cost_trims[i-1])+'>in2</option><option value="f\'t2" '+getSelectedUOM('f\'t2',cost_trims[i-1])+'>f\'t2</option>\n' +
            '                                                <option value="EA"  '+getSelectedUOM('EA',cost_trims[i-1])+'>EA</option><option value="Pair" '+getSelectedUOM('Pair',cost_trims[i-1])+'>Pair</option><option value="PCS" '+getSelectedUOM('PCS',cost_trims[i-1])+'>PCS</option>\n' +
            '                                                <option value="ROLL" '+getSelectedUOM('ROLL',cost_trims[i-1])+'>ROLL</option><option value="SET" '+getSelectedUOM('SET',cost_trims[i-1])+'>SET</option><option value="UNIT" '+getSelectedUOM('UNIT',cost_trims[i-1])+'>UNIT</option>\n' +
            '                                               <option value="GM" '+getSelectedUOM('GM',cost_trims[i-1])+'>GM</option><option value="KG" '+getSelectedUOM('KG',cost_trims[i-1])+'>KG</option>' +
            '                                       </select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('width',cost_trims[x-1],'')+'" type="text" id="costing_trim_wedth'+x+'" name="costing_trim_wedth'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('usage',cost_trims[x-1],0)+'" type="number" id="costing_trim_usage'+x+'" name="costing_trim_usage'+x+'"  class="costing_formula_usage css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('wastage',cost_trims[x-1],0)+'" type="number" id="costing_trim_wastage'+x+'" name="costing_trim_wastage'+x+'"  class="costing_formula_wastage css-input-costing-data" >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('gross_yield',cost_trims[x-1],0)+'" type="number"  readonly id="costing_trim_gross_yield'+x+'" name="costing_trim_gross_yield'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('unit_cost',cost_trims[x-1],0)+'" type="number" id="costing_trim_unit_cost'+x+'" name="costing_trim_unit_cost'+x+'"  class="costing_formula_unit_cost css-input-costing-data" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('handling',cost_trims[x-1],0)+'" type="number" id="costing_trim_handling'+x+'" name="costing_trim_handling'+x+'"  class="costing_formula_handling css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('total',cost_trims[x-1],0)+'" type="number" id="costing_trim_total_cost'+x+'" name="costing_trim_total_cost'+x+'" class="costing_formula_total_cost css-input-costing-data"  readonly>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('comment',cost_trims[x-1],'')+'" type="text" id="costing_trim_comment'+x+'" name="costing_trim_comment'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
        x++;
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

    let cost_zippers = [];
    if(sessionStorage.getItem('cost_zippers')){
        cost_zippers = JSON.parse(sessionStorage.getItem('cost_zippers'));
    }
    console.log('zipper');
    console.log(cost_zippers[0]);

    sessionStorage.setItem("costing_zipper_row_ids", ((parseInt(before_row_count)+1) + '-'+ zipper_row_count));
    $('#costing_zipper_row_names').val(((parseInt(before_row_count)+1) + '-'+ zipper_row_count));
    let x = 1;
    for (let i = before_row_count+1; i <= zipper_row_count; i++) {
        let item_no = i.toString();
        costing_zipper_tds = costing_zipper_tds.concat('' +
            '   <tr class="costing_zipper_data" id="costing_zipper_tr'+item_no+'">\n' +
            '                                    <td  id="costing_zipper_tr_tds'+item_no+'">' +
            '                                    <input style="display:none;" type="checkbox" id="costing_zipper_cb'+item_no+'" name="costing_zipper_cb'+item_no+'" class="css-costing-cb costing_zipper_cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('component',cost_zippers[x-1],'')+'" type="text" id="costing_zipper_component'+x+'" name="costing_zipper_component'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('material_id',cost_zippers[x-1],'')+'" type="text" id="costing_zipper_material_id'+x+'" name="costing_zipper_material_id'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('category_data',cost_zippers[x-1],'Zipper')+'" type="text" id="costing_zipper_categories'+x+'" name="costing_zipper_categories'+x+'"  class="css-input-costing-data-solo" style="text-align: start;" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('nominated',cost_zippers[x-1],'')+'" type="text" id="costing_zipper_nominated'+x+'" name="costing_zipper_nominated'+x+'" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('coo',cost_zippers[x-1],'')+'" type="text" id="costing_zipper_coo'+x+'" name="costing_zipper_coo'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('customer_mtl',cost_zippers[x-1],'')+'" type="text" id="costing_zipper_customer_mtl'+x+'" name="costing_zipper_customer_mtl'+x+'" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('supplier_mtl',cost_zippers[x-1],'')+'" type="text" id="costing_zipper_supplier_mtl'+x+'" name="costing_zipper_supplier_mtl'+x+'" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('description',cost_zippers[x-1],'')+'" type="text" id="costing_zipper_description'+x+'" name="costing_zipper_description'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('location',cost_zippers[x-1],'')+'" type="text" id="costing_zipper_location'+x+'" name="costing_zipper_location'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('mill_supplier',cost_zippers[x-1],'')+'" type="text" id="costing_zipper_mill_supplier'+x+'" name="costing_zipper_mill_supplier'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_zipper_uom'+x+'"   name="costing_zipper_uom'+x+'" class="css-select-costing-table css-select-costing-table-uom">' +
            '                                                <option value="MM" ' + getSelectedUOM('MM',cost_zippers[i-1]) + '>MM</option>\n' +
            '                                                <option value="CM"  '+getSelectedUOM('CM',cost_zippers[i-1])+'>CM</option><option value="M"  '+getSelectedUOM('M',cost_zippers[i-1])+'>M</option><option value="IN" '+getSelectedUOM('IN',cost_zippers[i-1])+'>IN</option>\n' +
            '                                                <option value="FT" '+getSelectedUOM('FT',cost_zippers[i-1])+'>FT</option><option value="YD" '+getSelectedUOM('YD',cost_zippers[i-1])+'>YD</option><option value="CM2" '+getSelectedUOM('CM2',cost_zippers[i-1])+'>CM2</option>\n' +
            '                                                <option value="M2" '+getSelectedUOM('M2',cost_zippers[i-1])+'>M2</option><option value="in2" '+getSelectedUOM('in2',cost_zippers[i-1])+'>in2</option><option value="f\'t2" '+getSelectedUOM('f\'t2',cost_zippers[i-1])+'>f\'t2</option>\n' +
            '                                                <option value="EA"  '+getSelectedUOM('EA',cost_zippers[i-1])+'>EA</option><option value="Pair" '+getSelectedUOM('Pair',cost_zippers[i-1])+'>Pair</option><option value="PCS" '+getSelectedUOM('PCS',cost_zippers[i-1])+'>PCS</option>\n' +
            '                                                <option value="ROLL" '+getSelectedUOM('ROLL',cost_zippers[i-1])+'>ROLL</option><option value="SET" '+getSelectedUOM('SET',cost_zippers[i-1])+'>SET</option><option value="UNIT" '+getSelectedUOM('UNIT',cost_zippers[i-1])+'>UNIT</option>\n' +
            '                                               <option value="GM" '+getSelectedUOM('GM',cost_zippers[i-1])+'>GM</option><option value="KG" '+getSelectedUOM('KG',cost_zippers[i-1])+'>KG</option>' +
            '                                       </select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('width',cost_zippers[x-1],'')+'" type="text" id="costing_zipper_wedth'+x+'" name="costing_zipper_wedth'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('usage',cost_zippers[x-1],0)+'" type="number" id="costing_zipper_usage'+x+'" name="costing_zipper_usage'+x+'"  class="costing_formula_usage css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('wastage',cost_zippers[x-1],0)+'" type="number" id="costing_zipper_wastage'+x+'" name="costing_zipper_wastage'+x+'"  class="costing_formula_wastage css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('gross_yield',cost_zippers[x-1],0)+'" type="number"  readonly id="costing_zipper_gross_yield'+x+'" name="costing_zipper_gross_yield'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('unit_cost',cost_zippers[x-1],0)+'" type="number" id="costing_zipper_unit_cost'+x+'" name="costing_zipper_unit_cost'+x+'"  class="costing_formula_unit_cost css-input-costing-data" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('handling',cost_zippers[x-1],0)+'" type="number" id="costing_zipper_handling'+x+'" name="costing_zipper_handling'+x+'"  class="costing_formula_handling css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('total',cost_zippers[x-1],0)+'" type="number" id="costing_zipper_total_cost'+x+'" name="costing_zipper_total_cost'+x+'"  class="costing_formula_total_cost css-input-costing-data"  readonly>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('comment',cost_zippers[x-1],'')+'" type="text" id="costing_zipper_comment'+x+'" name="costing_zipper_comment'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
        x++;
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

    let cost_embelishments = [];
    if(sessionStorage.getItem('cost_embelishments')){
        cost_embelishments = JSON.parse(sessionStorage.getItem('cost_embelishments'));
    }
    console.log('embelishment');
    console.log(cost_embelishments[0]);

    sessionStorage.setItem("costing_embelishment_row_ids", ((parseInt(before_row_count)+1) + '-'+ embelishment_row_count));
    $('#costing_embelishment_row_names').val(((parseInt(before_row_count)+1) + '-'+ embelishment_row_count));
    let x = 1;
    for (let i = before_row_count+1; i <= embelishment_row_count; i++) {
        let item_no = i.toString();
        costing_embelishment_tds = costing_embelishment_tds.concat('' +
            '   <tr class="costing_embelishment_data" id="costing_embelishment_tr'+item_no+'">\n' +
            '                                    <td   id="costing_embelishment_tr_tds'+item_no+'">' +
            '                                    <input style="display:none;" type="checkbox" id="costing_embelishment_cb'+item_no+'" name="costing_embelishment_cb'+item_no+'" class="css-costing-cb costing_embelishment_cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('component',cost_embelishments[x-1],'')+'" type="text" id="costing_embelishment_component'+x+'" name="costing_embelishment_component'+x+'" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('material_id',cost_embelishments[x-1],'')+'" type="text" id="costing_embelishment_material_id'+x+'" name="costing_embelishment_material_id'+x+'" class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <select class="css-select-costing-table" name="costing_embelishment_categories'+x+'" id="costing_embelishment_categories'+x+'" style="text-align: start;">' +
            '                                     <option value="Embroidery" '+getSelectedEmb("Embroidery",cost_embelishments[x-1])+'>Embroidery</option>' +
            '                                     <option value="Screen Print" '+getSelectedEmb("Screen Print",cost_embelishments[x-1])+'>Screen Print</option>' +
            '                                     <option value="Heat Transfer" '+getSelectedEmb("Heat Transfer",cost_embelishments[x-1])+'>Heat Transfer</option>' +
            '                                     <option value="Patch" '+getSelectedEmb("Patch",cost_embelishments[x-1])+'>Patch</option>' +
            '                                     </select>'+
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('nominated',cost_embelishments[x-1],'')+'" type="text" id="costing_embelishment_nominated'+x+'" name="costing_embelishment_nominated'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('coo',cost_embelishments[x-1],'')+'" type="text" id="costing_embelishment_coo'+x+'" name="costing_embelishment_coo'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('customer_mtl',cost_embelishments[x-1],'')+'" type="text" id="costing_embelishment_customer_mtl'+x+'" name="costing_embelishment_customer_mtl'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('supplier_mtl',cost_embelishments[x-1],'')+'" type="text" id="costing_embelishment_supplier_mtl'+x+'" name="costing_embelishment_supplier_mtl'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input  value="'+getCategoryValue('description',cost_embelishments[x-1],'')+'" type="text" id="costing_embelishment_description'+x+'" name="costing_embelishment_supplier_ref'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('location',cost_embelishments[x-1],'')+'" type="text" id="costing_embelishment_location'+x+'" name="costing_embelishment_location'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('mill_supplier',cost_embelishments[x-1],'')+'" type="text" id="costing_embelishment_mill_supplier'+x+'" name="costing_embelishment_mill_supplier'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_embelishment_uom'+x+'"   name="costing_embelishment_uom'+x+'" class="css-select-costing-table css-select-costing-table-uom">' +
            '                                                <option value="MM" ' + getSelectedUOM('MM',cost_embelishments[i-1]) + '>MM</option>\n' +
            '                                                <option value="CM"  '+getSelectedUOM('CM',cost_embelishments[i-1])+'>CM</option><option value="M"  '+getSelectedUOM('M',cost_embelishments[i-1])+'>M</option><option value="IN" '+getSelectedUOM('IN',cost_embelishments[i-1])+'>IN</option>\n' +
            '                                                <option value="FT" '+getSelectedUOM('FT',cost_embelishments[i-1])+'>FT</option><option value="YD" '+getSelectedUOM('YD',cost_embelishments[i-1])+'>YD</option><option value="CM2" '+getSelectedUOM('CM2',cost_embelishments[i-1])+'>CM2</option>\n' +
            '                                                <option value="M2" '+getSelectedUOM('M2',cost_embelishments[i-1])+'>M2</option><option value="in2" '+getSelectedUOM('in2',cost_embelishments[i-1])+'>in2</option><option value="f\'t2" '+getSelectedUOM('f\'t2',cost_embelishments[i-1])+'>f\'t2</option>\n' +
            '                                                <option value="EA"  '+getSelectedUOM('EA',cost_embelishments[i-1])+'>EA</option><option value="Pair" '+getSelectedUOM('Pair',cost_embelishments[i-1])+'>Pair</option><option value="PCS" '+getSelectedUOM('PCS',cost_embelishments[i-1])+'>PCS</option>\n' +
            '                                                <option value="ROLL" '+getSelectedUOM('ROLL',cost_embelishments[i-1])+'>ROLL</option><option value="SET" '+getSelectedUOM('SET',cost_embelishments[i-1])+'>SET</option><option value="UNIT" '+getSelectedUOM('UNIT',cost_embelishments[i-1])+'>UNIT</option>\n' +
            '                                               <option value="GM" '+getSelectedUOM('GM',cost_embelishments[i-1])+'>GM</option><option value="KG" '+getSelectedUOM('KG',cost_embelishments[i-1])+'>KG</option>' +
            '                                       </select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('width',cost_embelishments[x-1],'')+'" type="text" id="costing_embelishment_wedth'+x+'" name="costing_embelishment_wedth'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('usage',cost_embelishments[x-1],0)+'" type="number" id="costing_embelishment_usage'+x+'" name="costing_embelishment_usage'+x+'"  class="costing_formula_usage css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('wastage',cost_embelishments[x-1],0)+'" type="number" id="costing_embelishment_wastage'+x+'" name="costing_embelishment_wastage'+x+'"  class="costing_formula_wastage css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('gross_yield',cost_embelishments[x-1],0)+'" type="number"  readonly id="costing_embelishment_gross_yield'+x+'" name="costing_embelishment_gross_yield'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('unit_cost',cost_embelishments[x-1],0)+'" type="number" id="costing_embelishment_unit_cost'+x+'" name="costing_embelishment_unit_cost'+x+'" value="0" class="costing_formula_unit_cost css-input-costing-data" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('handling',cost_embelishments[x-1],0)+'" type="number" id="costing_embelishment_handling'+x+'" name="costing_embelishment_handling'+x+'"  class="costing_formula_handling css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('total',cost_embelishments[x-1],0)+'" type="number" id="costing_embelishment_total_cost'+x+'" name="costing_embelishment_total_cost'+x+'" value="0.00" class="costing_formula_total_cost css-input-costing-data"  readonly>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('comment',cost_embelishments[x-1],'')+'" type="text" id="costing_embelishment_comment'+x+'" name="costing_embelishment_comment'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
        x++;
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

    let cost_labels = [];
    if(sessionStorage.getItem('cost_labels')){
        cost_labels = JSON.parse(sessionStorage.getItem('cost_labels'));
    }
    console.log('label');
    console.log(cost_labels[0]);

    sessionStorage.setItem("costing_label_row_ids", ((parseInt(before_row_count)+1) + '-'+ label_row_count));
    $('#costing_label_row_names').val(((parseInt(before_row_count)+1) + '-'+ label_row_count));
    let x = 1;
    for (let i = before_row_count+1; i <= label_row_count; i++) {
        let item_no = i.toString();
        costing_label_tds = costing_label_tds.concat('' +
            '   <tr class="costing_label_data" id="costing_label_tr'+item_no+'">\n' +
            '                                    <td  id="costing_label_tr_tds'+item_no+'">' +
            '                                    <input style="display:none;" type="checkbox" id="costing_label_cb'+item_no+'" name="costing_label_cb'+item_no+'" class="css-costing-cb costing_label_cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('component',cost_labels[x-1],'')+'" type="text" id="costing_label_component'+x+'" name="costing_label_component'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('material_id',cost_labels[x-1],'')+'" type="text" id="costing_label_material_id'+x+'" name="costing_label_material_id'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('category_data',cost_labels[x-1],'')+'" type="text" id="costing_label_categories'+x+'" name="costing_label_categories'+x+'"  class="css-input-costing-data-solo" style="text-align: start;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('nominated',cost_labels[x-1],'')+'" type="text" id="costing_label_nominated'+x+'" name="costing_label_nominated'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('coo',cost_labels[x-1],'')+'" type="text" id="costing_label_coo'+x+'" name="costing_label_coo'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('customer_mtl',cost_labels[x-1],'')+'" type="text" id="costing_label_customer_mtl'+x+'" name="costing_label_customer_mtl'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('supplier_mtl',cost_labels[x-1],'')+'" type="text" id="costing_label_supplier_mtl'+x+'" name="costing_label_supplier_mtl'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('description',cost_labels[x-1],'')+'" type="text" id="costing_label_description'+x+'" name="costing_label_description'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('location',cost_labels[x-1],'')+'" type="text" id="costing_label_location'+x+'" name="costing_label_location'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('mill_supplier',cost_labels[x-1],'')+'" type="text" id="costing_label_mill_supplier'+x+'" name="costing_label_mill_supplier'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_label_uom'+x+'"   name="costing_label_uom'+x+'" class="css-select-costing-table css-select-costing-table-uom">' +
            '                                                <option value="MM" ' + getSelectedUOM('MM',cost_labels[i-1]) + '>MM</option>\n' +
            '                                                <option value="CM"  '+getSelectedUOM('CM',cost_labels[i-1])+'>CM</option><option value="M"  '+getSelectedUOM('M',cost_labels[i-1])+'>M</option><option value="IN" '+getSelectedUOM('IN',cost_labels[i-1])+'>IN</option>\n' +
            '                                                <option value="FT" '+getSelectedUOM('FT',cost_labels[i-1])+'>FT</option><option value="YD" '+getSelectedUOM('YD',cost_labels[i-1])+'>YD</option><option value="CM2" '+getSelectedUOM('CM2',cost_labels[i-1])+'>CM2</option>\n' +
            '                                                <option value="M2" '+getSelectedUOM('M2',cost_labels[i-1])+'>M2</option><option value="in2" '+getSelectedUOM('in2',cost_labels[i-1])+'>in2</option><option value="f\'t2" '+getSelectedUOM('f\'t2',cost_labels[i-1])+'>f\'t2</option>\n' +
            '                                                <option value="EA"  '+getSelectedUOM('EA',cost_labels[i-1])+'>EA</option><option value="Pair" '+getSelectedUOM('Pair',cost_labels[i-1])+'>Pair</option><option value="PCS" '+getSelectedUOM('PCS',cost_labels[i-1])+'>PCS</option>\n' +
            '                                                <option value="ROLL" '+getSelectedUOM('ROLL',cost_labels[i-1])+'>ROLL</option><option value="SET" '+getSelectedUOM('SET',cost_labels[i-1])+'>SET</option><option value="UNIT" '+getSelectedUOM('UNIT',cost_labels[i-1])+'>UNIT</option>\n' +
            '                                               <option value="GM" '+getSelectedUOM('GM',cost_labels[i-1])+'>GM</option><option value="KG" '+getSelectedUOM('KG',cost_labels[i-1])+'>KG</option>' +
            '                                       </select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('width',cost_labels[x-1],'')+'" type="text" id="costing_label_wedth'+x+'" name="costing_label_wedth'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('usage',cost_labels[x-1],0)+'" type="number" id="costing_label_usage'+x+'" name="costing_label_usage'+x+'"  class="costing_formula_usage css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('wastage',cost_labels[x-1],0)+'" type="number" id="costing_label_wastage'+x+'" name="costing_label_wastage'+x+'"  class="costing_formula_wastage css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('gross_yield',cost_labels[x-1],0)+'" type="number"  readonly id="costing_label_gross_yield'+x+'" name="costing_label_gross_yield'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('unit_cost',cost_labels[x-1],0)+'" type="number" id="costing_label_unit_cost'+x+'" name="costing_label_unit_cost'+x+'" value="0" class="costing_formula_unit_cost css-input-costing-data" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('handling',cost_labels[x-1],0)+'" type="number" id="costing_label_handling'+x+'" name="costing_label_handling'+x+'"  class="costing_formula_handling css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('total',cost_labels[x-1],0)+'" type="number" id="costing_label_total_cost'+x+'" name="costing_label_total_cost'+x+'" value="0.00" class="costing_formula_total_cost css-input-costing-data"  readonly>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('comment',cost_labels[x-1],'')+'" type="text" id="costing_label_comment'+x+'" name="costing_label_comment'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
        x++;
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

    let cost_threads = [];
    if(sessionStorage.getItem('cost_threads')){
        cost_threads = JSON.parse(sessionStorage.getItem('cost_threads'));
    }
    console.log('thread');
    console.log(cost_threads[0]);

    sessionStorage.setItem("costing_thread_row_ids", ((parseInt(before_row_count)+1) + '-'+ thread_row_count));
    $('#costing_thread_row_names').val(((parseInt(before_row_count)+1) + '-'+ thread_row_count));
    let x = 1;
    for (let i = before_row_count+1; i <= thread_row_count; i++) {
        let item_no = i.toString();
        costing_thread_tds = costing_thread_tds.concat('' +
            '   <tr class="costing_thread_data" id="costing_thread_tr'+item_no+'">\n' +
            '                                    <td  id="costing_thread_tr_tds'+item_no+'">' +
            '                                    <input style="display:none;" type="checkbox" id="costing_thread_cb'+item_no+'" name="costing_thread_cb'+item_no+'" class="css-costing-cb costing_thread_cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('component',cost_threads[x-1],'')+'" type="text" id="costing_thread_component'+x+'" name="costing_thread_component'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('material_id',cost_threads[x-1],'')+'" type="text" id="costing_thread_material_id'+x+'" name="costing_thread_material_id'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('category_data',cost_threads[x-1],'Thread #'+(i-before_row_count)+'')+'" type="text" id="costing_thread_categories'+x+'" name="costing_thread_categories'+x+'" class="css-input-costing-data-solo" style="text-align: start;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('nominated',cost_threads[x-1],'')+'" type="text" id="costing_thread_nominated'+x+'" name="costing_thread_nominated'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('coo',cost_threads[x-1],'')+'" type="text" id="costing_thread_coo'+x+'" name="costing_thread_coo'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('customer_mtl',cost_threads[x-1],'')+'" type="text" id="costing_thread_customer_mtl'+x+'" name="costing_thread_customer_mtl'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('supplier_mtl',cost_threads[x-1],'')+'" type="text" id="costing_thread_supplier_mtl'+x+'" name="costing_thread_supplier_mtl'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('description',cost_threads[x-1],'')+'" type="text" id="costing_thread_description'+x+'" name="costing_thread_description'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('location',cost_threads[x-1],'')+'" type="text" id="costing_thread_location'+x+'" name="costing_thread_location'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('mill_supplier',cost_threads[x-1],'')+'" type="text" id="costing_thread_mill_supplier'+x+'" name="costing_thread_mill_supplier'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_thread_uom'+x+'"   name="costing_thread_uom'+x+'" class="css-select-costing-table css-select-costing-table-uom">' +
            '                                                <option value="MM" ' + getSelectedUOM('MM',cost_threads[i-1]) + '>MM</option>\n' +
            '                                                <option value="CM"  '+getSelectedUOM('CM',cost_threads[i-1])+'>CM</option><option value="M"  '+getSelectedUOM('M',cost_threads[i-1])+'>M</option><option value="IN" '+getSelectedUOM('IN',cost_threads[i-1])+'>IN</option>\n' +
            '                                                <option value="FT" '+getSelectedUOM('FT',cost_threads[i-1])+'>FT</option><option value="YD" '+getSelectedUOM('YD',cost_threads[i-1])+'>YD</option><option value="CM2" '+getSelectedUOM('CM2',cost_threads[i-1])+'>CM2</option>\n' +
            '                                                <option value="M2" '+getSelectedUOM('M2',cost_threads[i-1])+'>M2</option><option value="in2" '+getSelectedUOM('in2',cost_threads[i-1])+'>in2</option><option value="f\'t2" '+getSelectedUOM('f\'t2',cost_threads[i-1])+'>f\'t2</option>\n' +
            '                                                <option value="EA"  '+getSelectedUOM('EA',cost_threads[i-1])+'>EA</option><option value="Pair" '+getSelectedUOM('Pair',cost_threads[i-1])+'>Pair</option><option value="PCS" '+getSelectedUOM('PCS',cost_threads[i-1])+'>PCS</option>\n' +
            '                                                <option value="ROLL" '+getSelectedUOM('ROLL',cost_threads[i-1])+'>ROLL</option><option value="SET" '+getSelectedUOM('SET',cost_threads[i-1])+'>SET</option><option value="UNIT" '+getSelectedUOM('UNIT',cost_threads[i-1])+'>UNIT</option>\n' +
            '                                               <option value="GM" '+getSelectedUOM('GM',cost_threads[i-1])+'>GM</option><option value="KG" '+getSelectedUOM('KG',cost_threads[i-1])+'>KG</option>' +
            '                                       </select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('width',cost_threads[x-1],'')+'" type="text" id="costing_thread_wedth'+x+'" name="costing_thread_wedth'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('usage',cost_threads[x-1],0)+'" type="number" id="costing_thread_usage'+x+'" name="costing_thread_usage'+x+'"  class="costing_formula_usage css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('wastage',cost_threads[x-1],0)+'" type="number" id="costing_thread_wastage'+x+'" name="costing_thread_wastage'+x+'"  class="costing_formula_wastage css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('gross_yield',cost_threads[x-1],0)+'" type="number" readonly id="costing_thread_gross_yield'+x+'" name="costing_thread_gross_yield'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('unit_cost',cost_threads[x-1],0)+'" type="number" id="costing_thread_unit_cost'+x+'" name="costing_thread_unit_cost'+x+'" value="0" class="costing_formula_unit_cost css-input-costing-data" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('handling',cost_threads[x-1],0)+'" type="number" id="costing_thread_handling'+x+'" name="costing_thread_handling'+x+'"  class="costing_formula_handling css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('total',cost_threads[x-1],0)+'" type="number" id="costing_thread_total_cost'+x+'" name="costing_thread_total_cost'+x+'" value="0.00" class="costing_formula_total_cost css-input-costing-data"  readonly>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('comment',cost_threads[x-1],'')+'" type="text" id="costing_thread_comment'+x+'" name="costing_thread_comment'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
        x++;
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

    let cost_packages = [];
    if(sessionStorage.getItem('cost_packages')){
        cost_packages = JSON.parse(sessionStorage.getItem('cost_packages'));
    }
    console.log('package');
    console.log(cost_packages[0]);

    sessionStorage.setItem("costing_package_row_ids", ((parseInt(before_row_count)+1) + '-'+ package_row_count));
    $('#costing_package_row_names').val(((parseInt(before_row_count)+1) + '-'+ package_row_count));
    let x = 1;
    for (let i = before_row_count+1; i <= package_row_count; i++) {
        let item_no = i.toString();
        costing_package_tds = costing_package_tds.concat('' +
            '   <tr class="costing_package_data" id="costing_package_tr'+item_no+'">\n' +
            '                                    <td  id="costing_package_tr_tds'+item_no+'">' +
            '                                    <input style="display:none;" type="checkbox" id="costing_package_cb'+item_no+'" name="costing_package_cb'+item_no+'" class="css-costing-cb costing_package_cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('component',cost_packages[x-1],'')+'"  type="text" id="costing_package_component'+x+'" name="costing_package_component'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('material_id',cost_packages[x-1],'')+'" type="text" id="costing_package_material_id'+x+'" name="costing_package_material_id'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('category_data',cost_packages[x-1],'Packaging #'+(i-before_row_count)+'')+'" type="text" id="costing_package_categories'+x+'" name="costing_package_categories'+x+'" class="css-input-costing-data-solo" style="text-align: start;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('nominated',cost_packages[x-1],'')+'" type="text" id="costing_package_nominated'+x+'" name="costing_package_nominated'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('coo',cost_packages[x-1],'')+'" type="text" id="costing_package_coo'+x+'" name="costing_package_coo'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('customer_mtl',cost_packages[x-1],'')+'" type="text" id="costing_package_customer_mtl'+x+'" name="costing_package_customer_mtl'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('supplier_mtl',cost_packages[x-1],'')+'" type="text" id="costing_package_supplier_mtl'+x+'" name="costing_package_supplier_mtl'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('description',cost_packages[x-1],'')+'" type="text" id="costing_package_description'+x+'" name="costing_package_description'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('location',cost_packages[x-1],'')+'" type="text" id="costing_package_location'+x+'" name="costing_package_location'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('mill_supplier',cost_packages[x-1],'')+'" type="text" id="costing_package_mill_supplier'+x+'" name="costing_package_mill_supplier'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_package_uom'+x+'"   name="costing_package_uom'+x+'" class="css-select-costing-table css-select-costing-table-uom">' +
            '                                                <option value="MM" ' + getSelectedUOM('MM',cost_packages[i-1]) + '>MM</option>\n' +
            '                                                <option value="CM"  '+getSelectedUOM('CM',cost_packages[i-1])+'>CM</option><option value="M"  '+getSelectedUOM('M',cost_packages[i-1])+'>M</option><option value="IN" '+getSelectedUOM('IN',cost_packages[i-1])+'>IN</option>\n' +
            '                                                <option value="FT" '+getSelectedUOM('FT',cost_packages[i-1])+'>FT</option><option value="YD" '+getSelectedUOM('YD',cost_packages[i-1])+'>YD</option><option value="CM2" '+getSelectedUOM('CM2',cost_packages[i-1])+'>CM2</option>\n' +
            '                                                <option value="M2" '+getSelectedUOM('M2',cost_packages[i-1])+'>M2</option><option value="in2" '+getSelectedUOM('in2',cost_packages[i-1])+'>in2</option><option value="f\'t2" '+getSelectedUOM('f\'t2',cost_packages[i-1])+'>f\'t2</option>\n' +
            '                                                <option value="EA"  '+getSelectedUOM('EA',cost_packages[i-1])+'>EA</option><option value="Pair" '+getSelectedUOM('Pair',cost_packages[i-1])+'>Pair</option><option value="PCS" '+getSelectedUOM('PCS',cost_packages[i-1])+'>PCS</option>\n' +
            '                                                <option value="ROLL" '+getSelectedUOM('ROLL',cost_packages[i-1])+'>ROLL</option><option value="SET" '+getSelectedUOM('SET',cost_packages[i-1])+'>SET</option><option value="UNIT" '+getSelectedUOM('UNIT',cost_packages[i-1])+'>UNIT</option>\n' +
            '                                               <option value="GM" '+getSelectedUOM('GM',cost_packages[i-1])+'>GM</option><option value="KG" '+getSelectedUOM('KG',cost_packages[i-1])+'>KG</option>' +
            '                                       </select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('width',cost_packages[x-1],'')+'" type="text" id="costing_package_wedth'+x+'" name="costing_package_wedth'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('usage',cost_packages[x-1],0)+'" type="number" id="costing_package_usage'+x+'" name="costing_package_usage'+x+'"  class="costing_formula_usage css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('wastage',cost_packages[x-1],0)+'" type="number" id="costing_package_wastage'+x+'" name="costing_package_wastage'+x+'"  class="costing_formula_wastage css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('gross_yield',cost_packages[x-1],0)+'" type="number" readonly id="costing_package_gross_yield'+x+'" name="costing_package_gross_yield'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('unit_cost',cost_packages[x-1],0)+'" type="number" id="costing_package_unit_cost'+x+'" name="costing_package_unit_cost'+x+'" value="0" class="costing_formula_unit_cost css-input-costing-data" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('handling',cost_packages[x-1],0)+'" type="number" id="costing_package_handling'+x+'" name="costing_package_handling'+x+'"  class="costing_formula_handling css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('total',cost_packages[x-1],0)+'" type="number" id="costing_package_total_cost'+x+'" name="costing_package_total_cost'+x+'" value="0.00" class="costing_formula_total_cost css-input-costing-data"  readonly>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('comment',cost_packages[x-1],'')+'" type="text" id="costing_package_comment'+x+'" name="costing_package_comment'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
        x++;
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

    let cost_finishes = [];
    if(sessionStorage.getItem('cost_finishes')){
        cost_finishes = JSON.parse(sessionStorage.getItem('cost_finishes'));
    }
    console.log('finish');
    console.log(cost_finishes[0]);

    sessionStorage.setItem("costing_finish_row_ids", ((parseInt(before_row_count)+1) + '-'+ finish_row_count));
    $('#costing_finish_row_names').val(((parseInt(before_row_count)+1) + '-'+ finish_row_count));
    let x = 1;
    for (let i = before_row_count+1; i <= finish_row_count; i++) {
        let item_no = i.toString();
        costing_finish_tds = costing_finish_tds.concat('' +
            '   <tr class="costing_finish_data" id="costing_finish_tr'+item_no+'">\n' +
            '                                    <td  id="costing_finish_tr_tds'+item_no+'">' +
            '                                    <input style="display:none;" type="checkbox" id="costing_finish_cb'+item_no+'" name="costing_finish_cb'+item_no+'" class="css-costing-cb costing_finish_cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('component',cost_finishes[x-1],'')+'" type="text" id="costing_finish_component'+x+'" name="costing_finish_component'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('material_id',cost_finishes[x-1],'')+'" type="text" id="costing_finish_material_id'+x+'" name="costing_finish_material_id'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('category_data',cost_finishes[x-1],'')+'" type="text" id="costing_finish_categories'+x+'" name="costing_finish_categories'+x+'"  class="css-input-costing-data-solo" style="text-align: start;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('nominated',cost_finishes[x-1],'')+'" type="text" id="costing_finish_nominated'+x+'" name="costing_finish_nominated'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('coo',cost_finishes[x-1],'')+'" type="text" id="costing_finish_coo'+x+'" name="costing_finish_coo'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('customer_mtl',cost_finishes[x-1],'')+'" type="text" id="costing_finish_customer_mtl'+x+'" name="costing_finish_customer_mtl'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('supplier_mtl',cost_finishes[x-1],'')+'" type="text" id="costing_finish_supplier_mtl'+x+'" name="costing_finish_supplier_mtl'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('description',cost_finishes[x-1],'')+'" type="text" id="costing_finish_description'+x+'" name="costing_finish_description'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('location',cost_finishes[x-1],'')+'" type="text" id="costing_finish_location'+x+'" name="costing_finish_location'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('mill_supplier',cost_finishes[x-1],'')+'" type="text" id="costing_finish_mill_supplier'+x+'" name="costing_finish_mill_supplier'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_finish_uom'+x+'"   name="costing_finish_uom'+x+'" class="css-select-costing-table css-select-costing-table-uom">' +
            '                                                <option value="MM" ' + getSelectedUOM('MM',cost_finishes[i-1]) + '>MM</option>\n' +
            '                                                <option value="CM"  '+getSelectedUOM('CM',cost_finishes[i-1])+'>CM</option><option value="M"  '+getSelectedUOM('M',cost_finishes[i-1])+'>M</option><option value="IN" '+getSelectedUOM('IN',cost_finishes[i-1])+'>IN</option>\n' +
            '                                                <option value="FT" '+getSelectedUOM('FT',cost_finishes[i-1])+'>FT</option><option value="YD" '+getSelectedUOM('YD',cost_finishes[i-1])+'>YD</option><option value="CM2" '+getSelectedUOM('CM2',cost_finishes[i-1])+'>CM2</option>\n' +
            '                                                <option value="M2" '+getSelectedUOM('M2',cost_finishes[i-1])+'>M2</option><option value="in2" '+getSelectedUOM('in2',cost_finishes[i-1])+'>in2</option><option value="f\'t2" '+getSelectedUOM('f\'t2',cost_finishes[i-1])+'>f\'t2</option>\n' +
            '                                                <option value="EA"  '+getSelectedUOM('EA',cost_finishes[i-1])+'>EA</option><option value="Pair" '+getSelectedUOM('Pair',cost_finishes[i-1])+'>Pair</option><option value="PCS" '+getSelectedUOM('PCS',cost_finishes[i-1])+'>PCS</option>\n' +
            '                                                <option value="ROLL" '+getSelectedUOM('ROLL',cost_finishes[i-1])+'>ROLL</option><option value="SET" '+getSelectedUOM('SET',cost_finishes[i-1])+'>SET</option><option value="UNIT" '+getSelectedUOM('UNIT',cost_finishes[i-1])+'>UNIT</option>\n' +
            '                                               <option value="GM" '+getSelectedUOM('GM',cost_finishes[i-1])+'>GM</option><option value="KG" '+getSelectedUOM('KG',cost_finishes[i-1])+'>KG</option>' +
            '                                       </select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('width',cost_finishes[x-1],'')+'" type="text" id="costing_finish_wedth'+x+'" name="costing_finish_wedth'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('usage',cost_finishes[x-1],0)+'" type="number" id="costing_finish_usage'+x+'" name="costing_finish_usage'+x+'"  class="costing_formula_usage css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('wastage',cost_finishes[x-1],0)+'" type="number" id="costing_finish_wastage'+x+'" name="costing_finish_wastage'+x+'"  class="costing_formula_wastage css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('gross_yield',cost_finishes[x-1],0)+'" type="number" readonly id="costing_finish_gross_yield'+x+'" name="costing_finish_gross_yield'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('unit_cost',cost_finishes[x-1],0)+'" type="number" id="costing_finish_unit_cost'+x+'" name="costing_finish_unit_cost'+x+'" value="0" class="costing_formula_unit_cost css-input-costing-data" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('handling',cost_finishes[x-1],0)+'" type="number" id="costing_finish_handling'+x+'" name="costing_finish_handling'+x+'"  class="costing_formula_handling css-input-costing-data"  >\n' +
            '                                    <input  type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('total',cost_finishes[x-1],0)+'" type="number" id="costing_finish_total_cost'+x+'" name="costing_finish_total_cost'+x+'" value="0.00" class="costing_formula_total_cost css-input-costing-data"  readonly>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('comment',cost_finishes[x-1],'')+'" type="text" id="costing_finish_comment'+x+'" name="costing_finish_comment'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
        x++;
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

    let cost_exports = [];
    if(sessionStorage.getItem('cost_exports')){
        cost_exports = JSON.parse(sessionStorage.getItem('cost_exports'));
    }
    console.log('export');
    console.log(cost_exports[0]);

    sessionStorage.setItem("costing_export_row_ids", ((parseInt(before_row_count)+1) + '-'+ export_row_count));
    $('#costing_export_row_names').val(((parseInt(before_row_count)+1) + '-'+ export_row_count));
    let x = 1;
    for (let i = before_row_count+1; i <= export_row_count; i++) {
        let item_no = i.toString();
        costing_export_tds = costing_export_tds.concat('' +
            '   <tr class="costing_export_data" id="costing_export_tr'+item_no+'">\n' +
            '                                    <td  id="costing_export_tr_tds'+item_no+'">' +
            '                                    <input style="display:none;" type="checkbox" id="costing_export_cb'+item_no+'" name="costing_export_cb'+item_no+'" class="css-costing-cb costing_export_cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('component',cost_exports[x-1],'')+'" type="text" id="costing_export_component'+x+'" name="costing_export_component'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('material_id',cost_exports[x-1],'')+'" type="text" id="costing_export_material_id'+x+'" name="costing_export_material_id'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('category_data',cost_exports[x-1],'')+'" type="text" id="costing_export_categories'+x+'" name="costing_export_categories'+x+'"  class="css-input-costing-data-solo" style="text-align: start;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('component',cost_exports[x-1],'')+'" type="text" id="costing_export_nominated'+x+'" name="costing_export_nominated'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('coo',cost_exports[x-1],'')+'" type="text" id="costing_export_coo'+x+'" name="costing_export_coo'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('customer_mtl',cost_exports[x-1],'')+'" type="text" id="costing_export_customer_mtl'+x+'" name="costing_export_customer_mtl'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('supplier_mtl',cost_exports[x-1],'')+'" type="text" id="costing_export_supplier_mtl'+x+'" name="costing_export_supplier_mtl'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('description',cost_exports[x-1],'')+'" type="text" id="costing_export_description'+x+'" name="costing_export_description'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('location',cost_exports[x-1],'')+'" type="text" id="costing_export_location'+x+'" name="costing_export_location'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('mill_supplier',cost_exports[x-1],'')+'" type="text" id="costing_export_mill_supplier'+x+'" name="costing_export_mill_supplier'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_export_uom'+x+'"   name="costing_export_uom'+x+'" class="css-select-costing-table css-select-costing-table-uom">' +
            '                                                <option value="MM" ' + getSelectedUOM('MM',cost_exports[i-1]) + '>MM</option>\n' +
            '                                                <option value="CM"  '+getSelectedUOM('CM',cost_exports[i-1])+'>CM</option><option value="M"  '+getSelectedUOM('M',cost_exports[i-1])+'>M</option><option value="IN" '+getSelectedUOM('IN',cost_exports[i-1])+'>IN</option>\n' +
            '                                                <option value="FT" '+getSelectedUOM('FT',cost_exports[i-1])+'>FT</option><option value="YD" '+getSelectedUOM('YD',cost_exports[i-1])+'>YD</option><option value="CM2" '+getSelectedUOM('CM2',cost_exports[i-1])+'>CM2</option>\n' +
            '                                                <option value="M2" '+getSelectedUOM('M2',cost_exports[i-1])+'>M2</option><option value="in2" '+getSelectedUOM('in2',cost_exports[i-1])+'>in2</option><option value="f\'t2" '+getSelectedUOM('f\'t2',cost_exports[i-1])+'>f\'t2</option>\n' +
            '                                                <option value="EA"  '+getSelectedUOM('EA',cost_exports[i-1])+'>EA</option><option value="Pair" '+getSelectedUOM('Pair',cost_exports[i-1])+'>Pair</option><option value="PCS" '+getSelectedUOM('PCS',cost_exports[i-1])+'>PCS</option>\n' +
            '                                                <option value="ROLL" '+getSelectedUOM('ROLL',cost_exports[i-1])+'>ROLL</option><option value="SET" '+getSelectedUOM('SET',cost_exports[i-1])+'>SET</option><option value="UNIT" '+getSelectedUOM('UNIT',cost_exports[i-1])+'>UNIT</option>\n' +
            '                                               <option value="GM" '+getSelectedUOM('GM',cost_exports[i-1])+'>GM</option><option value="KG" '+getSelectedUOM('KG',cost_exports[i-1])+'>KG</option>' +
            '                                       </select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('width',cost_exports[x-1],'')+'" type="text" id="costing_export_wedth'+x+'" name="costing_export_wedth'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('usage',cost_exports[x-1],0)+'" type="number" id="costing_export_usage'+x+'" name="costing_export_usage'+x+'"  class="costing_formula_usage css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                     <td>\n' +
            '                                    <input value="'+getCategoryValue('wastage',cost_exports[x-1],0)+'" type="number" id="costing_export_wastage'+x+'" name="costing_export_wastage'+x+'"  class="costing_formula_wastage css-input-costing-data"  >\n' +
            '                                    <input  type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('gross_yield',cost_exports[x-1],0)+'" type="number" readonly id="costing_export_gross_yield'+x+'" name="costing_export_gross_yield'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('unit_cost',cost_exports[x-1],0)+'" type="number" id="costing_export_unit_cost'+x+'" name="costing_export_unit_cost'+x+'" value="0" class="costing_formula_unit_cost css-input-costing-data" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('handling',cost_exports[x-1],0)+'" type="number" id="costing_export_handling'+x+'" name="costing_export_handling'+x+'"  class="costing_formula_handling css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('total',cost_exports[x-1],0)+'" type="number" id="costing_export_total_cost'+x+'" name="costing_export_total_cost'+x+'" value="0.00" class="costing_formula_total_cost css-input-costing-data"  readonly>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('comment',cost_exports[x-1],'')+'" type="text" id="costing_export_comment'+x+'" name="costing_export_comment'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
        x++;
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

    let cost_testings = [];
    if(sessionStorage.getItem('cost_testings')){
        cost_testings = JSON.parse(sessionStorage.getItem('cost_testings'));
    }
    console.log('testing');
    console.log(cost_testings[0]);

    sessionStorage.setItem("costing_testing_row_ids", ((parseInt(before_row_count)+1) + '-'+ testing_row_count));
    $('#costing_testing_row_names').val(((parseInt(before_row_count)+1) + '-'+ testing_row_count));
    let x = 1;
    for (let i = before_row_count+1; i <= testing_row_count; i++) {
        let item_no = i.toString();
        costing_testing_tds = costing_testing_tds.concat('' +
            '   <tr class="costing_testing_data" id="costing_testing_tr'+item_no+'">\n' +
            '                                    <td  id="costing_testing_tr_tds'+item_no+'">' +
            '                                    <input style="display:none;" type="checkbox" id="costing_testing_cb'+item_no+'" name="costing_testing_cb'+item_no+'" class="css-costing-cb costing_testing_cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('component',cost_testings[x-1],'')+'" type="text" id="costing_testing_component'+x+'" name="costing_testing_component'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('material_id',cost_testings[x-1],'')+'" type="text" id="costing_testing_material_id'+x+'" name="costing_testing_material_id'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('category_data',cost_testings[x-1],'')+'" type="text" id="costing_testing_categories'+x+'" name="costing_testing_categories'+x+'" value="Testing #'+(i-before_row_count)+'" class="css-input-costing-data-solo" style="text-align: start;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('nominated',cost_testings[x-1],'')+'" type="text" id="costing_testing_nominated'+x+'" name="costing_testing_nominated'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('coo',cost_testings[x-1],'')+'" type="text" id="costing_testing_coo'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('customer_mtl',cost_testings[x-1],'')+'" type="text" id="costing_testing_customer_mtl'+x+'" name="costing_testing_customer_mtl'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('supplier_mtl',cost_testings[x-1],'')+'" type="text" id="costing_testing_supplier_mtl'+x+'" name="costing_testing_supplier_mtl'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('description',cost_testings[x-1],'')+'" type="text" id="costing_testing_description'+x+'" name="costing_testing_description'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('location',cost_testings[x-1],'')+'" type="text" id="costing_testing_location'+x+'" name="costing_testing_location'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('mill_supplier',cost_testings[x-1],'')+'" type="text" id="costing_testing_mill_supplier'+x+'" name="costing_testing_mill_supplier'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_testing_uom'+x+'"   name="costing_testing_uom'+x+'" class="css-select-costing-table css-select-costing-table-uom">' +
            '                                                <option value="MM" ' + getSelectedUOM('MM',cost_testings[i-1]) + '>MM</option>\n' +
            '                                                <option value="CM"  '+getSelectedUOM('CM',cost_testings[i-1])+'>CM</option><option value="M"  '+getSelectedUOM('M',cost_testings[i-1])+'>M</option><option value="IN" '+getSelectedUOM('IN',cost_testings[i-1])+'>IN</option>\n' +
            '                                                <option value="FT" '+getSelectedUOM('FT',cost_testings[i-1])+'>FT</option><option value="YD" '+getSelectedUOM('YD',cost_testings[i-1])+'>YD</option><option value="CM2" '+getSelectedUOM('CM2',cost_testings[i-1])+'>CM2</option>\n' +
            '                                                <option value="M2" '+getSelectedUOM('M2',cost_testings[i-1])+'>M2</option><option value="in2" '+getSelectedUOM('in2',cost_testings[i-1])+'>in2</option><option value="f\'t2" '+getSelectedUOM('f\'t2',cost_testings[i-1])+'>f\'t2</option>\n' +
            '                                                <option value="EA"  '+getSelectedUOM('EA',cost_testings[i-1])+'>EA</option><option value="Pair" '+getSelectedUOM('Pair',cost_testings[i-1])+'>Pair</option><option value="PCS" '+getSelectedUOM('PCS',cost_testings[i-1])+'>PCS</option>\n' +
            '                                                <option value="ROLL" '+getSelectedUOM('ROLL',cost_testings[i-1])+'>ROLL</option><option value="SET" '+getSelectedUOM('SET',cost_testings[i-1])+'>SET</option><option value="UNIT" '+getSelectedUOM('UNIT',cost_testings[i-1])+'>UNIT</option>\n' +
            '                                               <option value="GM" '+getSelectedUOM('GM',cost_testings[i-1])+'>GM</option><option value="KG" '+getSelectedUOM('KG',cost_testings[i-1])+'>KG</option>' +
            '                                       </select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('width',cost_testings[x-1],'')+'" type="text" id="costing_testing_wedth'+x+'" name="costing_testing_wedth'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('usage',cost_testings[x-1],0)+'" type="number" id="costing_testing_usage'+x+'" name="costing_testing_usage'+x+'"  class="costing_formula_usage css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('wastage',cost_testings[x-1],0)+'" type="number" id="costing_testing_wastage'+x+'" name="costing_testing_wastage'+x+'"  class="costing_formula_wastage css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('gross_yield',cost_testings[x-1],0)+'" type="number" readonly id="costing_testing_gross_yield'+x+'" name="costing_testing_gross_yield'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('unit_cost',cost_testings[x-1],0)+'" type="number" id="costing_testing_unit_cost'+x+'" name="costing_testing_unit_cost'+x+'" value="0" class="costing_formula_unit_cost css-input-costing-data" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('handling',cost_testings[x-1],0)+'" type="number" id="costing_testing_handling'+x+'" name="costing_testing_handling'+x+'"  class="costing_formula_handling css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('total',cost_testings[x-1],0)+'" type="number" id="costing_testing_total_cost'+x+'" name="costing_testing_total_cost'+x+'" value="0.00" class="costing_formula_total_cost css-input-costing-data"  readonly>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('comment',cost_testings[x-1],'')+'" type="text" id="costing_testing_comment'+x+'" name="costing_testing_comment'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
        x++;
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

    let cost_others = [];
    if(sessionStorage.getItem('cost_others')){
        cost_others = JSON.parse(sessionStorage.getItem('cost_others'));
    }
    console.log('other');
    console.log(cost_others[0]);

    sessionStorage.setItem("costing_other_row_ids", ((parseInt(before_row_count)+1) + '-'+ other_row_count));
    $('#costing_other_row_names').val(((parseInt(before_row_count)+1) + '-'+ other_row_count));
    let x = 1;
    for (let i = before_row_count+1; i <= other_row_count; i++) {
        let item_no = i.toString();
        costing_other_tds = costing_other_tds.concat('' +
            '   <tr class="costing_other_data" id="costing_other_tr'+item_no+'">\n' +
            '                                    <td  id="costing_other_tr_tds'+item_no+'">' +
            '                                    <input style="display:none;" type="checkbox" id="costing_other_cb'+item_no+'" name="costing_other_cb'+item_no+'" class="css-costing-cb costing_other_cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('component',cost_others[x-1],'')+'" type="text" id="costing_other_component'+x+'" name="costing_other_component'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('material_id',cost_others[x-1],'')+'" type="text" id="costing_other_material_id'+x+'" name="costing_other_material_id'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('category_data',cost_others[x-1],'')+'" type="text" id="costing_other_categories'+x+'" name="costing_other_categories'+x+'"  class="css-input-costing-data-solo" style="text-align: start;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('nominated',cost_others[x-1],'')+'" type="text" id="costing_other_nominated'+x+'" name="costing_other_nominated'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('coo',cost_others[x-1],'')+'" type="text" id="costing_other_coo'+x+'" name="costing_other_coo'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('customer_mtl',cost_others[x-1],'')+'" type="text" id="costing_other_customer_mtl'+x+'" name="costing_other_customer_mtl'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('supplier_mtl',cost_others[x-1],'')+'" type="text" id="costing_other_supplier_mtl'+x+'" name="costing_other_supplier_mtl'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('description',cost_others[x-1],'')+'" type="text" id="costing_other_description'+x+'" name="costing_other_description'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('location',cost_others[x-1],'')+'" type="text" id="costing_other_location'+x+'" name="costing_other_location'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('mill_supplier',cost_others[x-1],'')+'" type="text" id="costing_other_mill_supplier'+x+'" name="costing_other_mill_supplier'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_other_uom'+x+'"   name="costing_other_uom'+x+'" class="css-select-costing-table css-select-costing-table-uom">' +
            '                                                <option value="MM" ' + getSelectedUOM('MM',cost_others[i-1]) + '>MM</option>\n' +
            '                                                <option value="CM"  '+getSelectedUOM('CM',cost_others[i-1])+'>CM</option><option value="M"  '+getSelectedUOM('M',cost_others[i-1])+'>M</option><option value="IN" '+getSelectedUOM('IN',cost_others[i-1])+'>IN</option>\n' +
            '                                                <option value="FT" '+getSelectedUOM('FT',cost_others[i-1])+'>FT</option><option value="YD" '+getSelectedUOM('YD',cost_others[i-1])+'>YD</option><option value="CM2" '+getSelectedUOM('CM2',cost_others[i-1])+'>CM2</option>\n' +
            '                                                <option value="M2" '+getSelectedUOM('M2',cost_others[i-1])+'>M2</option><option value="in2" '+getSelectedUOM('in2',cost_others[i-1])+'>in2</option><option value="f\'t2" '+getSelectedUOM('f\'t2',cost_others[i-1])+'>f\'t2</option>\n' +
            '                                                <option value="EA"  '+getSelectedUOM('EA',cost_others[i-1])+'>EA</option><option value="Pair" '+getSelectedUOM('Pair',cost_others[i-1])+'>Pair</option><option value="PCS" '+getSelectedUOM('PCS',cost_others[i-1])+'>PCS</option>\n' +
            '                                                <option value="ROLL" '+getSelectedUOM('ROLL',cost_others[i-1])+'>ROLL</option><option value="SET" '+getSelectedUOM('SET',cost_others[i-1])+'>SET</option><option value="UNIT" '+getSelectedUOM('UNIT',cost_others[i-1])+'>UNIT</option>\n' +
            '                                               <option value="GM" '+getSelectedUOM('GM',cost_others[i-1])+'>GM</option><option value="KG" '+getSelectedUOM('KG',cost_others[i-1])+'>KG</option>' +
            '                                       </select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('width',cost_others[x-1],'')+'" type="text" id="costing_other_wedth'+x+'" name="costing_other_wedth'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('usage',cost_others[x-1],0)+'" type="number" id="costing_other_usage'+x+'" name="costing_other_usage'+x+'"  class="costing_formula_usage css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('wastage',cost_others[x-1],0)+'" type="number" id="costing_other_wastage'+x+'" name="costing_other_wastage'+x+'"  class="costing_formula_wastage css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('gross_yield',cost_others[x-1],0)+'" type="number" readonly id="costing_other_gross_yield'+x+'" name="costing_other_gross_yield'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('unit_cost',cost_others[x-1],0)+'" type="number" id="costing_other_unit_cost'+x+'" name="costing_other_unit_cost'+x+'" value="0" class="costing_formula_unit_cost css-input-costing-data" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('handling',cost_others[x-1],0)+'" type="number" id="costing_other_handling'+x+'" name="costing_other_handling'+x+'"  class="costing_formula_handling css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('total',cost_others[x-1],0)+'" type="number" id="costing_other_total_cost'+x+'" name="costing_other_total_cost'+x+'" value="0.00" class="costing_formula_total_cost css-input-costing-data"  readonly>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('comment',cost_others[x-1],'')+'" type="text" id="costing_other_comment'+x+'" name="costing_other_comment'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
        x++;
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

    let cost_labors = [];
    if(sessionStorage.getItem('cost_labors')){
        cost_labors = JSON.parse(sessionStorage.getItem('cost_labors'));
    }
    console.log('labor');
    console.log(cost_labors[2]);

    sessionStorage.setItem("costing_labor_row_ids", ((parseInt(before_row_count)+1) + '-'+ labor_row_count));
    $('#costing_labor_row_names').val(((parseInt(before_row_count)+1) + '-'+ labor_row_count));
    let x = 1;
    for (let i = before_row_count+1; i <= labor_row_count; i++) {
        let item_no = i.toString();
        costing_labor_tds = costing_labor_tds.concat('' +
            '   <tr class="costing_labor_data" id="costing_labor_tr'+item_no+'">\n' +
            '                                    <td  id="costing_labor_tr_tds'+item_no+'">' +
            '                                    <input style="display:none;" type="checkbox" id="costing_labor_cb'+item_no+'" name="costing_labor_cb'+item_no+'" class="css-costing-cb costing_labor_cb" >'+item_no.padStart(3,"0")+
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('component',cost_labors[x-1],'')+'" type="text" id="costing_labor_component'+x+'" name="costing_labor_component'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('material_id',cost_labors[x-1],'')+'" type="text" id="costing_labor_material_id'+x+'" name="costing_labor_material_id'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('category_data',cost_labors[x-1],'')+'" type="text" id="costing_labor_categories'+x+'" name="costing_labor_categories'+x+'"  class="css-input-costing-data-solo" style="text-align: start;">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('nominated',cost_labors[x-1],'')+'" type="text" id="costing_labor_nominated'+x+'" name="costing_labor_nominated'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('coo',cost_labors[x-1],'')+'" type="text" id="costing_labor_coo'+x+'" name="costing_labor_coo'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('customer_mtl',cost_labors[x-1],'')+'" type="text" id="costing_labor_customer_mtl'+x+'" name="costing_labor_customer_mtl'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('supplier_mtl',cost_labors[x-1],'')+'" type="text" id="costing_labor_supplier_mtl'+x+'" name="costing_labor_supplier_mtl'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('description',cost_labors[x-1],'')+'" type="text" id="costing_labor_description'+x+'" name="costing_labor_description'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('location',cost_labors[x-1],'')+'" type="text" id="costing_labor_location'+x+'" name="costing_labor_location'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('mill_supplier',cost_labors[x-1],'')+'" type="text" id="costing_labor_mill_supplier'+x+'" name="costing_labor_mill_supplier'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                      <select id="costing_labor_uom'+x+'"   name="costing_labor_uom'+x+'" class="css-select-costing-table css-select-costing-table-uom">' +
            '                                                <option value="MM" ' + getSelectedUOM('MM',cost_labors[i-1]) + '>MM</option>\n' +
            '                                                <option value="CM"  '+getSelectedUOM('CM',cost_labors[i-1])+'>CM</option><option value="M"  '+getSelectedUOM('M',cost_labors[i-1])+'>M</option><option value="IN" '+getSelectedUOM('IN',cost_labors[i-1])+'>IN</option>\n' +
            '                                                <option value="FT" '+getSelectedUOM('FT',cost_labors[i-1])+'>FT</option><option value="YD" '+getSelectedUOM('YD',cost_labors[i-1])+'>YD</option><option value="CM2" '+getSelectedUOM('CM2',cost_labors[i-1])+'>CM2</option>\n' +
            '                                                <option value="M2" '+getSelectedUOM('M2',cost_labors[i-1])+'>M2</option><option value="in2" '+getSelectedUOM('in2',cost_labors[i-1])+'>in2</option><option value="f\'t2" '+getSelectedUOM('f\'t2',cost_labors[i-1])+'>f\'t2</option>\n' +
            '                                                <option value="EA"  '+getSelectedUOM('EA',cost_labors[i-1])+'>EA</option><option value="Pair" '+getSelectedUOM('Pair',cost_labors[i-1])+'>Pair</option><option value="PCS" '+getSelectedUOM('PCS',cost_labors[i-1])+'>PCS</option>\n' +
            '                                                <option value="ROLL" '+getSelectedUOM('ROLL',cost_labors[i-1])+'>ROLL</option><option value="SET" '+getSelectedUOM('SET',cost_labors[i-1])+'>SET</option><option value="UNIT" '+getSelectedUOM('UNIT',cost_labors[i-1])+'>UNIT</option>\n' +
            '                                               <option value="GM" '+getSelectedUOM('GM',cost_labors[i-1])+'>GM</option><option value="KG" '+getSelectedUOM('KG',cost_labors[i-1])+'>KG</option>' +
            '                                       </select>' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('width',cost_labors[i-1],'')+'" type="text" id="costing_labor_wedth'+x+'" name="costing_labor_wedth'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('usage',cost_labors[x-1],0)+'" type="number" id="costing_labor_usage'+x+'" name="costing_labor_usage'+x+'"  class="costing_formula_usage css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('wastage',cost_labors[x-1],0)+'" type="number" id="costing_labor_wastage'+x+'" name="costing_labor_wastage'+x+'"  class="costing_formula_wastage css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('gross_yield',cost_labors[x-1],0)+'" type="number" readonly id="costing_labor_gross_yield'+x+'" name="costing_labor_gross_yield'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('unit_cost',cost_labors[x-1],0)+'" type="number" id="costing_labor_unit_cost'+x+'" name="costing_labor_unit_cost'+x+'" value="0" class="costing_formula_unit_cost css-input-costing-data" >\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('handling',cost_labors[x-1],0)+'" type="number" id="costing_labor_handling'+x+'" name="costing_labor_handling'+x+'"  class="costing_formula_handling css-input-costing-data"  >\n' +
            '                                    <input type="text"  disabled value="%" class="costing_percent_sign_data">\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input type="text" disabled value="$" class="costing_fob_sign costing_fob_sign_data">\n' +
            '                                    <input value="'+getCategoryValue('total',cost_labors[x-1],0)+'" type="number" id="costing_labor_total_cost'+x+'" name="costing_labor_total_cost'+x+'" value="0.00" class="costing_formula_total_cost css-input-costing-data"  readonly>\n' +
            '                                     </td>' +
            '                                    <td>\n' +
            '                                    <input value="'+getCategoryValue('comment',cost_labors[x-1],'')+'" type="text" id="costing_labor_comment'+x+'" name="costing_labor_comment'+x+'"  class="css-input-costing-data-solo" >\n' +
            '                                     </td>' +
            '                                    <td  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></td>\n' +
            '                                </tr>' +
            '');
        x++;
    }

    costing_labor_tbody.append(costing_labor_tds);
}


function getCategoryValue(column,cost_category,default_val){
    let val = '';
    if(cost_category === undefined){
        val = '';
    }else if(cost_category === null){
        val = '';
    }else{
        val = cost_category['cost_' + column];
    }

    if(val === '' || val === null ){
        val = default_val;
    }

    return val;
}

