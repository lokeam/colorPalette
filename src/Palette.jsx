import React, { Component } from 'react';
import ColorBox from './components/ColorBox/ColorBox.component';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import './Palette.styles.scss';


class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    //console.log(level);
    this.setState({ level });
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const ColorBoxes = colors[level].map( color => (
      <ColorBox background={color.hex} name={color.name}/>
    ));
    return(
       <div className="palette">
         <Slider defaultValue={level}
                 min={100}
                 max={900}
                 step={100 }
                 onAfterChange={this.changeLevel}
          />
         <div className="palette__navbar">navbar</div>
         <div className="palette__colors">
           { ColorBoxes }
         </div>
         <div className="palette__footer">footer</div>
       </div>
    );
  }
};

export default Palette;