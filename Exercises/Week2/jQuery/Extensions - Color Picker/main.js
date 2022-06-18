const colors = $('#colors')
const box = $(".box")
    colors.children('span').each(function () {
        $(this).css('background-color',$(this).data().color)
    });

$("span").on("click", function() {
    box.css('background-color',$(this).data().color)
  });

