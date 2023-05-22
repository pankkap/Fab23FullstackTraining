const developer = {
    name:'John',
    country:'USA',
    isEmployed:true
}

// syntax: using hasOwnProperty Method

// Object.hasOwnPorperty("prop")
// console.log(developer.salary)

if(developer.hasOwnProperty('salary'))
{
    developer.isEmployed = !developer.isEmployed 
    console.log("Property Exists")
}
else
{
    console.log("Property not Exists")
    developer.salary = 100000
}


console.log(developer)

// using in Operator
if("salary" in developer)
{
    console.log("Property Exist")
}
else
{
    console.log("Property not Exists")

}


if(developer.age !== undefined)
{
    console.log("Age Property Exist")
}
else
{
    console.log("Age Property not Exist")
}

