function printStarSeries(num,count){
    
    while(count){
        let a="*"
        let arr=[]
        console.log(a);
        arr.push(a)
        for(let i=1 ; i <= num ; i++){
            a+="*"
            arr.push(a)
            console.log(a)
        }
        for(let i=arr.length-2 ; i >= 0 ; i--){

            console.log(arr[i])
        }
        count--
        console.log()
    }
}

printStarSeries(5,3) 






