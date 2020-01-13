import React, { Component } from 'react';
import './ColorBox.styles.scss';

class ColorBox extends Component {

  render() {
    return (
      <div style={{background: this.props.background}} className="colorBox">
        <span>{ this.props.name }</span>
        <div>more variants</div>
      </div>
    );
  }
}

export default ColorBox;
