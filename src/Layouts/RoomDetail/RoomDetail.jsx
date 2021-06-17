import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { Text, Card } from 'dr066-ba-development-system'
import { DeviceElement, StateElementCard } from '../../Components/index'

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}


export function RoomDetail( { room }) {
    if(room == undefined) {
        return  <Redirect  to="/rooms/" />
    }
    const forceUpdate = useForceUpdate();
    const [roomState, setRoomState] = useState(room);

    let devices = roomState.devices;

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
        forceUpdate();
    }


    return <div className="flex flex-col gap-md p-sm pb-xl md:p-md lg:mb-0 lg:p-lg lg:pl-0 xl:p-xl xl:pl-0">
        <div className="ml-sm">
            <Text size="xl">
                {roomState.name}
            </Text>
        </div>
        <StateElementCard devices={devices}></StateElementCard>
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