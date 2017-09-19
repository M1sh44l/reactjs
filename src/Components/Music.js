import React, { Component } from 'react';
import MusicList from './MusicList';
import {Grid, Panel} from 'react-bootstrap';
import $ from 'jquery';
import { observer } from 'mobx-react';


const Music = observer(class Music extends Component {
  constructor() {
          super();
          this.state = {
            projects: []
          }
  }
  getMusic(){
    $.ajax({
      url: "http://ws.audioscrobbler.com/2.0/?method=album.search&album=believe&api_key=d277c98d781db842460b5c4b3c361349&format=json",
      dataType: "json",
      cache: false,
      success: function(data) {this.props.store.music = data.results.albummatches.album; }.bind(this),
      error:function(xhr, status, err){console.log(err)}
    });
  }
  // The mapping function above is here different than before since it is a dictionary, hence: data.results.albummatches.album !!!

  componentDidMount(){
    if (this.props.store.music.length < 1) {
    this.getMusic();
    }
  }

  render() {
      return (
          <Grid>
            <Panel>
              <MusicList music={this.props.store.music} />
            </Panel>
          </Grid>


          );
        }
})

export default Music;
