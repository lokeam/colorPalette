import React, { Component } from 'react';
import ColorBox from './components/ColorBox/ColorBox.component';
import Navigation from './components/Nav/Navigation.component';
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
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const ColorBoxes = colors[level].map( color => (
      <ColorBox background={color[format]} name={color.id}/>
    ));
    return(
       <div className="palette">
         <Navigation level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
         <div className="palette__colors">
           { ColorBoxes }
         </div>
         <div className="palette__footer">footer</div>
       </div>
    );
  }
};

export default Palette;