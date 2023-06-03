// Dom Methods- These are used to access the HTML Nodes
document.title = "DOM Manipulation"
// document.body.style.backgroundColor = "red"

// Access Node by using its Tag Name
var x = document.getElementsByTagName('h1')
console.log(x)
x[0].style.color = "red"
x[0].style.textAlign = "center"
x[0].style.backgroundColor = "orange"
x[0].style.textTransform = "uppercase"

// Access Node by using its ID
var y = document.getElementById('para1')
console.log(y)
y.style.backgroundColor = "blue"
y.style.color = "white"

// Access Node by using its class
var z = document.getElementsByClassName('paragraphs')
z[1].style.backgroundColor = "lightgreen"


// Access the Node using Query
document.querySelectorAll('input')[0].style.border = "2px solid red"
document.querySelectorAll('p')[0].style.backgroundColor = "gold"



// Changing Content
var x = document.querySelector('#para2')
x.innerHTML = "<h2>This is Paragraph -2: and we are here discussing Dom Manipulation</h2>"
document.querySelector('button').innerText = "<b>Press the Button</b>"




// Create New h1 using JavaScript

var newh1 = document.createElement('h1')
newh1.innerHTML = "This is New Heading Adding using JavaScript"
document.body.appendChild(newh1)