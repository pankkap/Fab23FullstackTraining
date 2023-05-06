// Event Handling is of three types
// 1. Inline Event Handling
// 2. Event Bindling
// 3. Event using addEventListener

// First Way
function myFun(){
    alert("Btn is CLicked")
    document.getElementById('div1').style.backgroundColor = "skyblue"
}

// Second Way using Bindling Mechanism
var btn2 = document.getElementsByTagName('button')[1]

// Anonymous Function : Function without Name
btn2.onmouseover = function(){
    document.getElementById('div1').style.backgroundColor = "pink"
    document.getElementsByTagName('h1')[0].innerHTML = "Btn-2 Mouse Overed"
}

var div = document.getElementById('div1')

div.onmouseover = function(){
    document.getElementById('div1').style.backgroundColor = "black"
}
div.onmouseleave = function(){
    document.getElementById('div1').style.backgroundColor = "yellow"
}

var btn3 = document.querySelectorAll('button')[2]


// third Way
// Using addEventListener
function myTask()
{
    document.getElementsByTagName('p')[0].style.display = "none"
}

btn3.addEventListener('click', myTask);


btn3.removeEventListener('click', myTask)

btn3.addEventListener('mouseover', function(){
    var input = document.querySelector('input')
    var val = input.value
    console.log(val)
    input.value = ""
})

// RemoveListener will not work if you write function inside without name

