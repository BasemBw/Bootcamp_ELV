let money = 1000
let priceProduct = 120

setInterval(showDatafunction, 3000);

function showDatafunction(){
    $.get(`priceCheck/chair`, function (data) {
         if(data.price<priceProduct){
            console.log("bought chair for less")
            priceProduct = data.price
         }
         else{
            console.log("still waiting for a price drop...")
         }
    })
}
const MyFun = function () {
    let input = $("input").val()
    $.get(`priceCheck/${input}`, function (data) {
        $("body").append(`<div>${input} price is :${data.price}</div>`)
    })
} 

const buyFunctio = function (){
    let input = $("input").val()
    $.get(`priceCheck/${input}`, function (data) {
        if(data.price<money){
            money=money-data.price
            $.get(`buy/${input}`, function (data) {
                $("#p").html(`<p id=p>My Money :${money}</p>`)
                $("body").append(`<div>${input} price is :${data.price} There are ${data.inventory} left now </div>`)
            })
        }
    })
} 


$("body").append(`<p id=p>My Money :${money}</p>`)