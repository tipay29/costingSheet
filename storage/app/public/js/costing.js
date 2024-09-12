

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

old_no_of_color = sessionStorage.getItem('costing_no_of_color');

let costing_product_category_one = $('#costing_product_category_one');
let costing_product_category_two_div = $('#costing_product_category_two_div');
let costing_size_code_div = $('#costing_size_code_div');


costing_product_category_one.change(function(e){

    let product_category_two = getProductCatTwo(costing_product_category_one.val(),'');
    costing_product_category_two_div.html(product_category_two);

    let size_codes = getSizeCodes(costing_product_category_one.val(),'');
    costing_size_code_div.html(size_codes);

});




function giveSizes(product,size_code){

    let sizes = [];
    if(product === "TOPS"){
        if(size_code === "J-01"){
             sizes = ["XXS","XS","S","M","L","XL","XXL","XXXL"];
        }else if(size_code === "J-02"){
              sizes = ["S/M","M/L","L/XL"];
        }else if(size_code === "J-03"){
            sizes = ["1X","2X","3X","4X","5X"];
        }else if(size_code === "J-04"){
            sizes = ["2","3","4","5","6","7","8"];
        }else if(size_code === "J-07"){
            sizes = ["0-3M","3-6M","6-12M","12-18M","18-24M"];
        }
    }else if(product === "BOTTOMS"){
        if(size_code === "P-01"){
            sizes = ["XXS","XS","S","M","L","XL","XXL","XXXL"];
        }else if(size_code === "P-02"){
            sizes = ["S/M","M/L","L/XL"];
        }else if(size_code === "P-04"){
            sizes = ["2","3","4","5","6","7","8"];
        }else if(size_code === "P-07"){
            sizes = ["0-3M","3-6M","6-12M","12-18M","18-24M"];
        }else if(size_code === "P-11"){
            sizes = ["28","29","30","31","32","33","34","35","36","37","38","39","40"];
        }else if(size_code === "P-12"){
            sizes = ["0","2","4","6","8","10","12","14","16"];
        }else if(size_code === "P-12"){
            sizes = ["16W","18W","20W","22W","24W"];
        }
    }

  displaySizes(sizes);

}

let costing_no_of_color = $('#costing_no_of_color');

costing_no_of_color.change(function(e){

    no_of_color = parseInt(costing_no_of_color.val());
    sessionStorage.setItem('costing_no_of_color',no_of_color);

    if(no_of_color <= 5 && no_of_color >= 1){

        if(costing_product_category_one.val() !== null &&  $('#costing_size_code').val() !== null) {

                giveSizes(costing_product_category_one.val(), $('#costing_size_code').val());
        }

        displayColors(no_of_color,old_no_of_color);

    }else{
        alert('Invalid Number, 1-10 only.');
        costing_no_of_color.val('');
    }

});


let costing_currency = $('#costing_currency');
costing_header = $('.costing_header');
costing_header_ch = $('.costing_header_ch');
costing_header_total = $('.costing_header_total');
costing_final_total = $('.costing_final_total');
costing_currency.change(function(e){

    $('#costing_target_fob_sign').val(costing_currency.val());
    $('#costing_total_fob_sign').val(costing_currency.val());
    $('.costing_fob_sign').val(costing_currency.val());
    $('.costing_fob_sign').html(costing_currency.val());
});

$("body").delegate('#costing_size_code','change',function(e){
    //ONCE SET NO NEED BECAUSE NO SIZE CODE
    //WHEN SELECT THE SIZE CODE ITS MATIC HAVE PRODUCT 1

        giveSizes(costing_product_category_one.val(),$(this).val());

        no_of_color = $('#costing_no_of_color').val();

        if(no_of_color !== null && no_of_color !== ""){
            displayColors(parseInt(no_of_color),old_no_of_color);
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

function getSizeCodes(product_one,option){
    let size_codes = '';

    if(product_one === 'TOPS'){

        size_codes = ' <select class="css-select-costing" name="costing_size_code" id="costing_size_code">\n' +
            '                        <option value="Invalid" '+getSelected("Invalid",option)+' >Select Size Code</option>\n' +
            '                        <option value="J-01" '+getSelected("J-01",option)+' >J-01</option>\n' +
            '                        <option value="J-02" '+getSelected("J-02",option)+' >J-02</option>\n' +
            '                        <option value="J-03" '+getSelected("J-03",option)+' >J-03</option>\n' +
            '                        <option value="J-04" '+getSelected("J-04",option)+' >J-04</option>\n' +
            '                        <option value="J-07" '+getSelected("J-07",option)+' >J-07</option>\n' +
            '                    </select>';

    }
    else if(product_one === 'BOTTOMS'){
        size_codes = '<select class="css-select-costing" name="costing_size_code" id="costing_size_code">\n' +
            '                        <option value="Invalid" '+getSelected("Invalid",option)+' >Select Size Code</option>\n' +
            '                        <option value="P-01" '+getSelected("P-01",option)+' >P-01</option>\n' +
            '                        <option value="P-02" '+getSelected("P-02",option)+' >P-02</option>\n' +
            '                        <option value="P-04" '+getSelected("P-04",option)+' >P-04</option>\n' +
            '                        <option value="P-07" '+getSelected("P-07",option)+' >P-07</option>\n' +
            '                        <option value="P-07" '+getSelected("P-07",option)+' >P-11</option>\n' +
            '                        <option value="P-07" '+getSelected("P-07",option)+' >P-12</option>\n' +
            '                        <option value="P-07" '+getSelected("P-07",option)+' >P-13</option>\n' +
            '                    </select>';
    }
    else if(product_one === 'ONCESET'){

    }

    return size_codes;
}

