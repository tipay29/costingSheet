<div class="modal fade" id="showSummaryModal" tabindex="-1" aria-labelledby="showSummaryModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header d-flex justify-content-between">
                <h5 class="modal-title" id="show_cost_summary_style"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                </button>
            </div>
            <div class="modal-body">
                <h6 class="text-center text-bg-secondary">Costing Summary</h6>
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

            <div class="modal-footer">
                <a href="#" id="show_cost_summary_edit" class="btn btn-primary">View</a>

                <a id="show_cost_summary_export" href="#"
                   class="btn btn-success">
                    Excel</a>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
