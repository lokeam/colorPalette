import React, { Component } from 'react';
import ColorBox from './components/ColorBox/ColorBox.component';
import './Palette.styles.scss';


class Palette extends Component {
  render() {
    const ColorBoxes = this.props.colors.map( color => (
      <ColorBox background={color.color} name={color.name}/>
    ));
    return(
       <div className="palette">
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