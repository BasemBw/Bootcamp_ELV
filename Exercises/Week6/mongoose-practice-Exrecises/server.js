// Server setup
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// Mongoose setup
const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })

// Schema/model setup
const personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    age: Number
})
const Person = mongoose.model("person", personSchema)

//Routes
app.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})

app.post('/person', function (req, res) {
    let p1 = new Person({firstName:req.body.firstName,lastName:req.body.lastName,age:req.body.age})
    p1.save()
    res.end()
})

app.put('/person/:id',function(req,res){
    Person.findById(req.params.id, function (err, P) {
    P.age = 80 
    P.save()
    res.end()
})
})

app.delete('/apocalypse',function(req,res){
    Person.find(function (err, person) {
        person.forEach(elemnt => elemnt.remove())
    })
    res.end()
})

const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})