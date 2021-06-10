
import React from 'react';

export function Description( { children } ) {
    let c = []
    if(children && typeof children === 'object') {
        c.push(children);
    } else if(Array.isArray(children)) {
        c = [...children]
    }

    return <section className="pb-md max-w-[70ch]">
        {c.map((child, index) => (
            <div className="pb-xs last:pb-0" key={index}>
                { child }
            </div>
        ))}
    </section>
};

