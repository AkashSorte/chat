import * as Actions from '../constants/chatConstants.js';

const user = (state = [], action) => {
  switch (action) {
    case Actions.ADD_USER:
      return state.concat({
        name : action.name,
        id : action.id
      })
      break;
    default:
      return state;
  }
}

export default user;
