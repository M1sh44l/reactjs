import React, { Component } from 'react';
import logo from '../logo.svg';
import Apple from '../Images/Apple.png';


class ImageProject extends Component {
  render() {
      return (
        <div>
          <form>
            <img src={logo} alt="" />
            <img src="https://goo.gl/iPM1qU" alt="" />
            <img src={Apple} alt="" />
          </form>
        </div>
          );
        }
    }

export default ImageProject;
