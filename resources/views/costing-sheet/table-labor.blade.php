
                    <tr class="costing_header">
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Item</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Component</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Material ID</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb;text-align:start;font-size:.7em;  ">12.Labor/ Overheads/ Profit</th>
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


                    <tbody id="costing_labor_tbody">

                    </tbody>

                    <tr class="costing_header_total">
                        <th style="background-color: #b5f7bd; ">
                            <a class="costing_btn_add_remove" id="costing_labor_show_cb_item_btn"><i style="color: gray;" class="fa fa-check-circle" aria-hidden="true"></i></a>
                            <a class="costing_btn_add_remove" id="costing_labor_hide_cb_item_btn"><i style="color: gray;" class="fa fa-times-circle" aria-hidden="true"></i></a>
                            <a class="costing_btn_add_remove" id="costing_add_labor_row_btn"><i style="color: #0d6efd;" class="fa fa-plus-square" aria-hidden="true"></i></a>
                            <a class="costing_btn_add_remove" id="costing_rmv_labor_row_btn"><i style="color: indianred;" class="fa fa-minus-square" aria-hidden="true"></i></a>
                        </th>
                        <th style="background-color: #b5f7bd; "></th>
                        <th style="background-color: #b5f7bd; "></th>
                        <th style="vertical-align: top;background-color: #b5f7bd;text-align:start;font-size:.7em; ">12.Labor/ Overheads/ Profit</th>
                        <th style="background-color: #b5f7bd; "></th>
                        <th style="background-color: #b5f7bd; "></th>
                        <th style="background-color: #b5f7bd; "></th>
                        <th style="background-color: #b5f7bd; "></th>
                        <th style="background-color: #b5f7bd; "></th>
                        <th style="background-color: #b5f7bd; "></th>
                        <th style="background-color: #b5f7bd; "></th>
                        <th style="text-align:start;vertical-align: top;background-color:#b5f7bd;font-size:.9em; " colspan="4">12. Total Cost - Labor/Overheads/Profit</th>
                        <th style="background-color: #b5f7bd; "></th>
                        <th style="text-align:end;background-color: #b5f7bd; "></th>
                        <th style="background-color: #b5f7bd; ">
                            <input type="text" id="" disabled value="$" class="costing_fob_sign costing_fob_sign_total">
                            <input type="text" id="costing_labor_total_fob" name="costing_labor_total_fob"
                                   value="0.00" class="css-input-costing-total" style="width: 68px;" readonly>
                        </th>
                        <th style="background-color: #b5f7bd; "></th>
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
