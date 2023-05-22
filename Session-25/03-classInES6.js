// Class concept in ES6
// ES6 introduced the keyword class to create classes in JavaScript

class Employee{
    
    // properties | Data Members | data is public
    name = "";
    empId = null;
    salary = null;

    //constructor to initialize the Data | properties
    constructor(name, empId, salary){
        this.name = name
        this.empId = empId
        this.salary = salary
    }

    // Member Function
    details(){
        // console.log("Name : " + this.name)
        // console.log("EmpId: " + this.empId)
        // console.log("Salary: " + this.salary)
        console.log(`----Employee Details----\nName: ${this.name}\nEmpId: ${this.empId}\nSalary: ${this.salary}`)

    }

}

// Create Object of class
const emp1 = new Employee("John", 25, 5000)
emp1.details()
const emp2 = new Employee("Peter", 35, 10000)
emp2.details()
