const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
  ]
const basket = $("#basket")
for(color in fruits){
     let DivColor = '<div class="'+fruits[color].color+'">'+fruits[color].name+'</div>'
        basket.append(DivColor);
}