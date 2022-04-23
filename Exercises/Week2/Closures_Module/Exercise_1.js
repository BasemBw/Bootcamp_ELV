const StringFormatter = function(){

    const capitalizeFirst = function(str){
            return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const skewerCase = function(str){
             return str.replaceAll(' ', '-');
    }
    return {
        capitalizeFirst: capitalizeFirst,
        skewerCase: skewerCase
    }
}
const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
console.log(formatter.skewerCase("blue box")) //should print blue-box