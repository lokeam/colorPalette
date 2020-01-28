import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import './ColorBox.styles.scss';

class ColorBox extends Component {
  constructor(props) {
    super(props);

    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({copied: true}, () => {
      setTimeout( () => this.setState({ copied: false }), 1000 );
    });
  }


  render() {
    const { name, background, moreUrl, showLink } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.7;

    return (
      <CopyToClipboard text={ background } onCopy={ this.changeCopyState }>
        <div style={{background: background }}
             className="colorBox">
          <div style={{background}}
               className={`colorBox__overlay ${copied && `show`}`} />
          <div className={`colorBox__copy-msg ${copied && `show`}`}>
            <h1 className="colorBox__copy-msg-header">copied!</h1>
            <p className={isLightColor && "dark-text"}>{ this.props.background }</p>
          </div>
          <div className="colorBox__copy-container">
            <div className="colorBox__content">
    <span className={isDarkColor && "light-text"} >{ name }</span>
            </div>
            <button className={`colorBox__copy-button ${isLightColor && "dark-text"}`}>copy</button>
          </div>
          { showLink && (
            <Link to={moreUrl}
              onClick={(e) => e.stopPropagation()}>
              <span className={`colorBox__see-more ${isLightColor && "dark-text"}`}>More variants</span>          
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
