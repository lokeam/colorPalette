import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './pages/Palette/Palette';
import PaletteList from './pages/Palette/PaletteList';
import SingleColorPalette from "./pages/SingleColorPalette/SingleColorPalette.component";

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
        <Route exact path="/"
                     render={ routeProps => (
                       <PaletteList palettes={ baseColors } {...routeProps} />
                      )}
        />
        <Route exact path="/palette/:id"
               render={ routeProps => (
                 <Palette
                   palette={generatePalette(
                     this.findColorPalette(routeProps.match.params.id)
                   )}
                  />
               )}
        /> 
        <Route exact path="/palette/:paletteId/:colorId"
               render={ routeProps => (
                <SingleColorPalette
                  colorId={routeProps.match.params.colorId}
                  palette={generatePalette(
                    this.findColorPalette(routeProps.match.params.paletteId)
                  )}
                 />
              )}
        />
      </Switch>
    );
  }
}

export default App;
