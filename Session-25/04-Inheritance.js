// Main Class | Base Class

class Employee{
    name = "";
    empId = null;
    salary = null;
    constructor(name, empId, salary){
        this.name = name
        this.empId = empId
        this.salary = salary
    }
    details(){
        // console.log("Name : " + this.name)
        // console.log("EmpId: " + this.empId)
        // console.log("Salary: " + this.salary)
        console.log(`----Employee Details----\nName: ${this.name}\nEmpId: ${this.empId}\nSalary: ${this.salary}`)
    }
}

// Derived Class | Sub Class
class Department extends Employee
{
    //properties of Department
    department = "";
    
    //constructor to initialize the Data | properties of Employee and Department
    constructor(name, empId, salary, department){
        
        // Calling Base class constructor
        super(name, empId, salary)
        
        this.department = department
    }

    displayDepartment(){
        super.details()     // with super we can also call parent function
        console.log("Department: ", this.department)
    }

}

// Creating object of Derived class
let CSE = new Department("Rajinder", 34, 15000, "Deverloper")
// CSE.details()
CSE.displayDepartment()


// Rule of Inheritance
// 1. We have to create the objects of Derived class
// 2. Whenever we create Object of Base, then we have to define a constructor in such a way so that base class constructor will be called from dervied automatically