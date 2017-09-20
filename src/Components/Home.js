import React, { Component } from 'react';
import Projects from './Projects';
import AddProject from './AddProject';
import uuid from 'uuid';
import {Nav, Navbar, NavItem, Grid, Panel} from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import { observer } from 'mobx-react';


const Home = observer(class Home extends Component {
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
    let projects = this.props.store.projects;
    projects.push(project);
    this.props.store.projects = projects;
    //this.setState({projects:projects});
    //console.log(projects);
  }

  handleDeleteProject(id){
    let projects = this.props.store.projects;
    let index = projects.findIndex(project => project.id === id);
    projects.splice(index, 1);
    this.props.store.projects = projects;
    //this.setState({projects:projects});
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
            <AddProject store={this.props.store} addProject={this.handleAddProject.bind(this)} />
          </Panel>
          <Panel>
            <Projects projects={this.props.store.projects} onDelete={this.handleDeleteProject.bind(this)} />
          </Panel>
        </Grid>
        </BrowserRouter>

          );
        }
    })

export default Home;
