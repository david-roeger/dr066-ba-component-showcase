
import React from 'react';

import { StateIconContainer, StateIconLight, StateIconCamera, StateIconGarage, StateIconHeating, StateIconHumidity } from 'dr066-ba-development-system'
import { Text } from 'dr066-ba-development-system'

export function StateElement({ state, detail }) {
    function getStateIconTemplate(state) {
        switch (state.type) {
            case 'light':
                return getLightTemplate(state);
            case 'camera':
                return getCameraTemplate(state);
            case 'garage':
                return getGarageTemplate(state);
            case 'heating':
                return getHeatingTemplate(state);
            case 'humiditiy':
                return getHumidityTemplate(state)
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


    function getHeatingTemplate(state){
        let computed = scale(state.value, 8, 28, 0, 100);
        return  <StateIconContainer>
            <StateIconHeating state={computed}>
            </StateIconHeating>
        </StateIconContainer> 
    }

    function getHumidityTemplate(state){
        return  <StateIconContainer>
            <StateIconHumidity state={state.value}>
            </StateIconHumidity>
        </StateIconContainer> 
    }


    function scale (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }


    return (
    <section className="flex flex-col items-center">
        {
            detail && <p className="hidden md:block">
                <Text>{state.name}</Text>
            </p>
        }
        {getStateIconTemplate(state)}
        <p>
            <Text>{state.value}{state.unit}</Text>
        </p>
        {
            detail && <p>
                <Text colorClass="gray-500">{state.devices} {state.string}</Text>
            </p>
        }
        <p>
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