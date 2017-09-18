import React, { Component } from 'react';


class TodoItems extends Component {
  //this below function is for the checkbox
  onChange(id){
    this.props.onChange(id);
  }
  render() {
    //the if statement below is for styling/coloring for the even number rows !!
    //p is declared in the todos.js as a variable !!
    if(this.props.p % 2){
      return (
            <li className="list-group-item list-group-item-success">
              <strong>{this.props.todo.title}</strong> <input type="checkbox"
              checked={this.props.todo.completed} onChange={this.onChange.bind(this,this.props.todo.id)} />
            </li>
          );
    }
      return (
            <li className="list-group-item list-group-item-info">
              <strong>{this.props.todo.title}</strong> <input type="checkbox"
              checked={this.props.todo.completed} onChange={this.onChange.bind(this,this.props.todo.id)} />
            </li>
          );
        }
    }

export default TodoItems;
