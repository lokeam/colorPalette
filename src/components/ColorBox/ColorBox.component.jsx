import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.styles.scss';

class ColorBox extends Component {

  render() {
    const { name, background } = this.props;
    return (
      <CopyToClipboard text={ background }>
        <div style={{background: background }} className="colorBox">
          <div className="colorBox__copy-container">
            <div className="colorBox__content">
              <span>{ name }</span>
            </div>
            <button className="colorBox__copy-button">copy</button>
          </div>
          <span className="colorBox__see-more">More variants</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
