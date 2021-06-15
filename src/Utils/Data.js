export default [
    {
        id: 0,
        type: 'room',
        name: 'Wohnzimmer',
        overviews: [
            {
                id: 0,
                type: 'light',
                name: 'Helligkeit',
                value: 60,
                unit: '%',
                devices: 2,
                string: 'an'
            },
        ],   
        devices: [
            {
                id: 0,
                state: true,
                type: 'light',
                name: 'Deckenlampe',
                cube: 'zigbee',
                disabled: false,
                attributes: [ 
                    {
                        id: 0,
                        type: 'toggle',
                        name: 'Schalter',
                        value: 1,
                        scala: 'onOff',
                        disabled: false
                    },
                    {
                        id: 1,
                        type: 'slider',
                        name: 'Helligkeit',
                        value: 80,
                        min: 0,
                        max: 100,
                        scala: 'percent',
                        disabled: false
                    }
                ]
            },
            {
                id: 1,
                state: true,
                type: 'light',
                name: 'Stehlampe',
                cube: 'zigbee',
                disabled: false,
                attributes: [ 
                    {
                        id: 0,
                        type: 'toggle',
                        name: 'Schalter',
                        value: 1,
                        scala: 'onOff',
                        disabled: false
                    },
                    {
                        id: 1,
                        type: 'slider',
                        name: 'Helligkeit',
                        value: 40,
                        min: 0,
                        max: 100,
                        scala: 'percent',
                        disabled: false
                    }
                ]
            },
            {
                id: 2,
                state: true,
                type: 'light',
                name: 'Lichterkette',
                cube: 'zigbee',
                disabled: true,
                attributes: [ 
                    {
                        id: 0,
                        type: 'toggle',
                        name: 'Schalter',
                        value: 0,
                        scala: 'onOff',
                        disabled: true
                    },
                    {
                        id: 1,
                        type: 'slider',
                        name: 'Helligkeit',
                        value: 40,
                        min: 0,
                        max: 100,
                        scala: 'percent',
                        disabled: true
                    }
                ]
            },
            {
                id: 3,
                state: false,
                type: 'heating',
                name: 'Heizung',
                cube: 'zwave',
                disabled: false,
                attributes: [ 
                    {
                        id: 0,
                        type: 'toggle',
                        name: 'Schalter',
                        value: 0,
                        scala: 'onOff',
                        disabled: false
                    },
                    {
                        id: 1,
                        type: 'slider',
                        name: 'Soll-Temperatur',
                        value: 12,
                        min: 8,
                        max: 20,
                        scala: 'celsius',
                        disabled: true
                    }
                ]
            },
            {
                id: 4,
                state: false,
                type: 'electricity',
                name: 'Stecker',
                cube: 'enocean',
                disabled: false,
                attributes: [ 
                    {
                        id: 0,
                        type: 'toggle',
                        name: 'Schalter',
                        value: 0,
                        scala: 'onOff',
                        disabled: false
                    },
                    {
                        id: 1,
                        type: 'value',
                        name: 'Verbrauch',
                        value: 0,
                        unit: 'kWh',
                    }
                ]
            },
            {
                id: 5,
                state: true,
                type: 'thermostat',
                name: 'Sensor',
                cube: 'zigbee',
                disabled: false,
                attributes: [ 
                    {
                        id: 0,
                        type: 'value',
                        name: 'Temperatur',
                        value: 12,
                        unit: '°C',
                    },
                    {
                        id: 1,
                        type: 'value',
                        name: 'Luftfeuchtigkeit',
                        value: 87,
                        unit: '%',
                    }
                ]
            },
            {
                id: 6,
                state: true,
                type: 'window',
                name: 'Fenster 1',
                cube: 'enocean',
                disabled: false,
                attributes: [ 
                    {
                        id: 0,
                        type: 'value',
                        name: 'Zustand',
                        value: 'geschlossen',
                        unit: '',
                    }
                ]
            },
            {
                id: 7,
                state: true,
                type: 'window',
                name: 'Fenster 2',
                cube: 'enocean',
                disabled: false,
                attributes: [ 
                    {
                        id: 0,
                        type: 'value',
                        name: 'Zustand',
                        value: 'geschlossen',
                        unit: '',
                    }
                ]
            },
        ]
    },
        {
            id: 1,
            type: 'room',
            name: 'Draußen',
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
                    string: 'an'
                },
            ],   
            devices: [
                {
                    id: 0,
                    state: true,
                    type: 'light',
                    name: 'Deckenlampe',
                    cube: 'zigbee',
                    disabled: false,
                    attributes: [ 
                        {
                            id: 0,
                            type: 'toggle',
                            name: 'Schalter',
                            value: 1,
                            scala: 'onOff',
                            disabled: false
                        },
                        {
                            id: 1,
                            type: 'slider',
                            name: 'Helligkeit',
                            value: 80,
                            min: 0,
                            max: 100,
                            scala: 'percent',
                            disabled: false
                        }
                    ]
                },
                {
                    id: 1,
                    state: true,
                    type: 'light',
                    name: 'Stehlampe',
                    cube: 'zigbee',
                    disabled: false,
                    attributes: [ 
                        {
                            id: 0,
                            type: 'toggle',
                            name: 'Schalter',
                            value: 1,
                            scala: 'onOff',
                            disabled: false
                        },
                        {
                            id: 1,
                            type: 'slider',
                            name: 'Helligkeit',
                            value: 40,
                            min: 0,
                            max: 100,
                            scala: 'percent',
                            disabled: false
                        }
                    ]
                },
                {
                    id: 2,
                    state: true,
                    type: 'light',
                    name: 'Lichterkette',
                    cube: 'zigbee',
                    disabled: true,
                    attributes: [ 
                        {
                            id: 0,
                            type: 'toggle',
                            name: 'Schalter',
                            value: 0,
                            scala: 'onOff',
                            disabled: true
                        },
                        {
                            id: 1,
                            type: 'slider',
                            name: 'Helligkeit',
                            value: 40,
                            min: 0,
                            max: 100,
                            scala: 'percent',
                            disabled: true
                        }
                    ]
                },
                {
                    id: 3,
                    state: false,
                    type: 'heating',
                    name: 'Heizung',
                    cube: 'zwave',
                    disabled: false,
                    attributes: [ 
                        {
                            id: 0,
                            type: 'toggle',
                            name: 'Schalter',
                            value: 0,
                            scala: 'onOff',
                            disabled: false
                        },
                        {
                            id: 1,
                            type: 'slider',
                            name: 'Soll-Temperatur',
                            value: 12,
                            min: 8,
                            max: 20,
                            scala: 'celsius',
                            disabled: true
                        }
                    ]
                },
                {
                    id: 4,
                    state: false,
                    type: 'electricity',
                    name: 'Stecker',
                    cube: 'enocean',
                    disabled: false,
                    attributes: [ 
                        {
                            id: 0,
                            type: 'toggle',
                            name: 'Schalter',
                            value: 0,
                            scala: 'onOff',
                            disabled: false
                        },
                        {
                            id: 1,
                            type: 'value',
                            name: 'Verbrauch',
                            value: 0,
                            unit: 'kWh',
                        }
                    ]
                },
                {
                    id: 5,
                    state: true,
                    type: 'thermostat',
                    name: 'Sensor',
                    cube: 'zigbee',
                    disabled: false,
                    attributes: [ 
                        {
                            id: 0,
                            type: 'value',
                            name: 'Temperatur',
                            value: 12,
                            unit: '°C',
                        },
                        {
                            id: 1,
                            type: 'value',
                            name: 'Luftfeuchtigkeit',
                            value: 87,
                            unit: '%',
                        }
                    ]
                },
                {
                    id: 6,
                    state: true,
                    type: 'window',
                    name: 'Fenster 1',
                    cube: 'enocean',
                    disabled: false,
                    attributes: [ 
                        {
                            id: 0,
                            type: 'value',
                            name: 'Zustand',
                            value: 'geschlossen',
                            unit: '',
                        }
                    ]
                },
                {
                    id: 7,
                    state: true,
                    type: 'window',
                    name: 'Fenster 2',
                    cube: 'enocean',
                    disabled: false,
                    attributes: [ 
                        {
                            id: 0,
                            type: 'value',
                            name: 'Zustand',
                            value: 'geschlossen',
                            unit: '',
                        }
                    ]
                },
            ]
        }
]