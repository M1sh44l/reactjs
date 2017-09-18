import React, { Component } from 'react';
// import ImageProject from './Components/ImageProject';
import uuid from 'uuid';
// import ListProjects from './Components/ListProjects';
import $ from 'jquery';
import Todos from './Components/Todos';
import {Nav, Navbar, NavItem, Grid, Panel} from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import Home from './Components/Home';


class App extends Component {
  constructor() {
          super();
          this.state = {
            projects: []
          }
  }
  getTodos(){
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      dataType: "json",
      cache: false,
      success: function(data) {this.setState({todos:data},
        function(){console.log(this.state)} )}.bind(this),
      error:function(xhr, status, err){console.log(err)}
    });
  }

  componentDidMount(){
    this.getTodos();
  }

  //this below function is for the checkbox
  handleChange(id){
    let todos = this.state.todos;
    let index = todos.findIndex(todo => todo.id === id);
    todos[index].completed = !todos[index].completed
    this.setState({todos:todos}, function(){console.log(this.state)});
  }
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
          <Panel>
            <Home />
          </Panel>
          <Panel>
          <Todos todos={this.state.todos} onChange={this.handleChange.bind(this)}/>
          </Panel>
        </Grid>
        </BrowserRouter>
      );
    }
}

export default App;
