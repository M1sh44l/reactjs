import React, { Component } from 'react';
import Checkboxitems from './Checkboxitems';

class Checkingbox extends Component {
  //this below function is for the checkbox
  onChange(id){
    this.props.onChange(id);
  }
  deleteItem(id){
    this.props.onDelete(id);
  }
  render() {
    let checkItems;
    var p = 0;
    if(this.props.items) {
      checkItems = this.props.items.map(
        item => {
          p += 1;
          return (
            <Checkboxitems p={p} onChange={this.onChange.bind(this)} onDelete={this.deleteItem.bind(this)} key={item.title} item={item} />
          );
        }
      )
    }
    return (
      <div>
        <br />
        <h3> API Posts </h3>
        <br />
        {this.props.test}
        {checkItems}
      </div>
    );
  }
}

export default Checkingbox;
