import React, { Component } from 'react';


class Checkboxitems extends Component {
  //this below function is for the checkbox
  onChange(id){
    this.props.onChange(id);
  }
  deleteItem(id){
    this.props.onDelete(id);
  }
  render() {
    //the if statement below is for styling/coloring for the even number rows !!
    //p is declared in the todos.js as a variable !!
    if(this.props.p % 2){
      return (
            <li className="list-group-item list-group-item-success">
              <strong>{this.props.item.title}</strong> <input type="checkbox"
              checked={this.props.item.completed} onChange={this.onChange.bind(this,this.props.item.id)} />
              <a href={"#" + this.props.item.id} onClick={this.deleteItem.bind(this, this.props.item.id)}>Delete</a>
            </li>
          );
    }
      return (
            <li className="list-group-item list-group-item-info">
              <strong>{this.props.item.title}</strong> <input type="checkbox"
              checked={this.props.item.completed} onChange={this.onChange.bind(this,this.props.item.id)} />
              <a href={"#" + this.props.item.id} onClick={this.deleteItem.bind(this, this.props.item.id)}>Delete</a>
            </li>
          );
        }
    }

export default Checkboxitems;
