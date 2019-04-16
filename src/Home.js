import React, { Component } from 'react';
import './css/home.css';
import Menubar from './chatgrid/Menubar';
import MessageList from './chatgrid/MessageList';
import NewMessage from './chatgrid/NewMessage';
import * as Action from "./action/chat-actions"
import PropTypes from "prop-types"
import RegisterModal from "./chatgrid/RegisterModal"
import { ADD_USER} from "./constants/chatConstants";


class Home extends Component {
  static propTypes = {
    users : PropTypes.array,
    messages : PropTypes.arrayOf(
      PropTypes.shape({
        user : PropTypes.string,
        message : PropTypes.string
      })
    )
  }
  constructor(props){
    super(props);
    this.state = { modalFlag : true, currUser : "" };
  }

  register = (name) => {
    this.setState({
      currUser : name,
      modalFlag : false
    });
      let {store} = this.props;
      let action = { type : ADD_USER, name: name };
      store.dispatch(action);
  }

  getRegisterModal = () => {
    return (
      <RegisterModal register={this.register} />
    )
  }

  render() {
    let messages = this.props.store.getState().sendMessage.messages;
    let users = this.props.store.getState().user.users;
    let {currUser} = this.state;

    return (
      <div>
          <div className="grid-container">
            <div className="menu"><Menubar me={currUser} users={users}/></div>
            <div className="main"><MessageList messages={messages}/></div>
            <div className="footer"><NewMessage user={currUser}  store={this.props.store}/></div>
          </div>
          {this.state.modalFlag ? this.getRegisterModal() : null}
      </div>
    );
  }

}


export default Home;
