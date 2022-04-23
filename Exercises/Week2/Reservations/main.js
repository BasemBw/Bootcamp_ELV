

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
const checkReservation = function(){
    let Name = document.getElementById("input").value
    for(let obj in reservations){
        if(Name==obj&&!(Object.values(reservations[obj])[0]))
           return console.log("Welcome,"+Name);
        else if(Name==obj&&Object.values(reservations[obj])[0])
           return console.log("Hmm, someone already claimed this reservation");
    }
    return console.log("You have no reservation");
}

