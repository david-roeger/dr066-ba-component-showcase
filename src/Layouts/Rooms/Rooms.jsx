import React from 'react';

import { Text, Card } from 'dr066-ba-development-system'
import { DeviceElement } from '../../Components/index'

export function Rooms( { room }) {
    console.log(room)
    let overview = room.overview;
    let devices = room.devices;
    return <div className="flex flex-col gap-md p-sm mb-[48px] md:p-md lg:mb-0 lg:p-lg lg:pl-0 xl:p-xl xl:pl-0">
        <Text size="xl">
            Räume
        </Text>
        <Card title="Übersicht">

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