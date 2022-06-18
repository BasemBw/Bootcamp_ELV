class UniqueArray {
    constructor() {
        this.elemnts = {}
        this.arr = []
        this.length = 0
    }

    add(item) {
        if (!this.exists(item)) {
            this.length +=1  
            this.elemnts[item] = 1
            this.arr.push(item)
        }
        else{
            return console.log("Emshe wala")
        }
    }
    exists(item) {
        if (this.elemnts[item]) {
            return true
        }
        
        return false
    }
    showAll() {
        console.log(this.arr);
    }
    get(index) {
        if( index >this.length)
            return `you should insert a number from 0 to ${this.length}`
        return this.arr[index]
        // arr.forEach( item => aconsole.log(item))
    }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.add("baby")
console.log(uniqueStuff.get(1));
uniqueStuff.showAll()
