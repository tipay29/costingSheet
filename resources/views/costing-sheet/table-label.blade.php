
                    <tr class="costing_header">
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Item</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Component</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Material ID</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb;text-align:start; ">5.Labels</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb;font-size: .7em; ">Nominated/Non-nominated</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">COO</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Supplier Ref</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Description</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb;font-size: .8em; ">Location/Position</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Mill/Supplier</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">UOM</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Width</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Usage</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Wastage</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Gross Yield</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Unit Cost</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Handling</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Total</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Comment</th>
                        <th  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></th>
                    </tr>

                    <tbody id="costing_label_tbody">

                    </tbody>

                    <tr class="costing_header_total">
                        <th style="background-color: #b5f7bd; ">
                            <a class="costing_btn_add_remove" id="costing_label_show_cb_item_btn"><i style="color: gray;" class="fa fa-check-circle" aria-hidden="true"></i></a>
                            <a class="costing_btn_add_remove" id="costing_label_hide_cb_item_btn"><i style="color: gray;" class="fa fa-times-circle" aria-hidden="true"></i></a>
                            <a class="costing_btn_add_remove" id="costing_add_label_row_btn"><i style="color: #0d6efd;" class="fa fa-plus-square" aria-hidden="true"></i></a>
                            <a class="costing_btn_add_remove" id="costing_rmv_label_row_btn"><i style="color: indianred;" class="fa fa-minus-square" aria-hidden="true"></i></a>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_label_component_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_label_component_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_label_material_id_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_label_material_id_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="text-align:start;vertical-align: top;background-color: #b5f7bd; ">
                            <span style="display: inline;" class="btn_apply_label_categories btn_apply_content">5.Labels</span>
                            <span style="display: none;" id="costing_label_categories_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_label_categories_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_label_nominated_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_label_nominated_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_label_coo_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_label_coo_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_label_supplier_ref_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_label_supplier_ref_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_label_description_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_label_description_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_label_location_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_label_location_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_label_mill_supplier_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_label_mill_supplier_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_label_uom_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_label_uom_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="text-align:start;vertical-align: top;background-color: #b5f7bd; " colspan="4">

                            <span style="display: inline;" class="btn_apply_label_total_cost btn_apply_content">5. Total Cost - Labels</span>
                            <span style="display: none;" id="costing_label_wedth_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_label_wedth_btn_apply_down" class="btn_apply">&#9660</span>
                            <span style="display: none;" id="costing_label_usage_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_label_usage_btn_apply_down" class="btn_apply">&#9660</span>
                            <span style="display: none;" id="costing_label_wastage_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_label_wastage_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_label_unit_cost_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_label_unit_cost_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_label_handling_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_label_handling_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <input type="text" id="" disabled value="$" class="costing_fob_sign costing_fob_sign_total">
                            <input type="text" id="costing_label_total_fob" name="costing_label_total_fob"
                                   value="0.00" class="css-input-costing-total" style="width: 68px;" readonly>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_label_comment_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_label_comment_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></th>
                    </tr>

