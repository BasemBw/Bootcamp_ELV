const isEven = function(number){ //Exercise 1
  return number%2==0
}
console.log(isEven(7));
//----------------------------------
function Checkodd(array){                  //Exercise 2
  for(i=0;i<array.length;i++)
      if(!isEven(array[i])){console.log(array[i])}
}
let arr=[1,2,3,4,5,6];
Checkodd(arr);
//-----------------------------------
const checkExists = function(array,number){   //Exercise 3
  for(i=0;i<array.length;i++)
     if(number==array[i]){return true}
  return false;
}
let arr1=[1,2,3,4,5,6];
console.log(checkExists(arr1,6));
//--------------------------------------
const calculator = {                     //Exercise 4
  add: function(num1,num2){
    return num1+num2;
  },
  subtract: function(num1,num2){
    return num1-num2;
  }
}
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2))
//----------------------------------------
const increaseByNameLength = function(money, name){   //Exercise 5
  return money*name.length
}
const makeRegal = function(name){
  return "His Royal Highness,"+name
}
const turnToKing = function(name, money){
  name = name.toUpperCase()
  money = increaseByNameLength(money, name)
  name = makeRegal(name)

  console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
//------------------------------------