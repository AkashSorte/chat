import React, { Component } from 'react';


export default class Menubar extends Component {
  constructor(props) {
    debugger;
    super(props);
  }
  render() {
    let userLists =  this.props.users;
    return (
      <div>
        <ul>
          {userLists.map(msg => <li> {msg.name} </li> )}
        </ul>
      </div>
    );
  }
}
