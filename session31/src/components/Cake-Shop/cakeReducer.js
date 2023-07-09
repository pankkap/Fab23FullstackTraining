import {BUILD_CAKE, BUY_CAKE } from "./cakeTypes";

const initialState = {noOfCakes: 10};

const cakeReducer = (state = initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: 
        return {
            ...state,
            noOfCakes: state.noOfCakes - 1,
          };
          case BUILD_CAKE: 
        return {
            ...state,
            noOfCakes: state.noOfCakes + 1,
          };
        
        default:
          return state;
    }
}


export default cakeReducer