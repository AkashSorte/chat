import React, { Component } from 'react';


export default class Menubar extends Component {
  render() {
    let userLists =  this.props.users;
    let {me} = this.props;
    return (
      <div>
        <ul>
          {userLists.map(user => {
            if(user.name === me){
              return (
                <li key={user.name}><b><i> {user.name} </i></b> </li>
              );
            } else {
              return (
                <li key={user.name}> {user.name}  </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}
