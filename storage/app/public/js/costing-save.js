

$('#costing_form_create').submit(function(e){
    e.preventDefault();
    $('#costing_save_btn').hide();

    $.ajax({
        type:'POST',
        url: '/api/costing-sheets/store',
        data: new FormData(this),
        dataType: 'JSON',
        contentType: false,
        cache: false,
        processData: false,
        success: function (response) {
            console.log(response);
            alert('Successfully Saved!!!');
            window.location.href = '/costing-sheets';

        },
        error: function (x,h,r) {
            console.log(x.responseText);
            alert('Error Saving!!!');
        }
    });

});
