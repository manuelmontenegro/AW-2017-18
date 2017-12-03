
$(document).ready(function() {
  $("#menu li").on("keydown", function(evt) {
    console.log("Hey!");
    if (evt.which === 13) {
      alert($(this).text());
    }
  })
});
