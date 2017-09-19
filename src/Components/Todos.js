import React, { Component } from 'react';
import TodoItems from './TodoItems';
import { observer } from 'mobx-react';


const Todos = observer(class Todos extends Component {
  //this below function is for the checkbox
  onChange(id){
    this.props.onChange(id);
  }
  render() {
    let todoItems;
    var p = 0;
    if(this.props.todos) {
      todoItems = this.props.todos.map(
        todo => {
          p += 1;
          return (
            <TodoItems p={p} onChange={this.onChange.bind(this)} key={todo.title} todo={todo} />
          );
        }
      )
    }
    return (
      <div>
        <br />
        <h3>My Todos</h3>
        <br />
        {this.props.test}
        {todoItems}
      </div>
    );
  }
})

export default Todos;
