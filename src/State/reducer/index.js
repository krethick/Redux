
import { combineReducers } from "redux";
import accountReducer from "./accountReducer"

const reducer = combineReducers({
    bank: accountReducer
})

export default reducer
