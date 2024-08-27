

$('#costing_form_update').submit(function(e){
    e.preventDefault();
    $('#costing_update_btn').hide();

    $.ajax({
        type: 'POST',
        url: '/api/costing-sheets/update/' + parseInt(sessionStorage.getItem('costing_sheet_id')),
        data: new FormData(this),
        dataType: 'JSON',
        contentType: false,
        cache: false,
        processData: false,
        success: function (response) {
            console.log(response);
            alert('Successfully Updated!!!');
            window.location.reload();

        },
        error: function (x,h,r) {
            console.log(x.responseText);
            alert('Error Saving!!!');
        }
    });

});
