import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

//Takes an object of all the reducers.
const reducer = combineReducers({
    account: accountReducer
});

export default reducers