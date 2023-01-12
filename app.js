(function () {
  $(".article").on("click", function (event) {
    $(".article").fadeOut("fast");
  });
  console.log("injected");
})(jQuery);
