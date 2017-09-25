import {observer} from 'mobx-react';
import $ from 'jquery';
import store from '../Store';


const auth = observer(new class auth {
  login(username, password){
    if(localStorage.token && store.username === ""){
      store.token = localStorage.token
      store.authenticated = true
      store.username = localStorage.username
      return
    }
    this.getToken(username, password)

  }

  logout(){
    delete localStorage.token
    delete localStorage.username
    store.authenticated = false
    store.token = ""
    store.username = ""
  }
  firstLoad(){
    if(localStorage.token){
      store.token = localStorage.token
      store.authenticated = true
      store.username = localStorage.username
    }
  }
  loggedIn(){
    return !!localStorage
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
})

var Auth = window.auth = auth;

export default Auth;
