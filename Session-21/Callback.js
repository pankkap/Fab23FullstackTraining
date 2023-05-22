// What is Callback?
// Any function that is passed as an argument to a function is called callback.
// A Callback function is a function that is executed after an other function has finished executing. Hence the callback 
// A function inside another function us also called callback function


console.log("This is an Example of Callback")

var students = [
    {name:"Manish", class: "5th"},
    {name:"Sachin", class: "6th"},
]

var newStudent = {name:"Vinod", class:"10th"}

// Function with Callback
function admitStudent(student, callback){
    setTimeout(() => {
    students.push(student)
    console.log("Student Admitited")
    callback();
    }, 3000);
}
// function admitStudent(student){
//     setTimeout(() => {
//     students.push(student)
//     console.log("Student Admitited")
//     }, 3000);
// }


function displayStudents(){
   setTimeout(() => {
    var str =""
    students.forEach((student)=>{
        str = str +  student.name + " "
    })
    console.log(str)
   }, 1000);
}

// admitStudent(newStudent)
// displayStudents()
// Callback approch to solve this issue
admitStudent(newStudent, displayStudents)





