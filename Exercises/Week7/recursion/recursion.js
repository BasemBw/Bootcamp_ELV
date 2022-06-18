const sumR = function (numbers, currentSum = 0) {
    if (numbers.length === 0) { return currentSum }

    currentSum += numbers.splice(0, 1)[0]
    return sumR(numbers, currentSum)
}

let numbers = [1,2,3,4,5]
console.log(sumR(numbers))
