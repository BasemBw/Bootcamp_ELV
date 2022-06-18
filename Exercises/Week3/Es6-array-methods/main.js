//----------------ES6 Tricks-------->>>
let ages = [12, 41, 11, 10, 32, 27, 18, 19, 19, 14, 58, 41, 9]

let olderThan16 = []
for(let age of ages){
  if(age > 16){
    olderThan16.push(age)
  }
}
console.log(olderThan16)

//-------- This Same Action But with ES6--
let olderThan161 = ages.filter(a => a > 16)
console.log(olderThan161)  
//--------------arrow function
/* const isGreaterThan16 = function (age) {
    return age > 16
}

let olderThan16 = ages.filter(isGreaterThan16) */
//----Spot Check--
let vegetables = [
    { name: "Eggplant", color: "purple" },
    { name: "Carrot", color: "orange" },
    { name: "Squash", color: "orange" },
    { name: "Tomatoe", color: "red" },
    { name: "Onion", color: "white" },
    { name: "Sweet Potato", color: "orange" }]
const NewArray = vegetables.filter(r => r.color === "orange")
console.log(NewArray)
//-----------Spot Check 2------
let people = [
    { salary: 1300, goodPerformance: false },
    { salary: 1500, goodPerformance: true },
    { salary: 1200, goodPerformance: true },
    { salary: 1700, goodPerformance: false },
    { salary: 1600, goodPerformance: true },
]
const updateSalary = function(person){
    if(person.goodPerformance){
        person.salary += 300
    }
}

people.forEach(updateSalary) 
people.forEach(p => console.log(p.salary))
//--------------MAP
let poundWeights = [142, 180, 178, 121, 132]

let kiloWeights = poundWeights.map(pw => Math.round(pw / 2.2))
console.log(kiloWeights)
//--------------Spot Check 3----
const Fun = function(str){
    return str.toLowerCase()
}
let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??", "DID YOU EAT TODAY?", "I CAN'T FIND THE REMOTE CONTROL"]
let New = messagesFromDad.map(Fun)
//let New = essagesFromDad.map(str => str.toLowerCase())
console.log(New)//can also with arrow function
//------------------Also With Map if i have array of objects
let users = [
    {
    "name": "Leanne Graham",
    "address": {
        "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874",
        "geo": { "lat": "-37.3159", "lng": "81.1496" }
    }
}, {
    "name": "Ervin Howell",
    "address": {
        "street": "Victor Plains", "suite": "Suite 879", "city": "Wisokyburgh", "zipcode": "90566-7771",
        "geo": { "lat": "-43.9509", "lng": "-34.4618" }
    }
}
]
let newU = users.map(u => { return { name: u.name, city: u.address.city } })
console.log(newU)
//--------------------find method----
let posts = [
    {
        id: 0, text: "I'm not here",
        comments: [{ id: 0, text: "support that" }]
    },
    {
        id: 1, text: "Find me",
        comments: [
            { id: 0, text: "here I am" },
            { id: 1, text: "rock you like a hurricane" },
            { id: 2, text: "dum dum" }]
    },
    {
        id: 2, text: "Where's waldo anyway",
        comments: [
            { id: 0, text: "who's waldo" },
            { id: 1, text: "he's called Effi" }]
    },
    {
        id: 3, text: "Poof",
        comments: [{ id: 0, text: "like magic" }]
    }
]
const findById1 = function (id) {//this look like in es5
    for (let post of posts) {
        if (post.id == id) {
            return post
        }
    }
}
const findById = id => posts.find(p => p.id === id)//this look like in find es6
console.log(findById(1)) // prints {id: 1, text: "Find me", comments: Array(3)}

//------spot check

const findCommentById = (postID, commentID) => {
    let post = findById(postID)
    return findById(postID)
    return post.comments.find(c => c.id == commentID)
}
console.log(findCommentById(1, 0)) // {id: 0, text: "here I am"}
//-------every Example---
let ages1 = [31, 28, 23, 27, 25, 16, 24]
ages.every(a => a > 18) //returns false
//-------some example 
let menu = [
    { name: "Beef stew", vegetarian: false },
    { name: "Beef sandwhich", vegetarian: false },
    { name: "Carrot on a stick", vegetarian: true },
    { name: "Beef eggroll", vegetarian: false },
]

menu.some(m => m.vegetarian) //returns true
//-------------spot check 
//Let’s go watch some movies” if at least one of the movies is by “Marvel”
let movies = [
    { title: "Dareangel", studio: "Marvel", year: 2023 },
    { title: "Batterfly", studio: "Fox", year: 2021 },
    { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
    { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
]
if(movies.some(m => m.studio === "Marvel"))
   console.log("Existing")
else
   console.log("Let’s stay home")
//-“Futuristic stuff” if all the movies are from after the year 2020
console.log(movies.every(a => a.year > 2020))
//--------Chaining Methods
let countries = [
    { name: "Greece", population: 500 },
    { name: "Namibia", population: 1200 },
    { name: "Finland", population: 100 },
    { name: "Switzerland", population: 300 },
    { name: "Peru", population: 200 }
]

let smallCountries = countries.filter(c => c.population < 500).map(c => c.name)
//--another way to do this >>
let smallCountries1 =
    countries
        .filter(c => c.population < 500)
        .map(c => c.name)