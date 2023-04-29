// Promises: It is used for ES6 Programming
// 1. Promise is an Object that return a value that hope to recieve in future, but not return right Now
// 2. Prmises is well suited for Asynchronous Programming
// 3. Promise has three states: Pending, Fullfilled, Rejected
// 4. Promised is way to communicate with API


var sayHi = ()=>{
    return new Promise((resolve, reject)=>{
        const res = false       // Api Call

        if(!res){
            resolve("I Completed my Promise")
        }
        else{
            reject("I Failed my Promise")
        }
    })
}

// Handle or consume the Promise when it recieved

// var result =sayHi()
// console.log(result)

// sayHi().then((res)=>{console.log(res)})     // When promise resolve
// sayHi().catch((err)=>{console.log(err)});   // When promise reject

// Chaining style
sayHi()
.then((res)=>{console.log(res)})     // When promise resolve
.catch((err)=>{console.log(err)});   // When promise reject
