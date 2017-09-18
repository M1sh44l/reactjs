import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Todos from './Components/Todos';
import {Nav, Navbar, NavItem, Grid} from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import Home from './Components/Home';
import API from './Components/API';
import Posts from './Components/Posts';


class App extends Component {
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
          </Nav>
        </Navbar>
    );
      return (
        <BrowserRouter>
        <Grid>
          <Grid>
            {navBar}
          </Grid>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/Api" render={() => <API />} />
          <Route exact path="/Posts" render={() => <Posts />} />
        </Grid>
        </BrowserRouter>
      );
    }
}

export default App;
