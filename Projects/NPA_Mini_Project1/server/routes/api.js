const express = require('express');
const router = express.Router()
var urllib = require('urllib');

const teamToIDs = {
    lakers: "1610612747",
    warriors: "1610612744",
    heat: "1610612748",
    suns: "1610612756"
}

const dreamTeam = []

router.put('/team' ,function(req,res){
    teamToIDs[req.body.teamName] = req.body.teamId
    res.end()
})

router.get('/dreamTeam',function(req,res){
    res.send(dreamTeam)
})

router.post('/addPlayer',function(req,res){
    if(dreamTeam.length < 5){
        if(dreamTeam[req.body.lastName] == undefined){
            dreamTeam.push(req.body)
            res.end("add to dream team!")
        }else{
            res.send("Already Exist")
        }
    }else{
       res.send("Cannot add!!") 
    }
})

router.get('/teams/:teamName', function (req, res) {
    urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, data, response) {
        if (err) {
            throw err; 
        }
        let teamName = req.params.teamName
        let Data = JSON.parse(data).league.standard
        let players = Data.filter(elemnt => elemnt.teamId === teamToIDs[teamName])
        players = players.map(elemnt => {return{ firstName:elemnt.firstName, lastName:elemnt.lastName, jersey:elemnt.jersey , pos:elemnt.pos}})
        res.send(players)
    })
})








module.exports = router