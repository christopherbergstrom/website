$(document).ready(function()
{
  $(".project").mouseenter(function()
  {
    console.log("here");
    console.log($(this).attr("id"));
    console.log($(this).width());
    $(this).append(`
      <div class='projectLink'>view</div>
      <div class='projectLink'>github</div>
    `);
    $(".projectLink").hide().fadeIn("fast");
    $(".projectLink:odd").css("top", "auto");
    $(".projectLink:odd").css("bottom", "0");
    $(".projectLink").mouseenter(function()
      {
        $(this).fadeTo(150, 0.9);
      }).mouseleave(function()
      {
        $(this).fadeTo(150, 0.5);
      });
    // $(".projectLink").css("transition", "opacity .1s linear");
    // $.ajax(
    // {
    //   url: "../textFiles/bioReadme.txt",
    //   success: function(result)
    //   {
    //     $(".aboutMeText").html(result);
    //     $(".aboutMeText").hide().fadeIn("fast");
    //   },
    //   error: function()
    //   {
    //     $(".aboutMeText").html("Failed to load readme");
    //     $(".aboutMeText").hide().fadeIn("fast");
    //   }
    // });
  }).mouseleave(function()
  {
    $(".projectLink").fadeOut(300, function()
    {
      $(this).remove();
    });
  });
  // $("#me").mouseenter(function()
  // {
  //   $("#me").append("<div class='aboutMeText'></div>");
  //   $.ajax(
  //   {
  //     url: "../textFiles/bioReadme.txt",
  //     success: function(result)
  //     {
  //       $(".aboutMeText").html(result);
  //       $(".aboutMeText").hide().fadeIn("fast");
  //     },
  //     error: function()
  //     {
  //       $(".aboutMeText").html("Failed to load readme");
  //       $(".aboutMeText").hide().fadeIn("fast");
  //     }
  //   });
  // }).mouseleave(function()
  // {
  //   $(".aboutMeText").fadeOut(300, function()
  //   {
  //     $(this).remove();
  //   });
  // });
  $("#warrior").mouseenter(function()
  {
    $("#warrior").append(`
      <div class="projectAccess">
      <p class="title">Warrior Project</p>
      <div class="descLinks">
      <a class="webLink icons" href="warrior/warrior.html" target="_blank"><span class="fa fa-play"></a>
      <a class="webLink icons" href="https://github.com/christopherbergstrom/warriorProjectWeb" target="_blank"><span class="fa fa-github"></a>
      <div class="webLink icons readme" id="warriorReadme"><span class="fa fa-file-text-o"></div>
      </div>
      </div>`);
      $(".projectAccess").hide().fadeIn("fast");
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
  }).mouseleave(function()
  {
    $(".projectAccess").fadeOut(300, function()
    {
      $(this).remove();
    });
  });
  $("#maze").mouseenter(function()
  {
    $("#maze").append(`
      <div class="projectAccess">
      <p class="title">Maze Generator</p>
      <div class="descLinks">
      <a class="webLink icons" href="maze/maze.html" target="_blank"><span class="fa fa-play"></a>
      <a class="webLink icons" href="https://github.com/christopherbergstrom/maze" target="_blank"><span class="fa fa-github"></a>
      <div class="webLink icons readme" id="mazeReadme"><span class="fa fa-file-text-o"></div>
      </div>
      </div>`);
      $(".projectAccess").hide().fadeIn("fast");
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
  }).mouseleave(function()
  {
    $(".projectAccess").fadeOut(300, function()
    {
      $(this).remove();
    });
  });
  $("#converter").mouseenter(function()
  {
    $("#converter").append(`
      <div class="projectAccess">
      <p class="title">Unit Converter</p>
      <div class="descLinks">
      <a class="webLink icons" href="converter/converter.html" target="_blank"><span class="fa fa-play"></a>
      <a class="webLink icons" href="https://github.com/christopherbergstrom/converter" target="_blank"><span class="fa fa-github"></a>
      <div class="webLink icons readme" id="converterReadme"><span class="fa fa-file-text-o"></div>
      </div>
      </div>`);
      $(".projectAccess").hide().fadeIn("fast");
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
  }).mouseleave(function()
  {
    $(".projectAccess").fadeOut(300, function()
    {
      $(this).remove();
    });
  });
  $("#tic-tac-toe").mouseenter(function()
  {
    $("#tic-tac-toe").append(`
      <div class="projectAccess">
      <p class="title">Tic-Tac-Toe</p>
      <div class="descLinks">
      <a class="webLink icons" href="tic-tac-toe/tic-tac-toe.html" target="_blank"><span class="fa fa-play"></a>
      <a class="webLink icons" href="https://github.com/christopherbergstrom/tic-tac-toe" target="_blank"><span class="fa fa-github"></a>
      <div class="webLink icons readme" id="tic-tac-toeReadme"><span class="fa fa-file-text-o"></div>
      </div>
      </div>`);
      $(".projectAccess").hide().fadeIn("fast");
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
  }).mouseleave(function()
  {
    $(".projectAccess").fadeOut(300, function()
    {
      $(this).remove();
    });
  });
});
