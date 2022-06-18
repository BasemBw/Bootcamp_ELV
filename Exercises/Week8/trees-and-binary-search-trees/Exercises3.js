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
           return this
       } else if(this.value !== value && !this.leftChild && !this.rightChild){
           return false
       }
       return value > this.value ? this.rightChild.findNode(value) : this.leftChild.findNode(value)
    }
    findParent(value){ 
        if((this.rightChild && this.rightChild.value === value) || (this.leftChild && this.leftChild.value === value)){
            return this
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
    removeNode(node,value){
        if(node.value === value){
            node.value = null
            node.rightChild = null
            node.leftChild = null
            return node
        }else{
            let nodeToDelete =  node.findNode(value)
            let parent = node.findParent(nodeToDelete.value)
            if(nodeToDelete.leftChild){
                parent.leftChild = nodeToDelete.leftChild
            }else {
             parent.rightChild = nodeToDelete.rightChild
            }
        }
    }
}


const numbers = [8, 9, 12, 3, 5, 1, 11, 4];

/* let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));

//console.log(nodeWithOneChild)
console.log(nodeWithOneChild.removeNode(nodeWithOneChild,9))
console.log(nodeWithOneChild) */

let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8));


