import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Home, Rooms} from './Layouts/index'


function App() {
  
  return (
      <BrowserRouter>
        <div className="font-inter">
          <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route path="/rooms" render={() => <Rooms /> } />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App


