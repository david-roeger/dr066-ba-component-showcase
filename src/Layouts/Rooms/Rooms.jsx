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


function getGarageObj(garages) {
    const garageObj = {
        type: 'garage',
        name: 'Garage',
        unit: '%',
        string: 'Offen'
    }
    let deviceCountOpen = 0;
    let deviceCountClosed = 0;
    let value = 0;
    garages.forEach(garage => {
        if(garage.attributes[0].value) {
            deviceCountOpen ++;
            value = 100
        } else {
            deviceCountClosed ++;
        }
    });

    if(!deviceCountOpen) {
        garageObj.devices = deviceCountClosed;
        garageObj.string = 'Zu'
    } else {
        garageObj.devices = deviceCountOpen;
    }
    garageObj.value = value;

    return garageObj;
}

function getCameraObj(cameras) {
    const cameraObj = {
        type: 'camera',
        name: 'Kamera',
        value: 'An',
        string: 'An'
    }
    let deviceCountOn = 0;
    let deviceCountOff = 0;
    let cameraStreams = 0;
    cameras.forEach(camera => {
        if(camera.attributes[0].value) {
            deviceCountOn ++;
            cameraStreams ++;
        } else {
            deviceCountOff ++;
        }
    });

    if(!deviceCountOn) {
        cameraObj.devices = deviceCountOff;
        cameraObj.value = 'Aus'
        cameraObj.string = 'Aus'
    } else {
        cameraObj.devices = deviceCountOn;
    }

    return { 
        cameraObj: cameraObj,
        cameraStreams: cameraStreams
     };
}
function getOverview(devices) {
    const overview = [];
    /*...cameras.map((c, index) => (
        <VideoElement key={overviewState.length + index} src={video} />
    ))*/

    /*
    overviews: [
            {
               
            },

        ], 

    */
    let lights = devices.filter((d) => (d.type === 'light' && d.disabled === false));
    if(lights.length) {
        overview.push(getLightObj(lights));
    }

    let garages = devices.filter((d) => (d.type === 'garage' && d.disabled === false));
    if(garages.length) {
        overview.push(getGarageObj(garages));
    }

    let cameras = devices.filter((d) => (d.type === 'camera' && d.disabled === false));
    if(cameras.length) {
        let c = getCameraObj(cameras)
        overview.push(c.cameraObj);
        for (let i = 0; i < c.cameraStreams; i++) {
            overview.push({type: video});
        }
        overview.push()
    }
    return overview
}

export function Rooms( { room }) {
    const forceUpdate = useForceUpdate();
    const [roomState, setRoomState] = useState(room);

    let devices = roomState.devices;

    const [overviewState, setOverviewState] = useState(getOverview(devices))

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
                    overview.type != video ?
                        <StateElement state={overview} key={index}></StateElement> :
                        <VideoElement key={index} src={video} />
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