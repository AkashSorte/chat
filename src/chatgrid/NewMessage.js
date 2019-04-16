import React, { Component } from 'react';
import { ADD_MESSAGE} from "../constants/chatConstants";
export default class NewMessage extends Component {

constructor(props) {
  super(props);
  this.state = {
    user : props.user
  };
}

messageSubmit = () => {
  let message = this.input.value;
  this.input.value="";
  if(message){
    let {store} = this.props;
    let action = { type : ADD_MESSAGE, message : message, user: this.props.user };
    store.dispatch(action);
  }
}

render () {
  return (
    <div>
      message: <input type="textarea"  placeholder="message" ref={node=>{
        this.input=node;
      }}/>
      <input type="button" onClick={this.messageSubmit} value="submit" />
    </div>
  );
}
}
