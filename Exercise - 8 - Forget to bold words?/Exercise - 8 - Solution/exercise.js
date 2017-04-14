$('p').each(function () {
   var pdata = $(this);
   pdata.html(pdata.text().replace(/(^\w+)/,'<strong>$1</strong>'));
});