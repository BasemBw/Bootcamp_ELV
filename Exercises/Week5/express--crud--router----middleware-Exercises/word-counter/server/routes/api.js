const express = require('express');
const { options } = require('nodemon/lib/config');
const router = express.Router()
var validator = require('validator');
var urllib = require('urllib');

const wordCounter = {
    hello: 1,
    basem: 10,
    ali: 2,
    mafia: 90,
    lesa: 8,
    sara: 89,
    mna: 6
}

router.get('/word/:word', function (req, res) {
    let myWord = req.params.word
    if (wordCounter[myWord] != undefined) {
        res.send({ count: wordCounter[myWord] })
    }
    res.send({ count: 0 })
})


router.post('/word', function (req, res) {
    let word = req.body.word
    if (wordCounter[word] == undefined) {
        wordCounter[word] = 0
    } else {
        wordCounter[word]--
    }
    res.send({ text: word, currentCount: wordCounter[word] })
})

router.get('/popular', function (req, res) {
    let maxCount = 0
    let popularName
    for (const key in wordCounter) {
        if (wordCounter[key] > maxCount) {
            popularName = key
            maxCount = wordCounter[key]
        }
    }
    res.send({ text: popularName, count: maxCount })
})

router.get('/ranking', function (req, res) {
    let rankingArray = []
    for (const key in wordCounter)
        rankingArray.unshift({ name: key, value: wordCounter[key] })
    wordCounter.sort(function (a, b) {
        return a.value - b.value;
    });
    res.send(wordCounter.slice(-5))
})

router.get('/total', function (req, res) {
    let sumCounts = 0
    for (const key in wordCounter)
        sumCounts+=wordCounter[key]
    res.send({text: "Total count", count: sumCounts }
    )
})

router.post('/words/:sentence', function (req, res) {
    let numOldwords = 0
    let numNewword = 0
    let words = validator.blacklist(req.params.sentence,'*!"0-9\\[\\]').split(" ")
    words.forEach(element => {
        if (wordCounter[element] == undefined) {
            wordCounter[element] = 0
            numNewword++
        } else {
            wordCounter[element]--
            numOldwords++
        }
    })
    words.forEach(element => wordCounter[element] = 0)
    res.send({ text: `Added ${numNewword} words, ${numOldwords} already existed`, currentCount: -1 })
})


module.exports = router