var str = "    Hello     World    "
var newStr = str.trim().split(" ")
var space = [" "]
var spaces = 0
for (var i=0;i<str.length;i++)
    {
        if(space.includes(str[i]))
        {
            spaces++
        }
    }
console.log(spaces)    
if (spaces>1)    
{
    spaces = 1
}
console.log(spaces)    


