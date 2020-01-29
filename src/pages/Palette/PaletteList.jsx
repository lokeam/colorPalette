import React, { Component } from 'react';
import MiniPalette from '../MiniPalette/MiniPalette.component';
import { Link } from 'react-router-dom';
import './PaletteList.styles.scss';

class PaletteList extends Component {

  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes } = this.props;
    return (
      <div className="palettelist">
        <div className="palettelist__container">
          <div className="palettelist__title">
            <h1>color palette</h1>
            <Link to="/palette/new">Create a New Palette</Link>
          </div>
          <div className="palettelist__minipalette-container">
            { palettes.map(palette => (
              <MiniPalette {...palette} handleClick={() => this.goToPalette(palette.id)}/>              
            )) }
        </div>
        </div>
      </div>
    );
  };

}

export default PaletteList;
