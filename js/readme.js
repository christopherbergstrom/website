$(document).ready(function()
{
  // $("#programmerQAReadme").click(function()
  // {
  //   $("body").append("<div id='readme'></div>").hide().fadeIn("slow");
  //   $("#readme").append("<div id='readmeExit' class='fa fa-times'></div>");
  //   $("#readme").append("<div id='readmeTitle'>Programmer Q&A</div>");
  //   $("#readme").append("<div id='readmeText'>Programmer Q&A is a platform for users to ask and answer questions about popular programming languages.<br><br>Created: May 9, 2016<br>Updated: <br>Technologies: Java, JPA, JPQL, Spring MVC, MySQL, HTML, CSS, JavaScript</div>");
  //   $("#readmeExit").click(function()
  //   {
  //     $("#readme").fadeOut(300, function()
  //     {
  //       $(this).remove();
  //     });
  //   });
  // });
  // $("#typeFasterReadme").click(function()
  // {
  //   $("body").append("<div id='readme'></div>").hide().fadeIn("slow");
  //   $("#readme").append("<div id='readmeExit' class='fa fa-times'></div>");
  //   $("#readme").append("<div id='readmeTitle'>Type Faster</div>");
  //   $("#readme").append("<div id='readmeText'>Type Faster helps you type faster. It grabs a random word from a MySQL database of over 2000 words and you type as many as you can before the time runs out. This website uses local storage to remember your last high score initials entered.<br><br>Created: March 4, 2016<br>Technologies: Java, JPA, JPQL, Spring MVC, MySQL, HTML, CSS, JavaScript</div>");
  //   $("#readmeExit").click(function()
  //   {
  //     $("#readme").fadeOut(300, function()
  //     {
  //       $(this).remove();
  //     });
  //   });
  // });
  $("#tic-tac-toeReadme").click(function()
  {
    $("body").append("<div id='readmeWindow'></div>").hide().fadeIn("slow");
    $("#readmeWindow").append("<div id='readmeExit' class='fa fa-times'></div>");
    $("#readmeWindow").append("<div id='readmeTitle'>Tic-Tac-Toe</div>");
    $("#readmeWindow").append("<div id='readmeText'></div>");
    $.ajax(
    {
      url: "../textFiles/tic-tac-toeReadme.txt",
      success: function(result)
      {
        $("#readmeText").html(result);
      },
      error: function()
      {
        $("#readmeText").html("Failed to load readme");
      }
    });
    $("#readmeExit").click(function()
    {
      $("#readmeWindow").fadeOut(300, function()
      {
        $(this).remove();
      });
    });
  });
  $("#converterReadme").click(function()
  {
    $("body").append("<div id='readmeWindow'></div>").hide().fadeIn("slow");
    $("#readmeWindow").append("<div id='readmeExit' class='fa fa-times'></div>");
    $("#readmeWindow").append("<div id='readmeTitle'>Unit Converter</div>");
    $("#readmeWindow").append("<div id='readmeText'></div>");
    $.ajax(
    {
      url: "../textFiles/converterReadme.txt",
      success: function(result)
      {
        $("#readmeText").html(result);
      },
      error: function()
      {
        $("#readmeText").html("Failed to load readme");
      }
    });
    $("#readmeExit").click(function()
    {
      $("#readmeWindow").fadeOut(300, function()
      {
        $(this).remove();
      });
    });
  });
  $("#mazeReadme").click(function()
  {
    $("body").append("<div id='readmeWindow'></div>").hide().fadeIn("slow");
    $("#readmeWindow").append("<div id='readmeExit' class='fa fa-times'></div>");
    $("#readmeWindow").append("<div id='readmeTitle'>Maze Generator</div>");
    $("#readmeWindow").append("<div id='readmeText'></div>");
    $.ajax(
    {
      url: "../textFiles/mazeReadme.txt",
      success: function(result)
      {
        $("#readmeText").html(result);
      },
      error: function()
      {
        $("#readmeText").html("Failed to load readme");
      }
    });
    $("#readmeExit").click(function()
    {
      $("#readmeWindow").fadeOut(300, function()
      {
        $(this).remove();
      });
    });
  });
  $("#warriorReadme").click(function()
  {
    $("body").append("<div id='readmeWindow'></div>").hide().fadeIn("slow");
    $("#readmeWindow").append("<div id='readmeExit' class='fa fa-times'></div>");
    $("#readmeWindow").append("<div id='readmeTitle'>Warrior Project</div>");
    $("#readmeWindow").append("<div id='readmeText'></div>");
    $.ajax(
    {
      url: "../textFiles/warriorReadme.txt",
      success: function(result)
      {
        $("#readmeText").html(result);
      },
      error: function()
      {
        $("#readmeText").html("Failed to load readme");
      }
    });
    $("#readmeExit").click(function()
    {
      $("#readmeWindow").fadeOut(300, function()
      {
        $(this).remove();
      });
    });
  });
  // $("#clickItReadme").click(function()
  // {
  //   $("body").append("<div id='readme'></div>").hide().fadeIn("slow");
  //   $("#readme").append("<div id='readmeExit' class='fa fa-times'></div>");
  //   $("#readme").append("<div id='readmeTitle'>Click It</div>");
  //   $("#readme").append("<div id='readmeText'>Click It is an original game where you have to click as many colored dots as you can in 30 seconds. This game works best on touch screen devices. This website uses local storage to remember your last high score initials entered.<br><br>Created: April 3, 2016<br>Updated: <br>Technologies: Java, JPA, JPQL, Spring MVC, MySQL, HTML, CSS, JavaScript</div>");
  //   $("#readmeExit").click(function()
  //   {
  //     $("#readme").fadeOut(300, function()
  //     {
  //       $(this).remove();
  //     });
  //   });
  // });
  $("#bioReadme").click(function()
  {
    $("body").append("<div id='readmeWindow'></div>").hide().fadeIn("slow");
    $("#readmeWindow").append("<div id='readmeExit' class='fa fa-times'></div>");
    $("#readmeWindow").append("<div id='readmeTitle'>About me</div>");
    $("#readmeWindow").append("<div id='readmeText'></div>");
    $.ajax(
    {
      url: "../textFiles/bioReadme.txt",
      success: function(result)
      {
        $("#readmeText").html(result);
      },
      error: function()
      {
        $("#readmeText").html("Failed to load readme");
      }
    });
    $("#readmeExit").click(function()
    {
      $("#readmeWindow").fadeOut(300, function()
      {
        $(this).remove();
      });
    });
  });
});
