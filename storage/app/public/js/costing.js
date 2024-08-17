

let costing_vendor = $('#costing_vendor');

costing_vendor.change(function(e){
    $('#costing_header_vendor').html(costing_vendor.val());
});

let costing_manufacturer_one = $('#costing_manufacturer_one');

costing_manufacturer_one.change(function(e){
        let coo = '';
        let port = '';

        if(costing_manufacturer_one.val() === "Horizon Outdoor (Cambodia) Co., Ltd"){
            coo = 'Cambodia';
            port = 'Sihanoukville';
        }else if(costing_manufacturer_one.val() === "Vicmark Fashions (Cambodia) Co., Ltd."){
            coo = 'Cambodia';
            port = 'Sihanoukville';
        }else if(costing_manufacturer_one.val() === "HZ Int'l Co., Ltd."){
            coo = 'Bangladesh';
            port = 'Chittagong';
        }else if(costing_manufacturer_one.val() === "HZ Outdoor Int’l Co., Ltd"){
            coo = 'Bangladesh';
            port = 'Chittagong';
        }else if(costing_manufacturer_one.val() === "Ningbo Horizon Outdoor Production Co., Ltd."){
            coo = 'China';
            port = 'Ningbo';
        }

        $('#costing_coo').val(coo);
        $('#costing_port').val(port);
});

let costing_gender = $('#costing_gender');
let costing_gender_age_group_div = $('#costing_gender_age_group_div');

costing_gender.change(function(e){
    let gender_age_group = '';

    if(costing_gender.val() === 'MENS'){
        gender_age_group = '<select class="css-select-costing" name="costing_gender_age_group" id="costing_gender_age_group">\n' +
            '                        <option value="Invalid" disabled selected>Select Age Group</option>\n' +
            '                        <option value="Mens" >Mens男士 19 Y+</option>\n' +
            '                    </select>';
    }else if(costing_gender.val() === 'WOMENS'){
        gender_age_group = '<select class="css-select-costing" name="costing_gender_age_group" id="costing_gender_age_group">\n' +
            '                        <option value="Invalid" disabled selected>Select Age Group</option>\n' +
            '                        <option value="Womens" >Womens女士 19 Y+</option>\n' +
            '                    </select>';
    }else if(costing_gender.val() === 'UNISEX'){
        gender_age_group = '<select class="css-select-costing" name="costing_gender_age_group" id="costing_gender_age_group">\n' +
            '                        <option value="Invalid" disabled selected>Select Age Group</option>\n' +
            '                        <option value="Unisex" >Unisex中性 19 Y+</option>\n' +
            '                    </select>';
    }else if(costing_gender.val() === 'KIDS'){
        gender_age_group = ' <select class="css-select-costing" name="costing_gender_age_group" id="costing_gender_age_group">\n' +
            '                        <option value="Invalid" disabled selected>Select Age Group</option>\n' +
            '                        <option value="Teen" >Teen/Youth少青 13-19 Y</option>\n' +
            '                        <option value="Boys" >Boys男孩 13-19 Y</option>\n' +
            '                        <option value="Girls" >Girls女孩 13-19 Y</option>\n' +
            '                        <option value="Kid/Toddler" >Kid/Toddler幼童 1-7 Y</option>\n' +
            '                        <option value="Baby/Infant" >Baby/Infant婴儿 0-12 M</option>\n' +
            '                    </select>';
    }

    costing_gender_age_group_div.html(gender_age_group);

});

let costing_product_category_one = $('#costing_product_category_one');
let costing_product_category_two_div = $('#costing_product_category_two_div');

