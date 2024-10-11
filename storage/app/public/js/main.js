

    Dropzone.options.costingSheet = {
        init: function () {
            this.on('success', function() {
                var args = Array.prototype.slice.call(arguments);

                alert('Costing Sheets Succesfully Uploaded!!!');
                setTimeout(Reload,1000);

                function Reload(){
                    window.location.href = '/costing-sheets'
                }

                // console.log(args[1]);
                // alert(args[1]);
            });
        }
    }




