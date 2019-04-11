import * as Actions from '../constants/chatConstants.js';

let messageId = 0;
let userId = 0;

export const addUser = (username) => ({
  type : Actions.ADD_USER,
  id : ++userId,
  name : username
})

export const addMessage = (message, user) => ({
  type : Actions.ADD_MESSAGE,
  id : ++messageId,
  message,
  user
})

export const populateUserList = users => ({
  type : Actions.USER_LIST,
  users
})

export const messsageRecieved = (message, user) => ({
  type : Actions.MESSAGE_RECIEVED,
  id : ++messageId,
  message,
  user
})
