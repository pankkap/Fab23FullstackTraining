// Array of Objects [ {}, {}, {}, {} ]

var students = [
    {sid:1, sname:"Pankaj", grade:5},
    {sid:2, sname:"Manish", grade:6},
    {sid:3, sname:"Sakshi", grade:4},
    {sid:4, sname:"Messi", grade:7},
    
]
// console.log(students)

// Iterate array of Objects
// for (var i = 0; i < students.length; i++) {
//     console.log(students[i].sid + " " + students[i].sname + " " + students[i].grade);
// }

// Iterate array of Objects using for of
// for (var student of students) {
//     console.log("Student Id: ",student.sid)
//     console.log("Student Name: ",student.sname)
//     console.log("Student Grade: ",student.grade)
// }
// Iterate array of Objects using For Each

students.forEach((i)=>{
    console.log("Student Id: ",i.sid)
    console.log("Student Name: ",i.sname)
    console.log("Student Grade: ",i.grade)
})

// Assignment-20

// 1. Add new Student into Array of Object
// 2. FIlter students whose grade is more than 5 (Filteration)
// 3. Update student grade from 7-8 whose name is Messi
// 4. Add add new property as Country: "INDIAN" with all students

