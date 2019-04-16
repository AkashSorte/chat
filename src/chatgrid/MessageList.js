import React, { Component } from 'react';

export default class MessageList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let messageLists =  this.props.messages;
    console.log(messageLists);
    return (
    <div>
      <ul>
        {messageLists.map(msg => <li key={msg.message}> {msg.user}  :  {msg.message} </li> )}
      </ul>
    </div>
  );
  }
}
