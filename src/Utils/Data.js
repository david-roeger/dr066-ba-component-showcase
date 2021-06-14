export default [
    {
        id: 0,
        type: 'room',
        overviews: [
            {
                id: 0,
                type: 'light',
                name: 'Helligkeit',
                value: 60,
                unit: '%',
                devices: 2,
                string: 'Lampe(n) an'
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
                name: 'Esstisch',
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
                state: true,
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
        ]
    }
]