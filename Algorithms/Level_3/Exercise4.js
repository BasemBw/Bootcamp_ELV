//Write a simple camelCase method for strings. All words (except for the first) must have their first letter capitalized without spaces.


function camelCase(str){
    let wordsArray = str.split(" ")
    for(let i=0;i<wordsArray.length;i++){
       if(i!=0){
          wordsArray[i].charAt(0) = wordsArray[i].charAt(0).toUpperCase()
       }
    }
    str=""
    for(let word of wordsArray){
       str+=word
    }
    return str
 }

 console.log(camelCase("camel case word"))