costing_product_category_one.change(function(e){

    let product_category_two = '';

    if(costing_product_category_one.val() === 'TOPS'){

        product_category_two = ' <select class="css-select-costing" name="costing_product_category_two" id="costing_product_category_two">\n' +
            '                        <option value="Invalid" disabled selected>Select TOPS上装</option>\n' +
            '                        <option value="3-IN-1 JACKET" >3-IN-1 JACKET三合一</option>\n' +
            '                        <option value="BASELAYER TOP">BASELAYER TOP打底衫</option>\n' +
            '                        <option value="DOWN JACKET">DOWN JACKET羽绒服</option>\n' +
            '                        <option value="DOWN VEST">DOWN VEST羽绒背心</option>\n' +
            '                        <option value="FLEECE FULL ZIP">FLEECE FULL ZIP抓绒全拉链</option>\n' +
            '                        <option value="FLEECE HALF ZIP">FLEECE HALF ZIP抓绒半拉链</option>\n' +
            '                        <option value="FLEECE PANTS">FLEECE PANTS抓绒裤子</option>\n' +
            '                        <option value="FLEECE PULL OVER">FLEECE PULL OVER抓绒套头式</option>\n' +
            '                        <option value="FLEECE VEST">FLEECE VEST抓绒背心</option>\n' +
            '                        <option value="HARD SHELL JACKET">HARD SHELL JACKET硬壳夹克</option>\n' +
            '                        <option value="HOODIE">HOODIE卫衣</option>\n' +
            '                        <option value="KNIT FULL ZIP">KNIT FULL ZIP针织衫全拉链</option>\n' +
            '                        <option value="KNIT PULL OVER">KNIT PULL OVER针织套头</option>\n' +
            '                        <option value="KNITWEAR">KNITWEAR针织衫</option>\n' +
            '                        <option value="LS SHIRT">LS SHIRT长袖衬衫</option>\n' +
            '                        <option value="LS TEE">LS TEE长T袖</option>\n' +
            '                        <option value="OTHER KNIT TOP">OTHER KNIT TOP其它针织上装</option>\n' +
            '                        <option value="OTHER WOVEN TOP">OTHER WOVEN TOP其它梭织上装</option>\n' +
            '                        <option value="OVERCOAT">OVERCOAT大衣</option>\n' +
            '                        <option value="PADDED JACKET">PADDED JACKET填充夹克</option>\n' +
            '                        <option value="PADDED VEST">PADDED VEST填充背心</option>\n' +
            '                        <option value="SNOWSPORTS JACKET">SNOWSPORTS JACKET滑雪服</option>\n' +
            '                        <option value="SOFT SHELL JACKET">SOFT SHELL JACKET软壳夹克</option>\n' +
            '                        <option value="SS POLO">SS POLO短袖衫</option>\n' +
            '                        <option value="SS SHIRT">SS SHIRT短袖衬衫</option>\n' +
            '                        <option value="SS TEE">SS TEE短袖</option>\n' +
            '                        <option value="UPF JACKET">UPF JACKET防晒衣</option>\n' +
            '                        <option value="VEST">VEST背心</option>\n' +
            '                        <option value="WIND JACKET">WIND JACKET防风衣</option>\n' +
            '                    </select>';

    }
    else if(costing_product_category_one.val() === 'BOTTOMS'){
        product_category_two = '<select class="css-select-costing" name="costing_product_category_two" id="costing_product_category_two">\n' +
            '                        <option value="Invalid" disabled selected>Select BOTTOMS下装</option>\n' +
            '                        <option value="BASELAYER BTM" >BASELAYER BTM打底裤</option>\n' +
            '                        <option value="CASUAL PANTS" >CASUAL PANTS休闲裤</option>\n' +
            '                        <option value="DRESS" >DRESS短裙</option>\n' +
            '                        <option value="HARD SHELL PANTS" >HARD SHELL PANTS硬壳裤</option>\n' +
            '                        <option value="KNIT PANTS" >KNIT PANTS针织裤子</option>\n' +
            '                        <option value="ONE PIECE" >ONE PIECE连衣裙</option>\n' +
            '                        <option value="OTHER KNIT BOTTOM" >OTHER KNIT BOTTOM其它针织下装</option>\n' +
            '                        <option value="OTHER WOVEN BOTTOM" >OTHER WOVEN BOTTOM其它梭织下装</option>\n' +
            '                        <option value="PADDED PANTS" >PADDED PANTS填充裤</option>\n' +
            '                        <option value="SHORTS" >SHORTS短裤</option>\n' +
            '                        <option value="SKIRT" >SKIRT裙子</option>\n' +
            '                        <option value="SKORT" >SKORT裙裤</option>\n' +
            '                        <option value="SNOWSPORTS PANTS" >SNOWSPORTS PANTS滑雪裤</option>\n' +
            '                        <option value="SOFT SHELL PANTS" >SOFT SHELL PANTS软壳裤</option>\n' +
            '                        <option value="SWEATPANTS" >SWEATPANTS卫裤/运动裤</option>\n' +
            '                        <option value="TEK PANTS" >TEK PANTS工装阔腿裤</option>\n' +
            '                        <option value="TIGHTS" >TIGHTS紧身连袜裤</option>\n' +
            '                    </select>';
    }
    else if(costing_product_category_one.val() === 'ONCESET'){
        product_category_two = '<select class="css-select-costing" name="costing_product_category_two" id="costing_product_category_two">\n' +
            '                        <option value="Invalid" disabled selected>Select ONCESET套装</option>\n' +
            '                        <option value="ONE SET" >ONE SET套装</option>\n' +
            '                        <option value="JUMPSUITS" >JUMPSUITS连体衣</option>\n' +
            '                        <option value="ONE PIECE" >ONE PIECE连衣裙</option>\n' +
            '                    </select>';
    }

    costing_product_category_two_div.html(product_category_two);

    let costing_gender_age_group = $('#costing_gender_age_group');

    if(costing_gender_age_group.length > 0 && costing_gender_age_group.val() !== null
       && costing_product_category_one.val() !== 'ONCESET'){

            giveSizes(costing_gender_age_group.val(),costing_product_category_one.val());

            if(no_of_color !== null){
                giveColorColumns(no_of_color)
            }
    }



});


