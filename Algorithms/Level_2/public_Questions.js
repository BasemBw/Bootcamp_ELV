//Write a function that will receive an array of integers, and return the first number that is bigger than the sum of all it’s previous numbers

let numbers = [1, 5, 11, 6, 7, 8]
function biggerSumNumber(numbers) { 
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= sum && sum != 0) {
            return numbers[i]
        }
        sum+=numbers[i]
    }
    return "No Number like that!!"
}


console.log(biggerSumNumber(numbers))
//--------------------------------------------

//Given an array, find the int that appears an odd number of times. (There will always be only one integer that appears an odd number of times.)
//Return the first char that appears an odd num of times.

function getAppearsOddNumber(arr){
    let items = {}
    for(let elemnt of arr){
      if(items[elemnt]){
         items[elemnt]++
      }else{
       items[elemnt] = 1
      }
    }
    for(let elemnt of arr){
       if(items[elemnt] % 2 !== 0){
           return elemnt
       }
    }
  }
  
  console.log(getAppearsOddNumber([1,1,2,2,3]))