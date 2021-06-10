
import React, { useState } from 'react';

import './index.css'
export function CopyToClipBoard( { text, full, bg, children } ) {
    const [success, setSuccess] = useState(false);

    function copy() {
        navigator.clipboard.writeText(text).then(function() {
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);   
            }, 400);
          }, function(err) {
            console.error('Async: Could not copy text: ', err);
          });
    }
    return <div className={`cursor-pointer ${full ? 'h-full' : ''}`} onClick={copy}>
        <div className="grid grid-cols-1 grid-rows-1">
            <div className={`${success ? 'custom-animation' : 'opacity-0'} w-xl h-xl ml-auto rounded-full ${bg} row-start-1 col-start-1`}></div>
            <div className="row-start-1 col-start-1 relative">
                { children }
            </div>
        </div>
    </div>
};

CopyToClipBoard.defaultProps = {
    text: '',
    full: false,
    bg: 'bg-pink-700'
};  