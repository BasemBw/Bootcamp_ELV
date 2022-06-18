Array.prototype.newSplice = function (...args) {
    let NewV2 = args[1], NewArr = [], Newarr2 = [], deleteArray = [], Oparr = [];
    Oparr.push(...arr);
    for (i = 0; i < Oparr.length; i++) {
        if (args[0] == i)
            for (t = i; NewV2 > 0; t++) {
                deleteArray.unshift(arr[t])
                arr[t] = null;
                NewV2--;
            }
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i] != null)
            NewArr.push(arr[i]);
    }
    arr = NewArr;
    if (args[3] != undefined && args[0] == 0)
        for (x = NewArr.length - 1; x >= 0; x--) {
            if (x - 1 == args[0]) {
                for (y = arguments.length - 1; y >= 3; y--) {
                    NewArr.unshift(args[y]);
                }
            }
            arr = NewArr;
        }
    else if (args[3] != undefined && args[0] > 0) {
        for (i = 0; i < NewArr.length; i++) {
            if (i == args[0]) {
                for (y = 3; y < arguments.length; y++) {
                    Newarr2.push(args[y]);
                }
            }
            Newarr2.push(NewArr[i]);
        }
        arr = Newarr2;

    }
    else if (arguments.length == 2) {
        let arrA = [];
        for (i = args[0]; i <= NewArr.length; i++) {
            if (i != args[0])
                arrA.push(NewArr[i - 1]);
        }
        return arr;
    }
    return deleteArray;
}

// remove 1 element
let arr = [1,2,3]
arr.splice(0,1); 
console.log(arr); //should be [2,3]

// add 1 element
arr = [1,2,3]
arr.splice(0,0,0); 
console.log(arr); //should be [0,1,2,3]

// replace 1 element
arr = [1,2,3]
arr.splice(1,1,55); 
console.log(arr); //should be [1,55,3] 

// delete all elements from index to end
arr = [1,2,3,4,5]
arr.splice(1); 
console.log(arr); //should be [1] 

// returns array of deleted elements
arr = [1,2,3]
let deleted = arr.splice(1); 
console.log(deleted); //should be [2,3] 

// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = arr.splice(1,1); 
console.log(deleted); //should be [2] 

// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = arr.splice(1,0,5); 
console.log(deleted); //should be [] 
