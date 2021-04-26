$(document).ready(function () {
  $(".view").click(function () {
    $(".rightContent").html("<h1>Loading...</h1>");
    setTimeout(function () {
      $.ajax({
        url: "view.html",
        success: function (response) {
          $(".rightContent").html(response);
        },
      });
    }, 1000);
  });
  $(".formContent").click(function (e) {
    $(".rightContent").html("<h1>Loading...</h1>");
    setTimeout(function () {
      $.get({
        url: "formContent.html",
        success: function (response) {
          $(".rightContent").html(response);
        },
      });
    }, 1000);
  });
});
