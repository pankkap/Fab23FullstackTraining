console.log("This is First Statement")
console.log("This is Second Statement")



setTimeout(function(){

    var result = 0;
    for(var i=0;i<=10000000000;i++)
    {
        result = result + i
    }
    console.log(result) 

    hello();
    

});

function hello(){
    console.log("This is part of settime out")
}
console.log("This is Third Statement")
console.log("This is forth Statement")



// Async means: the task taking lot of time put into async behaviour. 
// Eg: I/O Task, Heavy Weight Tasks, API Tasks

// Async Function
// setTimeout(() => {
    
// }, timeout);

// setInterval(() => {
    
// }, interval);