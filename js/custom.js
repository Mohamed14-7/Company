$(document).ready(function () {
  $(".btn").on("click", function () {
    $("body").toggleClass("darkMode");
    $(".ball").toggleClass("right-dk");
    $(".btn").toggleClass("right-dk");
  });
});
