import React, { Component } from 'react';
import MusicItems from './MusicItems';
import { observer } from 'mobx-react';


const MusicList = observer(class MusicList extends Component {

  render() {
    let todoItems;
    if(this.props.music) {
      todoItems = this.props.music.map(
        (todo, index) => {
          return (
            <MusicItems key={index} music={todo} />
          );
        }
      )
    }
    return (
      <div>
        <br />
        <h3>My Music List</h3>
        <br />
        {todoItems}
      </div>
    );
  }
})

export default MusicList;
