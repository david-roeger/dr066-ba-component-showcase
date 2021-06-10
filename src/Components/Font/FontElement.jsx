
import React from 'react';
import { CopyToClipBoard } from '../index'

export function FontElement( { name, font }) {
    let size = font.size.value;
    let lineHeight = font.lineheight.value;
    let family = font.family.value;

    return <div className="col-span-2 border">
        <div className="bg-white">
            <input onClick={(e) => e.stopPropagation()} style={{fontSize: size, fontFamily: family}} className="w-full bg-gray-100 focus:outline-none ring-black focus:ring p-sm" defaultValue="Lorem Ipsum"/>
            <div className="m-sm">
                <CopyToClipBoard text={`font-${family} text-${name} text-leading-${name}`} bg="bg-gray-300">
                    <p className="mt-xs">{ name }</p>
                    <p className="text-sm leading-sm text-gray-500"> { size } / { lineHeight } </p>
                    <p className="text-sm leading-sm text-gray-500">{ family }</p> 
                </CopyToClipBoard>
            </div>
        </div>
    </div>
};