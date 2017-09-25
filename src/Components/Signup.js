import React, { Component } from 'react';
import {observer} from 'mobx-react';
import $ from 'jquery';
import store from '../Store';
import auth from './auth';


const Signup = observer(class Signup extends Component {
  handleSignup(e){
    e.preventDefault();
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    this.signup(username, password);
    console.log(username, password);
  }

  signup(username, password){
    var request = $.ajax({
      type: 'POST',
      dataType: 'json',
      url: 'http://139.59.119.40/api/register/',
      data: {
        username: username,
        password: password,
      },
      success: function(result){
        this.getToken(username, password)
      }.bind(this),
      error: function(xhr, status, err) {console.log(err)},
    })
  }
  getToken(username, password){
    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: 'http://139.59.119.40/api/login/',
      data: {
        username: username,
        password: password,
      },
      success: function(result){
        store.authenticated = true
        store.token = result.token
        store.username = result.username
        localStorage.username = result.username
        localStorage.token = result.token
      },
      error: function(xhr, status, err) {console.log(err)},
    })
  }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSignup.bind(this)}>
        <input type="text" placeholder="username" ref="username" />
        <input type="password" placeholder="password" ref="password" />
        <input type="submit" />
      </form>
      </div>
    )

  }
})


export default Signup;
