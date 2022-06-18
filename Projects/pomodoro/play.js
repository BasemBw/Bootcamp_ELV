function Sum(num1){
   const sumNumbers = function(num2){
      const sumNumber2 = function(num3){
          return num1+num2+num3
      }
      return sumNumber2
   }
    return sumNumbers
}

console.log(Sum(3)(5)(10))