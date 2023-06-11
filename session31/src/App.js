import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Summary from "./components/Summary";

let students = [
  "Krishna",
  "Fatima",
  "Pratiksha",
  "chandershekhar",
  "Vinod",
  "Santosh",
  "Surya Kumar",
  "Luxmi Yadav"
];

function App() {

  function reverseNames(){
    console.log("btn Clicked")
    students.reverse()
    console.log(students)

    // for Manual rendering because we are not implementing State Management
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render( <App />);
  }

// let x = [1,2,3]
// x = [5,...x]
//   console.log(x) [5,1,2,3] 

  function promoteName(name){
  //  console.log("promote ", name)

    students = [name, ...students.filter((stu)=> stu !== name)]
    // console.log(students)  
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render( <App />);
  }


  return (
    <div className="container">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Character</th>
              <th scope="col" colSpan={2} className='text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, i) => (
              <tr key={i}>
                <Summary name={student} index={i} 
                callbackReverse={reverseNames}  
                callbackPomote={promoteName} 
                />
              </tr>
            ))}
          </tbody>
        </table>
      {/* <button className="btn btn-primary" onClick={btnClick}>Click Me</button> */}
    </div>
  );
}

export default App;
