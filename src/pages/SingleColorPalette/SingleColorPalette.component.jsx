import React, { Component } from 'react';
import ColorBox from '../../components/ColorBox/ColorBox.component';

class SingleColorPalette extends Component {
  constructor(props){
    super(props);

    this._shades = this.gatherColorShades(this.props.palette, this.props.colorId)
  }

  gatherColorShades(palette, colorToFilter) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter( color => color.id === colorToFilter)
      );
    }

    return shades.slice(1);
  }

  render() {
    const colorBoxes = this._shades.map( color => (
      <ColorBox key={color.id}
                name={color.name}
                background={color.hex}
                showLink={false} />
    ));

    return (
      <div className="palette">
        <h1>Single Color Palette</h1>
        <div className="palette__colors">
          { colorBoxes }
        </div>
      </div>
    );
  }
}

export default SingleColorPalette;
