import { combineReducers } from "redux";
import cakeReducer from "./Cake-Shop/cakeReducer";
import counterReducer from "./CounterApp/counterReducer";


const RootReducer = combineReducers({
    // Add your reducers here.
    cake:cakeReducer,
    counter:counterReducer
})


export default RootReducer