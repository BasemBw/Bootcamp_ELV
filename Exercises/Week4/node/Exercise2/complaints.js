const handleComplaint = require("./complaintsHandler")
const consts = require("./consts")

let complaint1 = {
    text: "I'm not getting enough money",
    type: consts.FINANCE
 }
 
 let complaint2 = {
    text: "My salary hasn't come in yet",
    type: consts.FINANCE
 }
 
 let complaint3 = {
    text: "I'm always full of energy",
    type: consts.EMOTIONS
 }
 handleComplaint.fun(complaint1) //should print "Money doesn't grow on trees, you know."
 handleComplaint.fun(complaint2) //should print "Money doesn't grow on trees, you know."
 handleComplaint.fun(complaint3) //should print "It'll pass, as all things do, with time."

 //-----there alot of ways to do thes

 