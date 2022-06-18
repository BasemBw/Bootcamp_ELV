//Duplicate an array, without using the “+” operator, or concat.
//Your function should return a new array

function DuplicateArray(arr){
    let newArray = []
    for(let i=0;i<arr.length*2;i++){
        newArray.push(arr[i % arr.length])
    } 
    return newArray
}

console.log(DuplicateArray([1,2,3]))
console.log(0%3)