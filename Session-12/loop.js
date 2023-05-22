// Loop: Is used to do the task multiple times and save coding efforts

// 1. while Loop
// 2. do while
// 3. for 

// How Loop works?

// 1. Initialization (No. to Start the loop)
// 2. Stoping Condition (Where to stop the loop)
// 3. Increment | Decrement (Porceed the loop)

// While

// i = 50
// while(i>=5)
// {
//    console.log(i + " ")
//     i = i - 5;
// }
// 50 45 40 35 30 25 20 15 10 5 


// Do while

// i = 1
// do
// {
//    console.log(i + " ")
//     i = i + 1;
// }while(i>=10);

// for(i=1;i<=10;i++)
// document.write(i)

// var sum = 0
// for (i=1;i<=5;i++)
// {
//     var x = parseInt( prompt("Enter Number"))
//     sum = sum + x;    
// }
// document.write("SUm of 5 consecutive Number : ", sum)

// Javascript working in Lazy Mode
// Break Statement is used to break the loop when certain condition met
// Continue Statement is used to break the loop for 1 cycle when certain condition met
for(i=1;i<=10;i++)
{
    document.write(i)
    if(i==7){ 
        continue;
    }
}