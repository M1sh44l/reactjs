import React, { Component } from 'react';
import Todos from './Todos';
import {Grid, Panel} from 'react-bootstrap';
import $ from 'jquery';


class API extends Component {
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
      success: function(data) {this.setState({todos:data},
        function(){console.log(this.state)} )}.bind(this),
      error:function(xhr, status, err){console.log(err)}
    });
  }

  componentDidMount(){
    this.getTodos();
  }

  //this below function is for the checkbox
  handleChange(id){
    let todos = this.state.todos;
    let index = todos.findIndex(todo => todo.id === id);
    todos[index].completed = !todos[index].completed
    this.setState({todos:todos}, function(){console.log(this.state)});
  }

  render() {
      return (
          <Grid>
            <Panel>
              <Todos todos={this.state.todos} onChange={this.handleChange.bind(this)}/>
            </Panel>
          </Grid>


          );
        }
}

export default API;
