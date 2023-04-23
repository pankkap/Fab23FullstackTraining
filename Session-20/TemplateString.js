var obj = {
    fname:"Pankaj",
    lname:"Patel",
    age : 30
}
var age = 20
// concate name
console.log("Hi" + " " + obj.fname+" " +obj.lname)

// Template String- ES6
// syntax-  `any message ${val}`

console.log(`Hi ${obj.fname} ${obj.lname} and age is ${obj.age}`)