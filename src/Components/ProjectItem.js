import React, { Component } from 'react';
import { observer } from 'mobx-react';


const ProjectItem = observer(class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
      return (
        <li className="ProjectItem">
          <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href={"#" + this.props.project.id} onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</a>
        </li>
          );
        }
    })

export default ProjectItem;
