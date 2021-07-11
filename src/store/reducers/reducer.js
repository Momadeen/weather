import { combineReducers } from "redux";
import weatherInfo from "./weatherReducers";

const reducers = combineReducers({ weatherInfo });

export default reducers;
