import React from 'react';
import './MiniPalette.styles.scss';

function MiniPalette(props) {
  const { paletteName, emoji } = props;
  return (
    <div className="minipalette">
      <div className="minipalette__colors"></div>
      <h5 className="minipalette__title">{ paletteName }
        <span className="minipalette__emoji">{emoji}</span>
      </h5>
    </div>
  );
}

export default MiniPalette;