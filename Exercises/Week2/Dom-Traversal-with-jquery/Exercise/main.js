 const Id_Array = []
 
 $('.generator').on('click', function() {
    console.log("Processor ID:",$(this).closest("div")[0].id)
    console.log("Computer's data-id:",$(this).closest(".computer").data().id)
    let obj = {id:$(this).closest(".computer").data().id}
    Id_Array.push(obj)
    console.log("BUS: ",$(this).closest(".computer").find(".BUS").text())
  }) 


  $('.validator').on('click', function() {
    console.log($(this).closest(".computer").find(".processor").find(".generator").text())
    console.log($(this).closest(".computer").find(".MB").text())
    console.log($(this).closest(".computer").find(".processor").find(".QR").text())
  }) 




