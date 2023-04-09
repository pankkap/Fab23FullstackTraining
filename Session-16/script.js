// Create a new Node of type "Div"
var containerDiv = document.createElement('div')
var containerDiv1 = document.createElement('div')
containerDiv1.style.width = "100%"
containerDiv1.style.height= "10px"
containerDiv1.style.backgroundColor= "yellow"

containerDiv.classList.add('container')
document.body.appendChild(containerDiv)
document.body.appendChild(containerDiv1)


// Create Heading with id = "head1" and some TextNode
var head1 = document.createElement('h1')
head1.id = "head1"

// Text Node 
var head1Text = document.createTextNode('This is Heading-1')
// Text Node to Head Node
head1.appendChild(head1Text)

// Connecting Head Node to div Node
containerDiv.appendChild(head1)

// Creating paragraph with id and class and some content
var pNode = document.createElement('p')
pNode.id = "para1"
pNode.classList.add('paragraph')
pNode.innerHTML = "This is my Paragraph"

// COnnect pnode to dive
containerDiv.appendChild(pNode)


var anchorNode = document.createElement('a')
anchorNode.href = "https://google.com"
anchorNode.textContent = "Click Me"
anchorNode.target = "_blank"

// containerDiv.appendChild(anchorNode)
// insert Node at specified Level
containerDiv.insertBefore(anchorNode, pNode)

var ImageNode  = document.createElement('img')
ImageNode.src = "https://picsum.photos/600/400"

containerDiv.appendChild(ImageNode)


var ulNode = document.createElement('ul')

var liNode1 = document.createElement('li')
liNode1.textContent = "Coffee"
var liNode2 = document.createElement('li')
liNode2.textContent = "Tea"
var liNode3 = document.createElement('li')
liNode3.textContent = "Water"
var liNode4 = document.createElement('li')
liNode4.textContent = "Juice"

ulNode.appendChild(liNode1)
ulNode.appendChild(liNode2)
ulNode.appendChild(liNode3)
ulNode.insertBefore(liNode4,liNode1)


document.body.appendChild(ulNode)

// Certain function related to childs

if(containerDiv.hasChildNodes())
{
    console.log("Yes")
    console.log(containerDiv.children)
}
else
{
    console.log("no childern found")
    console.log(containerDiv1.children)
}


var para1 = document.querySelector('p')
para1.remove()

// Remove a particular children

// Count how many children are there
var childNodes = ulNode.children.length
console.log(childNodes)

// Remove one child
ulNode.removeChild(ulNode.children[1])
ulNode.removeChild(ulNode.firstChild)
ulNode.removeChild(ulNode.lastChild)

