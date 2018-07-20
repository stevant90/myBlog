import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


export const Navigation = () => (

    <Navbar inverse collapseOnSelect fixedTop={true}>
        <Navbar.Header>
            <Navbar.Brand className='logo'>
                myBlog
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} href="#/">
                    Home
                </NavItem>
                <NavItem eventKey={2} href="#authors">
                    Authors
                </NavItem>
                <NavItem eventKey={2} href="#newPost">
                    Create post
                </NavItem>
                <NavItem eventKey={2} href="#about">
                    About
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);