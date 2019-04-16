import * as Actions from '../constants/chatConstants.js';

export const user = (state ={ users : [] }, action) => {
  switch (action.type) {
    case Actions.ADD_USER:
      return {
        users : state.users.concat({
          name : action.name,
          id : action.id
        })
      }
      break;
    default:
      return state;
  }
}
