import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navigation.styles.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      format: "hex",
      open: false
    };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  };

  closeSnackbar() {
    this.setState({
      open: false
    })
  }

  handleFormatChange(e) {
    this.setState({
      format: e.target.value,
      open: true
    });
    this.props.handleChange(e.target.value);
  }

  render() {
    const { level, changeLevel, showColorSlider } = this.props;
    const { format } = this.state;
    return (
      <nav className="navigation">
        <div className="logo">
          <Link to="/">palette</Link>
        </div>
        { showColorSlider && (
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
        )}
        <div className="select-container">
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar anchorOrigin={{vertical: "bottom", horizontal:"left"}}
                  open={this.state.open}
                  autoHideDuration={3000}
                  message={<span id="message-id">Format Changed to {format.toUpperCase()} </span>}
                  ContentProps={{
                    "aria-describedby": "message-id"
                  }}
                  onClose={this.closeSnackbar}
                  action={[
                    <IconButton onClick={this.closeSnackbar}
                                color="inherit"
                                key="close"
                                aria-label="close">
                      <CloseIcon />
                    </IconButton>
                  ]}
        />
      </nav>
    );
  }
}

export default Navigation;
