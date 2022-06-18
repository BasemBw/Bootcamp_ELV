function encrypt(string){
    let newString = ""
    for(let letter of string){
         newString += String.fromCharCode(letter.charCodeAt(0)+1);
    }
    return newString
}

console.log(encrypt("cat"))