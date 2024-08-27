<div class="row">

    <div class="col-md-5 css-costing-header-left">
        <table class="table table-bordered">
            <tr>
                <td width="25%" class="css-text-right">CUSTOMER NAME : </td>
                <td width="25%" >
                    <input id="costing_customer_name" name="costing_customer_name" class="css-input-costing-labor-cost" type="text">
                </td>
                <td width="25%" class="css-text-right">DIVISION : </td>
                <td width="25%">
                    <input id="costing_division" name="costing_division" class="css-input-costing-labor-cost" type="text">
                </td>

            </tr>
            <tr>
                <td class="css-text-right">BRAND :</td>
                <td >
                    <input id="costing_brand" name="costing_brand" class="css-input-costing-labor-cost" type="text">
                </td>
                <td class="css-text-right" >VERSION :</td>
                <td >
                    <input id="costing_version" name="costing_version" class="css-input-costing-labor-cost" type="text">
                </td>
            </tr>
            <tr>
                <td class="css-text-right">SEASON :</td>
                <td >
                    <input id="costing_season" name="costing_season" class="css-input-costing-labor-cost" type="text">
                </td>
                <td class="css-text-right">SPECIAL CONSTRUCTION :</td>
                <td>
                    <select class="css-select-costing" name="costing_special_construction" id="costing_special_construction">
                        <option value="BONDING" >BONDING粘合剂</option>
                        <option value="DOWN" >DOWN羽绒</option>
                        <option value="ECO-DOWN" >ECO-DOWN手塞棉</option>
                        <option value="PADDED" >PADDED充棉</option>
                        <option value="QUILTING" >QUILTING绗棉</option>
                        <option value="SEAM-SEAL" >SEAM-SEAL压胶</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="css-text-right">PRODUCT CATEGORY :</td>
                <td>
                    <select class="css-select-costing" name="costing_product_category" id="costing_product_category">
                        <option value="Apparel" selected>Apparel成衣</option>
                        <option value="Equipment" >Equipment箱包设备</option>
                    </select>
                </td>
                <td class="css-text-right">GENDER :</td>
                <td>
                    <select class="css-select-costing" name="costing_gender" id="costing_gender">
                        <option value="Invalid" disabled selected>Select Gender</option>
                        <option value="MENS" >MENS男装</option>
                        <option value="WOMENS" >WOMENS女装</option>
                        <option value="UNISEX" >UNISEX中性</option>
                        <option value="KIDS" >KIDS童装</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="css-text-right">PRODUCT CATEGORY 1 :</td>
                <td>
                    <select class="css-select-costing" name="costing_product_category_one" id="costing_product_category_one">
                        <option value="Invalid" disabled selected>Select Category One</option>
                        <option id="TOPS" value="TOPS" >TOPS上装</option>
                        <option id="BOTTOMS" value="BOTTOMS" >BOTTOMS下装</option>
                        <option id="ONCESET" value="ONCESET" >ONCESET套装</option>
                    </select>
                </td>
                <td class="css-text-right">GENDER AGE GROUP :</td>
                <td id="costing_gender_age_group_div">

                </td>
            </tr>
            <tr>
                <td class="css-text-right">PRODUCT CATEGORY 2 :</td>
                <td id="costing_product_category_two_div">

                </td>
                <td class="css-text-right">COSTING SIZE :</td>
                <td>
                    <input id="costing_size" name="costing_size" class="css-input-costing-labor-cost" type="text">
                </td>
            </tr>
        </table>
    </div>

    <div class="col-md-2 " style="">
        <h6 class="text-center text-bg-secondary">SKETCH</h6>

        <div  id="div_image" style="margin:auto;height: 90px;width: 90px;">
            <img id="#costing_display_front_photo"
                 @if($sketches)
                 src="{{asset($sketches->cost_front_sketch)}}"
                 @endif
                 class="img-fluid" alt="">
        </div>

    </div>

    <div class="col-md-5 css-costing-header-right">

        <table class="table table-bordered">
            <tr>
                <td width="25%" class="css-text-right">STYLE # : </td>
                <td width="25%"  >
                    <input id="costing_style" name="costing_style" class="css-input-costing-labor-cost" type="text">
                </td>
                <td width="25%" class="css-text-right">DATE : </td>
                <td width="25%" >
                    <input id="costing_date" name="costing_date" class="css-input-costing-labor-cost" type="date">
                </td>

            </tr>
            <tr>
                <td class="css-text-right">STYLE NAME :</td>
                <td >
                    <input id="costing_style_name" name="costing_style_name" class="css-input-costing-labor-cost" type="text">
                </td>
                <td class="css-text-right">COSTING STAGE :</td>
                <td>
                    <select class="css-select-costing" name="costing_stage" id="costing_stage">
                        <option value="Development Sample" >Development Sample</option>
                        <option value="Costing Sample">Costing Sample</option>
                        <option value="Counter Sample">Counter Sample</option>
                        <option value="Proto Sample">Proto Sample</option>
                        <option value="Salesman Sample">Salesman Sample</option>
                        <option value="Pre-production Sample">Pre-production Sample</option>
                        <option value="Red Seal Sample">Red Seal Sample</option>
                        <option value="Fitting Sample">Fitting Sample</option>
                        <option value="Size Set Sample">Size Set Sample</option>
                        <option value="TOP Sample">TOP Sample</option>
                        <option value="Production Sample">Production Sample</option>
                        <option value="QA Sample">QA Sample</option>
                        <option value="Photo Shooting Sample">Photo Shooting Sample</option>
                        <option value="Testing Sample">Testing Sample</option>
                        <option value="Shipment Sample">Shipment Sample</option>
                        <option value="Meeting Sample">Meeting Sample</option>
                        <option value="Floorset Sample">Floorset Sample</option>
                        <option value="Electronic Commerce Sample">Electronic Commerce Sample</option>
                        <option value="Keeping Sample">Keeping Sample</option>
                        <option value="Mock-up">Mock-up</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="css-text-right">COLOR #:</td>
                <td >
                    <input id="costing_color" name="costing_color" class="css-input-costing-labor-cost" type="text">
                </td>
                <td class="css-text-right">STATUS :</td>
                <td>
                    <select class="css-select-costing" name="costing_status" id="costing_status">
                        <option value="DRAFT" selected>DRAFT</option>
                        <option value="PENDING" >PENDING FOR APPROVAL</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="css-text-right">COLOR NAME :</td>
                <td >
                    <input id="costing_color_name" name="costing_color_name" class="css-input-costing-labor-cost" type="text">
                </td>
                <td class="css-text-right">CURRENCY :</td>
                <td>
                    <select class="css-select-costing" name="costing_currency" id="costing_currency">
                        <option value="$" >USD $</option>
                        <option value="¥" >RMB ¥</option>
                    </select>

                </td>
            </tr>
            <tr>

                <td class="css-text-right">NO OF COLOR :</td>
                <td >
                    <input id="costing_no_of_color" name="costing_no_of_color" class="css-input-costing" min="1" max="5" type="number">
                </td>
                <td class="css-text-right">TARGET FOB :</td>
                <td>
                    <input type="text" id="costing_target_fob_sign" disabled value="$" class="costing_fob_sign">
                    <input type="text" id="costing_target_fob" name="costing_target_fob" class="css-input-costing" style="width: 8.3rem;">
                </td>
            </tr>
            <tr>

                <td class="css-text-right">T/P CODE :</td>
                <td >
                    <input id="costing_tp_code" name="costing_tp_code" class="css-input-costing-labor-cost" type="text">
                </td>
                <td >
                    <select style="text-align: end;font-weight: bold;" class="css-select-costing" name="costing_total_fob_cm" id="costing_total_fob_cm">
                        <option value="TOTAL FOB" >TOTAL FOB :</option>
                        <option value="CM" >CM :</option>
                    </select>
                </td>
                <td >
                    <input type="text" id="costing_total_fob_sign" disabled value="$" class="costing_fob_sign">
                    <input type="text" id="costing_total_fob_header" name="costing_total_fob_header" class="css-input-costing" style="width: 8.3rem;" readonly>
                </td>
            </tr>
        </table>

    </div>



</div>
