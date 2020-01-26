import React, { Component } from 'react';
import ColorBox from '../../components/ColorBox/ColorBox.component';
import Navigation from '../../components/Nav/Navigation.component';
import PaletteFooter from '../../components/PaletteFooter/PaletteFooter.component';
import './Palette.styles.scss';

class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 500,
      format: "hex"
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    //console.log(level);
    this.setState({ level });
  }

  changeFormat(value){
    this.setState({
      format: value
    });
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const ColorBoxes = colors[level].map( color => (
      <ColorBox background={color[format]}
                name={color.id}
                key={color.id}
                moreUrl={`/palette/${id}/${color.id}`}
                showLink
      />
    ));
    return(
       <div className="palette">
         <Navigation level={level}
                     changeLevel={this.changeLevel}
                     handleChange={this.changeFormat}
                     showColorSlider />
          <div className="palette__colors">
           { ColorBoxes }
         </div>
         <PaletteFooter paletteName={paletteName} emoji={emoji}/>
       </div>
    );
  }
};

export default Palette;