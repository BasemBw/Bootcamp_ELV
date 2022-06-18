const splice = function (...args) {
    let newV2 = args[2], newArr = [], newArr2 = [], deleteArray = [], Oparr = [];
    Oparr.push(...args[0]);
    for (i = 0; i < Oparr.length; i++) {
        if (args[1] == i)
            for (t = i; newV2 > 0; t++) {
                deleteArray.unshift(args[0][t])
                args[0][t] = null;
                newV2--;
            }
    }
    for (i = 0; i < args[0].length; i++) {
        if (args[0][i] != null)
            newArr.push(args[0][i]);
    }
    arr = newArr;
    if (args[3] != undefined && args[1] == 0)
        for (x = newArr.length - 1; x >= 0; x--) {
            if (x - 1 == args[1]) {
                for (y = arguments.length - 1; y >= 3; y--) {
                    newArr.unshift(args[y]);
                }
            }
            arr = newArr;
        }
    else if (args[3] != undefined && args[1] > 0) {
        for (i = 0; i < newArr.length; i++) {
            if (i == args[1]) {
                for (y = 3; y < arguments.length; y++) {
                    newArr2.push(args[y]);
                }
            }
            newArr2.push(newArr[i]);
        }
        arr = newArr2;

    }
    else if (arguments.length == 2) {
        let arrA = [];
        for (i = args[1]; i <= newArr.length; i++) {
            if (i != args[1])
                arrA.push(newArr[i - 1]);
        }
        arr.length = args[1];
        return arrA;
    }
    return deleteArray;
}

// remove 1 element
let arr = [1, 2, 3]
splice(arr, 0, 1);
console.log(arr); //should be [2,3]

// // add 1 element
arr = [1, 2, 3]
splice(arr, 0, 0, 0);
console.log(arr); //should be [0,1,2,3]

// add 2 elements
arr = [1, 2, 3]
splice(arr, 0, 0, -1, 0);
console.log(arr); //should be [-1,0,1,2,3]

// replace 1 element
arr = [1, 2, 3]
splice(arr, 1, 1, 55);
console.log(arr); //should be [1,55,3] 

// delete all elements from index to end
arr = [1, 2, 3, 4, 5]
splice(arr, 1);
console.log(arr); //should be [1] 

// returns array of deleted elements
arr = [1, 2, 3]
let deleted = splice(arr, 1);
console.log(deleted); //should be [2,3] 

// returns an array of the deleted element (1 element)
arr = [1, 2, 3]
deleted = splice(arr, 1, 1);
console.log(deleted); //should be [2] 

// returns an empty array when no elements are deleted
arr = [1, 2, 3]
deleted = splice(arr, 1, 0, 5);
console.log(deleted); //should be [] 