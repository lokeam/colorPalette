import React from 'react';
import './MiniPalette.styles.scss';

function MiniPalette(props) {
  const { paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map(color => (
    <div className="minipalette__minicolorbox"
         style={{backgroundColor: color.color}}
         key={color.name}
    ></div>
  ));

  return (
    <div className="minipalette" onClick={props.handleClick}>
      <div className="minipalette__colors">
        { miniColorBoxes }
      </div>
      <h5 className="minipalette__title">{ paletteName }
        <span className="minipalette__emoji">{emoji}</span>
      </h5>
    </div>
  );
}

export default MiniPalette;