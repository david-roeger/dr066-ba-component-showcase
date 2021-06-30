import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Grid, IconButton, Text } from "dr066-ba-development-system";

import { StateElementCard } from "../../Components/index";

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

function useCurrentWidth() {
  let [width, setWidth] = useState(getWidth());
  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth());
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return width;
}

export function Rooms({ rooms }) {
  let width = useCurrentWidth();
  let colCount = width >= 768 ? 2 : 1;
  console.log(width);
  return (
    <div className='flex flex-col gap-md p-sm pb-xl md:p-md lg:mb-0 lg:p-lg lg:pl-0 xl:p-xl xl:pl-0'>
      <div className='ml-sm'>
        <Text size='xl'>Räume</Text>
      </div>
      <Grid cols={colCount}>
        {rooms.map((room, index) => (
          <div key={index}>
            <StateElementCard devices={room.devices} title={room.name} />
            <div className='flex'>
              <div className='ml-auto'>
                <Link key={index} to={`/rooms/detail/${index}`}>
                  <IconButton type='next'>
                    {room.button} {room.name}
                  </IconButton>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Grid>
    </div>
  );
}
