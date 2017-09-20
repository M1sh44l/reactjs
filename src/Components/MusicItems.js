import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import { observer } from 'mobx-react';


const MusicItems = observer(class MusicItems extends Component {

  render() {
      return (
            <li className="list-group-item list-group-item-info">
              <strong>{this.props.music.name}</strong>:<p>{this.props.music.artist}</p>
              <img src={this.props.music.image.get(3)['#text']} alt="" thumbnail />
            </li>
          );
        }
    })

export default MusicItems;
