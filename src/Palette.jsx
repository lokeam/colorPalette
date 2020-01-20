import React, { Component } from 'react';
import ColorBox from './components/ColorBox/ColorBox.component';
import Navigation from './components/Nav/Navigation.component';
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
      <ColorBox background={color.hex} name={color.id}/>
    ));
    return(
       <div className="palette">
         <Navigation level={level} changeLevel={this.changeLevel}/>
         <div className="palette__colors">
           { ColorBoxes }
         </div>
         <div className="palette__footer">footer</div>
       </div>
    );
  }
};

export default Palette;