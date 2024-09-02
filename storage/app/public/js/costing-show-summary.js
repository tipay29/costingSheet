$('.show_summary_btn').click(function(e){

    $.ajax({
        type:'GET',
        url: '/api/costing-sheets/' + $(this).prop('id'),
        dataType: 'JSON',
        contentType: false,
        cache: false,
        processData: false,
        success: function (response) {
            console.log(response);
            $('#show_cost_summary_style').html('Style '+response['cost_style']);

            let href_edit = window.location.origin + '/costing-sheets/'+response['id']+'/edit';
            let href_export = window.location.origin + '/costing-sheets/'+response['id']+'/export';

            $('#show_cost_summary_edit').attr('href',href_edit);
            $('#show_cost_summary_export').attr('href',href_export);

            $('#costing_summary_fabric_total_fob').val(response['cost_fabric_total_fob'].toFixed(2));
            $('#costing_summary_trim_total_fob').val(response['cost_trim_total_fob'].toFixed(2));
            $('#costing_summary_zipper_total_fob').val(response['cost_zipper_total_fob'].toFixed(2));
            $('#costing_summary_embelishment_total_fob').val(response['cost_embelishment_total_fob'].toFixed(2));
            $('#costing_summary_label_total_fob').val(response['cost_label_total_fob'].toFixed(2));
            $('#costing_summary_thread_total_fob').val(response['cost_thread_total_fob'].toFixed(2));
            $('#costing_summary_package_total_fob').val(response['cost_package_total_fob'].toFixed(2));
            $('#costing_summary_finish_total_fob').val(response['cost_finish_total_fob'].toFixed(2));
            $('#costing_summary_export_total_fob').val(response['cost_export_total_fob'].toFixed(2));
            $('#costing_summary_testing_total_fob').val(response['cost_testing_total_fob'].toFixed(2));
            $('#costing_summary_other_total_fob').val(response['cost_other_total_fob'].toFixed(2));
            $('#costing_summary_labor_total_fob').val(response['cost_labor_total_fob'].toFixed(2));
            $('#costing_summary_total_cost_fob').val(response['cost_total_fob'].toFixed(2));

            let fabric_percent = ((response['cost_fabric_total_fob']/response['cost_total_fob'])*100).toFixed(2);
            let trim_percent = ((response['cost_trim_total_fob']/response['cost_total_fob'])*100).toFixed(2);
            let zipper_percent = ((response['cost_zipper_total_fob']/response['cost_total_fob'])*100).toFixed(2);
            let embelishment_percent = ((response['cost_embelishment_total_fob']/response['cost_total_fob'])*100).toFixed(2);
            let label_percent = ((response['cost_label_total_fob']/response['cost_total_fob'])*100).toFixed(2);
            let thread_percent = ((response['cost_thread_total_fob']/response['cost_total_fob'])*100).toFixed(2);
            let package_percent = ((response['cost_package_total_fob']/response['cost_total_fob'])*100).toFixed(2);
            let finish_percent = ((response['cost_finish_total_fob']/response['cost_total_fob'])*100).toFixed(2);
            let export_percent = ((response['cost_export_total_fob']/response['cost_total_fob'])*100).toFixed(2);
            let testing_percent = ((response['cost_testing_total_fob']/response['cost_total_fob'])*100).toFixed(2);
            let other_percent = ((response['cost_other_total_fob']/response['cost_total_fob'])*100).toFixed(2);
            let labor_percent = ((response['cost_labor_total_fob']/response['cost_total_fob'])*100).toFixed(2);

            $('#costing_summary_fabric_percent').val(fabric_percent);
            $('#costing_summary_trim_percent').val(trim_percent);
            $('#costing_summary_zipper_percent').val(zipper_percent);
            $('#costing_summary_embelishment_percent').val(embelishment_percent);
            $('#costing_summary_label_percent').val(label_percent);
            $('#costing_summary_thread_percent').val(thread_percent);
            $('#costing_summary_package_percent').val(package_percent);
            $('#costing_summary_finish_percent').val(finish_percent);
            $('#costing_summary_export_percent').val(export_percent);
            $('#costing_summary_testing_percent').val(testing_percent);
            $('#costing_summary_other_percent').val(other_percent);
            $('#costing_summary_labor_percent').val(labor_percent);
        },
        error: function (x,h,r) {
            console.log(x.responseText);
        }
    });


});


// $( "body" ).on( "focusin", "input", function() {
//     $(this).next("button").css('display','inline');
//     $(this).focusout(function(e){
//         $(this).next("button").css('display','none');
//     });
// });
//
// $('.btn_apply_up').click(function(e){
//     e.preventDefault();
// });
