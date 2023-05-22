// We will talk more about functions

// function myfunction1(){
//     console.log("Hello world");
// }
// myfunction1()

// function myfunction2(x, y){
//    return ("Sum : ", x+y);
// }
// var result  = myfunction2(10,15)
// console.log(result)


// Default Arguments
// function displayName(x=0,y=0)
// {
//     return x + y
// }

// console.log(displayName(1,2))

// Rest Operator
// function restOperator(p,q,...x) // rest Operator: is used to catch multiple data in the funtion
// {
//     console.log(p,q)
//     console.log(x)
//     // Task-1: display sum of all Number recieved in the function
// }

// (restOperator(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15))



// Expression Function: Anonymous Function: Function with no Name
// var a = function (x,y){
//     var z = x + y
    // return ("Sum :", z)
// };                              // " ; " is used in Function Expression

// a(120,125);        // Expression Function Call

// btn.onclick = function () {
//     // task on button clicking
// }


// Self - Invoking Function
// (function(){
//     console.log("This is Self invoking function")
// })();



// Special Function introduced in ES6: newer version of JavaScript. Launched In 2015. 


// Arrow Function: to reduce the coding Efforts

var a = (x,y)=>  x+y
console.log(a(13330,1222))


// Square of a Number using Arrow Function

var sqr = (x)=> { 
    console.log("This is Arrow Function "); 
    return x*x 
}
console.log(sqr(12))