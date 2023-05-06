// import {message, displayName, Person} from './myLibrary.js'
// import { displayName } from './myLibrary.js'
// import {Person} from './myLibrary.js'

// Single statement to import everything
import * as data from './myLibrary.js'

// Import anonymous or default function
import Imp from './myLibrary.js'
Imp();

// message coming from myLibrary
let ptag = document.createElement('p')
ptag.textContent = data.message
document.body.appendChild(ptag)

var name = prompt("Enter your name")
let ptag1 = document.createElement('p')
// displayName function coming from myLibrary
ptag1.textContent = data.displayName(name)
document.body.appendChild(ptag1)


// class's Object coming from myLibrary
var obj = new data.Person("Manisha", 30)
var obj1 = new data.Person("Pratiksha",15)
obj.details();
obj1.details();

// Data Structure in the form of Object
let person = {
    email:"help@gmail.com",
    id:123
}
console.log(person)



// console.log( Account_no)