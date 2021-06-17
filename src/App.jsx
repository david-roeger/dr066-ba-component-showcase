import React from 'react';
import {BrowserRouter, Route, Redirect, Switch, } from 'react-router-dom';
import { Grid, Navigation, NavIconButton, NavIcon, Text, VideoElement } from 'dr066-ba-development-system';

import { Rooms, RoomDetail, PopUp } from './Layouts/index'

import d from './Utils/Data'

function App() {
  const data  = d;
  console.log(data);
  return (
      <BrowserRouter>
        <div className="font-inter">
          <div className="max-h-screen h-full overflow-y-auto">
            <Grid full>
              <Navigation>
                <NavIconButton target="home">
                  <NavIcon/>
                  <Text colorClass="white">
                    Zuhause
                  </Text>
                </NavIconButton>
                <NavIconButton target="/devices">
                  <NavIcon type="devices" />
                  <Text colorClass="white">
                    Geräte
                  </Text>
                </NavIconButton>
                <NavIconButton target="/rooms/" active>
                  <NavIcon type="rooms" />
                  <Text colorClass="white">
                    Räume
                  </Text>
                </NavIconButton>
                <NavIconButton target="/automations">
                  <NavIcon type="automations" />
                  <Text colorClass="white">
                    Szenen
                  </Text>
                </NavIconButton>
                <NavIconButton target="/homee">
                  <NavIcon type="homee" />
                  <Text colorClass="white">
                    homee
                  </Text>
                </NavIconButton>
              </Navigation>
              
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
                  <Redirect from='/' to="/rooms/?popUp=true" />
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


