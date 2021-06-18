import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Navigation, NavIconButtonWrapper, NavIconButton, NavIcon, Text } from 'dr066-ba-development-system'

export const Nav = withRouter(({ location, history }) => {

    return (
        <Navigation>
            <NavIconButtonWrapper>
                <Link to="/">
                    <NavIconButton active={location.pathname === "/"}>
                        <NavIcon/>
                        <Text colorClass="white">
                            Home
                        </Text>
                    </NavIconButton>
                </Link>
            </NavIconButtonWrapper>

            <NavIconButtonWrapper>
                <Link to="/gallery/">
                    <NavIconButton active={location.pathname === "/gallery/"}>
                        <NavIcon type="devices"/>
                        <Text colorClass="white">
                        Gallery
                        </Text>
                    </NavIconButton>
                </Link>
            </NavIconButtonWrapper>
        </Navigation>
        )
})