<div class="row">

    <div class="col-md-5">

        <div class="row">
            <h6 class="text-center text-bg-secondary">SKETCHES</h6>
            <div class="col-md-3 p-0" style="border: 1px solid black;min-height: 14rem;">
                <h6 class="text-center text-bg-secondary ">FRONT</h6>
                <input type="file" name="costing_photo[]" id="costing_front_photo" style="display:none;"/>
                <label style="margin-left: 1rem;" for="costing_front_photo">Click here to upload</label>

                <input id="public_path" type="hidden" value="{{public_path()}}">

                <div id="div_image" style="min-height: 150px;">
                    <img id="#costing_display_front_photo"
                         @if($sketches)
                         src="{{asset($sketches->cost_front_sketch)}}"
                         @endif
                         class="img-fluid" alt="">
                </div>

            </div>
            <div class="col-md-3 p-0" style="border: 1px solid black;min-height: 14rem;">
                <h6 class="text-center text-bg-secondary ">BACK</h6>
                <input type="file" name="costing_photo[]" id="costing_back_photo" style="display:none;"/>
                <label style="margin-left: 1rem;"  for="costing_back_photo">Click here to upload</label>

                <div id="div_image" style="min-height: 150px;">
                    <img id="#costing_display_back_photo"
                         @if($sketches)
                         src="{{asset($sketches->cost_back_sketch)}}"
                         @endif
                         class="img-fluid" alt="">
                </div>

            </div>
            <div class="col-md-3 p-0" style="border: 1px solid black;min-height: 14rem;">
                <h6 class="text-center text-bg-secondary ">LEFT</h6>
                <input type="file" name="costing_photo[]" id="costing_left_photo" style="display:none;"/>
                <label style="margin-left: 1rem;"  for="costing_left_photo">Click here to upload</label>

                <div id="div_image" style="min-height: 150px;">
                    <img id="#costing_display_left_photo_aw"
                         @if($sketches)
                         src="{{asset($sketches->cost_left_sketch)}}"
                         @endif
                         class="img-fluid" alt="">
                </div>

            </div>
            <div class="col-md-3 p-0" style="border: 1px solid black;min-height: 14rem;">
                <h6 class="text-center text-bg-secondary ">RIGHT</h6>
                <input type="file" name="costing_photo[]" id="costing_right_photo" style="display:none;"/>
                <label style="margin-left: 1rem;"  for="costing_right_photo">Click here to upload</label>

                <div id="div_image" style="min-height: 150px;">
                    <img id="#costing_display_right_photo"
                         @if($sketches)
                         src="{{asset($sketches->cost_right_sketch)}}"
                         @endif
                         class="img-fluid" alt="">
                </div>

            </div>
        </div>
    </div>
    <div class="col-md-3">

        <div class="row">
            <h6 class="text-center text-bg-secondary">CHART</h6>
            <div class="col-md-12 " style="border: 1px solid black;min-height: 14rem;">

                <div style="width: 13.9rem; margin: auto; ">
                    <canvas id="myChart" ></canvas>
                </div>

            </div>
        </div>
    </div>
    <div class="col-md-4">

        <div class="row">
            <h6 class="text-center text-bg-secondary">COSTING SHEET BREAKDOWN</h6>
            <div class="col-md-12 css-costing-breakdown-table p-0" style="border: 1px solid black;min-height: 10rem;">
                <table class="table table-bordered m-0">
                    <tbody>
                        <tr>
                            <td width="12%" scope="col" style="text-align: center;font-weight: bold; ">1</td>
                            <td width="55%" scope="col" style="font-weight: bold; ">FABRICS</td>
                            <td width="2%" scope="col" style="font-weight: bold; ">$</td>
                            <td width="14%" scope="col">
                                <input type="number" id="costing_summary_fabric_total_fob"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td width="15%" scope="col" style="text-align: end;font-weight: bold; ">
                                <input type="number" id="costing_summary_fabric_percent"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td width="2%" scope="col" style="font-weight: bold; ">%</td>
                        </tr>
                        <tr>
                            <td  scope="col" style="text-align: center;font-weight: bold; ">2</td>
                            <td  scope="col" style="font-weight: bold; ">TRIMS</td>
                            <td  scope="col" style="font-weight: bold; ">$</td>
                            <td  scope="col" style="text-align: end;font-weight: bold; ">
                                <input type="number" id="costing_summary_trim_total_fob"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style=" text-align: end;font-weight: bold;">
                                <input type="number" id="costing_summary_trim_percent"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td scope="col" style="font-weight: bold; ">%</td>
                        </tr>
                        <tr>
                            <td  scope="col" style="text-align: center;font-weight: bold; ">3</td>
                            <td  scope="col" style="font-weight: bold; ">ZIPPERS</td>
                            <td  scope="col" style="font-weight: bold; ">$</td>
                            <td  scope="col" style="text-align: end;font-weight: bold; ">
                                <input type="number" id="costing_summary_zipper_total_fob"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style="text-align: end;font-weight: bold; ">
                                <input type="number" id="costing_summary_zipper_percent"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style="font-weight: bold; ">%</td>
                        </tr>
                        <tr>
                            <td  scope="col" style="text-align: center;font-weight: bold; ">4</td>
                            <td  scope="col" style="font-weight: bold; ">EMBELISHMENTS</td>
                                    <td  scope="col" style="font-weight: bold; ">$</td>
                            <td  scope="col" style="text-align: end;font-weight: bold; ">
                                <input type="number" id="costing_summary_embelishment_total_fob"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style="text-align: end;font-weight: bold; ">
                                <input type="number" id="costing_summary_embelishment_percent"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style="font-weight: bold; ">%</td>
                        </tr>
                        <tr>
                            <td  scope="col" style="text-align: center;font-weight: bold; ">5</td>
                            <td  scope="col" style="font-weight: bold; ">LABELS</td>
                                    <td  scope="col" style="font-weight: bold; ">$</td>
                            <td  scope="col" style="text-align: end;font-weight: bold; ">
                                <input type="number" id="costing_summary_label_total_fob"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style=" text-align: end;font-weight: bold;">
                                <input type="number" id="costing_summary_label_percent"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style="font-weight: bold; ">%</td>
                        </tr>
                        <tr>
                            <td  scope="col" style="text-align: center;font-weight: bold;">6</td>
                            <td  scope="col" style=" font-weight: bold;">THREADS</td>
                                    <td  scope="col" style="font-weight: bold; ">$</td>
                            <td  scope="col" style="text-align: end;font-weight: bold; ">
                                <input type="number" id="costing_summary_thread_total_fob"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style="text-align: end;font-weight: bold; ">
                                <input type="number" id="costing_summary_thread_percent"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style="font-weight: bold; ">%</td>
                        </tr>
                        <tr>
                            <td  scope="col" style="text-align: center;font-weight: bold; ">7</td>
                            <td  scope="col" style=" font-weight: bold;">PACKAGING</td>
                                    <td  scope="col" style="font-weight: bold; ">$</td>
                            <td  scope="col" style="text-align: end ;font-weight: bold;">
                                <input type="number" id="costing_summary_package_total_fob"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style="text-align: end;font-weight: bold; ">
                                <input type="number" id="costing_summary_package_percent"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style="font-weight: bold; ">%</td>
                        </tr>
                        <tr>
                            <td  scope="col" style="text-align: center;font-weight: bold; ">8</td>
                            <td  scope="col" style="font-weight: bold; ">WASHES / FINISHES</td>
                                    <td  scope="col" style="font-weight: bold; ">$</td>
                            <td  scope="col" style="text-align: end;font-weight: bold; ">
                                <input type="number" id="costing_summary_finish_total_fob"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style=" text-align: end;font-weight: bold;">
                                <input type="number" id="costing_summary_finish_percent"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style="font-weight: bold; ">%</td>
                        </tr>
                        <tr>
                            <td  scope="col" style="text-align: center;font-weight: bold; ">9</td>
                            <td  scope="col" style="font-weight: bold; ">EXPORT / IMPORT FEE</td>
                                    <td  scope="col" style="font-weight: bold; ">$</td>
                            <td  scope="col" style="text-align: end;font-weight: bold; ">
                                <input type="number" id="costing_summary_export_total_fob"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style="text-align: end;font-weight: bold; ">
                                <input type="number" id="costing_summary_export_percent"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style="font-weight: bold; ">%</td>
                        </tr>
                        <tr>
                            <td  scope="col" style="text-align: center;font-weight: bold; ">10</td>
                            <td  scope="col" style="font-weight: bold; ">TESTING</td>
                                    <td  scope="col" style="font-weight: bold; ">$</td>
                            <td  scope="col" style="text-align: end;font-weight: bold; ">
                                <input type="number" id="costing_summary_testing_total_fob"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style="text-align: end;font-weight: bold; ">
                                <input type="number" id="costing_summary_testing_percent"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style="font-weight: bold; ">%</td>
                        </tr>
                        <tr>
                            <td  scope="col" style="text-align: center;font-weight: bold; ">11</td>
                            <td  scope="col" style=" font-weight: bold;">OTHERS</td>
                                    <td  scope="col" style="font-weight: bold; ">$</td>
                            <td  scope="col" style="text-align: end;font-weight: bold; ">
                                <input type="number" id="costing_summary_other_total_fob"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style="text-align: end;font-weight: bold; ">
                                <input type="number" id="costing_summary_other_percent"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style="font-weight: bold; ">%</td>
                        </tr>
                        <tr>
                            <td  scope="col" style="text-align: center;font-weight: bold; ">12</td>
                            <td  scope="col" style="font-weight: bold; ">LABOR / OVERHEADS / PROFIT</td>
                                    <td  scope="col" style="font-weight: bold; ">$</td>
                            <td  scope="col" style="text-align: end;font-weight: bold; ">
                                <input type="number" id="costing_summary_labor_total_fob"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style="text-align: end;font-weight: bold; ">
                                <input type="number" id="costing_summary_labor_percent"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style="font-weight: bold; ">%</td>
                        </tr>
                        <tr>
                            <td  scope="col" style=" text-align: center;font-weight: bold;"></td>
                            <td  scope="col" style="color:blue;font-weight: bold; ">TOTAL COST - FOB</td>
                            <td  scope="col" style="font-weight: bold; ">$</td>
                            <td  scope="col" style="text-align: end;color:blue;font-weight: bold; ">
                                <input type="number" id="costing_summary_total_cost_fob"
                                       val="0" class="css-input-costing-data-solo text-end" disabled>
                            </td>
                            <td  scope="col" style="text-align: end; color:blue;font-weight: bold;">100.00</td>
                            <td  scope="col" style="font-weight: bold; ">%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
