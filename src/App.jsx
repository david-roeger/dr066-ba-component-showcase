import React from 'react';
import {BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import { Grid, Navigation, NavIconButton, NavIcon, Text, VideoElement } from 'dr066-ba-development-system';

import { Rooms, RoomDetail, PopUp } from './Layouts/index'
import { Nav } from './Components/index' 
import d from './Utils/Data'

function App() {
  const data  = d;
  console.log(data);
  return (
      <BrowserRouter>
        <div className="font-inter">
          <div className="max-h-screen h-full overflow-y-auto">
            <Grid full>
              <Nav></Nav>
              <div className="col-start-1 col-span-2 md:col-span-4 lg:col-span-5 xl:col-span-6">
                <Switch>
                  <Redirect exact from='/' to="/rooms/" />
                  <Redirect exact from='/rooms/detail/' to="/rooms/detail/0" />
                  <Route exact path="/rooms/" render={() => <Rooms rooms={data}></Rooms> }/>
                  <Route exact path="/rooms/detail/:id/" children={(props) => {
                      let id = props.match.params.id
                      return (
                          <RoomDetail room={data[id]}></RoomDetail>
                      )
                    }} 
                  />
                  <Redirect from='/rooms/detail/:id/' to="/rooms/detail/:id/?popUp=true" />
                  <Redirect from='/' to="/rooms/" />
                  </Switch>
                </div>
              </Grid>
          </div>
          
          <PopUp>
          </PopUp>
        </div>
      </BrowserRouter>
  );
}
export default App


