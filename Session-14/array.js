// Creating Array 
var a = [10,20,30]  // Single type of Array  
     //   0  1  2 
var arr = [10, "Pankaj", 3.14, true, {name:"Pankaj", age:30} , function(){ console.log("Hello")}]
// Multiple values in Array
// console.log(a)
// console.log(arr)


// Access the Elements
// There are two ways
// 1. Access element individually
// 2. Access elements iteratively


// 1. Access element individually
// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(arr[1])
// console.log(arr.length)


// 2. Access elements iteratively using for loop
// for (var i=0;i<arr.length;i++)
// console.log(arr[i])

// Special Function to Access all elements of Array
// arr.forEach(function(i){
//     console.log(i)
// })       // Callback function



// Array creation using Array Function

var arr2 = new Array()    // using Array constructor
var arr3 = []

arr2.push(100)
arr2.push(200)
arr2.push(200)   // used to insert new data into the array last
arr2.pop()      //  used to remove data into the array in the last

arr2.unshift("Pankaj")  // used to insert new data into the array starting
arr2.shift()            // used to remove data into the array starting

// Splice is used to insert, delete, and replace the data into the array using any index
arr2.splice(1,0, "new Data")
arr2.splice(2,1,"something")
console.log(arr2)

var arr1 = [101,30,20, 11, 3, 7, 21, 12, 19, 80]

// Merge the Two arrays
var newArr = arr2.concat(arr1)
console.log(newArr)

var arr3 = ["Pankaj", "Sachin", "Aman", "John", "Charly"]
console.log(arr3.sort())
console.log(arr1.sort())    // Numeric array will not sort
// to Sort Numeric Array we use compare method

// Sort in Ascending Order
console.log(arr1.sort(function(a,b){
    return a-b
}))
// Sort in Descending Order
console.log(arr1.sort(function(a,b){
    return b-a
}))


// Map Method
var myArr = [10,20,30,40,50]

var newArr = myArr.map(function(i){
    return i*2
})
console.log(newArr)

// difference between foreach and Map

// JavaScript Version  mentioned ES (ECMA Script)
// ES5->var
// ES6->let, const

// There is no const array in JS, Javascript can update const array
const x = [1,2,35]
x[0] = 10
console.log(x) 
