import React, { Component } from 'react';
import {addMessage} from "../action/chat-actions";
import chat from '../reducer/chat.js';
import { createStore } from 'redux';

export default class NewMessage extends Component {

constructor(props) {
  super(props);
  this.state = {value : ""};
}

messageSubmit = () => {
  let message = this.state.value;
  if(message){
    console.log(this.state.value);
    const store = createStore(chat);
    store.dispatch(addMessage(this.state.value,"me"));
  }
}

render () {
  return (
    <div>
      message: <input type="textarea"  placeholder="message" value={this.state.value} onChange={(e) => this.setState({ value : e.target.value})}/>
      <input type="button" onClick={this.messageSubmit} value="submit" />
    </div>
  );
}
}
