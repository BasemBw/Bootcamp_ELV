const findDuplicates = function(ages){
    let duplicateObj = {}
    for(let x of ages){
        if(duplicateObj[x] === 1){
            duplicateObj[x]++
            console.log(`${x} has a duplicate`)
        }else{
            duplicateObj[x] = 1
        }
    }
}
let arr = [1,2,3,4,7,1,2,9]
duplicate(arr)