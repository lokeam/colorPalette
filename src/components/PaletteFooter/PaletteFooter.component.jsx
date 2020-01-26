import React from 'react';

function PaletteFooter(props) {
  const { paletteName, emoji } = props;
  return (
    <footer className="palettefooter">
      {paletteName}
  <span className="palettefooter__emoji">{emoji}</span>
    </footer>
  );
}

export default PaletteFooter;