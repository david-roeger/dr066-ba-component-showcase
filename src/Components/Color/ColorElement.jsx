
import React from 'react';
import { CopyToClipBoard } from '../index'

export function ColorElement( { name, color }) {

    function RGBToHex(rgb) {
        // Choose correct separator
        let sep = rgb.indexOf(",") > -1 ? "," : " ";
        // Turn "rgb(r,g,b)" into [r,g,b]
        rgb = rgb.substr(5).split(")")[0].split(sep);
        
        let r = (+rgb[0]).toString(16),
            g = (+rgb[1]).toString(16),
            b = (+rgb[2]).toString(16);
        
        if (r.length == 1)
            r = "0" + r;
        if (g.length == 1)
            g = "0" + g;
        if (b.length == 1)
            b = "0" + b;
        
        return "#" + r + g + b;
        }

    return <div className="border">
        <div style={{ backgroundColor: color.value }} 
            className={`square ${RGBToHex(color.value) === "#ffffff" ? 'border-b' : ''}`}></div>
        <div className="p-sm">
            <CopyToClipBoard text={ name } bg="bg-yellow-500">
                    <p> { name } </p>
                    <p className="text-sm leading-sm text-gray-500"> { RGBToHex(color.value) } </p>        
            </CopyToClipBoard>
        </div>
    </div>
};
