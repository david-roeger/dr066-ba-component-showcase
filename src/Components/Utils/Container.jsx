
import React from 'react';

export function Container( { overflow, alignedTop, alignedBottom, children } ) {
    return <div className={
        `container mx-auto  px-sm md:p-md lg:p-lg xl:p-2xl py-xl 
            ${overflow? 'overflow-y-auto' : ''} 
            ${ alignedTop ? 'pt-0 md:pt-0 lg:pt-0 xl:pt-0' : '' }
            ${ alignedBottom ? 'pb-0 md:pb-0 lg:pb-0 xl:pb-0' : '' }
        `}>
       { children }
    </div>
};

