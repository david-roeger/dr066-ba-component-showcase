
import React from 'react';
import { Container, Description, ColorElement } from '../index'

export function ColorContainer( { description, colors } ) {
    return <Container>
        <h2 className="text-xl leading-xl mb-sm">Color</h2>
        { description && 
            <Description>
                <p>Kurzer Beschreibungstext</p>
            </Description>
        }
        <div className="grid 
            grid-cols-sm gap-sm 
            md:grid-cols-md md:gap-md 
            lg:grid-cols-lg lg:gap-lg
            xl:grid-cols-xl xl:gap-xl">
        { Object.keys(colors).map(color => (
            <ColorElement name={ color } color={ colors[color] } key={ color }></ColorElement>
        ))}
        </div>
    </Container>
};

ColorContainer.defaultProps = {
    description: true
};  