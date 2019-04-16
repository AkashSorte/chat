import * as Actions from '../constants/chatConstants.js';
import {addMessage} from "../action/chat-actions";

export const sendMessage = (state = {
  messages:[]
}, action) => {
  switch (action.type) {
    case Actions.MESSAGE_RECIEVED:
    case Actions.ADD_MESSAGE:
      return {
        messages:state.messages.concat({
        message : action.message,
        user : action.user,
      })
    }
      break;
    default:
      return state;
  }
}
