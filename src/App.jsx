import React from 'react';

import { Grid, Navigation, NavIconButton, NavIcon, Text, VideoElement } from 'dr066-ba-development-system';

import { Rooms } from './Layouts/index'

import d from './Utils/Data'

function App() {
  const data  = [d[0]];

  console.log(data);
  return (
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
              <NavIconButton target="./" active>
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
              {
                data.map((room, index) => (
                  <div key={index}>
                      <Rooms room={room}>
                      </Rooms>
                    </div>
                ))
              }

            </div>
            </Grid>
        </div>
  );
}
export default App


