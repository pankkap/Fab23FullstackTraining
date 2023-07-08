import { combineReducers } from "redux";
import cakeReducer from "./Cake-Shop/cakeReducer";


const RootReducer = combineReducers({
    // Add your reducers here.
    cake:cakeReducer
})


export default RootReducer