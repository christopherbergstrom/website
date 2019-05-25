$(document).ready(function()
{
  // let wifiby="http://www.wifibycv.com";
  let view;
  let github;
  $(".project").mouseenter(function()
  {
    // var pathname = window.location.pathname; // Returns path only (/path/example.html)
    // var url      = window.location.href;     // Returns full URL (https://example.com/path/example.html)
    // var origin   = window.location.origin;   // Returns base URL (https://example.com)    
    console.log($(this).attr("id"));
    let link=$(this).attr("id");
    console.log(typeof link);
    // console.log($(this).width());
    // add switch statement here switch on attr.id for link urls
    switch(link)
    {
      case "wifiby": {
        view="http://wifibycv.com";
        github="https://www.github.com/christopherbergstrom";
        break;
      }
      case "warrior": {
        view="warrior/warrior.html";
        github="https://github.com/christopherbergstrom/warriorProjectWeb";
        break;
      }
      case "maze": {
        view="maze/maze.html";
        github="https://github.com/christopherbergstrom/maze";
        break;z ``
      }
      case "tic-tac-toe": {
        view="tic-tac-toe/tic-tac-toe.html";
        github="https://github.com/christopherbergstrom/tic-tac-toe";
        break;
      }
    }
    $(this).append(`
      <a target="_blank" class='projectLink menuItem'>view</a>
      <a target="_blank" class='projectLink menuItem'>github</a>
    `);
    $(".projectLink").hide().fadeIn("fast");
    $(".projectLink:odd").css("top", "auto");
    $(".projectLink:odd").css("bottom", "0");
    $(".projectLink").attr("href", view);
    $(".projectLink:odd").attr("href", github);
    $(".projectLink").mouseenter(function()
    {
      $(this).fadeTo(150, 0.9);
    }).mouseleave(function()
    {
      $(this).fadeTo(150, 0.5);
    });
  }).mouseleave(function()
  {
    $(".projectLink").fadeOut(300, function()
    {
      $(this).remove();
    });
  });
});