const coffeeShop = {
    beans: 40,
    money: 100,
  
    drinkRequirements: {
      latte: {beanRequirement: 10, price: 10},
      americano: {beanRequirement: 5, price: 5},
      doubleShot: {beanRequirement: 15, price: 15},
      frenchPress: {beanRequirement: 20, price: 20}
    },
    buyBeans: function(numBeans){
        if(this.money-numBeans*2>0){
           this.money=this.money-numBeans*2;
           return true;
        }
        else
          return false;
    },
    checkifExis: function(drinkType){
        for(var key in this.drinkRequirements){
            if(key==drinkType)
               return true;
        }
        return false;
    },
    buyDrink: function(drinkType){
      if(this.checkifExis(drinkType)){
        let varr = (Object.values(this.drinkRequirements[drinkType]));
        this.money+=varr[1]
        this.makeDrink(drinkType);
      }
      else{
        console.log("Sorry, we don't make filtered");
      }
    },
    makeDrink: function (drinkType) {
        for(var key in this.drinkRequirements){
              if(this.checkbeans(this.drinkRequirements[key].beanRequirement)){
                  console.log("Enjoy");
                  break;
              }
              else{
                console.log("Sorry, we're all out of beans");
                break;
              }
         }
    },
    checkbeans: function(beanRequirement){
          if(this.buyBeans(beanRequirement))
              if(this.beans-beanRequirement!=0){
                  this.beans=this.beans-beanRequirement;
                    return true;
               }
          return false;
    }
  }
  
  coffeeShop.buyDrink("latte"); 
  coffeeShop.buyDrink("americano");
  coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.buyDrink("doubleShot");
  coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
  coffeeShop.buyDrink("latte"); 





  const quiz = {
    code: function() {console.log(this.answers.c + ' is not the answer')},
    answers: {
        a: `answers`,
        b: 'this is not the answer',
        c: `this`,
        d: `21`,
        e: `both a and c`,
        f: 'both a and d'
    }
}

quiz.code();