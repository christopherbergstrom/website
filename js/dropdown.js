$(document).ready(function()
{
    (function(l){var i,s={touchend:function(){}};for(i in s)l.addEventListener(i,s)})(document); // sticky hover fix in iOS
    $(".topBtns").mouseover(function()
    {
        // $(".dropdownList").css("display", "block");
        $(".dropdownList").css("top", $(".topBtns").position().top + $(".topBtns").outerHeight() + 10);
        $(".dropdownList").css("left", $(".topBtns").position().left);
    }).mouseout(function()
    {
        // $(".dropdownList").css("display", "none");
    });
});