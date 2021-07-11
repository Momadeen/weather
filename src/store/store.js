import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers/weatherReducers";

const middleware = applyMiddleware(thunk);

const store = createStore(reducers, middleware);

export default store;
