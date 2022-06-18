$('#Mybutton').click(function () {
    if($('input').val()=="")
      alert("Please Enter Text!")
    else{
        let divCopy = `<li class="list-group-item d-flex justify-content-between align-items-center">${$('input').val()}<i id="Delete" class="bi bi-x-circle-fill"></i></li>`
        $(".list-group").append(divCopy)
    }
  })

$('li').click(function(){
    $(this).remove() 
})
