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
//   for(object in people_info){
//       console.log(object);
//       for(const Obj in object)
//           console.log("Info:",Object.values(object));
//   }

//   for(const obj in people_info)
//       for(const obj1 in obj)
//          console.log(obj[obj1][1].name);
for(obj in people_info){
    people_info[obj].name=people_info[obj].name.toUpperCase();
    people_info[obj].profession=people_info[obj].profession.toUpperCase();
    people_info[obj].country=people_info[obj].country.toUpperCase();
    people_info[obj].city=people_info[obj].city.toUpperCase();
    people_info[obj].catchphrase=people_info[obj].catchphrase.toUpperCase();
}
console.log(people_info[obj].catchphrase);
for(obj in people_info)
   console.log(people_info[obj]);
  let str = people_info[0].name.toUpperCase();
  console.log(str);

  let text = "Hello World!";
  let result = text.toUpperCase();
  console.log(result);