// References
var todoInput = document.querySelector("input");
var btn = document.querySelector("button");
var todoList = document.querySelector(".todo-list");

// Events
btn.onclick = createTodo;

function createTodo(e) {
  e.preventDefault();
  // console.log("btn Clicked")
  var data = todoInput.value;
  if (data != "") {
    // console.log(data);

    var newDiv = document.createElement('div')
    newDiv.classList.add("todo")

    var newLi = document.createElement('li')
    newLi.innerHTML = data

    var cmpltBtn = document.createElement('button')
    cmpltBtn.classList.add('cmpltBtn')
    cmpltBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
    
    var delBtn = document.createElement('button')
    delBtn.classList.add('delBtn')
    delBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'

    

    newDiv.appendChild(newLi)
    newDiv.appendChild(cmpltBtn)
    newDiv.appendChild(delBtn)

    todoList.appendChild(newDiv)

    todoInput.value = "";

  }
  else
  {
    alert("Input Field is Blank")
  }
}
