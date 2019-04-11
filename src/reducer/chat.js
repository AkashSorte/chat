import {combineReducers} from "redux";
import message from "./messages.js";
import user from "./users.js";


const chat = combineReducers({
  message,
  user
});

export default chat;
