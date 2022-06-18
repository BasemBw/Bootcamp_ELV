//Write a function that receives an array and reverse only the numbers in the array.

function reverseNumbers(arr){
    let helperArray = []
    for(let element of arr){
        if(!isNaN(element)){
            helperArray.push(element)
        }
    }
    for(let elemnt in arr){
        if(!isNaN(arr[elemnt])){
            arr[elemnt] = helperArray.pop()
        }
    }
    console.log(arr)
}

reverseNumbers(["1","w","e","2","r","7","8"])