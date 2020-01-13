import React from 'react';
import logo from './logo.svg';

import Palette from './Palette';
import baseColors from './baseColors';

import './App.css';

function App() {
  return (
    <div className="App">
      <Palette {...baseColors[6]}/>
    </div>
  );
}

export default App;
