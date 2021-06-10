
import React from 'react';
import { Container, Description, SpacingElement } from '../index'

export function SpacingContainer( { description, spacings } ) {

    return <Container>
       <h2 className="text-xl leading-xl mb-sm">Spacing</h2>
       { description && 
            <Description>
                <p>Kurzer Beschreibungstext</p>
            </Description>
        }
        <div className="grid
            grid-cols-sm gap-sm 
            md:grid-cols-md md:gap-md 
            lg:gap-lg xl:gap-xl">
            { Object.keys(spacings).map(spacing => (
                <SpacingElement name={ spacing } spacing={ spacings[spacing] } key={ spacing }></SpacingElement>
            ))}
        </div>
    </Container>
};

SpacingContainer.defaultProps = {
    description: true
};  