// $.get("https://www.googleapis.com/books/v1/volumes?q=title:name=wind", function(result){
//     console.log(result.items[0].volumeInfo.description)
// })

/* let person
setTimeout(function(){
  person = {name: "Kyle", age: 37}
}, 1000)

let expectedYearsLeft = 120 - person.age

console.log(`${person.name} has ${expectedYearsLeft} to live`)
 */

// let data = $.get("https://www.googleapis.com/books/v1/volumes?q=title:name=wind",function(response){})  //Not Working 
// console.log("he",data)

//---------------------------------------------
// const Render_Function = function(data){
//     console.log(data)
// }

// $.get("https://www.googleapis.com/books/v1/volumes?q=title:name=wind",Render_Function)
//---------------------------------------------
// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//   //extract the geo data of the first user

//   let lat = users[0].address.geo.lat
//   let long = users[0].address.geo.lng
  
// })
//-------------------------------------------------------------
// const Render_Function = function(users){
//     let lat = users[users.length-1].company.catchPhrase
//     console.log(lat)
// }

// $.get("https://jsonplaceholder.typicode.com/users",Render_Function)
//---------------------------------------------------------
// // const Render_Function = function(data){
//     $("body").append(data)
// }
/* $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
    success: Render_Function,
    error: function (xhr, text, error) {
        console.log("error");
    }
});  */

// const fetch = function(){
//     let isbn = $("input").val()
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
//         success: function (data) {
//             console.log(data.items[0].volumeInfo.title)
//         },
//         error: function (xhr, text, error) {
//             console.log("error");
//         }
//     }); 
// }

$.get('/https://www.googleapis.com/books/v1/volumes?q=isbn', function(result){
    console.log(result) 
})
//console.log(data)
