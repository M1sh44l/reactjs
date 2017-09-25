import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import {Nav, Navbar, NavItem, Grid, Button} from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import { observer } from 'mobx-react';
import Home from './Components/Home';
import API from './Components/API';
import Posts from './Components/Posts';
import Music from './Components/Music';
import auth from './Components/auth';
import Signup from './Components/Signup';


const App = observer(class App extends Component {
  handlePostSubmit(e){
    e.preventDefault()
    $.ajax({
      type: 'POST',
      datatype: 'application/json',
      url: "http://139.59.119.40/api/create/",
      headers: {
        'Authorization': 'JWT ' + this.props.store.token
      },
      data: {
        "title": this.refs.post_title.value,
        "content": this.refs.post_content.value,
        "publish": this.refs.post_publish.value
      },
      success: function(result) {console.log(result)},
      error: function(xhr, status, err) {console.log(err)}
    })
  }
  handleSubmit(e){
    e.preventDefault();
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    auth.login(username, password);
  }
  handleLogout(e){
    e.preventDefault();
    auth.logout();
  }

  componentDidMount(){
    auth.firstLoad();
  }
  render() {
    const loginForm = (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="username" ref="username" />
        <input type="password" placeholder="password" ref="password" />
        <input type="submit" />
      </form>
    )
    const postForm = (
      <form onSubmit={this.handlePostSubmit.bind(this)}>
        <label>Title</label>
        <input type="text" placeholder="title" ref="post_title" />
        <label>Content</label>
        <input type="text" placeholder="content" ref="post_content" />
        <label>Publish</label>
        <input type="date" placeholder="date" ref="post_publish" />
        <input type="submit" />
      </form>
    )
    const logoutForm = (
      <Button bsStyle="primary" type="button" onClick={this.handleLogout}>Logout</Button>
    )
    const navBar = (
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">My Projects</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <LinkContainer exact to="/">
            <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/Api">
            <NavItem>API</NavItem>
            </LinkContainer>
            <LinkContainer to="/Posts">
            <NavItem>Posts</NavItem>
            </LinkContainer>
            <LinkContainer to="/Music">
            <NavItem>Music</NavItem>
            </LinkContainer>
            <LinkContainer to="/Signup">
            <NavItem>Signup</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
    );
      return (
        <BrowserRouter>
        <Grid>
          <Grid>
            {navBar}
          </Grid>
          <Grid>
            {this.props.store.authenticated ?
              <div><strong> Welcome {this.props.store.username}</strong> ! {" "} {logoutForm}</div> : loginForm}
          </Grid>
          <Grid>
            {postForm}
          </Grid>
          <Route exact path="/" render={() => <Home store={this.props.store}/>} />
          <Route exact path="/Api" render={() => <API store={this.props.store}/>} />
          <Route exact path="/Posts" render={() => <Posts />} />
          <Route exact path="/Music" render={() => <Music store={this.props.store}/>} />
          <Route exact path="/Signup" render={() => <Signup store={this.props.store}/>} />

        </Grid>
        </BrowserRouter>
      );
    }
})

export default App;
