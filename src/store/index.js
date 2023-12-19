import { createStore, combineReducers } from "redux";
import { cashReducer } from "./cashRuducer";
import { customerReducer } from "./customerReducer";

const rooteReducer = combineReducers({
  cash: cashReducer,
  customer: customerReducer
})


export const store = createStore(rooteReducer)