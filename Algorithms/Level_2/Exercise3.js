//find the second biggest element in an array.

function secoundBiggest(elemntsArray){
    let maxElemnt = 0
    let secoundMax = 0
    for(let elemnt of elemntsArray){
        secoundMax = maxElemnt
       if(elemnt > maxElemnt){
           maxElemnt = elemnt
       }
    }
    return secoundMax
}


console.log(secoundBiggest([12,3,4,7,23,67]))