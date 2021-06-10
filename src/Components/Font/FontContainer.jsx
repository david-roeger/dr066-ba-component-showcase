
import React from 'react';
import { Container, Description, FontElement } from '../index'

export function FontContainer( { description, fonts } ) {

    return <Container>
        <h2 className="text-xl leading-xl mb-sm">Typography</h2>
        { description && 
            <Description>
                <p>Kurzer Beschreibungstext</p>
            </Description>
        }
        <div className="grid gap-sm md:gap-md lg:gap-lg xl:gap-xl">
            { Object.keys(fonts).map(font => (
                <FontElement name={ font } font={ fonts[font] } key={ font }></FontElement>
            ))}
        </div>
    </Container>
};

FontContainer.defaultProps = {
    description: true
};  