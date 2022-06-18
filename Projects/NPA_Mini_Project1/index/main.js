const render = new Renderer()


const  getDataFun = function (){
    let nameTeam = $("input").val()
    $.get(`/teams/${nameTeam}`, function (data) {
        render.getDataMethod(data)
    })
}

const getDreamTeam = function(){
    $.get(`/dreamTeam`, function (data) {
        render.getDataMethod(data)
    })
}

$(".wrapper").on("click", "button", function () {
    let firstName = $(this).closest(".ShowClass").find(".name").text().split(' ')[0]
    let lastName= $(this).closest(".ShowClass").find(".name").text().split(' ')[1]
    let jersey = $(this).closest(".ShowClass").find(".jersey").text()
    let pos = $(this).closest(".ShowClass").find(".pos").text()
    $.post('/addPlayer',{firstName:firstName,lastName:lastName,jersey:jersey,pos:pos},function(data){
        alert(data)
        console.log(data)
    })
})