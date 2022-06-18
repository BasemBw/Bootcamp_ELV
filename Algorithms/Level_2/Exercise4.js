//Given an array of numbers, return all the items that are “followed numbers”.
//An item is a followed number if there is a number that comes before or after it. For example, 5 is followed by 4 and 6.

function getfollowedNumbers(numbers){
    let setNumbers = new Set(Object.values(numbers))
    let followedNumbers = new Set()
    for(let item of numbers){
        if(setNumbers.has(item-1)||setNumbers.has(item+1)){
            followedNumbers.add(item)
        }
    }
    return followedNumbers
}

console.log(getfollowedNumbers([4,1]))