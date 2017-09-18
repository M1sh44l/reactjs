import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Todos from './Components/Todos';
import {Nav, Navbar, NavItem, Grid} from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import Home from './Components/Home';
import API from './Components/API';


class App extends Component {
  render() {
    const navBar = (
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">My Projects</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem href="/Home">Home</NavItem>
            <NavItem href="/api">API</NavItem>
          </Nav>
        </Navbar>
    );
      return (
        <BrowserRouter>
        <Grid>
        {navBar}
            My App
            <Home />
            <API />
        </Grid>
        </BrowserRouter>
      );
    }
}

export default App;
