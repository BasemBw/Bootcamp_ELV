
$("body").append('<div class="box"></div><div class="box"></div>')
$(".box").hover(function () {
    $(".box").css("background-color", "red");
    $(this).css("background-color", "yellow");
})