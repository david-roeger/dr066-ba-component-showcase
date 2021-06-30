import React from "react";
import { useHistory } from "react-router-dom";

import { Grid, Card, IconButton, Text } from "dr066-ba-development-system";

export function Home() {
  const history = useHistory();
  const callback = () => history.push("/gallery/");

  return (
    <div className='flex flex-col gap-md p-sm pb-xl md:p-md lg:mb-0 lg:p-lg lg:pl-0 xl:p-xl xl:pl-0'>
      <Text size='xl'>Home</Text>
      <Text>
        Das ist eine (fast) leere App, welche als Template für neue Apps genutzt
        werden kann.
      </Text>
      <Grid cols={1}>
        <Card title='Card Component'>
          <Text>🤯 Text</Text>
          <Text>🥰 Text</Text>
          <Text>💜 Text</Text>
          <Text>👀 Text</Text>
          <Text>🤥 Text</Text>
        </Card>
        <div className='flex items-center'>
          <Text>Button that links:</Text>
          <IconButton type='next' callback={callback}>
            Gallery
          </IconButton>
        </div>
      </Grid>
    </div>
  );
}
