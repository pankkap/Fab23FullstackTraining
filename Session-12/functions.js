// 1. It will help us to debug
// 2. We dont need write the same code again

// FUnction are of two Types
// 1. System defined function: function created by JS
// eg. write(), prompt(), alert(), parseInt(), 

// 2. User defined : users created function

// User definef Function consist of 2 Parts
// 1. Function Defination: What function will perform (1)
// 2. Function Call: Execute the function  (2)

// 1. Function will print the result without input

// Defination 
function addition()
{
    var x = 10, y = 20
    z = x + y
    console.log("Function is Print the sum of Numbers", z)
}

// Call
addition(); 
addition(); 
addition(); 
addition(); 
addition(); 
addition(); 
addition(); 



// 2. Function will print the result with input

function addition1(x,y)
{
    var z = x + y
    console.log("Sum of Numbers", z)
}


addition1(1,10)
addition1(2,10)
addition1(3,10)
addition1(4,10)
addition1(215,12320)


// 3. Function will return the result, whatever input you give

function addition2(x,y)
{
    var z = x + y;
    return z
}

var result = addition2(35,20)

avg = result /2 ;
console.log("Average of Number : ", avg)

console.log("Average of Number : ", (addition2(10,20)/2));

console.log(addition2(45,40))


