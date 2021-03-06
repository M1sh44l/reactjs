import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import { observer } from 'mobx-react';


const Projects = observer(class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if(this.props.projects) {
      projectItems = this.props.projects.map(
        (project, index) => {
          return (
            <ProjectItem onDelete={this.deleteProject.bind(this)} key={index} project={project} />
          );
        }
      )
    }
    return (
      <div>
        My Projects
        <br />
        {this.props.test}
        {projectItems}
      </div>
    );
  }
})

export default Projects;
