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




var name = "Pankaj"
var age = 30
var obj = {
    id:121,
    salary:1000,
    email:"abc@xyz.com"
}

console.log(`My name is ${name} and my age is ${age} and email is ${obj.email}` )
console.log("My name is "+ name + " and my age is"  + age + "my email id is " +obj.email)
