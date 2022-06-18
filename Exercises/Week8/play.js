/* function highestScoringWord(string){
  let words = string.split(" ");
    let highestWord = ""
    let correctWord = 0
    let maxWord = 0
    for(let word of words){
       for(let letter of word){
           correctWord += letter.charCodeAt()
       }
       if(correctWord > maxWord){
         maxWord = correctWord
         highestWord = word
       }
       correctWord = 0
    }    
    return highestWord
}

console.log(highestScoringWord("basem yakov ahmed"))

//--------------------------------------------------------------------

function checkUnique(str){ // 6|hja
    let chars = new Set()
    for(let char of str){ // a
       if(chars.has(char)){
         return false 
       }else {
         chars.add(char)
       }
    }
    return true
}    

console.log(checkUnique("abca")) */

//------------------

let numbers = [7,5,12,6,7,8]
function biggerSumNumber(numbers){ //1,2,3,6,7,8
    let sum = 0
    for(let i=0;i<numbers.length;i++){// i=0,j=1
        for(let j=i-1;j>=0;j--){ //
             sum+=numbers[j] //
        }
        if(numbers[i] >= sum && sum!=0){ 
           return numbers[i]
        }
        sum = 0   
    }
  }


console.log(biggerSumNumber(numbers))

function getOddNumber(arr){
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

console.log(getOddNumber([1,1,2,2,3]))