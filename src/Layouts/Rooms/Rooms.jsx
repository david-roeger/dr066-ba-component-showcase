import React, { useState } from 'react';
import { Link } from 'react-router-dom'
export function Rooms( { rooms }) {
    console.log(rooms);


    return (
        <div className="flex flex-col gap-md p-sm pb-xl md:p-md lg:mb-0 lg:p-lg lg:pl-0 xl:p-xl xl:pl-0">
        {
            rooms.map((room, index) => (
                <Link key={index} to={`/rooms/detail/${index}`}> Go to {index}</Link>
            ))
        }
        </div>
    )
}