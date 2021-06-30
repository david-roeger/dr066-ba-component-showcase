import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Grid } from "dr066-ba-development-system";

import { Home, Gallery } from "./Layouts/index";
import { Nav } from "./Components/index";

function App() {
  return (
    <BrowserRouter>
      <div className='font-inter'>
        <div className='max-h-screen h-full overflow-y-auto'>
          <Grid full>
            <Nav></Nav>
            <div className='col-start-1 col-span-2 md:col-span-4 lg:col-span-5 xl:col-span-6'>
              <Switch>
                <Route exact path='/' render={() => <Home></Home>} />
                <Route
                  exact
                  path='/gallery'
                  render={() => <Gallery></Gallery>}
                />
                <Redirect from='/' to='/' />
              </Switch>
            </div>
          </Grid>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
