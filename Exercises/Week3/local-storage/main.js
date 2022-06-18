let MyData = JSON.parse(localStorage.Wisdom || "[]")
let data = {
    data: MyData
}
const RenderFun = function (data) {
    const source = $('#template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $("#Datafild").html(newHTML)
}
RenderFun(data)
$("#Click").click(function () {
    let MyNewWisdom = $("input").val()
    let WisdomArrya = []
    let NewObj = {
        text: MyNewWisdom
    }
    WisdomArrya = JSON.parse(localStorage.Wisdom || "[]")
    localStorage.Wisdom = JSON.stringify(WisdomArrya)
    WisdomArrya.push(NewObj)
    localStorage.Wisdom = JSON.stringify(WisdomArrya)
    $("input").val("")
})
$("#ClearWisdom").click(function () {
    localStorage.clear()
    $("#Datafild").html("")
})
$(document).on('click', '.Delete', function () {
    console.log("join to delete")
    let ElemntToDelete = $(this).data().id
    let NewArray = []
    WisdomArrya = JSON.parse(localStorage.Wisdom || "[]")
    NewArray = WisdomArrya.filter(element => element.text != ElemntToDelete)
    console.log(NewArray)
    localStorage.Wisdom = JSON.stringify(NewArray)
    let obj = { data: NewArray }
    RenderFun(obj)
})
