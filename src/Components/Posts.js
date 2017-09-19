import React, { Component } from 'react';
import Checkingbox from './Checkingbox';
import {Grid, Panel} from 'react-bootstrap';
import $ from 'jquery';
import { observer } from 'mobx-react';


const Posts = observer(class Posts extends Component {
  constructor() {
          super();
          this.state = {
            projects: []
          }
  }
  getItems(){
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      dataType: "json",
      cache: false,
      success: function(data) {this.setState({items:data},
        function(){console.log(this.state)} )}.bind(this),
      error:function(xhr, status, err){console.log(err)}
    });
  }
    componentDidMount(){
      this.getItems();
    }

    //this below function is for the checkbox
    handleChange(id){
      let items = this.state.items;
      let index = items.findIndex(item => item.id === id);
      items[index].completed = !items[index].completed
      this.setState({items:items}, function(){console.log(this.state)});
    }
    handleDeleteItem(id){
      let items = this.state.items;
      let index = items.findIndex(item => item.id === id);
      items.splice(index, 1);
      this.setState({items:items});
    }


  render() {
      return (
        <Grid>
          <Panel>
            <Checkingbox items={this.state.items} onChange={this.handleChange.bind(this)} onDelete={this.handleDeleteItem.bind(this)}/>
          </Panel>
        </Grid>
          );
        }
    })

export default Posts;
