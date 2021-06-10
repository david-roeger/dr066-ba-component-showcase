
import React from 'react';
import { Container, Description, BorderElement } from '../index'

export function BorderContainer( { description, borders } ) {
    return <Container>
        <h2 className="text-xl leading-xl mb-sm">Border</h2>
        { description && 
            <Description>
                <p>Kurzer Beschreibungstext</p>
            </Description>
        }
        <div className="grid md:grid-cols-sm gap-sm md:gap-md lg:gap-lg xl:gap-xl">
            { Object.keys(borders).map((border) => (
                <BorderElement name={ border } border={ borders[border] } key={ border }></BorderElement>
            ))}
        </div>
    </Container>
};

BorderContainer.defaultProps = {
    description: true
};  