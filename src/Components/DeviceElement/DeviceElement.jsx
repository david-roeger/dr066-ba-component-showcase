import React, { useState } from 'react';

import { Slider, SliderScala, SliderElement } from 'dr066-ba-development-system'
import { Toggle, ToggleScala, ToggleElement } from 'dr066-ba-development-system'
import { Value, ValueElement } from 'dr066-ba-development-system'
import { DeviceIconContainer, DeviceIcon } from 'dr066-ba-development-system'
import { SystemIconContainer, SystemIcon } from 'dr066-ba-development-system'
import { Text } from 'dr066-ba-development-system'

 
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}
export function DeviceElement({ device }) {
    const forceUpdate = useForceUpdate();

    const [deviceState, setDeviceState] = useState(device);
    function updateDeviceState(d) {
        setDeviceState(d);
        forceUpdate();
    }

    function getAttributeTemplate(attribute, d) {
        switch (attribute.type) {
            case 'toggle':
                return getToggleTemplate(attribute, d);
            case 'slider':
                return getSliderTemplate(attribute, d);
            case 'value':
                return getValueTemplate(attribute)
            case 'upDown':
                return getUpDownTemplate(attribute, d);
            default:
                break;
        }
    }

    function getSliderTemplate(attribute){
        return  <SliderElement attribute={attribute.name}>
            <SliderScala scala={attribute.scala} min={attribute.min} max={attribute.max}>
                <Slider colorClass={deviceState.cube} state={attribute.value} scala={attribute.scala} disabled={attribute.disabled} callback={(value) => updateAttributeValue(attribute, value)}/>
            </SliderScala>
        </SliderElement> 
    }

    function getToggleTemplate(attribute){
        return  <ToggleElement attribute={attribute.name}>
            <ToggleScala scala={attribute.scala}>
                <Toggle colorClass={deviceState.cube} state={attribute.value} scala={attribute.scala} disabled={attribute.disabled} callback={(value) => updateAttributeValue(attribute, value)}/>
            </ToggleScala>
        </ToggleElement> 
    }

    function getUpDownTemplate(attribute){
        return  <UpDownElement attribute={attribute.name} state={attribute.value} colorClass={deviceState.cube} callback={(value) => updateAttributeValue(attribute, value)}></UpDownElement> 
    }


    function getValueTemplate(attribute){
        return  <ValueElement attribute={attribute.name}>
            <Value state={`${attribute.value} ${attribute.unit}`} />
        </ValueElement>
    }

    function updateAttributeValue(attribute, value) {
        let index = deviceState.attributes.findIndex((a) => a.id == attribute.id);
        if(index != -1) {
            let  newState = Object.assign(deviceState);
            newState.attributes[index].value = value;

            switch (newState.type) {
                case 'light':
                case 'heating':
                    if(attribute.type === 'toggle') {
                        newState.state = value;
                        newState.attributes[1].disabled = !value;
                    }
                    break;
                case 'electricity':
                    if(attribute.type === 'toggle') {
                        newState.state = value;
                        if(value) {
                            newState.attributes[1].value = 12;
                        } else {
                            newState.attributes[1].value= 0;
                        } 
                    }
                    break;
                default:
                    break;
            }
            updateDeviceState(newState)
        };
    }

    return (
    <section className="flex">
        <div className="flex-grow border-l border-t border-b border-black rounded-l-sm flex p-sm gap-xs">
            <div className="my-auto">
                <DeviceIconContainer>
                    <DeviceIcon type={deviceState.type} colorClass={deviceState.disabled ? 'disabled' : deviceState.cube} outline={deviceState.state === false}/>
                </DeviceIconContainer>
            </div>
            <div className="flex-grow grid gap-xs">
                <Text colorClass={deviceState.cube}>{deviceState.name}</Text>
                {deviceState.attributes.map((attribute) => (
                <div key={attribute.id}>
                    {getAttributeTemplate(attribute, deviceState)}
                </div>
            ))}
            </div>
        </div>
        <div className="bg-gray-300 border border-black rounded-r-sm flex">
            <div className="my-auto">
                <SystemIconContainer>
                    <SystemIcon type="next"/>
                </SystemIconContainer>
            </div>
        </div>
    </section>)
};

DeviceElement.defaultProps = {
    device: {
        id: 0,
        type: '',
        name: '',
        cube: '',
        attributes: [ 
        ]
    }
};