const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }
const commentOnWeather = temp => determineWeather(temp)

console.log(commentOnWeather(30)) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"


const run = (name) => {console.log("Run, " + name + ", run!")}
const yell = function(action){
    let env = "Forest"
    action(env)
}
run(yell)