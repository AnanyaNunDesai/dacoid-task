$(document).on("click", ".preview-button", function (event) {
  event.preventDefault();
  var url = $(this).data("target");
  location.replace(url);
});

$(document).on("click", ".nav-account", function (event) {
  event.preventDefault();
  var url = $(this).data("target");
  location.replace(url);
});
