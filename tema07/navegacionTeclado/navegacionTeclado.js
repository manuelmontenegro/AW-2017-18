
$(() => {
  $("#menu li").on("keydown", (evt) => {
    if (evt.which === 13) {
      alert("Se ha pulsado la opción " + $(evt.target).text());
      evt.preventDefault();
    }
  })
});
