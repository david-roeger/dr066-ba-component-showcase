import React from 'react';

import { Text, Card, SystemIconContainer, SystemIcon, VideoElement } from 'dr066-ba-development-system'
import { DeviceElement, StateElement } from '../../Components/index'
import video from './camera.mp4'

export function Rooms( { room }) {
    console.log(room)
    let overviews = room.overviews;
    let devices = room.devices;
    let cameras = overviews.filter((o) => o.type === 'camera');
    console.log(cameras);

    function getOverviewChildren() {
        let children = [
            ...overviews.map((overview, index) => (
                <div key={index}>
                    <StateElement state={overview}>
                    </StateElement>
                </div>
            )),
            ...cameras.map((c, index) => (
                <VideoElement key={overviews.length + index} src={video} />
            ))
        ];
        console.log(children)
        return children
    }

    return <div className="flex flex-col gap-md p-sm pb-xl md:p-md lg:mb-0 lg:p-lg lg:pl-0 xl:p-xl xl:pl-0">
        <Text size="xl">
            {room.name}
        </Text>
        <Card title="Übersicht" col>
            {
                getOverviewChildren()
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