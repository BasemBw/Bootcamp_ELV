const returnTime = function (time) {
    console.log('The current time is: ' + time)
  }
  
  const getTime = function(Function_To_Do){
      Function_To_Do(new Date())
  }
  getTime(returnTime)