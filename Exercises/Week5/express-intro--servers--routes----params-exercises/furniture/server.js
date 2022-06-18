const express = require('express')
const app = express()

const port = 5000
const path = require('path')

app.use(express.static(path.join(__dirname,'dist')))//open files
app.use(express.static(path.join(__dirname,'node_modules')))

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]
let hello

app.get('/',function(req,res){
})

app.get('/basem',function(req,res){
    hello = "basem"
})

app.get('/basem1',function(req,res){
    console.log(hello)
})

app.get('/priceCheck/:nameProdct', (request, response) => {
    let Newob = {
        price:null
    }
    for(let elemnt of store){
        if(elemnt.name===request.params.nameProdct){
            Newob.price = elemnt.price   
        }
    }
    response.send(Newob)
})

app.get('/buy/:nameProduct',(req,res) => {
    for(let elemnt of store){
        if(elemnt.name == req.params.nameProduct){
            elemnt.inventory--
            res.send(elemnt)   
        }
    }
})
app.get('/sale',(req,res) => {
    let params = req.query
    if(params.admin === "true"){
        for(let elemnt of store){
            if(elemnt.inventory > 10){
                elemnt.price = elemnt.price/2   
            }
        }
    }
    res.send(store)
      
})
app.listen(port,function(){
    console.log(port)
})