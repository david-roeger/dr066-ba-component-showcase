import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Navigation, NavIconButtonWrapper, NavIconButton, NavIcon, Text } from 'dr066-ba-development-system'

export const Nav = withRouter(({ location, history }) => {

    return (
        <Navigation>
            <NavIconButtonWrapper>
                <Link to={{pathname: location.pathname, search: "?popUp=true"}}>
                    <NavIconButton>
                        <NavIcon/>
                        <Text colorClass="white">
                            Zuhause
                        </Text>
                    </NavIconButton>
                </Link>
            </NavIconButtonWrapper>

            <NavIconButtonWrapper>
                <Link to={{pathname: location.pathname, search: "?popUp=true"}}>
                    <NavIconButton>
                        <NavIcon type="devices"/>
                        <Text colorClass="white">
                            Geräte
                        </Text>
                    </NavIconButton>
                </Link>
            </NavIconButtonWrapper>

            <NavIconButtonWrapper>
                <Link to="/rooms/">
                    <NavIconButton active>
                        <NavIcon type="rooms"/>
                        <Text colorClass="white">
                            Räume
                        </Text>
                    </NavIconButton>
                </Link>
            </NavIconButtonWrapper>

            <NavIconButtonWrapper>
                <Link to={{pathname: location.pathname, search: "?popUp=true"}}>
                    <NavIconButton>
                        <NavIcon type="automations"/>
                        <Text colorClass="white">
                            Szenen
                        </Text>
                    </NavIconButton>
                </Link>
            </NavIconButtonWrapper>

            <NavIconButtonWrapper>
                <Link to={{pathname: location.pathname, search: "?popUp=true"}}>
                    <NavIconButton>
                        <NavIcon type="homee"/>
                        <Text colorClass="white">
                            homee
                        </Text>
                    </NavIconButton>
                </Link>
            </NavIconButtonWrapper>
        </Navigation>
        )
})