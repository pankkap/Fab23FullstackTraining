var compNumber = Math.floor(Math.random()*10+1)
console.log(compNumber)
var chances = 3
while(compNumber !=userNumber)
{
    var userNumber = parseInt( prompt("Enter a number"))
    if(compNumber == userNumber)
    {
        alert("Congratulation User Won!")
        break;
    }
    else
    {
        chances= chances-1;
        // chances--;
    }
    if(chances<=0){
        alert("Bad Luck")
        break
    }
    

}