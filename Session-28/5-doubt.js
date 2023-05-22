// Exception handling

let a = 10
let b = 0
try
{
    let c  = a/b
if(c == Infinity)
{
    throw "Your Program courrpt due to Infinity Problem"
}
console.log("Result: ",c)
}
catch(err)
{
    console.log(err)
}

console.log("Yes we got the result")