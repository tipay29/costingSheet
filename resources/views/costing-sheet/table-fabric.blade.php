<div class="row" style="min-width:100%;max-width:150%;">

    <div class="col-md-12 css-costing-header-table ">

        <div class="tbl-container">
            <div class="tbl-fixed" style="table-layout: fixed;
width: 100%;">

                <table class="table table-bordered tbl m-0" style="">

                    <tr  class="costing_header_ch">
                        <th  scope="col" class="cost_col_item_no" style="vertical-align: top;background-color: #e3ed26; ">序号</th>
                        <th  scope="col" class="cost_col_component" style="vertical-align: top;background-color: #e3ed26; ">分类编号</th>
                        <th  scope="col" class="cost_col_material_id" style="vertical-align: top;background-color: #e3ed26; ">物料简码</th>
                        <th  scope="col" class="cost_col_category" style="vertical-align: top;background-color: #e3ed26; ">成本类别</th>
                        <th  scope="col" class="cost_col_nominated" style="vertical-align: top;background-color: #e3ed26; ">指定/非指定</th>
                        <th  scope="col" class="cost_col_coo" style="vertical-align: top;background-color: #e3ed26; ">产地</th>
                        <th  scope="col" class="cost_col_supplier_ref" style="vertical-align: top;background-color: #e3ed26;font-size:.7em; ">客户料号/供应商货号</th>
                        <th  scope="col" class="cost_col_description" style="vertical-align: top;background-color: #e3ed26; ">物料描述</th>
                        <th  scope="col" class="cost_col_location" style="vertical-align: top;background-color: #e3ed26; ">部位名称</th>
                        <th  scope="col" class="cost_col_mill_supplier" style="vertical-align: top;background-color: #e3ed26; ">供应商</th>
                        <th  scope="col" class="cost_col_uom" style="vertical-align: top;background-color: #e3ed26; ">单位</th>
                        <th  scope="col" class="cost_col_width" style="vertical-align: top;background-color: #e3ed26; ">规格</th>
                        <th  scope="col" class="cost_col_usage" style="vertical-align: top;background-color: #e3ed26; ">用量</th>
                        <th  scope="col" class="cost_col_wastage" style="vertical-align: top;background-color: #e3ed26; ">损耗</th>
                        <th  scope="col" class="cost_col_gross_yield" style="vertical-align: top;background-color: #e3ed26; ">总用量</th>
                        <th  scope="col" class="cost_col_unit_cost" style="vertical-align: top;background-color: #e3ed26; ">单价</th>
                        <th  scope="col" class="cost_col_handling" style="vertical-align: top;background-color: #e3ed26; ">处理</th>
                        <th  scope="col" class="cost_col_total" style="vertical-align: top;background-color: #e3ed26; ">单价</th>
                        <th  scope="col" class="cost_col_comment" style="vertical-align: top;background-color: #e3ed26; ">评论</th>
                        <th  scope="col" class="cost_col_tabspace" style="border:1px solid var(--bs-body-bg);"></th>


                    </tr>
                    <tr class="costing_header">
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Item</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Component</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb; ">Material ID</th>
                        <th scope="col" style="vertical-align: top;background-color: #7b9ddb;text-align:start; ">1.Fabrics</th>
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

                    <tbody id="costing_fabric_tbody">

                    </tbody>

                        <tr class="costing_header_total">
                            <th style="background-color: #b5f7bd; ">
                                <a class="costing_btn_add_remove" id="costing_fabric_show_cb_item_btn"><i style="color: gray;" class="fa fa-check-circle" aria-hidden="true"></i></a>
                                <a class="costing_btn_add_remove" id="costing_fabric_hide_cb_item_btn"><i style="color: gray;" class="fa fa-times-circle" aria-hidden="true"></i></a>
                                <a class="costing_btn_add_remove" id="costing_add_fabric_row_btn"><i style="color: #0d6efd;" class="fa fa-plus-square" aria-hidden="true"></i></a>
                                <a class="costing_btn_add_remove" id="costing_rmv_fabric_row_btn"><i style="color: indianred;" class="fa fa-minus-square" aria-hidden="true"></i></a>

                            </th>
                            <th style="background-color: #b5f7bd; ">
                            </th>
                            <th style="background-color: #b5f7bd; "></th>
                            <th style="vertical-align: top;background-color: #b5f7bd; text-align:start;">1.Fabrics</th>
                            <th style="background-color: #b5f7bd; "></th>
                            <th style="background-color: #b5f7bd; "></th>
                            <th style="background-color: #b5f7bd; "> </th>
                            <th style="background-color: #b5f7bd; "></th>
                            <th style="background-color: #b5f7bd; "></th>
                            <th style="background-color: #b5f7bd; "></th>
                            <th style="background-color: #b5f7bd; "></th>
                            <th style="text-align:start;vertical-align: top;background-color: #b5f7bd; " colspan="4">1. Total Cost - Fabrics</th>
                            <th style="background-color: #b5f7bd; "></th>
                            <th style="text-align:end;background-color: #b5f7bd; "></th>
                            <th style="background-color: #b5f7bd; ">
                                <input type="text" id="" disabled value="$" class="costing_fob_sign costing_fob_sign_total">
                                <input type="text" id="costing_fabric_total_fob" name="costing_fabric_total_fob"
                                       value="0.00" class="css-input-costing-total" style="width: 68px;" readonly>
                            </th>
                            <th style="background-color: #b5f7bd; "></th>
                            <th  scope="col" style="min-width:35px;border:1px solid var(--bs-body-bg);"></th>
                        </tr>
{{-- costing_fob_sign--}}


