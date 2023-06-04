import GoogleImg from './images/google.png'
import './App.css'

// Simple variable | jsx
let name = "Session - 30"

// JSX with multiple elmenents
let myList = (
  <>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Juice</li>
    </ul>
    <ul>
      <li>Icecream</li>
      <li>Pizza</li>
      <li>Fries</li>
    </ul>
  </>
);

// Array
let hobbies = ["Music", "Dance", "Coding"]

// Object
let person = {
  name:"Manish",
  age:30,
  address:{fno:123, city:"delhi", pincode:123456}
}

// Boolean Data
let isLoading = false

// Internal Style

let myStyle = {
  color:"red",
  backgroundColor:'yellow',
  fontSize:"50px",
  fontFamily:'arial'
}

function App(){
return (
 <>
   <h2>React JSX | React Expression </h2>
   { 2 + 2 }
   { name }
   {myList}
   
   My Hobbies are:    { hobbies.map((i)=><span style={myStyle}>{i+" "}</span>) }
   <br />
   <br />
   Name: {person.name}
   <br />
   Age: {person.age}
   <br />
   Address: {person.address.fno} {person.address.city} {person.address.pincode} 
   <br />
   {/* {person} */} 
   {/* can't display the object directly */}
   {/* this is React Comments Shortcut for comments ctrl +/ */}
  
  {/* Network */}
   <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjA8kgcvxl2XYycDbecPbsBl_ScuHf7MpB9wreGm2hqjG5DrJJYk3dA5IUX3iWEAouaJdhAnN5lyNGeKMgOZ6WlpS86deow9QyxvBiBHEniRNfRPYsoHGxThkGzrf37y6wcRGGSb4SnXq1TNuiYqAHqRYO9WflZCnzf1FFAfPUD9zi_OgDB3EV9x6Uqmw=s1082" alt="" width="300"/>

  {/* SRC > Image  */}
   <img src={GoogleImg} alt="" style={{borderRadius:"50%"}}/>

  {/* Conditional Rendering */}
  {isLoading ? "Yes Image is Loading": "No! Image will not Load"}

 </>
)
}

export default App;




// Styling
// 1. Inline Styling
// 2. Internal Styling
// 3. External styling