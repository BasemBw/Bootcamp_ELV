
    let MyArr = [11,13,14,66,67,69,234,456,2,1];
    let iterator = MyArr[Symbol.iterator]();

    for(let x of iterator)
        console.log(x);