// String Methods

var message = "Hi friends, Today is my Birthday friends TODAY"
//                0                             -1
// // Length of String 
// console.log("No. of Character in String: "+message.length)
             
// // Slice the String
// var part1=message.slice(0,10)
// console.log(part1)
// var part2 = message.slice(12)
// console.log(part2)
// var part3 = message.slice(-8)
// console.log(part3)
// var part4 = message.slice(-11, -9)
// console.log(part4)

// // substr()
// var part5= message.substr(3, 7)
// console.log(part5)

// // replace()
// console.log(message.replace("friends", "FRIENDS"))

// // replaceAll()
// console.log(message.replaceAll("friends", "FRIENDS"))

// // toUpperCase()
// console.log(message.toUpperCase())

// // toLowerCase()
// console.log(message.toLowerCase())

// // Concat()
// var x =prompt("Enter name")
// var y = "World"
// // // console.log(x+" "+y)
// var result = x.concat("", y)


// // Removing spaces from strating and Ending
// var y = "World"
// // // console.log(x+" "+y)
// // var result = x.concat("", y)
// console.log(x.trim())

// to find index of any sub-string
console.log(message.indexOf('today'))  //-1 means not available

// search a substring into a string
// with search function you can implement regex
console.log(message.search(/today/i))

// match will identify multiple matches in the string (array)
console.log(message.match(/today/gi))

// includes
console.log(message.includes('in'))
// console.log("No. of Words in String: "+ message.split(" ").length);