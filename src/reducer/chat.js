import {combineReducers} from "redux";
import {sendMessage} from "./messages.js";
import {user} from "./users.js";


const chat = combineReducers({
  sendMessage,
  user
});

export default chat;
