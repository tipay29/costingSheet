

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

    let gender_age_group = getAgeGroup(costing_gender.val(),null);
    costing_gender_age_group_div.html(gender_age_group);

});

let costing_product_category_one = $('#costing_product_category_one');
let costing_product_category_two_div = $('#costing_product_category_two_div');

costing_product_category_one.change(function(e){

    let product_category_two = getProductCatTwo(costing_product_category_one.val(),'');

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
            displayColors(no_of_color,old_no_of_color);
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

  displaySizes(sizes);

}

let costing_no_of_color = $('#costing_no_of_color');

costing_no_of_color.change(function(e){
    old_no_of_color = sessionStorage.getItem('costing_no_of_color');
    no_of_color = parseInt(costing_no_of_color.val());
    sessionStorage.setItem('costing_no_of_color',no_of_color);

    if(no_of_color <= 5 && no_of_color >= 1){

        if(costing_product_category_one.val() !== null &&  costing_product_category_one.val() !== 'ONCESET' &&
            costing_gender_age_group === 'undefined'){

            giveSizes(costing_gender_age_group.val(),costing_product_category_one.val());
        }

        displayColors(no_of_color,old_no_of_color);

    }else{
        alert('Invalid Number, 1-10 only.');
        costing_no_of_color.val('');
    }

});





$("body").delegate('.costing_table_color_head1','change',function(e){

    $('.costing_table_color_head1').val($(this).val());


    let costing_colors_name = $(this).val() + ',' +
        $(".costing_table_color_head2").val() + ',' +
        $(".costing_table_color_head3").val() + ',' +
        $(".costing_table_color_head4").val() + ',' +
        $(".costing_table_color_head5").val();

    sessionStorage.setItem('costing_colors_name',costing_colors_name);
    $('#costing_color_head_names').val(costing_colors_name);
});

$("body").delegate('.costing_table_color_head2','change',function(e){

    $('.costing_table_color_head2').val($(this).val());

    let costing_colors_name = $(".costing_table_color_head1").val() + ',' +
        $(this).val() + ',' +
        $(".costing_table_color_head3").val() + ',' +
        $(".costing_table_color_head4").val() + ',' +
        $(".costing_table_color_head5").val();

    sessionStorage.setItem('costing_colors_name',costing_colors_name);
    $('#costing_color_head_names').val(costing_colors_name);
});

$("body").delegate('.costing_table_color_head3','change',function(e){

    $('.costing_table_color_head3').val($(this).val());

    let costing_colors_name = $(".costing_table_color_head1").val() + ',' +
        $(".costing_table_color_head2").val() + ',' +
        $(this).val() + ',' +
        $(".costing_table_color_head4").val() + ',' +
        $(".costing_table_color_head5").val();

    sessionStorage.setItem('costing_colors_name',costing_colors_name);
    $('#costing_color_head_names').val(costing_colors_name);
});

$("body").delegate('.costing_table_color_head4','change',function(e){

    $('.costing_table_color_head4').val($(this).val());

    let costing_colors_name = $(".costing_table_color_head1").val() + ',' +
        $(".costing_table_color_head2").val()+ ',' +
        $(".costing_table_color_head3").val() + ',' +
        $(this).val() + ',' +
        $(".costing_table_color_head5").val();

    sessionStorage.setItem('costing_colors_name',costing_colors_name);
    $('#costing_color_head_names').val(costing_colors_name);
});

$("body").delegate('.costing_table_color_head5','change',function(e){

    $('.costing_table_color_head5').val($(this).val());

    let costing_colors_name = $(".costing_table_color_head1").val() + ',' +
        $(".costing_table_color_head2").val()+ ',' +
        $(".costing_table_color_head3").val() + ',' +
        $(".costing_table_color_head5").val()+ ',' +
        $(this).val();

    sessionStorage.setItem('costing_colors_name',costing_colors_name);
    $('#costing_color_head_names').val(costing_colors_name);
});


//get ProductCatTwo use also by Costing show-details
function getProductCatTwo(product_one,option){
    let product_category_two = '';

    if(product_one === 'TOPS'){

        product_category_two = ' <select class="css-select-costing" name="costing_product_category_two" id="costing_product_category_two">\n' +
            '                        <option value="3-IN-1 JACKET" '+getSelected("3-IN-1 JACKET",option)+' >3-IN-1 JACKET三合一</option>\n' +
            '                        <option value="BASELAYER TOP" '+getSelected("BASELAYER TOP",option)+' >BASELAYER TOP打底衫</option>\n' +
            '                        <option value="DOWN JACKET" '+getSelected("DOWN JACKET",option)+' >DOWN JACKET羽绒服</option>\n' +
            '                        <option value="DOWN VEST" '+getSelected("DOWN VEST",option)+' >DOWN VEST羽绒背心</option>\n' +
            '                        <option value="FLEECE FULL ZIP" '+getSelected("FLEECE FULL ZIP",option)+' >FLEECE FULL ZIP抓绒全拉链</option>\n' +
            '                        <option value="FLEECE HALF ZIP" '+getSelected("FLEECE HALF ZIP",option)+'>FLEECE HALF ZIP抓绒半拉链</option>\n' +
            '                        <option value="FLEECE PANTS"  '+getSelected("FLEECE PANTS",option)+'>FLEECE PANTS抓绒裤子</option>\n' +
            '                        <option value="FLEECE PULL OVER" '+getSelected("FLEECE PULL OVER",option)+'>FLEECE PULL OVER抓绒套头式</option>\n' +
            '                        <option value="FLEECE VEST" '+getSelected("FLEECE VEST",option)+'>FLEECE VEST抓绒背心</option>\n' +
            '                        <option value="HARD SHELL JACKET" '+getSelected("HARD SHELL JACKET",option)+'>HARD SHELL JACKET硬壳夹克</option>\n' +
            '                        <option value="HOODIE" '+getSelected("HOODIE",option)+'>HOODIE卫衣</option>\n' +
            '                        <option value="KNIT FULL ZIP" '+getSelected("KNIT FULL ZIP",option)+'>KNIT FULL ZIP针织衫全拉链</option>\n' +
            '                        <option value="KNIT PULL OVER" '+getSelected("KNIT PULL OVER",option)+'>KNIT PULL OVER针织套头</option>\n' +
            '                        <option value="KNITWEAR" '+getSelected("KNITWEAR",option)+'>KNITWEAR针织衫</option>\n' +
            '                        <option value="LS SHIRT" '+getSelected("LS SHIRT",option)+'>LS SHIRT长袖衬衫</option>\n' +
            '                        <option value="LS TEE" '+getSelected("LS TEE",option)+'>LS TEE长T袖</option>\n' +
            '                        <option value="OTHER KNIT TOP" '+getSelected("OTHER KNIT TOP",option)+'>OTHER KNIT TOP其它针织上装</option>\n' +
            '                        <option value="OTHER WOVEN TOP" '+getSelected("OTHER WOVEN TOP",option)+'>OTHER WOVEN TOP其它梭织上装</option>\n' +
            '                        <option value="OVERCOAT" '+getSelected("OVERCOAT",option)+'>OVERCOAT大衣</option>\n' +
            '                        <option value="PADDED JACKET" '+getSelected("PADDED JACKET",option)+'>PADDED JACKET填充夹克</option>\n' +
            '                        <option value="PADDED VEST" '+getSelected("PADDED VEST",option)+'>PADDED VEST填充背心</option>\n' +
            '                        <option value="SNOWSPORTS JACKET" '+getSelected("SNOWSPORTS JACKET",option)+'>SNOWSPORTS JACKET滑雪服</option>\n' +
            '                        <option value="SOFT SHELL JACKET" '+getSelected("SOFT SHELL JACKET",option)+'>SOFT SHELL JACKET软壳夹克</option>\n' +
            '                        <option value="SS POLO" '+getSelected("SS POLO",option)+'>SS POLO短袖衫</option>\n' +
            '                        <option value="SS SHIRT" '+getSelected("SS SHIRT",option)+'>SS SHIRT短袖衬衫</option>\n' +
            '                        <option value="SS TEE" '+getSelected("SS TEE",option)+'>SS TEE短袖</option>\n' +
            '                        <option value="UPF JACKET" '+getSelected("UPF JACKET",option)+'>UPF JACKET防晒衣</option>\n' +
            '                        <option value="VEST" '+getSelected("VEST",option)+'>VEST背心</option>\n' +
            '                        <option value="WIND JACKET" '+getSelected("WIND JACKET",option)+'>WIND JACKET防风衣</option>\n' +
            '                    </select>';

    }
    else if(product_one === 'BOTTOMS'){
        product_category_two = '<select class="css-select-costing" name="costing_product_category_two" id="costing_product_category_two">\n' +
            '                        <option value="BASELAYER BTM" '+getSelected("BASELAYER BTM",option)+'>BASELAYER BTM打底裤</option>\n' +
            '                        <option value="CASUAL PANTS" '+getSelected("CASUAL PANTS",option)+'>CASUAL PANTS休闲裤</option>\n' +
            '                        <option value="DRESS" '+getSelected("DRESS",option)+'>DRESS短裙</option>\n' +
            '                        <option value="HARD SHELL PANTS" '+getSelected("HARD SHELL PANTS",option)+'>HARD SHELL PANTS硬壳裤</option>\n' +
            '                        <option value="KNIT PANTS" '+getSelected("KNIT PANTS",option)+'>KNIT PANTS针织裤子</option>\n' +
            '                        <option value="ONE PIECE" '+getSelected("ONE PIECE",option)+'>ONE PIECE连衣裙</option>\n' +
            '                        <option value="OTHER KNIT BOTTOM" '+getSelected("OTHER KNIT BOTTOM",option)+'>OTHER KNIT BOTTOM其它针织下装</option>\n' +
            '                        <option value="OTHER WOVEN BOTTOM" '+getSelected("OTHER KNIT BOTTOM",option)+'>OTHER WOVEN BOTTOM其它梭织下装</option>\n' +
            '                        <option value="PADDED PANTS" '+getSelected("PADDED PANTS",option)+'>PADDED PANTS填充裤</option>\n' +
            '                        <option value="SHORTS" '+getSelected("SHORTS",option)+'>SHORTS短裤</option>\n' +
            '                        <option value="SKIRT" '+getSelected("SKIRT",option)+'>SKIRT裙子</option>\n' +
            '                        <option value="SKORT" '+getSelected("SKORT",option)+'>SKORT裙裤</option>\n' +
            '                        <option value="SNOWSPORTS PANTS" '+getSelected("SNOWSPORTS PANTS",option)+'>SNOWSPORTS PANTS滑雪裤</option>\n' +
            '                        <option value="SOFT SHELL PANTS" '+getSelected("SOFT SHELL PANTS",option)+'>SOFT SHELL PANTS软壳裤</option>\n' +
            '                        <option value="SWEATPANTS" '+getSelected("SWEATPANTS",option)+'>SWEATPANTS卫裤/运动裤</option>\n' +
            '                        <option value="TEK PANTS" '+getSelected("TEK PANTS",option)+'>TEK PANTS工装阔腿裤</option>\n' +
            '                        <option value="TIGHTS" '+getSelected("TIGHTS",option)+'>TIGHTS紧身连袜裤</option>\n' +
            '                    </select>';
    }
    else if(product_one === 'ONCESET'){
        product_category_two = '<select class="css-select-costing" name="costing_product_category_two" id="costing_product_category_two">\n' +
            '                        <option value="ONE SET" '+getSelected("ONE SET",option)+'>ONE SET套装</option>\n' +
            '                        <option value="JUMPSUITS" '+getSelected("JUMPSUITS",option)+'>JUMPSUITS连体衣</option>\n' +
            '                        <option value="ONE PIECE" '+getSelected("ONE PIECE",option)+'>ONE PIECE连衣裙</option>\n' +
            '                    </select>';
    }

    return product_category_two;
}

//get Selected use also by Costing show-details
function getSelected(option,data){
    if(option === data){
        return 'selected';
    }else if(option === "Invalid" && data === null){
        return 'selected';
    }
}


function getAgeGroup(gender,option){
    let gender_age_group = '';

    if(gender === 'MENS'){
        gender_age_group = '<select class="css-select-costing" name="costing_gender_age_group" id="costing_gender_age_group">\n' +
            '                        <option value="Invalid" disabled '+getSelected("Invalid",option)+'>Select Age Group</option>\n' +
            '                        <option value="Mens" '+getSelected("Mens",option)+'>Mens男士 19 Y+</option>\n' +
            '                    </select>';
    }else if(gender === 'WOMENS'){
        gender_age_group = '<select class="css-select-costing" name="costing_gender_age_group" id="costing_gender_age_group">\n' +
            '                        <option value="Invalid" disabled '+getSelected("Invalid",option)+'>Select Age Group</option>\n' +
            '                        <option value="Womens" '+getSelected("Womens",option)+'>Womens女士 19 Y+</option>\n' +
            '                    </select>';
    }else if(gender === 'UNISEX'){
        gender_age_group = '<select class="css-select-costing" name="costing_gender_age_group" id="costing_gender_age_group">\n' +
            '                        <option value="Invalid" disabled '+getSelected("Invalid",option)+'>Select Age Group</option>\n' +
            '                        <option value="Unisex" '+getSelected("Unisex",option)+'>Unisex中性 19 Y+</option>\n' +
            '                    </select>';
    }else if(gender === 'KIDS'){
        gender_age_group = ' <select class="css-select-costing" name="costing_gender_age_group" id="costing_gender_age_group">\n' +
            '                        <option value="Invalid" disabled '+getSelected("Invalid",option)+'>Select Age Group</option>\n' +
            '                        <option value="Teen" '+getSelected("Teen",option)+'>Teen/Youth少青 13-19 Y</option>\n' +
            '                        <option value="Boys" '+getSelected("Boys",option)+'>Boys男孩 13-19 Y</option>\n' +
            '                        <option value="Girls" '+getSelected("Girls",option)+'>Girls女孩 13-19 Y</option>\n' +
            '                        <option value="Kid/Toddler" '+getSelected("Kid/Toddler",option)+'>Kid/Toddler幼童 1-7 Y</option>\n' +
            '                        <option value="Baby/Infant" '+getSelected("Baby/Infant",option)+'>Baby/Infant婴儿 0-12 M</option>\n' +
            '                    </select>';
    }

    return gender_age_group;
}
