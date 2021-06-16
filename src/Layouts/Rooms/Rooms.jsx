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

function getHeatingObj(heatings, thermostats) {
    const heatingObj = {
        type: 'heating',
        name: 'Temperatur',
        unit: '°C',
        string: 'An'
    }
    let deviceCount = 0;
    let value = 0;

    thermostats.forEach(thermostat => {
        value = thermostat.attributes[0].value;
    });
    heatings.forEach(heating => {
        if(heating.attributes[0].value) {
            deviceCount ++;
            value = heating.attributes[1].value;
        }
    });

    value = Math.min(28, Math.max(8, value))

    heatingObj.devices = deviceCount;
    heatingObj.value = Math.floor(value) || 0;

    return heatingObj;
}

function getHumiditytObj(humidities, windows) {
    const humidityObj = {
        type: 'humiditiy',
        name: 'Luftfeuchtigkeit',
        unit: '%',
        string: 'Offen'
    }
    let deviceCount = 0;
    let value = 0;
    humidities.forEach(humidity => {
        if(humidity.attributes[1].value) {
            deviceCount ++;
            value += humidity.attributes[1].value;
        }
    });

    humidityObj.devices = 0;
    humidityObj.value = Math.floor(value / deviceCount) || 0;

    return humidityObj;
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

    let lights = devices.filter((d) => (d.type === 'light' && d.disabled === false));
    if(lights.length) {
        overview.push(getLightObj(lights));
    }

    let heatings = devices.filter((d) => (d.type === 'heating' && d.disabled === false));
    let thermostats = devices.filter((d) => (d.type === 'thermostat' && d.disabled === false));
    if(heatings.length ||thermostats.length ) {
        overview.push(getHeatingObj(heatings, thermostats));
    }

    let humidities = devices.filter((d) => (d.type === 'thermostat' && d.disabled === false));
    let windows = devices.filter((d) => (d.type === 'window' && d.disabled === false));
    if(humidities.length ||windows.length ) {
        overview.push(getHumiditytObj(humidities, windows));
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
        console.log(device);
        if(index !== -1) {
            newRoom.devices[index] = device;
            if(device.type === 'heating') {
                let t = newRoom.devices.findIndex(d => d.type === 'thermostat');
                if(t !== -1) {
                    if(device.attributes[0].value) {
                        newRoom.devices[t].attributes[0].value = device.attributes[1].value;
                    } else {
                        newRoom.devices[t].attributes[0].value = 12;
                    }
                }
            }
        }
        setRoomState(newRoom);
        setOverviewState([...getOverview(newRoom.devices)]);
        forceUpdate();
    }


    return <div className="flex flex-col gap-md p-sm pb-xl md:p-md lg:mb-0 lg:p-lg lg:pl-0 xl:p-xl xl:pl-0">
        <div className="ml-sm">
            <Text size="xl">
                {roomState.name}
            </Text>
        </div>
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