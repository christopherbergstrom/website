$(document).ready(function()
{
  // console.log($("#wifiby").outerHeight());
  // console.log($("#wifiby").outerWidth());
  $("#aboutBtn").click(function()
  {
    // var scrollAmount = $("#aboutBtn").offset().top;
    $('html,body').animate({scrollTop: 0}, 750);
  });
  $("#portfolioBtn").click(function()
  {
    $('html,body').animate({scrollTop: $(".about").outerHeight(true)}, 750);
  });
});
