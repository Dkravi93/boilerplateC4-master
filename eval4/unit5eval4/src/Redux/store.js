import { loginReducer } from "./Login/loginReducer";
import { combineReducers, createStore } from "redux";

const  rootReducers = combineReducers({
     login: loginReducer
})


export const store = createStore(rootReducers); // add your reducers here

