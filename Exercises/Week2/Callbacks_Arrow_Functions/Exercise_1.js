const push = function () {
    console.log("pushing it!")
  }
  
  const pull = function () {
    console.log("pulling it!")
  }
  
const pushPull = Function_To_Do => Function_To_Do()
  pushPull(push) //should print "pushing it!"
  pushPull(pull) //should print "pulling it!"