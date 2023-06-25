import React, { Component } from 'react'

export default class StateWithClass extends Component {
    constructor(){
        super()
        // State in Class
        this.state = {
            counter:0,       // state variable
            name:""
        }
        // Manually bind function with class 
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment()
        {
                // console.log("Function Increment Called")

            this.setState({counter:this.state.counter+1, name:"Pankaj Kapoor"})

        }
        decrement()
        {
            // console.log("Function Decrement Called")
            this.setState({counter:this.state.counter-1, name:""})

        }
  render() {
    console.log("Render Called")
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <h2>My Name: {this.state.name}</h2>
        <button className='btn btn-primary mx-3' onClick={this.increment}>Increment</button>
        <button className='btn btn-danger'onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
