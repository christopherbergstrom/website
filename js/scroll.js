$(document).ready(function () {
  // console.log($("#wifiby").outerHeight());
  // console.log($("#wifiby").outerWidth());
  $("#myWorkLinkNav").click(function () {
    var scrollAmount = $("#myWork").offset().top;
    $('html,body').animate({ scrollTop: scrollAmount }, 750);
  });
  $("#myWorkLink").click(function () {
    var scrollAmount = $("#myWork").offset().top;
    $('html,body').animate({ scrollTop: scrollAmount }, 750);
  });
  // $("#portfolioBtn").click(function()
  // {
  //   $('html,body').animate({scrollTop: $(".about").outerHeight(true)}, 750);
  // });
});
