const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];
    
const jumble = function (arr1, arr2) {
    let set = new Set()
    for(let word of arr1){
        set.add(word)
    }
    for(let word of arr2){
        set.add(word)
    }
  return set.values()
}    
console.log(jumble(colors, foods)) 
// could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]