// function myFunction(video) 
// {
//   if (video.paused) 
//     video.play();
//   else 
//     video.pause();
// }
$(document).ready(function()
{
  // var video = document.getElementById("myVideo");
  // myFunction(video);
  $(".picture").mouseover(function()
  {
    // console.log(this.id);
    // populateSubMenu(this.id);
    switch (this.id)
    {
      case "wifiby": populateSubMenu("wifibyReadme.txt");
      break;
      case "warrior": console.log("warrior");
      break;
      case "maze": console.log("maze");
      break;
      case "tic-tac-toe": console.log("tic-tac-toe");
      break;
      default: console.log("no matches");
    }
  });
  function populateSubMenu(name)
  {
    $.ajax(
    {
      url: "../textFiles/"+name,
      success: function(result)
      {
        // $("#readmeText").html(result);
        $("body").append(result);
      },
      error: function()
      {
        $("#readmeText").html("Failed to load readme");
      }
    });
  }
});