let costing_currency = $('#costing_currency');


costing_currency.change(function(e){

    $('#costing_target_fob_sign').val(costing_currency.val());
    $('#costing_total_fob_sign').val(costing_currency.val());
    $('.costing_fob_sign').val(costing_currency.val());

});



costing_gender_age_group_div.on('change','#costing_gender_age_group',function (e) {


    costing_gender_age_group = $('#costing_gender_age_group');

    if(costing_product_category_one.val() !== null && costing_product_category_one.val() !== 'ONCESET'){

        giveSizes(costing_gender_age_group.val(),costing_product_category_one.val());

        if(no_of_color !== null){
            old_no_of_color = sessionStorage.getItem('costing_no_of_color');
            giveColorColumns(no_of_color,old_no_of_color);
        }
    }




});

costing_header = $('.costing_header');
costing_header_ch = $('.costing_header_ch');
costing_header_total = $('.costing_header_total');
costing_final_total = $('.costing_final_total');

function giveSizes(gender,product){

    let sizes = [];
    if(gender === "Mens" && product === "TOPS"){
         sizes = ["XXS","XS","S","M","L","XL","XXL","XXXL","S/M","M/L","L/XL"];
    }else if(gender === "Mens" && product === "BOTTOMS"){
          sizes = ["XXS","XS","S","M","L","XL","XXL","XXXL","S/M","M/L","L/XL"];
    }else if(gender === "Womens" && product === "TOPS"){
          sizes = ["XXS","XS","S","M","L","XL","XXL","XXXL","S/M","M/L","L/XL"];
    }else if(gender === "Womens" && product === "BOTTOMS"){
          sizes = ["XXS","XS","S","M","L","XL","XXL","XXXL","S/M","M/L","L/XL"];
    }else if(gender === "Unisex" && product === "TOPS"){
          sizes = ["XXS","XS","S","M","L","XL","XXL","XXXL","S/M","M/L","L/XL"];
    }else if(gender === "Unisex" && product === "BOTTOMS"){
          sizes = ["XXS","XS","S","M","L","XL","XXL","XXXL","S/M","M/L","L/XL"];
    }else if(gender === "Teen" && product === "TOPS"){
          sizes = ["XXS","XS","S","M","L","XL","XXL","XXXL","S/M","M/L","L/XL"];
    }else if(gender === "Teen" && product === "BOTTOMS"){
          sizes = ["XXS","XS","S","M","L","XL","XXL","XXXL","S/M","M/L","L/XL"];
    }else if(gender === "Boys" && product === "TOPS"){
          sizes = ["XXS","XS","S","M","L","XL","XXL","XXXL","S/M","M/L","L/XL"];
    }else if(gender === "Boys" && product === "BOTTOMS"){
          sizes = ["XXS","XS","S","M","L","XL","XXL","XXXL","S/M","M/L","L/XL"];
    }else if(gender === "Girls" && product === "TOPS"){
          sizes = ["XXS","XS","S","M","L","XL","XXL","XXXL","S/M","M/L","L/XL"];
    }else if(gender === "Girls" && product === "BOTTOMS"){
          sizes = ["XXS","XS","S","M","L","XL","XXL","XXXL","S/M","M/L","L/XL"];
    }else if(gender === "Kid/Toddler" && product === "TOPS"){
        sizes = ["2","3","4","5","6","7"];
    }else if(gender === "Kid/Toddler" && product === "BOTTOMS"){
        sizes = ["2","3","4","5","6","7"];
    }else if(gender === "Baby/Infant" && product === "TOPS"){
        sizes = ["0-3M","3-6M","6-12M","12-18M","18-24M"];
    }else if(gender === "Baby/Infant" && product === "BOTTOMS"){
        sizes = ["0-3M","3-6M","6-12M","12-18M","18-24M"];
    }

    sessionStorage.setItem('costing_sizes_name',sizes);
    old_no_of_size = sessionStorage.getItem('costing_no_of_size');
    no_of_size = parseInt(sizes.length);
    sessionStorage.setItem('costing_no_of_size',no_of_size);

    let header_ch ='<th class="costing_table_size" scope="col" style="vertical-align: top;background-color: #e3ed26; " colspan="'+sizes.length+'">Size尺寸</th>'
    let header = '';
    let header_total = '<th class="costing_table_size" style="background-color: #b5f7bd; " colspan="'+sizes.length+'"></th>';
    let final_total = '<th class="costing_table_size" style="background-color: #bfcdf2; " colspan="'+sizes.length+'"></th>';

    for (let i = 0; i < sizes.length; i++) {
        header = header.concat('<th class="costing_table_size" scope="col" style="min-width:60px ;vertical-align: top;background-color: #7b9ddb;font-size: 1em; ">' + sizes[i] +'</th>');
    }

    $('.costing_table_size').remove();
    $('.costing_table_color').remove();

    costing_header_ch.append(header_ch);
    costing_header.append(header);
    costing_header_total.append(header_total);
    costing_final_total.append(final_total);

    //put sizes in the with IDS
    let categories = ['fabric','trim','zipper','embelishment','label',
                'thread','package','finish','export','testing','other','labor'];
    for(y = 0; y < categories.length; y++){
        giveSizesRow(sizes,categories[y]);
    }

    let total_column = parseInt(sessionStorage.getItem("costing_total_column"));
    total_column = total_column - old_no_of_size;
    total_column = total_column + no_of_size;

    sessionStorage.setItem('costing_total_column',total_column);

}

