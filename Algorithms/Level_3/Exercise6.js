//Given a string s, find the length of the longest substring without repeating characters. (the same letter cannot appear twice or more in the substring)

function longestSubstring(str){
    let chars = {}
    let longSubstring = 0
    let long = 1
    for(let char of str){
        if(chars[char]){
            chars = {}
            long=1
        }else{
            chars[char]=1
            long++
        }
        if(long>longSubstring){
            longSubstring=long
        }
    }
    return longSubstring
}

console.log(longestSubstring("communications"));