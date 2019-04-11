import * as Actions from '../constants/chatConstants.js';

const message = (state = [], action) => {
  switch (action) {
    case Actions.MESSAGE_RECIEVED:
    case Actions.ADD_MESSAGE:
      return state.concat({
        message : action.message,
        user : action.user,
        id : action.id
      })
      break;
    default:
      return state;
  }
}

export default message;
