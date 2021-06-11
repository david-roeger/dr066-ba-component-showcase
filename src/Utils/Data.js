export default [
    {
        id: 0,
        type: 'room',
        overview: ['light, heating'],   
        devices: [
            {
                id: 0,
                type: 'heating',
                name: 'Heizung',
                cube: 'zwave',
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
                        name: 'Soll-Temperatur',
                        value: 12,
                        min: 8,
                        max: 20,
                        scala: 'celsius',
                        disabled: false
                    }
                ]
            },
            {
                id: 0,
                type: 'heating',
                name: 'Heizung',
                cube: 'zwave',
                attributes: [ 
                    {
                        id: 1,
                        type: 'toggle',
                        name: 'Soll-Temperatur',
                        value: 12,
                        min: 8,
                        max: 20,
                        scala: 'celsius',
                        disabled: false
                    },
                    {
                        id: 0,
                        type: 'toggle',
                        name: 'Schalter',
                        value: 1,
                        scala: 'onOff',
                        disabled: false
                    }
                ]
            }
        ]
    }
]