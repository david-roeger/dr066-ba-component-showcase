import React, { useState } from 'react';

import { Text, Card, SystemIconContainer, SystemIcon, VideoElement } from 'dr066-ba-development-system'
import { DeviceElement, StateElement } from '../../Components/index'
import video from './camera.mp4'

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

function getLightObj(lights) {
    const lightObj = {
        type: 'light',
        name: 'Helligkeit',
        unit: '%',
        string: 'An'
    }
    let deviceCount = 0;
    let value = 0;
    lights.forEach(light => {
        if(light.attributes[0].value) {
            deviceCount ++;
            value += light.attributes[1].value;
        }
    });
    lightObj.devices = deviceCount;
    lightObj.value = Math.floor(value / deviceCount) || 0;

    return lightObj;
}

function getOverview(devices) {
    const overview = [];
    /*...cameras.map((c, index) => (
        <VideoElement key={overviewState.length + index} src={video} />
    ))*/

    /*
    overviews: [
            {
                id: 0,
                type: 'garage',
                name: 'Garage',
                value: 0,
                unit: '%',
                devices: 0,
                string: 'offen'
            },
            {
                id: 1,
                type: 'camera',
                name: 'Kamera',
                value: 'An',
                devices: 1,
                string: 'An'
            },
        ], 

    */
    let lights = devices.filter((d) => (d.type === 'light' && d.disabled === false));
    
    if(lights.length) {
        overview.push(getLightObj(lights));
    }
    return overview
}

export function Rooms( { room }) {
    const forceUpdate = useForceUpdate();
    const [roomState, setRoomState] = useState(room);

    let devices = roomState.devices;

    const [overviewState, setOverviewState] = useState(getOverview(devices))

    let overviews = overviewState;
    function updateDevice(device) {
        let newRoom = Object.assign(roomState);
        let index = newRoom.devices.findIndex(d => d.id === device?.id)
        if(index !== -1) {
            newRoom.devices[index] = device;
        }
        setRoomState(newRoom);
        setOverviewState([...getOverview(newRoom.devices)]);
        forceUpdate();
    }


    return <div className="flex flex-col gap-md p-sm pb-xl md:p-md lg:mb-0 lg:p-lg lg:pl-0 xl:p-xl xl:pl-0">
        <Text size="xl">
            {roomState.name}
        </Text>
        <Card title="Übersicht" col>
            {
                overviewState.map((overview, index) => (
                    <div key={index}>
                        {
                            console.log(overview)
                        }
                        <StateElement state={overview}></StateElement>
                    </div>
                ))
            }
        </Card>
        <Card title="Geräte">
            {
                devices.map((device, index) => (
                    <div key={index}>
                        <DeviceElement device={device} callback={(d) => updateDevice(d)}>
                        </DeviceElement>
                    </div>
                ))
            }
        </Card>
    </div>
}