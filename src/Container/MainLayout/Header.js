import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">TodoList</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/post/">Post</Link>
                        </NavItem>
                        &nbsp;
                        <NavItem>
                            <Link to="/complete/">Complete Todo</Link>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}