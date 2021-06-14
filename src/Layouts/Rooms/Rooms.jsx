import React from 'react';

import { Text, Card } from 'dr066-ba-development-system'
import { DeviceElement, StateElement } from '../../Components/index'

export function Rooms( { room }) {
    console.log(room)
    let overviews = room.overviews;
    let devices = room.devices;
    return <div className="flex flex-col gap-md p-sm mb-[48px] md:p-md lg:mb-0 lg:p-lg lg:pl-0 xl:p-xl xl:pl-0">
        <Text size="xl">
            Räume
        </Text>
        <Card title="Übersicht" col>
            {
                overviews.map((overview, index) => (
                    <div key={index}>
                        <StateElement state={overview}>
                        </StateElement>
                    </div>
                ))
            }
        </Card>
        <Card title="Geräte">
            {
                devices.map((device, index) => (
                    <div key={index}>
                        <DeviceElement device={device}>
                        </DeviceElement>
                    </div>
                ))
            }
        </Card>
    </div>
}