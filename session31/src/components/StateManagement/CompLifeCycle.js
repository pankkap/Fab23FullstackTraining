// Component life Cycle means, how component move from one phase to another phase

import React, { Component } from 'react'

class CompLifeCycle extends Component {
    constructor(props){
        super(props);
        console.log("Constructor Called-1")
        this.state = {
            counter:0,
            show:true
        }
    }

    componentDidMount(){
        console.log("ComponentDidMount Called-1")
        alert ("Hello")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate Called-1");
        alert ("Hi ")
    }
    componentWillUnmount(){
        console.log("ComponentWillUnMount Called-1")
    }
    
    update = ()=>{
        this.setState({counter:this.state.counter+1})
    }
    closeChild = ()=>{
        this.setState({show:!this.state.show})
    }
  render() {
    console.log("Render called-1")
    return (
      <div>
        <h2>{this.state.counter}</h2>
        {this.state.show ? <Child hi="hello"/>:null}
        <button className='btn btn-primary' onClick={this.update}>Update Counter</button>
        <button className='btn btn-danger' onClick={this.closeChild}>x</button>

      </div>
    )
  }
}

class Child extends Component{
    constructor(props){
        console.log("Constructor called-2")
        super(props)
    }
    componentDidMount(){
        console.log("ComponentDidMount Called Component-2 ")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate Called Component-2");
    }
    componentWillUnmount(){
        console.log("ComponentWillUnMount Called Component-2")
        alert("Bye")
    }
    render(){
        console.log("Render Called-2")
        return (
            <>
                <h2>Child Rendered- {this.props.hi}</h2>
            </>
        )
    }
}

export default CompLifeCycle;