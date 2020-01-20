import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navigation.styles.scss';

class Navigation extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <nav className="navigation">
        <div className="logo">
          <a href="#">color palette</a>
        </div>
        <div className="slider-container">
            <span>Level: {level}</span>
            <div className="slider">
              <Slider defaultValue={level}
                min={100}
                max={900}
                step={100 }
                onAfterChange={changeLevel}
              />
            </div>
          </div>
      </nav>
    );
  }
}

export default Navigation;
