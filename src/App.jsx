import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';

import Palette from './Palette';
import { generatePalette } from './helpers';
import baseColors from './baseColors';

import './App.css';

function App() {
  console.log(generatePalette(baseColors[4]));
  return (
    <Switch>
      <Route exact path="/" render={ () => <h1>Palette list here</h1> } />
      <Route exact path="/palette/:id" render={ () => <h1>Different palette</h1> }/>
    </Switch>

    // <div className="App">
    //   <Palette palette={generatePalette(baseColors[6])}/>
    // </div>
  );
}

export default App;
