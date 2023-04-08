noOfInouts =parseInt( prompt("Enter how many array you want to create")) // 3

function InputArrFun(n)
{
    InputArr = []
    for (var i=0;i<n;i++)
    {
        var name = prompt("Enter Name")
        var age = prompt("Enter Age")
        var obj = {"name":name, "age":age }
        InputArr.push(obj)
    }

    return InputArr;
}
var resultantArr = InputArrFun(noOfInouts)

// ECMA -5 old way of using JavaScript
// ECMA - 6 new way of writing JS code

var outputArr = resultantArr.map((i)=> {
       return i.name
});
console.log(outputArr)