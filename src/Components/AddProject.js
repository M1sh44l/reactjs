import React, { Component } from 'react';
import uuid from 'uuid';
import {Button} from 'react-bootstrap';


class AddProject extends Component {
  constructor() {
          super();
          this.state = {
            newProject: []
          }
  }

  static defaultProps = {
    categories: ["Web Design", "Web Development", "Mobile App",]
  }
  handleSubmit(e){
    if (this.refs.title.value === "") {
      alert('Title is required');
    } else {
      this.setState({
        newProject: {
          id: uuid.v4(),
          title: this.refs.title.value,
          category: this.refs.category.value,
        }},
        function(){ this.props.addProject(this.state.newProject);}
    )
    }
    e.preventDefault();
  }
  render() {
    //This below function works as a 'for loop'
    let categoryOptions = this.props.categories.map(
      category => {
        return <option key={category} value={category}>
                  {category}</option>
      }
    )
      return (
            <div>
              <h3>Add Project</h3>
              <form onSubmit={this.handleSubmit.bind(this)} >
              <div className="form-group">
                  <lable>Title</lable><br />
                  <input className="form-control" type="text" ref="title" />
              </div>
              <div className="form-group">
                  <lable>Category</lable><br />
                  <select className="form-control form-control-lg" ref="category">
                    {categoryOptions}
                  </select>
              </div>
                <br />
                <Button type="submit" bsStyle="primary">Submit</Button>
              </form>
            </div>
          );
        }
    }

export default AddProject;
