const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/computerDB', { useNewUrlParser: true })

const Schema = mongoose.Schema

const computerSchema = new Schema({
  maker: String,
  price: Number
})

/* const Person = mongoose.model('person', personSchema)
let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 })
//p1.save()
Person.find({},function(err,people){
    console.log(people)
}) */

const Computer = mongoose.model('Computers',computerSchema)
let c1 = new Computer({maker:"hp",price:1000})
let c2 = new Computer({maker:"mac",price:2000})
let c3 = new Computer({maker:"dell",price:3000})
let ComputersArray = [c1,c2,c3]
//ComputersArray.forEach(Computer => Computer.save())

// Computer.findById("62820da4d25596ff91dab7ff", function (err, Com) {
//     Com.price += 100 
//     Com.save()
// })

Computer.findById("62820da4d25596ff91dab7ff", function (err, Com) {
    Com.remove(function (err) {
        console.log(err) //usually this will be `null`, unless something went wrong
    })
})