let costing_no_of_color = $('#costing_no_of_color');

costing_no_of_color.change(function(e){
    old_no_of_color = sessionStorage.getItem('costing_no_of_color');
    no_of_color = parseInt(costing_no_of_color.val());
    sessionStorage.setItem('costing_no_of_color',no_of_color);

    if(no_of_color <= 10 && no_of_color >= 1){

        if(costing_product_category_one.val() !== null &&  costing_product_category_one.val() !== 'ONCESET' &&
            typeof costing_gender_age_group === 'undefined'){


            giveSizes(costing_gender_age_group.val(),costing_product_category_one.val());
        }

        giveColorColumns(no_of_color,old_no_of_color);

    }else{
        alert('Invalid Number, 1-10 only.');
        costing_no_of_color.val('');
    }

});

function giveColorColumns(no_of_color,old_no_of_color){


    let header_ch ='<th class="costing_table_color" scope="col" style="vertical-align: top;background-color: #e3ed26; " colspan="'+no_of_color+'">Color颜色</th>'
    let header = '';
    let header_total = '<th class="costing_table_color" style="background-color: #b5f7bd; " colspan="'+no_of_color+'"></th>';
    let final_total = '<th class="costing_table_color" style="background-color: #bfcdf2; " colspan="'+no_of_color+'"></th>';


    for (let i = 1; i <= no_of_color; i++) {
        header = header.concat('<th contenteditable="true" class="costing_table_color"  scope="col" style="min-width:75px ;vertical-align: top;background-color: #7b9ddb;font-size: 1em; ">' + i +'</th>');

    }



    costing_header_ch.append(header_ch);
    costing_header.append(header);
    costing_header_total.append(header_total);
    costing_final_total.append(final_total);

    //put sizes in the with IDS
    let categories = ['fabric','trim','zipper','embelishment','label',
        'thread','package','finish','export','testing','other','labor'];
    for(y = 0; y < categories.length; y++){
        giveColorsRow(no_of_color,categories[y]);
    }

    let total_column = parseInt(sessionStorage.getItem("costing_total_column"));
    total_column = total_column - old_no_of_color;
    total_column = total_column + no_of_color;
    sessionStorage.setItem('costing_total_column',total_column);

}

function giveSizesRow(sizes,categories){

    let row_control = sessionStorage.getItem('costing_'+categories+'_row_ids').split('-');

    let y =1;
    for (let i = parseInt(row_control[0]); i <= parseInt(row_control[1]); i++) {
        let categories_row = '#costing_'+ categories +'_tr' + i;
        let sizes_row = '';

        for (let x = 1; x <= sizes.length; x++) {
            sizes_row = sizes_row.concat('' +
                '<td class="costing_table_size">' +
                '<input type="text" id="costing_'+ categories +'_size_'+x+'_'+y+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }

        $(categories_row).append(sizes_row);
        y++;
    }

    // costing_fabric_tr


}

function giveColorsRow(no_of_color,categories){

    let row_control = sessionStorage.getItem('costing_'+categories+'_row_ids').split('-');

    let y =1;
    for (let i = parseInt(row_control[0]); i <= parseInt(row_control[1]); i++) {
        let categories_row = '#costing_'+ categories +'_tr' + i;

        let colors_row = '';

        for (let x = 1; x <= no_of_color; x++) {
            colors_row = colors_row.concat('' +
                '<td class="costing_table_color">' +
                '<input type="text" id="costing_'+ categories +'_color_'+x+'_'+y+'" value="" class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }

        $(categories_row).append(colors_row);
        y++;
    }

    // costing_fabric_tr


}
