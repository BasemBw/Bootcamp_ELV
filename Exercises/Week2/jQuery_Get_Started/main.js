
$("h1").css("color", "blue")
$("#li1").css("color", "green")
$("#li2").css("color", "pink")
$(".red-div").css("color", "red")
$("#brown-div").css("color", "brown")

//---------------------------------------------

//$("#D1").addClass("box")
//$("#D2").addClass("box")
$("#my-input").val("Terabyte")

//------------------Data Attribute-------------------------
const data = $("#Div1").data()
console.log("Item with barcode " + data.barcode + " will expire on " + data.expirationdate) 


//---------Events--------

// $('button').click(function () {
//     alert('clicked!')
//   })

// $('button').on('click', function () {
//     const data = $("#my-input").val()
//     alert(data)
// })

$("#D2").hover(function () {
    $("#D2").css("color", "green")
})

//-----------------------------

$(".box").hover(function () {
    $(this).css("background-color", "blue")
})


const addDiv = function() {
    $("body").append("<div class=box></div>");
  };
  
  $("#button1").on("click", function() {
    addDiv();
  });
  
  $("body").on("click", ".box", function() {
    alert("hi");
  });





