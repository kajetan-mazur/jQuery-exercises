var maxLength = 20;
$('textarea').keyup(function () {
   var textlen = maxLength - $(this).val().length;
   $('#rchars').text(textlen);
});