import React, { Component } from 'react';

export default class MessageList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let messageLists =  this.props.messages;
    return (
    <div>
      <ul>
        {messageLists.map(msg => <li> {msg.user}  :  {msg.message} </li> )}
      </ul>
    </div>
  );
  }
}
