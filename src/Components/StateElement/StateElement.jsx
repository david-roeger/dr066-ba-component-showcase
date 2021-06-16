
import React from 'react';

import { StateIconContainer, StateIconLight, StateIconCamera, StateIconGarage, StateIconHeating, StateIconHumidity } from 'dr066-ba-development-system'
import { Text } from 'dr066-ba-development-system'

export function StateElement({ state }) {
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
    <section className="flex flex-col items-center">
        <p className="hidden w-full md:block">
            <Text>{state.name}</Text>
        </p>
        {getStateIconTemplate(state)}
        <p className="w-full">
            <Text>{state.value}{state.unit}</Text>
        </p>
        <p className="w-full">
            <Text colorClass="gray-500">{state.devices} {state.string}</Text>
        </p>
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