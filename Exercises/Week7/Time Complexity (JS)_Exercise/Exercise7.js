function findEmployeeSalary(employeeID) {
    let employees = {
        ax01: {
            name: "Ray",
            age: 28,
            salary: 1300
        }
    }
    return employees[employeeID]
}

console.log(findEmployeeSalary("ax01"))
