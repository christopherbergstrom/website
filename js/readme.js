$(document).ready(function()
{
  $("#programmerQAReadme").click(function()
  {
    $("body").append("<div id='readme'></div>").hide().fadeIn("slow");
    $("#readme").append("<div id='readmeExit' class='fa fa-times'></div>");
    $("#readme").append("<div id='readmeTitle'>Programmer Q&A</div>");
    $("#readme").append("<div id='readmeText'></div>");
    $("#readmeExit").click(function()
    {
      $("#readme").fadeOut(300, function()
      {
        $(this).remove();
      });
    });
  });
  $("#typeFasterReadme").click(function()
  {
    $("body").append("<div id='readme'></div>").hide().fadeIn("slow");
    $("#readme").append("<div id='readmeExit' class='fa fa-times'></div>");
    $("#readme").append("<div id='readmeTitle'>Type Faster</div>");
    $("#readme").append("<div id='readmeText'></div>");
    $("#readmeExit").click(function()
    {
      $("#readme").fadeOut(300, function()
      {
        $(this).remove();
      });
    });
  });
  $("#superWikiReadme").click(function()
  {
    $("body").append("<div id='readme'></div>").hide().fadeIn("slow");
    $("#readme").append("<div id='readmeExit' class='fa fa-times'></div>");
    $("#readme").append("<div id='readmeTitle'>SuperWiki</div>");
    $("#readme").append("<div id='readmeText'></div>");
    $("#readmeExit").click(function()
    {
      $("#readme").fadeOut(300, function()
      {
        $(this).remove();
      });
    });
  });
  $("#tic-tac-toeReadme").click(function()
  {
    $("body").append("<div id='readme'></div>").hide().fadeIn("slow");
    $("#readme").append("<div id='readmeExit' class='fa fa-times'></div>");
    $("#readme").append("<div id='readmeTitle'>Tic-Tac-Toe</div>");
    $("#readme").append("<div id='readmeText'></div>");
    $("#readmeExit").click(function()
    {
      $("#readme").fadeOut(300, function()
      {
        $(this).remove();
      });
    });
  });
  $("#converterReadme").click(function()
  {
    $("body").append("<div id='readme'></div>").hide().fadeIn("slow");
    $("#readme").append("<div id='readmeExit' class='fa fa-times'></div>");
    $("#readme").append("<div id='readmeTitle'>All Purpose Converter</div>");
    $("#readme").append("<div id='readmeText'></div>");
    $("#readmeExit").click(function()
    {
      $("#readme").fadeOut(300, function()
      {
        $(this).remove();
      });
    });
  });
  $("#clickItReadme").click(function()
  {
    $("body").append("<div id='readme'></div>").hide().fadeIn("slow");
    $("#readme").append("<div id='readmeExit' class='fa fa-times'></div>");
    $("#readme").append("<div id='readmeTitle'>Click It</div>");
    $("#readme").append("<div id='readmeText'></div>");
    $("#readmeExit").click(function()
    {
      $("#readme").fadeOut(300, function()
      {
        $(this).remove();
      });
    });
  });
});
