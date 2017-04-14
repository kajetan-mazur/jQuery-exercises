$('#accept').click(function () {
    if ($('#submitbtn').is(':disabled')) {
        $('#submitbtn').removeAttr('disabled');
    } else {
        $('#submitbtn').attr('disabled','disabled')
    }

});