/* class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
    }
} */
/* class human {
    constructor(name,age,isFriendly) {
        this.name = name
        this.age = age
        this.isFriendly = isFriendly
    }
}

const dog = new Animal("dog1", 4)
const human1 = new human("john",14,true)

console.log(human1.name,human1.age,human1.isFriendly ? 'friendly' : 'not friendly') */

//----methods
/* class Animal {
    constructor(name, numLegs,children) {
        this.name = name
        this.numLegs = numLegs
        this.children = []
    }
    giveBirth(name){
        this.children.push(name)
    }
}
const dog2 = new Animal("dog1", 4)
dog2.giveBirth("Dolly")
console.log(dog2); */

//-------------------------
class Vehicle {
    constructor(x,y,speed) {
        this.x = x
        this.y = y
        this.speed = speed
        Vehicle.carsSold++;
    }
    static getInfo() {
        console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    }
    static calculateMoney(){
        console.log(`Made ${Vehicle.carsSold*30000} dollars`)
    }
}
Vehicle.carsSold = 0;

const bmw = new Vehicle(1,2,90)
const seat = new Vehicle(6,5,80)
Vehicle.getInfo()
Vehicle.calculateMoney()


