import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import { Grid, Navigation, NavIconButton, NavIcon, Text, VideoElement } from 'dr066-ba-development-system';

import { Rooms, RoomDetail } from './Layouts/index'

import d from './Utils/Data'

function App() {
  const data  = d;
  console.log(data);
  return (
      <BrowserRouter>
        <div className="font-inter">
          <Grid full>
            <Navigation>
              <NavIconButton target="">
                <NavIcon/>
                <Text colorClass="white">
                  Zuhause
                </Text>
              </NavIconButton>
              <NavIconButton target="">
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
              <NavIconButton target="">
                <NavIcon type="automations" />
                <Text colorClass="white">
                  Szenen
                </Text>
              </NavIconButton>
              <NavIconButton target="">
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
                <Route exact path="/rooms/detail/:id" children={(props) => {
                    let id = props.match.params.id
                    return (
                        <RoomDetail room={data[id]}></RoomDetail>
                    )
                  }} 
                />

                </Switch>
              </div>
            </Grid>
        </div>
      </BrowserRouter>
  );
}
export default App


