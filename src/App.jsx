import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';

import { Grid, Navigation, NavIconButton, NavIcon, Text} from 'dr066-ba-development-system';

import { Home, Rooms} from './Layouts/index'


function App() {
  let current="./"
  return (
      <BrowserRouter>
        <div className="font-inter">
          <Grid full>
            <Navigation>
              <NavIconButton to="/" active={current == "/"}>
                <NavIcon/>
                <Text colorClass="white">
                  Zuhause
                </Text>
              </NavIconButton>
              <NavIconButton to="/rooms" active={current == "/rooms"}>
                <NavIcon type="rooms" />
                <Text colorClass="white">
                  Räume
                </Text>
              </NavIconButton>
            </Navigation>
            
            <div className="col-start-1 col-span-2 m-sm md:col-span-4 md:m-md lg:col-span-5 lg:m-lg lg:ml-0 xl:col-span-6 xl:m-xl xl:ml-0">
              <Switch>
                  <Route exact path="/" render={() => <Home />} />
                  <Route path="/rooms" render={() => <Rooms /> } />
              </Switch>
            </div>
          </Grid>
        </div>
      </BrowserRouter>
  );
}

export default App


