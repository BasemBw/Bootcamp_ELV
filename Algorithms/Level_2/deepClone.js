function deepClone(obj) {
    if(typeof(obj) != 'object'){
        return obj
    }else if(Array.isArray(obj)){
        let result=[]
        for(let i = 0  ; i<obj.length ; i++){
            if(typeof(obj[i]) === 'object' ){
                result.push(deepClone(obj[i]))
            }else{
                result.push(obj[i])
            }
        }
        return result
    }else{
        let result={}
        let objKeys= Object.keys(obj)
        for(let k of objKeys){
                 result[k] = deepClone(obj[k])   
        }
        return result
    }
}

let x = {a: "b", a2: ["first", "second"]};
let y = {b: x, b3: ["firtsY", x]};
let z = deepClone(y);


