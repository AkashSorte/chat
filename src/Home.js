import React, { Component } from 'react';
import './css/home.css';
import Menubar from './chatgrid/Menubar';
import MessageList from './chatgrid/MessageList';
import NewMessage from './chatgrid/NewMessage';

import { Provider,connect } from 'react-redux';
import { createStore } from 'redux';
import chat from './reducer/chat.js'
const store = createStore(chat);


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages : [],
      users : []
    }
  }

  render() {
    return (
      <div className="grid-container">
      <Provider store={store}>
        <div className="menu"><Menubar users={this.state.users}/></div>
        <div className="main"><MessageList messages={this.state.messages}/></div>
        <div className="footer"><NewMessage /></div>
      </Provider>
      </div>
    );
  }

}


const mapActionsToProps = (dispatch)=> {
  return{
    getP:()=>{}
  }
}

const mapStateToProps = (state) =>{
  return{
  xyz:"dad"
}
}
export default connect(mapStateToProps,mapActionsToProps)(Home);
