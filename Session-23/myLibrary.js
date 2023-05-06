// file-1 is a file that contains code to be reuse: We generally called it as Library

// An important anonymous function or named function can be made default
// default function can be rename in another file
export default function ImportantFunction(){
    console.log("This is an Important function need to use by every developer")
}



let message = "Welcome to Modules Concepts in JS"

// Not exporting Account_no as it is a critical data
const Account_no = 12345677;

let displayName = (name)=>{
    return `hello ${name}`
}

class Person{
    constructor(name, age)
    {
        this.name = name
        this.age = age
    }
    details(){
        console.log(`Name: ${this.name} and Age: ${this.age}`)
    }
}

export {message, displayName, Person}





// MVC: Design Pattern for create a solution/Web Application for Enterpise
// M: Model-> data (Database)
// V: View-> User Interface(Front-End)
// C: Controller-> Logic (function to handle data, logic, connect the UI)