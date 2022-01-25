import {combineReducers} from "redux"
import{useReducer} from "./user"
import ProducttReducer from "./Productt"
export const routeReducer = combineReducers({ useReducer,ProducttReducer });