import React from 'react'
import {Nav} from "react-bootstrap";
import { NavLink} from 'react-router-dom'
import styled from 'styled-components';



export default function Sidebar() {
    return (
        <>
            <Nav className="col-md-12 d-md-block bg-light flex-sm-column text-left">
            <div className="sidebar-sticky"></div>
                <Nav.Item className="col-xs-3">
                    <LinkElem to="/">Daily update</LinkElem >
                </Nav.Item>
                <Nav.Item className="col-xs-3">
                    <LinkElem to="/vaccinations">Vaccinations</LinkElem >
                </Nav.Item>
                <Nav.Item className="col-xs-3">
                    <LinkElem to="/cases">Cases</LinkElem >
                </Nav.Item>
                <Nav.Item className="col-xs-3">
                    <LinkElem to="/deaths">Deaths</LinkElem >
                </Nav.Item>
                
                
            </Nav>
        </>
    )
}

const LinkElem = styled(NavLink)`
    background: #f3f3f3;
    width: 100%;
    display: block;
    margin-bottom : 2px;
    padding: 8px 15px;
    text-decoration : none;
    color: #2e94e5;
    &.active {
        border-left: 4px solid #2e94e5;
    }
`;
