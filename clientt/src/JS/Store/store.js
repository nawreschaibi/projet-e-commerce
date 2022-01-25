import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import {routeReducer} from "../Reducers";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();

export const store = createStore (
    routeReducer,
    composeEnhancer(applyMiddleware(thunk))
    );