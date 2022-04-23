/* let users = []

const getData = function () {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }]
        console.log("Got users")
    }, 3000);
}

const displayData = function () {
    console.log("Going to display users")
    for (user of users) {
        console.log(user.name)
    }
}

getData()
displayData() */

/* const first = function () {
    setTimeout(function () {
        console.log("should be first")
    }, 3000)
}

const second = function () {
    console.log("should be second")
}

first()
second() */

/* const first = function (callback) { //receive the function as a parameter
    setTimeout(function () {
        console.log("should be first")
        callback() //this is the `second` function being invoked
    }, 3000)
}

const second = function () {
    console.log("should be second")
}

first(second) //pass the second function to the first, as an argument
 */

/* const doSomething = function(){
    console.log("something")
  }
  
  setTimeout(doSomething, 3000) //will invoke doSomething in 3 seconds
   */

  /* const timer = function(){
      setInterval(function(){
        console.log(new Date())
      },3000)
  }
  timer() */
/* let users = []

const getData = function (displayData) {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }]
        console.log("Got users")
        displayData()
    }, 3000);
}

const displayData = function () {
    console.log("Going to display: " + users)
    for (user of users) {
        console.log(user.name)
    }
}

getData(displayData)
 */

//--------------------------ARROW_FUNCTIONS---------------------------------------
/* const greet = (name) => console.log("Hello there, " + name)

greet("Jolene") //prints "Hello there, Jolene" */
//---if we have one param we don't need parentheses
/* const greet = name => console.log("Hello there, " + name)

greet("Jolene") //prints "Hello there, Jolene */
//-------------------------------------------------
/* const square = Number => console.log(Math.pow(Number,2))
square(4) */
//--If the function block is only one line - we don’t even need the return keyword!
/* const add = (x, y) => x + y

const sum = add(1, 2) 
console.log(sum) //prints 3 */
//-----------------------
/* const getHypotenuse = (a, b) => {
    const aSquared = a * a
    const bSquared = b * b
    const cSquared = aSquared + bSquared
    return Math.sqrt(cSquared)
  }
  
  const hypoteneuese = getHypotenuse(3, 4) 
  console.log(hypoteneuese ) //prints 5 */
//-------------------------------------------
/* const getFormalTitle = (str1 , str2) => ""+str1+" "+str2
formalTitle = getFormalTitle("Madamme", "Lellouche")
console.log(formalTitle) //returns "Maddame Lellouche" */
//--------------
/* const suspenseBuilder = {
    name: "El Mysterio",
    displayName: function () {

        console.log("You are going to see the name in 3 seconds...")

        setTimeout(() => { //this is the change
            ﻿console.log("The name is: " + this.name)
        }, 3000)

    }
}

suspenseBuilder.displayName() */