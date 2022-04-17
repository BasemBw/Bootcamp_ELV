people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  }
]
const capitalize = function(element){
  return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
};
const profession = function(element){
  return capitalize(element);
};
const Change_catchphrase = function(element){
  return '"'+capitalize(element)+'"';
};
const Changes_City_Country = function(element){
  let city = element.city;
  delete element.city;
  return ' '+capitalize(element.country)+' , '+capitalize(city)+' ';
};
const getAge = function(age){
  console.log(age);
  if(age<=17)
     return 'Underage'
  else if(age>=55)
     return '55+'
  else 
     return ''+age+' year old ';
};
const getSummary = function(person){
  let summary = "";
  summary += capitalize(person.name);
  summary += ` is ${getAge(person.age)} `;
  summary += profession(person.profession);
  summary += Changes_City_Country(person);
  summary += Change_catchphrase(person.catchphrase);
  return summary;
}

console.log(getSummary(people_info[0]))
