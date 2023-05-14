// Accessing data updating data should be done by Single methods

class Person{
   
    name;

    // Accession name attribute using getter
    get name()
    {
       return this._name 
    }

    // Setter to assign value to the name attribute
  
    set name(name)
    {
        this._name = name
    }
    
}

let obj = new Person()
// console.log( obj.name )         
obj.name  = "Manish Yadav"
console.log( obj.name )
// getter and setter function will called with () parenthesis