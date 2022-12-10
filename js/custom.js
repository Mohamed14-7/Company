$(document).ready(function () {
  $(".btn").on("click", function () {
    $("body").toggleClass("darkMode");
    $(".ball").toggleClass("right-dk");
    $(".btn").toggleClass("right-dk");
  });
  $(".listIcon").on("click", function (e) {
    e.preventDefault();
    $(".menu").animate(
      {
        right: "0",
      },
      800
    );
  });
  $(".close").on("click", function (e) {
    e.preventDefault();
    $(".menu").animate(
      {
        right: "-100%",
      },
      800
    );
  });
});
