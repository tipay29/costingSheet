let costing_front_photo = $('#costing_front_photo');
let costing_back_photo = $('#costing_back_photo');
let costing_left_photo = $('#costing_left_photo');
let costing_right_photo = $('#costing_right_photo');
let costing_form = $('#costing_form');


costing_form.submit(function(e){
    e.preventDefault();

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
        },
        error: function (x,h,r) {
            console.log(x.responseText);
            alert('Error Saving!!!');
        }
    });

});
