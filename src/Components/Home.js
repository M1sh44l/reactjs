import React, { Component } from 'react';
import Projects from './Projects';
import AddProject from './AddProject';
import uuid from 'uuid';
import {Nav, Navbar, NavItem, Grid, Panel} from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';


class Home extends Component {
  constructor() {
          super();
          this.state = {
            projects: []
          }
  }
  componentWillMount() {
    this.setState({projects:[
      {
        id: uuid.v4(),
        title: "Business Website",
        category: "Web Design",
      },
      {
        id: uuid.v4(),
        title: "Social App",
        category: "Mobile Development",
      },
      {
        id: uuid.v4(),
        title: "E-Commerce Shopping Cart",
        category: "Web Development",
      }
    ]})
  }
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
    console.log(projects);
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
            <NavItem href="/">Home</NavItem>
            <NavItem href="/api">API</NavItem>
          </Nav>
        </Navbar>
    );
      return (
        <BrowserRouter>
        <Grid>
          <Panel>
            <Projects test="Hello World!" projects={this.state.projects} />
          </Panel>
          <Panel>
            <AddProject addProject={this.handleAddProject.bind(this)} />
          </Panel>
        </Grid>
        </BrowserRouter>

          );
        }
    }

export default Home;
