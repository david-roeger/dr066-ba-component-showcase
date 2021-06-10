
import React from 'react';
import { CopyToClipBoard, Container } from '../index'

export function BreakPointElement( { name, breakPoint, percent , index, length}) {

    return <div className="absolute w-full pointer-events-none">
        <Container alignedTop>
            <div style={{width: `${percent}%`}} className="border bg-white pointer-events-auto">
                <div style={{ height: `${40 + 58 * length - 58 * index}px`}} className="bg-pink-300"> </div>
                <div className="m-sm">
                    <CopyToClipBoard text={name} bg="bg-pink-300">
                        <p> { name } </p>
                        <p className="text-sm leading-sm text-gray-500"> { breakPoint.value }</p>
                    </CopyToClipBoard>
                </div>
            </div>
        </Container>
    </div>
};