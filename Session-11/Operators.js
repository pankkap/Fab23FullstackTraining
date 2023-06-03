// JavaScript Operators

// 1. Arithmatic Operators
a = 20, b= 15
console.log(a+b)   
console.log(a-b)    
console.log(a*b)
console.log(a/b)
console.log(a%b) // Modulas 5

// 2. Assignment Operator
a = 40, b = 100

a += 1      // a = a + 1   # a++
b *= 2      // b = b * 2  // 200
b -= 5      // b = b - 5  // 195
a /= 3      // a = a / 3  41/3 = 13.66666 
console.log(a)
console.log(b++)        // Post Increment
console.log(b)

// Condition Operator:  result into True or False
// <, > , <=, >=, ==, ===, !=
x = 10, y = 10
console.log(x < y)  //true
console.log(x > y)  //false
console.log(x >= y) //true
console.log(x <= y) //true
console.log(x == y) //false
console.log(x != y) //true
y = "10"
console.log(x == y) //true: only check the value, not datatype
console.log(x === y) //checking the value and datatypes


// Logical Operator
x = 5, y = 10, z = 15

console.log(x<y && x<z)   // if both true only then true
console.log(x<y || x>z)   // if one condition is true, ans is true
console.log(!(x>y))       //false
