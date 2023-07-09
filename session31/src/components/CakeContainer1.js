import React from "react";
import { connect } from "react-redux";
import { build_cake, buy_cake } from "./Cake-Shop/cakeActions";

function CakeContainer1(props) {
  return (
    <div>
      <h4 className="text-primary">Counter -1 </h4>
      <h2>Number Of Cakes : {props.noOfCakes}</h2>
      
      <button className="btn btn-primary" onClick={props.buyCake}>Buy Cake</button>

      <button className="btn btn-success mx-3" onClick={props.buildCake}>Build Cake</button>
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
    },
    buildCake: ()=>{
      dispatch(build_cake())
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer1);
