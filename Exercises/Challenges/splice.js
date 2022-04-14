Array.prototype.nativesplice = function(...args){
    let NewV2=args[2];
  let NewArr=[];
  let Newarr2=[];
  let deleteArray=[];
  let Oparr=[];
  Oparr.push(...args[0]);
  for(i=0;i<Oparr.length;i++){
    if(args[1]==i)
       for(t=i;NewV2>0;t++){
           deleteArray.unshift(args[0][t])
           args[0][t]=null; 
           NewV2--;
       } 
      }
  for(i=0;i<args[0].length;i++){
      if(args[0][i]!=null)
           NewArr.push(args[0][i]); 
  } 
  arr=NewArr;
          if(args[3]!=undefined&&args[1]==0)
            for(x=NewArr.length-1;x>=0;x--){
                  if(x-1==args[1]){
                      for(y=arguments.length-1;y>=3;y--){
                          NewArr.unshift(args[y]);
                      }
                  }
                  arr=NewArr;
                  
              }
          else if(args[3]!=undefined&&args[1]>0){
                for(i=0;i<NewArr.length;i++){
                  if(i==args[1]){
                      for(y=3;y<arguments.length;y++){
                          Newarr2.push(args[y]);
                      }
                  }
                  Newarr2.push(NewArr[i]);
                }
       arr=Newarr2;
      
      }
      else if(arguments.length==2){
          let arrA=[];
          for(i=args[1];i<=NewArr.length;i++){
              if(i!=args[1])
              arrA.push(NewArr[i-1]);
          }
          arr.length=args[1];
          return arrA;
      }
        return deleteArray;
}

let arr = [1,2,3]
Array.prototype.nativesplice(arr, 0,1); 
console.log(arr); //should be [2,3]