$("#select #option").on("click", function () {
  $("#select ul").toggle();
});

$("#select ul li").on("click", function () {
  let val = $(this).data("option");
  $("#select strong").text(val);
});
