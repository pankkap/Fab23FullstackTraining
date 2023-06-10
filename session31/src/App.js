import logo from './logo.svg';
// import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Summary from './components/Summary';

let students = ["Krishna", "Fatima", "Pratiksha", "chandershekhar", "Vinod", "Santosh"]

function App() {
  return (
    <div className="container">
      <header className="App-header">
        {/* <Message name="Maish" age={23}/>
        <Message name= "Sachin" age={25}/>
        <Message name="Pratiksha" age={35}/> */}
        
        {/* 1. You can pass the entire array */}
        {/* <Summary names={students}/> */}
        
        {/* 2. You can pass single student to summary to display the student name */}
        <h2 className='text-center text-danger bg-info p-3'>List of Students</h2>
        {
          students.map((student,i)=>(
            <Summary name={student} key={i} />
          ))
        }
      </header>
    </div>
  );
}

export default App;
