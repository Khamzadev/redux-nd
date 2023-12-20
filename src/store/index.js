import { createStore, combineReducers, applyMiddleware } from "redux";
import { cashReducer } from "./cashRuducer";
import { customerReducer } from "./customerReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rooteReducer = combineReducers({
  cash: cashReducer,
  customer: customerReducer
})

export const store = createStore(rooteReducer, composeWithDevTools(applyMiddleware(thunk)))