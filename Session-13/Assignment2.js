// How many vowels are there in the string

function countVowels(str)
{
    var count = 0
    var vowels = ['a','e','i','o','u']
    for (var i=0;i<str.length;i++)
    {
        if(vowels.includes(str[i].toLowerCase()))
        {
            count++
        }
    }

    return count;
}

userString = prompt("Enter the Name: ")
document.write(userString + "<br>")
document.write("No. of Vowels in the String: "+ countVowels(userString))