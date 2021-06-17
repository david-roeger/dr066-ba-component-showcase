export default [
    {
        id: 0,
        type: 'room',
        name: 'Wohnzimmer',
        button: 'Ab ins',
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
                        value: 18,
                        min: 8,
                        max: 28,
                        scala: 'celsius',
                        disabled: true
                    }
                ]
            },
            {
                id: 3,
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
                        value: 'Geschlossen',
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
                        value: 'Geschlossen',
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
            button: 'Auf nach',
            devices: [
                {
                    id: 0,
                    state: true,
                    type: 'garage',
                    name: 'Einfahrt',
                    cube: 'enocean',
                    disabled: false,
                    attributes: [ 
                        {
                            id: 0,
                            type: 'upDown',
                            name: 'Zustand',
                            value: 0,
                        }
                    ]
                },
                {
                    id: 1,
                    state: true,
                    type: 'camera',
                    name: 'Hof',
                    cube: 'zwave',
                    disabled: false,
                    attributes: [ 
                        {
                            id: 0,
                            type: 'toggle',
                            name: 'Zustand',
                            value: 1,
                            scala: 'onOff',
                            disabled: false
                        }
                    ]
                },
                {
                    id: 2,
                    state: false,
                    type: 'light',
                    name: 'Einfahrt',
                    cube: 'zigbee',
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
                            name: 'Helligkeit',
                            value: 50,
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
                    type: 'light',
                    name: 'Einfahrt 2',
                    cube: 'zigbee',
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
                            name: 'Helligkeit',
                            value: 50,
                            min: 0,
                            max: 100,
                            scala: 'percent',
                            disabled: true
                        }
                    ]
                },
                {
                    id: 4,
                    state: false,
                    type: 'light',
                    name: 'Einfahrt 3',
                    cube: 'zigbee',
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
                            name: 'Helligkeit',
                            value: 50,
                            min: 0,
                            max: 100,
                            scala: 'percent',
                            disabled: true
                        }
                    ]
                },
            ]
        }
]