
class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}
/* class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }

    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade
        })
    }
}
class Teacher extends Person {
       constructor(name, startYear, salary){
          super(name,startYear)
          this.salary = salary
       }
       giveGrade(student,courseNAme,grade){
            student.receiveGrade(courseNAme,grade)
       }
} */

/* const s1 = new Student("Ronda", 2017)
const t1 = new Teacher("Cassandra", 2002, 40000) */

/* t1.giveGrade(s1, "Algebra II", 82)
const firstGrade = s1.grades[0]

console.log(`${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`)
//above should print "Ronda received an 82 in Algebra II"﻿

console.log(Teacher instanceof Person) */

//---------------------------------------------------

/* const s1 = new Student("Ronda", 2017)
const t1 = new Teacher("Cassandra", 2002, 40000)
const p1 = new Person("Anon", 1999)

s1 instanceof Person //true
t1 instanceof Teacher //true
t1 instanceof Person //true
s1 instanceof Teacher //flase just because they inherit from the same parent, doesn't give them any relationship to one another
t1 instanceof Student //false
p1 instanceof Person //true
p1 instanceof Student //flase inheritance is a one way street!
p1 instanceof Teacher //flase
 
s1 instanceof p1 //throws an */ Error

//------method overriding

/* class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }

    //method overriding!
    addCourse(course) {
        if (this.courses.indexOf(course) == -1) {
            super.addCourse(course)
        }
    }
} */

//----spot check for overriding

// class Teacher extends Person {
//     constructor(name, startYear, salary) {
//         super(name, startYear)
//         this.salary = salary
//         this.courses = {} //override the courses attribute
//     }

//     //override the addCourse method
//     addCourse(course) {
//         if(this.courses[course]){
//             return this.courses[course]++
//         }
//         this.courses[course] = 1
//     }

//     giveGrade(student, courseName, grade) {
//         student.receiveGrade(courseName, grade)
//     }
// }

// const t1 = new Teacher("Cassandra", 2002, 40000)
// t1.addCourse("Algebra II")
// t1.addCourse("Algebra II")
// t1.addCourse("Trigonometry")
// console.log(t1.courses) //should print {Algebra II: 2, Trigonometry: 1}

