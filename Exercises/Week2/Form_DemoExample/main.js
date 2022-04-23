console.log("start");
const validate = function () {
    let Name = document.getElementById("Name").value
    let Salary = document.getElementById("Salary").value
    let Birthday = document.getElementById("Birthday").value
    let Phone = document.getElementById("Phone").value
    if (Name.length <= 2)
        return Error_Fuction("Name");
    else if (Salary < 10000 || Salary > 16000)
        return Error_Fuction("Salary");
    else if (Birthday == "")
        return Error_Fuction("Birthday");
    else if (Phone.toString().length != 10)
        return Error_Fuction("Phone");
    else {
        console.log("Work Done!");
        document.getElementById("Card").style.display = "none";
        document.getElementById("first_div").style.visibility = "visible";
        document.getElementById("first_div").innerHTML += `Welcome ${Name}`
    }
}
const Error_Fuction = function(Word){
    const elemnt = document.getElementById("Card")
    elemnt.innerHTML += `<h3 id="H3" style="color: red;">${Word} Error</h3>`
}