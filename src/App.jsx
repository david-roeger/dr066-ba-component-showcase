import React from 'react';

import { Grid, Navigation, NavIconButton, NavIcon, Text} from 'dr066-ba-development-system';

import { Rooms } from './Layouts/index'


function App() {
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
              <NavIconButton target="./" active>
                <NavIcon type="rooms" />
                <Text colorClass="white">
                  Räume
                </Text>
              </NavIconButton>
            </Navigation>
            
            <div className="col-start-1 col-span-2 m-sm md:col-span-4 md:m-md lg:col-span-5 lg:m-lg lg:ml-0 xl:col-span-6 xl:m-xl xl:ml-0">
              <Rooms></Rooms>
            </div>
          </Grid>
        </div>
  );
}

export default App


