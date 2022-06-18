const myObject = {
    iterationCount : 0,
    next: function() {
        if(this.MyArr[this.iterationCount] != undefined ){
            if(this.MyArr[this.iterationCount]%2==0){
                result = { value: this.MyArr[this.iterationCount], done: false }
                this.iterationCount++
                return result;
            }else{
                this.iterationCount++
                return this.next()
            }
        }else{
            result = {done: true }
            return result;
        }
    },
    [Symbol.iterator]: function() { return this; }
};
myObject.MyArr =  [11, 13, 14, 66, 67, 69, 234, 456, 2, 1]
for (let x of myObject)
     console.log(x); 