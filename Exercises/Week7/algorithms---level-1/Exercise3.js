function  first_non_repeating(string){
    let letters = {}
    for(let letter of string){
        if(letters[letter]){
            letters[letter]++
        }else{
            letters[letter] = 1
        }
    }
    for(let letter in letters){
       if(letters[letter]===1){
           return letter
       }
    }
}

console.log(first_non_repeating("abca"))