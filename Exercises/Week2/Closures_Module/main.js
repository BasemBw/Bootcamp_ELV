

/* const createPerson = function(name, age){
    const person = {
        personName: name, 
        personAge: age
    }

    return person
}
const person = createPerson("Elon", 42)
//createPerson("Elon", 42)
console.log(person) */
//---------------------------------------------
/* const mathOperations = function(){
    const add = function(x, y){
        return x + y
    }
    return add
}

const math = mathOperations()
console.log(math(1,2)) */
//-----------------------------------------
/* const foo = function () {
    const x = 1
  
    const bar = function () {
      console.log(x) //notice this inner function using the outer function's variable
    }
  
    return bar
  }
  
  const baz = foo() //out here, x doesn't exist
  baz() //but when we invoke baz, we're printing x! */
//---------------------------------------------
/* const setCounter = function (num) {
  let counter = 0
 
  const count = function () {
    counter += num;
    console.log(counter)
  }
 
  return count
}
 
const increment = setCounter(2)
increment()
increment()
increment() */
//--------------------------------
/* const Family = function(){
    let members = []
    const birth = function(name){
       members.push(name);
       console.log(members);
    }

    return birth
} 
const giveBirth = Family()
giveBirth("basem") */
//--------------------------
/* const mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }
    return {
        add: add,
        sub: subtract,
        mult: multiply,
        div: divide
    }
}
const m = mathOperations()
console.log(m.mult(7 , m.div(36 , 6))) */
//--example of a module with closure
/* const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.listUsers()
usersModule.addUser('basem')
usersModule.listUsers() */
//---------------------------

//--------------------