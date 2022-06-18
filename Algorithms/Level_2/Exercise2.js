//Find the median char (half of the letters are smaller than it, and half are bigger) in a string.

function getMedianChar(str){
    let charsbigger = 0
     for(let char of str){
         for(let letter of str){
             if(char>letter){
                 charsbigger++
             }
         }
         if(charsbigger===(str.length/2)-1){
            return char
        }
        charsbigger = 0
     }
}

console.log(getMedianChar("questions"))