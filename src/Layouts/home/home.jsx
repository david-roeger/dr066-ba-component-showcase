
import React from 'react';
import { Container, Description } from '../../Components/index'

import tokens from 'dr066-ba-design-token-builder/tokens';

export function Index() {
    let blob = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(tokens, null, 2));
    return <Container>
        <h2 className="text-2xl leading-2xl mb-sm">Design Token Documentation</h2> 
        <Description>
            <p>This Website can be used as a reference when building an App or Components using the Design System. The specifc value from each token can be copied to clipboard via a simple click.</p>
        </Description>
        <Description> 
            <p>Tokens are imported directly from the <a className="text-blue-500 hover:underline" href="https://git@github.com/david-roeger/dr066-ba-design-token-builder">Design Token Builder Projekt</a> and rendered dynamically.</p>
        </Description>
        <Description>
            <p className="underline pt-md pb-xs">Ideas for the future</p>
            <ul className="list-disc list-inside">
                <li>Add an Option to choose prefered Platform (iOS, Web, Andorid,..) - Change Token names, values and copy texts accordingly. Currently only Tailwind is supported</li>
                <li>Usability improvements (add Keyboard Shortcuts)</li>
                <li>Add an Option to run the token generation Process via Webhook / Github Actions</li>
                <li>Maybe include the token generation process in this project?</li>
            </ul>
        </Description>
        <div className="pt-md">
            <a className="mt-lg py-xs px-sm cursor-pointer border border-black bg-black text-white" href={blob} download="tokens.json">
                download Tokens
            </a>
        </div>

    </Container>
}