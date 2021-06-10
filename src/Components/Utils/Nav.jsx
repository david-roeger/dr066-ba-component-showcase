
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../index' 

let navConfig = [
    {
        name: 'Start',
        route: '/',
        color: 'bg-gray-500 text-white'
    },
    {
        name: 'Color',
        route: '/color',
        color: 'bg-yellow-500'
    },
    {
        name: 'Font',
        route: '/font',
        color: 'bg-gray-100'
    },
    {
        name: 'Spacing',
        route: '/spacing',
        color: 'bg-zwave-300'
    },
    {
        name: 'Border',
        route: '/border',
        color: 'bg-enocean-300'
    },
    {
        name: 'Grid',
        route: '/grid',
        color: 'bg-zigbee-300'
    },
    {
        name: 'Breakpoint',
        route: '/breakpoint',
        color: 'bg-pink-300'
    },
    {
        name: 'Overview',
        route: '/overview',
        color: 'bg-gray-500 text-white'
    }
]
export function Nav() {
    let location = useLocation();
    
    return <Container>
        <nav>
            <ul className="flex flex-wrap gap-x-md gap-y-sm">
                {
                    navConfig.map((item, index) => (
                        <Link to={item.route} key={index}>
                            <li className={`select-none py-xs px-sm cursor-pointer border border-black ${location.pathname === item.route ? item.color : ''}`}>
                                {item.name}
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </nav>
    </Container>
};
