// References
var todoInput = document.querySelector("input");
var btn = document.querySelector("button");
var todoList = document.querySelector(".todo-list");

// Events
btn.onclick = createTodo;
todoList.onclick = performActions;

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
function performActions(e){
  var item = e.target
  // console.log(item.classList[0])

  if(item.classList[0]=='cmpltBtn')
  {
    // console.log("complete Button Clicked")
    var parent = item.parentElement;
    console.log(parent)
    parent.classList.toggle('todo-done')
    var audioTag = document.createElement('audio')
    audioTag.src = "sound1.mp3"
    document.body.appendChild(audioTag)
    audioTag.play();
    
  }

  if(item.classList[0]=='delBtn')
  {
    // console.log("Delete Button Clicked")
    var parent = item.parentElement;
    setTimeout(function() {
      parent.style.transform = "translateX(100px)"
      parent.style.transition = ".5s"
      parent.style.opacity= ".5"
      parent.remove();
      var audioTag1 = document.createElement('audio')
      audioTag1.src = "sound2.mp3"
      document.body.appendChild(audioTag1)
      audioTag1.play();
    });
    
  }
}
