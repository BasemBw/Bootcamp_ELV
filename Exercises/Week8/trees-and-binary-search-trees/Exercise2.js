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
    findNode(value){
       if(this.value === value){
           return console.log("true")
       } else if(this.value !== value && !this.leftChild && !this.rightChild){
           return console.log("false")
       }
       return value > this.value ? this.rightChild.findNode(value) : this.leftChild.findNode(value)
    }
    findParent(value){ 
        if((this.rightChild && this.rightChild.value === value) || (this.leftChild && this.leftChild.value === value)){
            return this.value
        }
        return value > this.value ? this.rightChild.findParent(value) : this.leftChild.findParent(value)
    }
    findCommonParent(value1 , value2){
        let parent1 = this.findParent(value1)
        let parent2 = this.findParent(value2)
         if(parent1 === parent2){
             return parent1
         }else if(this.findParent(parent1) === parent2){
             return parent2
         }else if(this.findParent(parent2) === parent1){
             return parent1
         }
         return this.findCommonParent(parent1,parent2)
    }
}

letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]

const bsTree = new BSNode()

letters.forEach(l => bsTree.insertNode(l))
    
console.log(bsTree.findCommonParent("B", "I")) //should return "H"
console.log(bsTree.findCommonParent("B", "G")) //should return "E"
console.log(bsTree.findCommonParent("B", "L")) //should return "J"
console.log(bsTree.findCommonParent("L", "Y")) //should return "R"
console.log(bsTree.findCommonParent("E", "H")) //should return "J"