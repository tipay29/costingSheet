
                    <tr class="costing_header">
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Item</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb;font-size: .9em; ">Component</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Material ID</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb;text-align:start;">Category</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb;font-size: .7em; ">Nominated/Non-nominated</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">COO</th>

                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb;font-size: .7em; ">Customer Material#</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb;font-size: .7em; ">Supplier Material#</th>

                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Description</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb;font-size: .8em; ">Location/Position</th>

                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Mill/Supplier</th>

                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">UOM</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Width</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Usage</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb;font-size: .8em; ">Wastage</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb;font-size: .8em; ">Gross Yield</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Unit Cost</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb;font-size: .8em; ">Handling</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Total</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Comment</th>
                        <th  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></th>
                    </tr>


                    <tbody id="costing_labor_tbody">

                    </tbody>

                    <tr class="costing_header_total">
                        <th style="background-color: #b5f7bd; ">
                            <a class="costing_btn_add_remove" id="costing_labor_show_cb_item_btn"><i style="color: gray;" class="fa fa-check-circle" aria-hidden="true"></i></a>
                            <a class="costing_btn_add_remove" id="costing_labor_hide_cb_item_btn"><i style="color: gray;" class="fa fa-times-circle" aria-hidden="true"></i></a>
                            <a class="costing_btn_add_remove" id="costing_add_labor_row_btn"><i style="color: #0d6efd;" class="fa fa-plus-square" aria-hidden="true"></i></a>
                            <a class="costing_btn_add_remove" id="costing_rmv_labor_row_btn"><i style="color: indianred;" class="fa fa-minus-square" aria-hidden="true"></i></a>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_labor_component_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_labor_component_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_labor_material_id_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_labor_material_id_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="vertical-align: top;background-color: #b5f7bd;text-align:start;font-size:.7em; ">
                            <span style="display: inline;" class="btn_apply_labor_categories btn_apply_content">12.Labor/ Overheads/ Profit</span>
                            <span style="display: none;" id="costing_labor_categories_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_labor_categories_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_labor_nominated_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_labor_nominated_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_labor_coo_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_labor_coo_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>

                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_labor_customer_mtl_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_labor_customer_mtl_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_labor_supplier_mtl_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_labor_supplier_mtl_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>

                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_labor_description_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_labor_description_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_labor_location_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_labor_location_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>

                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_labor_mill_supplier_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_labor_mill_supplier_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>


                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_labor_uom_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_labor_uom_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="text-align:start;vertical-align: top;background-color: #b5f7bd; " colspan="4">

                            <span style="display: inline;" class="btn_apply_labor_total_cost btn_apply_content">12. Total Cost - Labor/Overheads/Profit</span>
                            <span style="display: none;" id="costing_labor_wedth_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_labor_wedth_btn_apply_down" class="btn_apply">&#9660</span>
                            <span style="display: none;" id="costing_labor_usage_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_labor_usage_btn_apply_down" class="btn_apply">&#9660</span>
                            <span style="display: none;" id="costing_labor_wastage_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_labor_wastage_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_labor_unit_cost_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_labor_unit_cost_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_labor_handling_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_labor_handling_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <input type="text" id="" disabled value="$" class="costing_fob_sign costing_fob_sign_total">
                            <input type="text" id="costing_labor_total_fob" name="costing_labor_total_fob"
                                   value="0.00" class="css-input-costing-total" style="width: 68px;" readonly>
                        </th>
                        <th style="background-color: #b5f7bd; ">
                            <span style="display: none;" id="costing_labor_comment_btn_apply_up" class="btn_apply">&#9650</span>
                            <span style="display: none;" id="costing_labor_comment_btn_apply_down" class="btn_apply">&#9660</span>
                        </th>
                        <th  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></th>
                    </tr>

                    <tr class="costing_final_total">
                        <th style="background-color: #bfcdf2; "></th>
                        <th style="background-color: #bfcdf2; "></th>
                        <th style="background-color: #bfcdf2; "></th>
                        <th style="text-align:start;vertical-align: top;background-color: #bfcdf2;color:blue;">Total Cost</th>
                        <th style="background-color: #bfcdf2; "></th>
                        <th style="background-color: #bfcdf2; "></th>
                        <th style="background-color: #bfcdf2; "></th>
                        <th style="background-color: #bfcdf2; "></th>
                        <th style="background-color: #bfcdf2; "></th>
                        <th style="background-color: #bfcdf2; "></th>
                        <th style="background-color: #bfcdf2; "></th>
                        <th style="background-color: #bfcdf2; "></th>
                        <th style="text-align:start;vertical-align: top;background-color: #bfcdf2;color:blue; " colspan="4">Total Cost - FOB</th>
                        <th style="background-color: #bfcdf2; "></th>
                        <th style="text-align:end;background-color: #bfcdf2;color:blue; "></th>
                        <th style="background-color: #bfcdf2; ">
                            <input type="text" id="" disabled value="$" class="costing_fob_sign costing_fob_sign_total" style="color:blue;background-color: #bfcdf2 !important;">
                            <input type="text" id="costing_total_cost_fob" name="costing_total_cost_fob"
                                   value="0.00" class="css-input-costing-total" style="color:blue;width: 68px;background-color: #bfcdf2 !important;" readonly>
                        </th>
                        <th style="background-color: #bfcdf2; "></th>
                        <th  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></th>
                    </tr>

                </table>

            </div>
        </div>
    </div>
</div>
