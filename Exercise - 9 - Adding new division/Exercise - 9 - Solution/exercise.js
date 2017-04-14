function new_div() {
   $(document).ready(function () {
       var test = {
          id: "div",
          class: "divclass",
          css: {
             "color":"Green"
          }
       };
       var $div = $('<div>',test);
       $div.html("Friday Div");
       $("body").append($div);
   });

}