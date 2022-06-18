const { path } = require('express/lib/application')
const mongoose = require('mongoose')
const Schema = mongoose.Schema


mongoose.connect('mongodb://localhost/Exercises',{ useNewUrlParser: true })

const SolarSystemSchema = new Schema({
    starName:String,
    planets:[{type: Schema.Types.ObjectId, ref: 'Planet'}]
})

const PlanetSchema = new Schema({
    name:String,
    system:{type: Schema.Types.ObjectId,ref:'SolarSystem'},
    visitors:[{type: Schema.Types.ObjectId, ref: 'visitors'}]
})

const VisitorSchema = new Schema({
    name:String,
    homePlanet:{type: Schema.Types.ObjectId, ref: 'Planet'},
    visitedPlanets:[{type: Schema.Types.ObjectId, ref: 'Planet'}]
})

const SolarSystem = mongoose.model("SolarSystem", SolarSystemSchema)
const Planet = mongoose.model("Planet", PlanetSchema)
const visitors = mongoose.model("visitors", VisitorSchema)

let s1 = new SolarSystem({
    name:"Solar System 1",
    planets:[],
})

let p1 = new Planet({
    name:"Moon",
    system:s1,
    visitors:[]
})

let v1 = new visitors({
    name:"Basem",
    homePlanet:p1,
    visitedPlanets:[]
})

/* s1.planets.push(p1)
v1.visitedPlanets.push(p1)
p1.visitors.push(v1)

s1.save()
v1.save()
p1.save() */

/* SolarSystem.find({},function(err,solarSystems){
    console.log(solarSystems)
}) */
SolarSystem.findOne({})
    .populate({
        path: 'planets',
        populate: {
            path: 'visitors',
            populate:{
                path:'homePlanet'
            }
        }
    })
    .exec(function (err, visitors) {
        console.log(visitors.planets[0].visitors)
    })

