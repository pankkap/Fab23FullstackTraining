// The same function can be used to perform different tasks.
// Override means change the behaviour of the function


class Parent{
    sayHello(){
        console.log("This is Parent class sayHello function")
    }
}

class Child1 extends Parent
{
    // sayHello(){
    //     console.log("This is Child1 class SayHello Function")
    // }
}


class Child2 extends Parent
{
    // sayHello(){
    //     console.log("This is Child2 class SayHello Function")
    // }
}
let obj = new Child1()
obj.sayHello()
let object = new Child2()
object.sayHello()
let objectParent = new Parent()
objectParent.sayHello()