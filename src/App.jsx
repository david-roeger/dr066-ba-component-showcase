import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Nav, ColorContainer, FontContainer, SpacingContainer, GridContainer, BorderContainer, BreakPointContainer } from './Components/index'
import { Index } from './Layouts/index'
import tokens from 'dr066-ba-design-token-builder/web'

let colors = tokens.colors;
let fonts = tokens.font;
let spacings = tokens.spacing;
let borders = tokens.borders;
let grids = tokens.grid;
let breakPoints = tokens.breakPoints;


function App() {
  
  return (
      <BrowserRouter>
        <div className="font-inter">
          <Nav></Nav>
          <Switch>
              <Route exact path="/" render={() => <Index />} />
              <Route path="/color" render={() => <ColorContainer colors={colors} /> } />
              <Route path="/font" render={() =>  <FontContainer fonts={fonts} />} />
              <Route path="/spacing" render={() => <SpacingContainer spacings={spacings}></SpacingContainer>} />
              <Route path="/border" render={() =>   <BorderContainer borders={borders} />} />
              <Route path="/grid" render={() =>   <GridContainer grids={grids} />} />
              <Route path="/breakpoint" render={() =>   <BreakPointContainer vertical breakPoints={breakPoints} />} />
              <Route path="/overview" render={() => <OverviewRoute />} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

const OverviewRoute = () => (
  <div>
      <ColorContainer description={false} colors={colors}></ColorContainer>
      <FontContainer description={false} fonts={fonts}></FontContainer>
      <SpacingContainer description={false} spacings={spacings}></SpacingContainer>
      <BorderContainer description={false} borders={borders}></BorderContainer>
      <GridContainer description={false} grids={grids}></GridContainer>
      <BreakPointContainer description={false} breakPoints={breakPoints}></BreakPointContainer>
  </div>
)

export default App


