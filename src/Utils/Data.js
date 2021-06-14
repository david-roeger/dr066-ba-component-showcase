export default [
    {
        id: 0,
        type: 'room',
        overviews: [
            {
                id: 0,
                type: 'light',
                name: 'Helligkeit',
                value: 80,
                unit: '%',
                devices: 2,
                string: 'Lampe(n) an'
            },
        ],   
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