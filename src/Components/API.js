import React, { Component } from 'react';
import Todos from './Todos';
import {Grid, Panel} from 'react-bootstrap';
import $ from 'jquery';
import { observer } from 'mobx-react';


const API = observer(class API extends Component {
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
      success: function(data) {this.props.store.todos = data; }.bind(this),
      error:function(xhr, status, err){console.log(err)}
    });
  }

  // if you want to understand the 'below' if-statement; then compare it with componentDidMount() in the Posts.js !!!
  componentDidMount(){
    if (this.props.store.todos.length < 1) {
    this.getTodos();
    }
  }

  //this below function is for the checkbox
  handleChange(id){
    let todos = this.props.store.todos;
    let index = todos.findIndex(todo => todo.id === id);
    todos[index].completed = !todos[index].completed
    this.props.store.todos = todos;
  }

  render() {
      return (
          <Grid>
            <Panel>
              <Todos todos={this.props.store.todos} onChange={this.handleChange.bind(this)}/>
            </Panel>
          </Grid>


          );
        }
})

export default API;
