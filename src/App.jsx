import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';

import Palette from './Palette';
import { generatePalette } from './helpers';
import baseColors from './baseColors';

import './App.css';

class App extends Component {
  findColorPalette(id) {
    return baseColors.find(function (palette) {
      return palette.id === id;
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={ () => <h1>Palette list here</h1> } />
        <Route exact path="/palette/:id"
               render={ routeProps => (
                 <Palette
                   palette={generatePalette(
                     this.findColorPalette(routeProps.match.params.id)
                   )}
                  />
               )}
        />
      </Switch>
      // <div className="App">
      //   <Palette palette={generatePalette(baseColors[6])}/>
      // </div>
    );
  }
}

export default App;
