import React from 'react';
import logo from './logo.svg';

import Palette from './Palette';
import { generatePalette } from './helpers';
import baseColors from './baseColors';

import './App.css';

function App() {
  console.log(generatePalette(baseColors[4]));
  return (
    <div className="App">
      <Palette palette={generatePalette(baseColors[6])}/>
    </div>
  );
}

export default App;
