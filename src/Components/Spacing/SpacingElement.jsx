
import React from 'react';
import { CopyToClipBoard } from '../index'

export function SpacingElement( { name, spacing }) {

    return <div className="border flex flex-col justify-between">
        <div className="flex-grow">
                <div style={{height: spacing.value}} className="bg-zwave-300"></div>
        </div>

        <div className="m-sm">
            <CopyToClipBoard full text={name} bg="bg-zwave-300">
                <p> { name } </p>
                <p className="text-sm leading-sm text-gray-500"> { spacing.value } </p>
            </CopyToClipBoard>
        </div>
    </div>
};