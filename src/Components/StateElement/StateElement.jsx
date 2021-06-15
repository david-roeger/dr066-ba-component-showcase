
import React, { useState } from 'react';

import { StateIconContainer, StateIconLight, StateIconCamera, StateIconGarage, StateIconHeating, StateIconHumidity } from 'dr066-ba-development-system'
import { Text } from 'dr066-ba-development-system'

export function StateElement({ state }) {
    const [stateState, setstateState] = useState(state);

    function getStateIconTemplate(state) {
        switch (state.type) {
            case 'light':
                return getLightTemplate(state);
            case 'camera':
                return getCameraTemplate(state);
            case 'garage':
                return getGarageTemplate(state);
            default:
                break;
        }
    }

    function getLightTemplate(state){
        return  <StateIconContainer>
            <StateIconLight state={state.value}>
            </StateIconLight>
        </StateIconContainer> 
    }

    function getCameraTemplate(state){
        return  <StateIconContainer>
            <StateIconCamera state={state.value == 'An'}>
            </StateIconCamera>
        </StateIconContainer> 
    }

    function getGarageTemplate(state){
        return  <StateIconContainer>
            <StateIconGarage state={state.value}>
            </StateIconGarage>
        </StateIconContainer> 
    }


    return (
    <section className="flex flex-col items-center md:flex-row md:gap-sm">
        {getStateIconTemplate(stateState)}
        <div>
            <p className="hidden md:block">
                <Text>{stateState.name}</Text>
            </p>
            <p className="text-center md:text-left">
                <Text>{stateState.value}{stateState.unit}</Text>
            </p>
            <p>
                <Text colorClass="gray-500">{stateState.devices} {stateState.string}</Text>
            </p>
        </div>
    </section>)
};

StateElement.defaultProps = {
    state : {
        id: 0,
        type: '',
        name: '',
        value: 0,
        unit: '',
        devices: 0,
        string: ''
    }
};