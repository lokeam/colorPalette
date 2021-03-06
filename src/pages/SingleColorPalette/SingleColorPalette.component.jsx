import React, { Component } from 'react';
import Navigation from '../../components/Nav/Navigation.component';
import ColorBox from '../../components/ColorBox/ColorBox.component';
import { Link } from 'react-router-dom';
import PaletteFooter from '../../components/PaletteFooter/PaletteFooter.component';
import './SingleColorPalette.styles.scss';

class SingleColorPalette extends Component {
  constructor(props){
    super(props);

    this._shades = this.gatherColorShades(this.props.palette, this.props.colorId);
    this.state = {
      format: "hex"
    };
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeFormat(value){
    this.setState({
      format: value
    });
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
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const colorBoxes = this._shades.map( color => (
      <ColorBox key={color.name}
                name={color.name}
                background={color[format]}
                showLink={false} />
    ));

    return (
      <div className="singlecolorpalette palette">
        <Navigation handleChange={this.changeFormat}
                    showColorSlider={false}/>
        <div className="palette__colors">
          { colorBoxes }
          <div className="colorBox singlecolorpalette__goback ">
            <Link className="colorBox__back-button" to={`/palette/${id}`}>Go back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
