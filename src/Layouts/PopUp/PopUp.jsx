import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { Text, Card, Button } from 'dr066-ba-development-system'

export const PopUp = withRouter(({ location }) => {
    const query = new URLSearchParams(location.search)
    let showPopUp = false;
    for (const [key, value] of query) {
        console.log(key, value)
        if(key == "popUp" && value === "true") {
            showPopUp = true;
        }
    }
    console.log(location, showPopUp);
    return showPopUp && <div className="bg-gray-100 bg-opacity-90 backdrop-filter backdrop-blur w-full h-screen absolute top-0 z-[60] grid p-sm md:p-md lg:p-lg xl:p-xl">
        <div className=" mx-auto my-auto ">
            <Card title="Oooooops...">
                <Text>Diese Funktion ist leider nicht Verfügbar. Das ist immerhin nur ein Protoyp. 🤖</Text>
                <div className="flex">
                    <div className="mx-auto">
                        <Link to={location.pathname}>
                            <Button>Alles klar</Button>
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
       </div>
})