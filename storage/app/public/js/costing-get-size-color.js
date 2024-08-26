function displaySizes(sizes){
    sessionStorage.setItem('costing_sizes_name',sizes);
    $('#costing_size_head_names').val(sizes);
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

function giveSizesRow(sizes,categories){

    let row_control = sessionStorage.getItem('costing_'+categories+'_row_ids').split('-');

    let category_val = getCategoryData(categories);

    let y =1;
    for (let i = parseInt(row_control[0]); i <= parseInt(row_control[1]); i++) {
        let categories_row = '#costing_'+ categories +'_tr' + i;
        let sizes_row = '';

        for (let x = 1; x <= sizes.length; x++) {
            let size_name = 'cost_size_' + x;
            let size_val = '';
            if(category_val !== null){
                 size_val = getSizeValue(category_val[y-1][size_name]);
            }
            sizes_row = sizes_row.concat('' +
                '<td class="costing_table_size">' +
                '<input type="text" id="costing_'+ categories +'_size_'+x+'_'+y+'"' +
                ' name="costing_'+ categories +'_size_'+x+'_'+y+'" ' +
                'value="'+size_val+'" ' +
                'class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }

        $(categories_row).append(sizes_row);
        y++;
    }

    // costing_fabric_tr


}

function displayColors(no_of_color,old_no_of_color){

    let header_ch ='<th class="costing_table_color" scope="col" style="vertical-align: top;background-color: #e3ed26; " colspan="'+no_of_color+'">Color颜色</th>'
    let header = '';
    let header_total = '<th class="costing_table_color" style="background-color: #b5f7bd; " colspan="'+no_of_color+'"></th>';
    let final_total = '<th class="costing_table_color" style="background-color: #bfcdf2; " colspan="'+no_of_color+'"></th>';

    let y = 0;
    let head_name = '';
    let head_names = [];
    if(sessionStorage.getItem('cost_color_head_names')){
         head_names = sessionStorage.getItem('cost_color_head_names').split(',');
    }
    for (let i = 1; i <= no_of_color; i++) {
        head_name = i;
        if(head_names[y] === undefined){
            head_name = i;
        }else if(head_names[y] !== undefined) {
            head_name = head_names[y];
        }

        header = header.concat('<th class="costing_table_color" ' +
            '  scope="col" ' +
            'style="min-width:75px ; ">' +
            '<input class="costing_table_color_head'+i+'" value="'+head_name+'" ' +
            ' style="border:none;height:1.63rem;background-color: #7b9ddb;font-size: 1em;text-align: center;">'
            +'</th>');
        y++;
    }

    $('.costing_table_color').remove();

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

function giveColorsRow(no_of_color,categories){

    let row_control = sessionStorage.getItem('costing_'+categories+'_row_ids').split('-');

    let category_val = getCategoryData(categories);

    let y =1;
    for (let i = parseInt(row_control[0]); i <= parseInt(row_control[1]); i++) {
        let categories_row = '#costing_'+ categories +'_tr' + i;

        let colors_row = '';

        for (let x = 1; x <= no_of_color; x++) {

            let color_name = 'cost_color_' + x;
            let color_val = '';
            if(category_val !== null){
                color_val = getSizeValue(category_val[y-1][color_name]);
            }

            colors_row = colors_row.concat('' +
                '<td class="costing_table_color">' +
                '<input type="text" id="costing_'+ categories +'_color_'+x+'_'+y+'" ' +
                'name="costing_'+ categories +'_color_'+x+'_'+y+'" ' +
                'value="'+ color_val +'" ' +
                'class=" css-input-costing-data-solo">' +
                '</td>'+
                '');
        }

        $(categories_row).append(colors_row);
        y++;
    }

    // costing_fabric_tr


}


function getCategoryData(category){
    let size_row_data = null;
    if('fabric' === category){
        size_row_data = sessionStorage.getItem("cost_fabrics");
    }else if('trim' === category){
        size_row_data = sessionStorage.getItem("cost_trims");
    }else if('zipper' === category){
        size_row_data = sessionStorage.getItem("cost_zippers");
    }else if('embelishment' === category){
        size_row_data = sessionStorage.getItem("cost_embelishments");
    }else if('label' === category){
        size_row_data = sessionStorage.getItem("cost_labels");
    }else if('thread' === category){
        size_row_data = sessionStorage.getItem("cost_threads");
    }else if('package' === category){
        size_row_data = sessionStorage.getItem("cost_packages");
    }else if('finish' === category){
        size_row_data = sessionStorage.getItem("cost_finishes");
    }else if('export' === category){
        size_row_data = sessionStorage.getItem("cost_exports");
    }else if('testing' === category){
        size_row_data = sessionStorage.getItem("cost_testings");
    }else if('other' === category){
        size_row_data = sessionStorage.getItem("cost_others");
    }else if('labor' === category){
        size_row_data = sessionStorage.getItem("cost_labors");
    }

    return JSON.parse(size_row_data);

}

function getSizeValue(value){

    if(value === undefined){
        return '';
    }else if(value === null){
        return '';
    }else{
        return value;
    }
}
