import React, { Component } from 'react';
import MiniPalette from '../MiniPalette/MiniPalette.component';
import { Link } from 'react-router-dom';
import './PaletteList.styles.scss';

class PaletteList extends Component {

  render() {
    const { palettes } = this.props;
    return (
      <div className="palettelist">
        <div className="palettelist__container">
          <div className="palettelist__title">
            <h1>color palette</h1>
          </div>
          <div className="palettelist__minipalette-container">
            { palettes.map(palette => (
              <MiniPalette {...palette}/>
            )) }
        </div>
        </div>
      </div>
    );
  };

}

export default PaletteList;
