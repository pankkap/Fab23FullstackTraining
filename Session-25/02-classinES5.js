// In ES5, we don't create classes directly
// We use function to have the concept of classes in ES5
// Blueprint | template | class

function Person()
{
    // Properties | data
    this.name = "John";
    this.age = 35;

    // Methods | Functionality
    this.details = function (){
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
    this.setData = function(n, a){
        this.name = n
        this.age = a
    }
}

// Creating Object
var obj1 = new Person();

// calling the methods and access the Data of class
obj1.details();
obj1.name = "Pankaj"
obj1.age= 30
obj1.details();
obj1.setData("Manish", 20)
obj1.details();
