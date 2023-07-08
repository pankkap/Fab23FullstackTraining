import React from "react";
import { connect } from "react-redux";
import { buy_cake } from "./Cake-Shop/cakeActions";

function CakeContainer2(props) {
  return (
    <div>
      <h4 className="text-primary">Counter -2 </h4>
      <h2>Number Of Cakes : {props.noOfCakes}</h2>
      
      <button className="btn btn-primary" onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.cake.noOfCakes,
  };
};

const mapDispatchToProps = (dispatch)=>{
  return {
    buyCake: ()=>{
      dispatch(buy_cake())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer2);
