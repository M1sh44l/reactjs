import React, { Component } from 'react';


class ListProjects extends Component {
  constructor() {
    super();
    this.state = {
      newProject: []
    }
  }
  static defaultProps = {
    categories: ["React JS App", "React JS & React Native", "React and Django",]
  }
  handleSubmit(e){
    console.log(this.refs.title.value);
    e.preventDefault();
  }
  render() {
    let categoryOptions = this.props.categories.map(
      category => {

        return <option key={category} value={category}>{category}</option>
      }
    );
      return (
          <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
          <label>Category</label><br />
          <select ref="category">
          {categoryOptions}
          </select>
          </div>
          <input type="submit" value="Submit" />
          </form>
          );
        }
    }

export default ListProjects;
