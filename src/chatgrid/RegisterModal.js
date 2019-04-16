import React, { Component } from 'react';
import '../css/home.css';

export default class RegisterModal extends Component {

  constructor(prop) {
    super(prop);
    this.state = { name : "" };
  }

  reg = () => {
    this.props.register(this.state.name);
  }

  render() {
    return (
      <div className='popup'>
            <div className='popup_inner'>
            Enter your name: <input type="text" onChange={(e) =>  this.setState({name : e.target.value})} />
            <button onClick={this.reg}>Register</button>
            </div>
      </div>
    );
  }

}
