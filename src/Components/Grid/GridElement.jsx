
import React from 'react';
import { CopyToClipBoard } from '../index'

export function GridElement( { name, index, grid }) {

    // stop purge for now gap-sm gap-md gap-lg gap-xl

    return <div className={`border ${index >= 2 ? "col-span-2" : ""}`}>
        <div style={{gridTemplateColumns: `repeat(${grid.value}, minmax(0, 1fr))`}} className={`grid gap-${name} bg-white`}>
            {
                [...new Array(parseInt(grid.value))].map((e, index) => (
                    <div className="bg-zigbee-300 h-2xl" key={index}></div>
                ))
            }
        </div>
        <div className="m-sm">
            <CopyToClipBoard text={`grid grid-col-${name} gap-${name}`} bg="bg-zigbee-300">
                <p> { name } </p>
                <p className="text-sm leading-sm text-gray-500"> { grid.value } </p>
            </CopyToClipBoard>
        </div>
    </div>
};