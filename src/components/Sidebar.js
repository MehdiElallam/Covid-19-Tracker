import React from 'react'
import {Nav} from "react-bootstrap";
import { NavLink} from 'react-router-dom'
import styled from 'styled-components';



export default function Sidebar() {
    return (
        <>
            <Nav style={{height:'100vh'}} className="col-md-12 d-none d-md-block bg-light sidebar text-left"
                activeKey="/home" 
            >
            <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <LinkElem exact  to="/">Daily update</LinkElem >
                </Nav.Item>
                <Nav.Item>
                    <LinkElem to="/cases">Cases</LinkElem >
                </Nav.Item>
                <Nav.Item>
                    <LinkElem to="/deaths">Deaths</LinkElem >
                </Nav.Item>
                <Nav.Item>
                    <LinkElem to="/vaccinations">Vaccinations</LinkElem >
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
