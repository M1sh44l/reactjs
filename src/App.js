import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import {Nav, Navbar, NavItem, Grid} from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import { observer } from 'mobx-react';
import Home from './Components/Home';
import API from './Components/API';
import Posts from './Components/Posts';
import Music from './Components/Music';


const App = observer(class App extends Component {
  render() {
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
          </Nav>
        </Navbar>
    );
      return (
        <BrowserRouter>
        <Grid>
          <Grid>
            {navBar}
          </Grid>
          <Route exact path="/" render={() => <Home store={this.props.store}/>} />
          <Route exact path="/Api" render={() => <API store={this.props.store}/>} />
          <Route exact path="/Posts" render={() => <Posts />} />
          <Route exact path="/Music" render={() => <Music store={this.props.store}/>} />
        </Grid>
        </BrowserRouter>
      );
    }
})

export default App;
