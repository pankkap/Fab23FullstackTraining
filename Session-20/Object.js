// Object is used to store the Data in the form Key-value pair
// It is one of the Data Structure in JS

// var arr = []        // For Array
// var obj = {}        // For Object
// obj.fname = "Pankaj"
// obj.lname = "Kapoor"
// var age = prompt("Enter Age of User")

// obj.age = age

// console.log(typeof(obj))        // TYPE OF VARIABLE - Object
// console.log(obj)
// console.log("My Age is", obj.age)
// console.log("My First Name is", obj.fname)

// var employee = {
//     "name": "Pankaj",
//     "age": "20",
//     "salary": "10000",
//     "email":"pankaj@gmail.com"    
// }
// console.log(employee)
// // Select data from Object
// console.log(employee.salary)
// console.log(employee.email)

// // This is another way to create an Object using constructor
// var employee1 = new Object()
// employee1.name = "Sachin"
// employee1.age = "23"
// employee1.salary = "20000"
// employee1.email = "sachin@gmail.com"
// console.log(employee1)


// // var x = 10
// // var y = x
// // y = y + 5
// // console.log(x)
// // console.log(y)

// // onject is Mutable

// var employee2 = employee1
// // employee2 is a reference of employee1

// employee2.address = "Mumbai"
// console.log(employee1)
// console.log(employee2)




// Destructuring of Object

var employee = {
    "name": "Pankaj",
    "age": "20",
    "salary": "10000",
    "email":"pankaj@gmail.com"    
}
// Destructuring
var {name, age, salary, email} = employee

console.log(age)
console.log(salary)
console.log(email)

employee.address = {city:"Nakodar", hno:123, state:'Punjab'}
employee["empId"] = "E1234"
console.log(employee)

// Both are same
console.log(employee["email"])
console.log(employee.email)

delete employee.age
console.log(employee)
