import React from 'react';

import { Grid, Card, Text } from 'dr066-ba-development-system'

export function Gallery() {
    return (
        <div className="flex flex-col gap-md p-sm pb-xl md:p-md lg:mb-0 lg:p-lg lg:pl-0 xl:p-xl xl:pl-0">
            <div className="ml-sm">
                <Text size="xl">
                    Gallery
                </Text>
            </div>
            <Grid cols={1}>
              <Card col colCount={2} title="Another Card">
                  <div>
                    <img className="rounded-sm transform scale-x-[-1]" src="https://source.unsplash.com/jAou3JvwalM"/>
                  </div>

                  <div>
                    <img className="rounded-sm" src="https://source.unsplash.com/97tEm_VSHBs"/>
                  </div>

                  <div>
                    <img className="rounded-sm" src="https://source.unsplash.com/-iNq63c2vt8"/>
                  </div>

                  <div>
                    <img className="rounded-sm" src="https://source.unsplash.com/f-umZlxutDM"/>
                  </div>

                </Card>
                <Text size="sm">DDP <a className="hover:underline text-zigbee-500" href="https://unsplash.com/photos/jAou3JvwalM">@moino007</a></Text>
                <Text size="sm">Peter Ivey-Hansen <a className="hover:underline text-zwave-500" href="https://unsplash.com/photos/97tEm_VSHBs">@peteriveyphotography</a></Text>
                <Text size="sm">yogesh kumar <a className="hover:underline text-zwave-500" href="https://unsplash.com/photos/-iNq63c2vt8">@capturelove2</a></Text>
                <Text size="sm">Matt Flores <a className="hover:underline text-enocean-500" href="https://unsplash.com/photos/f-umZlxutDM">@matdflo</a></Text>
            </Grid>
        </div>
        
    )
}