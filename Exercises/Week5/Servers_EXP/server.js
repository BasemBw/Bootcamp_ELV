const express = require('express')
const app = express()

const port = 3000
const path = require('path')


app.use(express.static(path.join(__dirname,'dist')))//open files
app.use(express.static(path.join(__dirname,'node_modules')))

app.get('/',function(req,res){
    
})

app.get('/books',function(req,res){
    let BooksInfo = {
        100:{name:"basem",author:"Harry potter author"}
    }
    res.send(BooksInfo)
})



app.get('/books/:bookid',function(req,res){
    const data = {
        8112: {
            title: "Name of the Wind",
            author: "Patrick Rothfuss"
        },
        9121: {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger"
        },
        1081: {
            title: "The Giver",
            author: "Lois Lowry"
        }
    }
    res.send(data[req.params.bookid])
})

app.listen(port,function(){
    console.log(port)
})

app.get('/users/:username',function(req,res){
    const users = {
        tilda: "You've done a wonderful job",
        riva: "You need to improve your form, but good perseverance",
        jeremy: "You're incredible"
    }
    res.send(users[req.params.username])
})
app.get('/routeWithOptionalParameters', (request, response) => {
    let params = request.query
    response.send(params)
})
