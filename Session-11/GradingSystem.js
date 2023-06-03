var per = parseFloat( prompt("Enter your percentage"))
// string ---> float (Conversion)

if(per>=80 && per<=100)
{
    document.write("Grade-A+")
}
else if(per>=70 && per<80)
{
    document.write("Grade-A")
}
else if(per>=60 && per < 70)
{
    document.write("Grade-B")
}
else if(per>=40 && per < 60)
{
    document.write("Grade-C")
}
else
{
    document.write("Fail")
}