$(document).ready(function()
{
  $("#aboutLink").click(function()
  {
    var scrollAmount = $("#about").offset().top;
    $('html,body').animate({scrollTop: scrollAmount}, 200);
  });
  $(".portfolioLink").click(function()
  {
    var scrollAmount = $("#portfolio").offset().top;
    $('html,body').animate(
      {
        scrollTop: scrollAmount
      }, 200);
  });
});
