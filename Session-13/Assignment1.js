function reverseString(str)
{
    // console.log( str.split(""))
    // console.log( str.split("").reverse())
    document.write("Reverse Name: "+ str.split("").reverse().join(""))
}

userName = prompt("Enter the Name: ")
reverseString(userName)