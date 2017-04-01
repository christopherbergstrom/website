$(document).ready(function()
{
  $("#programmerQAReadme").click(function()
  {
    $("body").append("<div id='readme'></div>").hide().fadeIn("slow");
    $("#readme").append("<div id='readmeExit' class='fa fa-times'></div>");
    $("#readme").append("<div id='readmeTitle'>Programmer Q&A</div>");
    $("#readme").append("<div id='readmeText'>Programmer Q&A is a platform for users to ask and answer questions about popular programming languages.<br><br>Created: May 9, 2016<br>Updated: <br>Technologies: Java, JPA, JPQL, Spring MVC, MySQL, HTML, CSS, JavaScript</div>");
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
    $("#readme").append("<div id='readmeText'>Type Faster helps you type faster. It grabs a random word from a MySQL database of over 2000 words and you type as many as you can before the time runs out. This website uses local storage to remember your last high score initials entered.<br><br>Created: March 4, 2016<br>Technologies: Java, JPA, JPQL, Spring MVC, MySQL, HTML, CSS, JavaScript</div>");
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
    $("#readme").append("<div id='readmeText'>This Tic-Tac-Toe game can be played with either a friend or against a fully functional AI. This game uses a mulitdemensional array to keep track of player moves and then tests to see if there is a winner after each move.<br><br>Created: May 23, 2016<br>Updated: <br>Technologies: HTML, CSS, JavaScript</div>");
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
    $("#readme").append("<div id='readmeText'>A converter that works with many different measurements which was styled after Google's unit converter.<br><br>Created: June 8, 2016<br>Updated: <br>Technologies: HTML, CSS, JavaScript</div>");
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
    $("#readme").append("<div id='readmeText'>Mazerator is a game that makes you a new maze every time you play, no two times are the same! The game keeps track of the maze walls using a multidimensional array which is an X, Y plane representation of the maze. It also uses a regular array to keep track of possible paths during the building of the maze which it backtracks through once it has reached a dead end ensuring that all possible paths are taken.<br><br>Created: July 29, 2016<br>Updated: <br>Technologies: HTML, CSS, JavaScript, jQuery</div>");
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
    $("#readme").append("<div id='readmeText'>Click It is an original game where you have to click as many colored dots as you can in 30 seconds. This game works best on touch screen devices. This website uses local storage to remember your last high score initials entered.<br><br>Created: April 3, 2016<br>Updated: <br>Technologies: Java, JPA, JPQL, Spring MVC, MySQL, HTML, CSS, JavaScript</div>");
    $("#readmeExit").click(function()
    {
      $("#readme").fadeOut(300, function()
      {
        $(this).remove();
      });
    });
  });
  $("#bioReadme").click(function()
  {
    $("body").append("<div id='readme'></div>").hide().fadeIn("slow");
    $("#readme").append("<div id='readmeExit' class='fa fa-times'></div>");
    $("#readme").append("<div id='readmeTitle'>About me</div>");
    $("#readme").append("<div id='readmeText'>Hi, I'm Chris and I love coding. I discovered web development in 2015 and it's been a part of my life ever since.<br><br>Since then I have been on a wild journey that included quitting my job, moving from California to Colorado to attend a 6 month long full stack web development bootcamp called <a href='http://skilldistillery.com/' class='link' target='_blank'>Skill Distillery</a>, finishing the program but not being able to find a job, moving back to California to go back to my old job as a mail carrier, and now finally rediscovering my love for coding.<br><br>I believe that you are only limited by your imagination and that anything is possible if you believe in yourself and are willing to put in the work.<br><br>I am more determined now than I ever have been before to have a career in web development and fulfill my dreams of being a professional web developer.<br><br>To sum it all up, I am a hardworking, likable guy, who is easy to get along with, loves solving problems and learning new things.<br><br>In my free time I enjoy updating my website, making HTML games, riding my motorcycle, and going to the gym.</div>");
    $("#readmeExit").click(function()
    {
      $("#readme").fadeOut(300, function()
      {
        $(this).remove();
      });
    });
  });
});
