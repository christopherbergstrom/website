$(document).ready(resize);
$(window).resize(resize);

function resize()
{
    // console.log("resize");
    // console.log($("#firstProjectRow div").first().width()*2);
    // console.log($(window.innerWidth)[0]);
    // console.log($(window.innerWidth)[0]/12*10);
    // console.log($("#firstProjectRow").width());
    // console.log(childLength);
    // if($("#firstProjectRow").width() > (childLength))
    if($("#firstProjectRow div").first().width()*2 > ($(window.innerWidth)[0]/12*10))
        stacked();
    else
    {
        $(".mePic").css("max-height", "50vh");
        $(".about").css("margin-top", "20vh");
        $(".project").css("margin-left", "8.33vw");
        $(".project:odd").css("margin-left", "16.66vw");
        $(".project").css("height", "16.5vw");
        $("#mePic").css("height", "16.5vw");
        $("#mePic").css("margin-left", "33.32vw");
        // $(".about").css("text-align", "left");
    }
}
function stacked()
{
    console.log("stacked");
    $(".about").css("margin-top", "15vh");
    $(".project").css("max-width", "80vw");
    $(".project").css("margin-left", "10vw");
    $(".project").css("height", "40vw");
    $("#mePic").css("max-width", "80vw");
    $("#mePic").css("margin-left", "10vw");
    $("#mePic").css("height", "40vw");
    // $(".about").css("text-align", "center");
}