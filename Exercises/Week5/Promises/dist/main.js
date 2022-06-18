$.get('/randomWord', function (word) {
    $.get(`/synonyms/${word}`, function (synonyms) {
        $.get(`/sentiment/${word}`, function (sentiment) {
            console.log(`
            The word ${word} has a 
            ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
            its synonyms are: ${synonyms}`)
        })
    })
}) 


let p = $.get('/randomWord')

p.then(function (word) {
    console.log(word)
})


/* $.get('/randomWord')
    .then(function (word) {
        return $.get(`/synonyms/${word}`)
    })
    .catch(function (error) { console.log(error) })
    .then(function (synonyms) {
        console.log(synonyms)
    })
    .catch(function (error) { console.log(error) })  */


    $.get('/randomWord')
    .then(function (word) {
        let synonymsPromise = $.get(`/randomWords/${word}`)
        let gifPromise = $.get(`/randomGif`)
        Promise.all([synonymsPromise,gifPromise])
            .then(function (results) {
                $("body").append(results[0].id)
                $("body").append(`<p>${results[1].data[0].id}</p>`)
                console.log("result",results)
            })
    }) 

    const printResults = function (word, synonyms, sentiment) {
        console.log(`
            The word ${word} has a 
            ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
            its synonyms are: ${synonyms}`
        )
    }
    
    /* $.get('/randomWord')
        .then(function (word) {
            let synonymsPromise = $.get(`/synonyms/${word}`)
            let sentimentPromise = $.get(`/sentiment/${word}`)
            Promise.all([synonymsPromise, sentimentPromise])
                .then(function (results) {
                    printResults(word, results[0], results[1])
                })
        })  */