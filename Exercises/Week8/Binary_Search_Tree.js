class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }
    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if (newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }
    findNode() {
        let maxNumber = this.value
        if (this.rightChild != null) {
            let rightChild = this.findNode(this.rightChild)
            if (rightChild > maxNumber) {
                maxNumber = rightChild
            }
        }
        return maxNumber;
    }
    getMax() {
        if (this.rightChild === undefined) {
            return this.value
        }
        return this.rightChild.getMax()
    }
    findNode(value){
       if(this.value === value){
           return console.log("true")
       } else if(this.value !== value && !this.leftChild && !this.rightChild){
           return console.log("false")
       }
       return value > this.value ? this.rightChild.findNode(value) : this.leftChild.findNode(value)
    }
}


const letters = ["H", "E", "S", "G", "L", "Y", "I"]

let bSTree = new BSNode()

letters.forEach(l => bSTree.insertNode(l))

bSTree.findNode("H") // should print true
bSTree.findNode("G") // should print true
bSTree.findNode("Z") // should print false
bSTree.findNode("F") // should print false
bSTree.findNode("y") // should print false - we didn't make the tree case sensitive!