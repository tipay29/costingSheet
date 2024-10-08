<div class="row">
    <div class="col-md-5" >

        <div class="row" style="border:1px solid black;">
            <h6 class="text-center text-bg-secondary m-0" style="border:1px solid black;">REMARKS / SPECIAL REQUIREMENTS</h6>
            <div class="col-md-12 css-costing-remarks-table p-0" style="border: 1px solid black;min-height: 10rem;">
                <table class="table table-bordered m-0">
                    <tbody>
                    @for($x=1;$x<=10;$x++)
                        <tr>
                            <td width="9%" scope="col" style="text-align: center; ">{{$x}}</td>
                            <td width="91%" scope="col" >
                                <input id="costing_remark_{{$x}}" name="costing_remark_{{$x}}" class="css-input-costing-labor-cost   " type="text">
                            </td>
                        </tr>
                    @endfor
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="col-md-3">

        <div class="row" style="border:1px solid black;">
            <h6 class="text-center text-bg-secondary m-0" style="border:1px solid black;">LABOR COSTS</h6>
            <div class="col-md-12 css-costing-labor-cost-table p-0" style="border: 1px solid black;min-height: 10rem;">
                <table class="table table-bordered m-0 ">
                    <tbody>
                    <tr>
                        <td scope="col"  >LABOR COST PER PC</td>
                        <td class="costing_fob_sign" id=""  style="font-weight:bold;text-align:center;">$</td>
                        <td  id="costing_cost_per_pc_first" scope="col" style="text-align: end; background-color: #d1d2d4;">
                        </td>
                        <td class="costing_fob_sign" id="" style="font-weight:bold;text-align:center;">$</td>
                        <td  id="costing_cost_per_pc_second" scope="col" style="text-align: end; background-color: #d1d2d4;">
                        </td>
                    </tr>
                        <tr>
                            <td width="40%" scope="col" style="">SMV</td>
                            <td width="3%" scope="col" style=""></td>
                            <td width="27%" scope="col"  >
                                <input id="costing_smv_first" name="costing_smv_first"
                                       class="css-input-costing-labor-cost text-end" min="1" type="number">
                            </td>
                            <td width="3%" scope="col" style=""></td>
                            <td width="27%" scope="col"  id="costing_smv_second" style="text-align: end; background-color: #d1d2d4;">

                            </td>
                        </tr>
                        <tr>
                            <td  scope="col" style=" ">HOURS</td>
                            <td scope="col" style=""></td>
                            <td  scope="col" >
                                <input id="costing_hours_first" name="costing_hours_first"
                                       class="css-input-costing-labor-cost text-end" min="1" type="number">
                            </td>
                            <td scope="col" style=""></td>
                            <td  scope="col" >
                                <input id="costing_hours_second" name="costing_hours_second"
                                       class="css-input-costing-labor-cost text-end" min="1" type="number">
                            </td>
                        </tr>
                        <tr>
                            <td scope="col" style=" ">DAYS</td>
                            <td scope="col" style=""></td>
                            <td  scope="col">
                                <input id="costing_days_first" name="costing_days_first"
                                       class="css-input-costing-labor-cost text-end" min="1" type="number">
                            </td>
                            <td scope="col" style=""></td>
                            <td  scope="col"  >
                                <input id="costing_days_second" name="costing_days_second"
                                       class="css-input-costing-labor-cost text-end" min="1" type="number">
                            </td>
                        </tr>
                        <tr>
                            <td  scope="col" style=" ">OPERATORS</td>
                            <td scope="col" style=""></td>
                            <td  scope="col" >
                                <input id="costing_operators_first" name="costing_operators_first"
                                       class="css-input-costing-labor-cost text-end" min="1" type="number">
                            </td>
                            <td scope="col" style=""></td>
                            <td  scope="col"  >
                                <input id="costing_operators_second" name="costing_operators_second"
                                       class="css-input-costing-labor-cost text-end" min="1" type="number">
                            </td>
                        </tr>
                        <tr>
                            <td   scope="col" style=" ">OUTPUT PER DAY</td>
                            <td scope="col" style=""></td>
                            <td id="costing_output_per_day_first"  scope="col" style="text-align: end; background-color: #d1d2d4;"></td>
                            <td scope="col" style=""></td>
                            <td   scope="col" >
                                <input id="costing_output_per_day_second" name="costing_output_per_day_second"
                                       class="css-input-costing-labor-cost text-end" min="1" type="number">
                            </td>
                        </tr>
                        <tr>
                            <td  scope="col" style=" ">MONTHLY WAGE</td>
                            <td class="costing_fob_sign" scope="col" style="text-align:center;font-weight:bold;">$</td>
                            <td  scope="col" >
                                <input id="costing_monthly_wages_first" name="costing_monthly_wages_first"
                                       class="css-input-costing-labor-cost text-end" min="1" type="number">
                            </td>
                            <td class="costing_fob_sign" scope="col" style="text-align:center;font-weight:bold;font-weight:bold;">$</td>
                            <td  scope="col"  >
                                <input  id="costing_monthly_wages_second" name="costing_monthly_wages_second"
                                        class="css-input-costing-labor-cost text-end" min="1" type="number">
                            </td>
                        </tr>
                        <tr>
                            <td  scope="col" style=" ">HOURLY WAGE</td>
                            <td class="costing_fob_sign" scope="col" style="font-weight:bold;text-align:center;">$</td>
                            <td  id="costing_hourly_wages_first" scope="col" style="text-align: end; background-color: #d1d2d4;">
                            </td>
                            <td class="costing_fob_sign" scope="col" style="font-weight:bold;text-align:center;">$</td>
                            <td  id="costing_hourly_wages_second" scope="col" style="text-align: end; background-color: #d1d2d4;">
                            </td>
                        </tr>
                        <tr>
                            <td  scope="col" style=" ">HW WITH INDIRECT</td>
                            <td class="costing_fob_sign" scope="col" style="font-weight:bold;text-align:center;">$</td>
                            <td  id="costing_hourly_wages_id_first" scope="col" style="text-align: end; background-color: #d1d2d4;">
                            </td>
                            <td class="costing_fob_sign" scope="col" style="font-weight:bold;text-align:center;">$</td>
                            <td  id="costing_hourly_wages_id_second" scope="col" style="text-align: end; background-color: #d1d2d4;">
                            </td>
                        </tr>
                        <tr>
                            <td  scope="col" style=" ">WAGES PER MINUTE</td>
                            <td class="costing_fob_sign" id=""  style="font-weight:bold;text-align:center;">$</td>
                            <td  id="costing_wages_per_min_first" scope="col" style="text-align: end; background-color: #d1d2d4;">
                            </td>
                            <td class="costing_fob_sign" style="font-weight:bold;text-align:center;">$</td>
                            <td  id="costing_wages_per_min_second" scope="col" style="text-align: end; background-color: #d1d2d4;">
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="col-md-4">

        <div class="row" style="border:1px solid black;">
            <div class="col-md-12 css-costing-summary-table p-0">
                <table class="table table-bordered m-0">
                    <tbody style="font-weight: bold;">
                        <tr style="border-top:1px solid black;border-bottom:1px solid black;">
                            <td width="12%" scope="col" style="border-left:1px solid black;">A</td>
                            <td width="56%" scope="col" style=" ">MATERIAL COSTS</td>
                            <td class="costing_fob_sign" width="1%" scope="col" style="font-weight: bold;">$</td>
                            <td width="15%" scope="col" style=" ">
                                <input type="number" id="costing_material_cost_fob" name="costing_material_cost_fob"
                                       val="0" class="css-input-costing-data-solo text-end" readonly>
                            </td>
                            <td width="15%" scope="col" style="">
                                <input type="number" id="costing_material_cost_percent"
                                       val="0" class="css-input-costing-data-solo text-end" readonly>
                            </td>
                            <td width="1%" scope="col" style="font-weight: bold;border-right:1px solid black;">%</td>
                        </tr>
                        <tr style="border-top:1px solid black;border-bottom:1px solid black;">
                            <td  scope="col" style="border-left:1px solid black;">B</td>
                            <td  scope="col" style=" ">L.O.P.</td>
                            <td class="costing_fob_sign" width="1%" scope="col" style="font-weight: bold;">$</td>
                            <td scope="col" style=" ">
                                <input type="number" id="costing_lop_fob" name="costing_lop_fob"
                                       val="0" class="css-input-costing-data-solo text-end" readonly>
                            </td>
                            <td  scope="col" style="">
                                <input type="number" id="costing_lop_percent"
                                       val="0" class="css-input-costing-data-solo text-end" readonly>
                            </td>
                            <td width="1%" scope="col" style="font-weight: bold;border-right:1px solid black;">%</td>
                        </tr>
                        <tr style="border-top:1px solid black;border-bottom:1px solid black;">
                            <td scope="col" style="border-left:1px solid black;"></td>
                            <td  scope="col" style=" ">CM</td>
                            <td class="costing_fob_sign" width="1%" scope="col" style="font-weight: bold;">$</td>
                            <td  scope="col" style=" "></td>
                            <td  scope="col" style=""></td>
                            <td width="1%" scope="col" style="font-weight: bold;border-right:1px solid black;">%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="row" style="border:1px solid black;">
            <h6 class="text-center text-bg-secondary m-0 " style="height: 1rem;">MOQ - PRODUCTION</h6>
            <div class="col-md-12 css-costing-summary-table p-0">
                <table class="table table-bordered m-0">
                    <tbody>
                        <tr>
                            <td  scope="col" style=" font-weight: bold;">QTY(pcs)</td>

                            <td  scope="col" >
                                <input type="text" id="costing_moq_qty_1" name="costing_moq_qty_1"
                                       class="css-input-costing-data-solo" >
                            </td>
                            <td  scope="col"></td>

                            <td  scope="col" >
                                <input type="text" id="costing_moq_qty_2" name="costing_moq_qty_2"
                                       class="css-input-costing-data-solo" >
                            </td>
                            <td  scope="col"></td>

                            <td  scope="col" >
                                <input type="text" id="costing_moq_qty_3" name="costing_moq_qty_3"
                                       class="css-input-costing-data-solo" >
                            </td>
                            <td  scope="col"></td>

                            <td  scope="col" >
                                <input type="text" id="costing_moq_qty_4" name="costing_moq_qty_4"
                                       class="css-input-costing-data-solo" >
                            </td>
                            <td  scope="col"></td>

                            <td  scope="col" >
                                <input type="text" id="costing_moq_qty_5" name="costing_moq_qty_5"
                                       class="css-input-costing-data-solo" >
                            </td>
                            <td  scope="col"></td>

                            <td  scope="col" >
                                <input type="text" id="costing_moq_qty_6" name="costing_moq_qty_6"
                                       class="css-input-costing-data-solo" >
                            </td>
                            <td  scope="col"></td>
                        </tr>
                        <tr>
                            <td width="15%" scope="col" style=" font-weight: bold;">Upcharge</td>

                            <td  scope="col" >
                                <input value="5" type="text" id="costing_moq_upcharge_1"
                                       name="costing_moq_upcharge_1" class="css-input-costing-data-solo" >
                            </td>
                            <td width="2%" scope="col" style=" font-weight: bold;" >%</td>

                            <td  scope="col" >
                                <input value="10" type="text" id="costing_moq_upcharge_2"
                                       name="costing_moq_upcharge_2" class="css-input-costing-data-solo" >
                            </td>
                            <td width="2%" scope="col" style=" font-weight: bold;" >%</td>

                            <td  scope="col" >
                                <input value="20" type="text" id="costing_moq_upcharge_3"
                                       name="costing_moq_upcharge_3" class="css-input-costing-data-solo" >
                            </td>
                            <td width="2%" scope="col" style=" font-weight: bold;" >%</td>

                            <td  scope="col" >
                                <input value="30" type="text" id="costing_moq_upcharge_4"
                                       name="costing_moq_upcharge_4" class="css-input-costing-data-solo" >
                            </td>
                            <td width="2%" scope="col" style=" font-weight: bold;" >%</td>

                            <td  scope="col" >
                                <input value="50" type="text" id="costing_moq_upcharge_5"
                                       name="costing_moq_upcharge_5" class="css-input-costing-data-solo" >
                            </td>
                            <td width="2%" scope="col" style=" font-weight: bold;" >%</td>

                            <td  scope="col" >
                                <input value="100" type="text" id="costing_moq_upcharge_6"
                                       name="costing_moq_upcharge_6" class="css-input-costing-data-solo" >
                            </td>
                            <td width="2%" scope="col" style=" font-weight: bold;" >%</td>
                        </tr>
                        <tr>
                            <td  scope="col" style=" font-weight: bold;">FOB</td>
                            <td  scope="col" >
                                <input value="" type="text" id="costing_moq_fob_1" class="css-input-costing-data-solo" readonly>
                            </td>
                            <td  scope="col"></td>
                            <td  scope="col" >
                                <input value="" type="text" id="costing_moq_fob_2" class="css-input-costing-data-solo" readonly>
                            </td>
                            <td  scope="col"></td>
                            <td  scope="col" >
                                <input value="" type="text" id="costing_moq_fob_3" class="css-input-costing-data-solo" readonly>
                            </td>
                            <td  scope="col"></td>
                            <td  scope="col" >
                                <input value="" type="text" id="costing_moq_fob_4" class="css-input-costing-data-solo" readonly>
                            </td>
                            <td  scope="col" ></td>
                            <td  scope="col" >
                                <input value="" type="text" id="costing_moq_fob_5" class="css-input-costing-data-solo" readonly>
                            </td>
                            <td  scope="col"></td>
                            <td  scope="col" >
                                <input value="" type="text" id="costing_moq_fob_6" class="css-input-costing-data-solo" readonly>
                            </td>
                            <td  scope="col"></td>



                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

        <div class="row" style="border:2px solid black;min-height: 5rem;">
            <h6 class="text-center text-bg-secondary m-0" style="height: 1rem;">MOQ - FABRIC</h6>
            <div class="col-md-12 css-costing-summary-table p-0">
                <table class="table table-bordered m-0">
                    <tbody>
                    <tr>
                        <td width="100%" scope="col" style=" ">1. Fabric MOQ will be applied based on the order QTY, and fabric/trim MOQ.</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
