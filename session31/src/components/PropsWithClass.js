import React, { Component } from 'react'

export default class PropsWithClass extends Component {
    constructor(props){
        super(props);
    }
  render() {
    console.log(this.props)
    this.props.name = "Pankaj Kapoor"
    
    // Destructure of Props in Class Component
    let {name, age} = this.props
    
    return (
      <div>
        {/* <h2>Name: {this.props.name}  Age= {this.props.age} </h2> */}
        <h2>Name: {name}  Age= {age} </h2>
      </div>
    )
  }
}
