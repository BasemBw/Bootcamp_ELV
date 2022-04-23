const Bank = function(){
    let money = 500

    const depositCash = function(Number){
        money+=Number;
    }
    const checkBalance = function(){
        return money
    }
    return {
        deposit: depositCash,
        showBalance: checkBalance
    }
}
const bank = Bank()
bank.deposit(200)
bank.deposit(250)
console.log(bank.showBalance()) //should print 950