const redux = require("redux");
const createStore = redux.createStore;
const combinedReducers = redux.combineReducers;

// Action Types
const BUY_CAKE = "buy-cake";
const BUY_CANDLE = "buy-candle";

// Action Creator
const buycake = () => {
  return { type: BUY_CAKE };
};
const buycandle = () => {
  return { type: BUY_CANDLE };
};

// Inital State
const initialCakestate = { numberOfCakes: 15 };
const initialCandlestate = { numberOfCandle: 25 };

// Reducer
const cakereducer = (state = initialCakestate, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};



const candlereducer = (state = initialCandlestate, action) => {
    switch (action.type) {
        case BUY_CANDLE:
            return {
                ...state,
                numberOfCandle: state.numberOfCandle - 1,
            };
            default:
                return state;
            }
        };
        
// Comnined Reducer 
const reducer = combinedReducers(
    {
        Cakes :cakereducer ,
        Candles:candlereducer
    }
)


// Store
const store = createStore(reducer);
console.log("Inital State: ", store.getState());

// Subscribe Store to see the current state
store.subscribe(()=>console.log("Update State:", store.getState()))

// call functions
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());



store.dispatch(buycandle());
store.dispatch(buycandle());
store.dispatch(buycandle());
store.dispatch(buycandle());
store.dispatch(buycandle());
store.dispatch(buycandle());