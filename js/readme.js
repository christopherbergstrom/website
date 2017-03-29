$(document).ready(function()
{
  $("#programmerQAReadme").click(function()
  {
    $("body").append("<div id='readme'></div>").hide().fadeIn("slow");
    $("#readme").append("<div id='readmeExit' class='fa fa-times'></div>");
    $("#readme").append("<div id='readmeTitle'>Programmer Q&A</div>");
    $("#readme").append("<div id='readmeText'>Programmer Q&A is a platform for users to ask and answer questions about popular programming languages.<br><br>Date created: May 9, 2016<br>Technologies used: Java, JPA, JPQL, Spring MVC, MySQL, HTML, CSS, JavaScript</div>");
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
    $("#readme").append("<div id='readmeText'>Type Faster helps you type faster. It grabs a random word from a MySQL database of over 2000 words and you type as many as you can before the time runs out. This website uses local storage to remember your last high score initials entered.<br><br>Date created: March 4, 2016<br>Technologies used: Java, JPA, JPQL, Spring MVC, MySQL, HTML, CSS, JavaScript</div>");
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
    $("#readme").append("<div id='readmeText'>This Tic-Tac-Toe game can be played with either a friend or against a fully functional AI.<br><br>Date created: May 23, 2016<br>Technologies used: HTML, CSS, JavaScript</div>");
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
    $("#readme").append("<div id='readmeTitle'>Converter</div>");
    $("#readme").append("<div id='readmeText'>A converter that works with many different measurements which was styled after Google's unit converter.<br><br>Date created: June 8, 2016<br>Technologies used: HTML, CSS, JavaScript</div>");
    $("#readmeExit").click(function()
    {
      $("#readme").fadeOut(300, function()
      {
        $(this).remove();
      });
    });
  });
  $("#mazeReadme").click(function()
  {
    $("body").append("<div id='readme'></div>").hide().fadeIn("slow");
    $("#readme").append("<div id='readmeExit' class='fa fa-times'></div>");
    $("#readme").append("<div id='readmeTitle'>Mazerator</div>");
    $("#readme").append("<div id='readmeText'>Mazerator is a game that makes you a new maze every time you play, no two times are the same! The game keeps track of the maze walls using a multidimensional array which is an X, Y plane representation of the maze. It also uses a regular array to keep track of possible paths during the building of the maze which it backtracks through once it has reached a dead end.<br><br>Date created: July 29, 2016<br>Technologies used: HTML, CSS, JavaScript, jQuery</div>");
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
    $("#readme").append("<div id='readmeText'>Click It is an original game where you have to click as many colored dots as you can in 30 seconds. This game works best on touch screen devices. This website uses local storage to remember your last high score initials entered.<br><br>Date created: April 3, 2016<br>Technologies used: Java, JPA, JPQL, Spring MVC, MySQL, HTML, CSS, JavaScript</div>");
    $("#readmeExit").click(function()
    {
      $("#readme").fadeOut(300, function()
      {
        $(this).remove();
      });
    });
  });
});
