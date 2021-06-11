import React from 'react';
import { useLocation } from 'react-router-dom';

import { Text } from 'dr066-ba-development-system'
import { DeviceElement } from '../../Components/index'

export function Rooms() {
    console.log(useLocation().pathname);
    return <div>
        <Text size="xl">
            Räume
        </Text>
        <DeviceElement></DeviceElement>
    </div>
}