const addFun = function () {
    let previous = 0
    
    const sum = function (currectNum) {
        console.log(previous + currectNum)
        previous = currectNum
      }

    return sum
}

let foo = addFun()

foo(3); // 3
foo(1); // 4
foo(2); // 3
foo(2); // 4
foo(6); // 8 





/* How would you make this work?
add(2, 5); // 7
add(2)(5); // 7  */