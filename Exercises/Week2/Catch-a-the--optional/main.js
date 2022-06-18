// const PLayFild = $(".playfild")
// $(document).on('click', '.playbutton', function () {
//     $(".playfild").append(`<img id="thefrog" width="40px" height="40px" src="images/frog-icon-9.jpg" />`)
//     let PO = PLayFild.position()
//     var width = PLayFild.css('width');
//     var height = PLayFild.css('height');

//     // console.log(width)
//     // console.log(height)
//     // console.log($(window).height(),
//     // $(window).width())
    

//     function yourFunction(){
//       console.log("Asas");
//       setTimeout(yourFunction, 1000);
//   }
  
//   yourFunction();
//   });

  $("#playfild").append(`<div id="Icon" style="width: 40px; height: 40px; background-color: black;"></div>`)
  let block = document.getElementById("Icon")
  block.style.left = 1000 + "px"
  block.style.top = 100 + "px"