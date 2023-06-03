firstName=prompt("Enter Name :");
Age=prompt("Enter Age");
Address=prompt("Enter Address :");

function displayDetails(p){
    console.log(p)
     document.write( "Name :"+ p.firstName+  "<br>"  + "Age :" + p.Age +  "<br>"  + "Address :" + p.Address);
}


var person = 
        {
            "firstName": firstName, 
            "Age":Age, 
            "Address": Address, 
       };



displayDetails(person);