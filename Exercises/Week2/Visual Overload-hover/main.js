

const box = document.getElementById("Div1")
for(i=0;i<12;i++){
    box.innerHTML += `<div onmouseenter="enterColor(this.id)" onmouseleave="leaveColor(this.id)" class="Div" id=${i}></div>`
}
function getRandomInt(Number) {
    return Math.floor(Math.random() * Number);
}
function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
for(i=0;i<12;i++){
    document.getElementById(i).style.background = ""+generateRandomColor();
}
const enterColor = function (id) {
    const box = document.getElementById(id)
    box.style.backgroundColor = ""+generateRandomColor();
}
const leaveColor = function (id) {
    const box = document.getElementById(id)
    box.style.backgroundColor = ""+generateRandomColor();
}

