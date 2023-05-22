// Scope of a Variable
// 1. Global Scope
// 2. Local Scope

// a is a Global variable
var a = 20

function hello()
{
    // any variable which is defined inside a function is called local variable
   let b = 40       // Local Variable
   console.log(a)
   console.log(b)
}
// hello();
// console.log("I am in Program: ",a)  // Global Variable
// console.log("I am in Program: ",b)  // Local Function variable: can't access outside


// ES6: 
// Global variable - var
// Local variable - let Block Scope
// constant variable  - const 

// constant can't update the value
{
    const x = 10
    console.log(x)
    x++
    console.log(x)
}