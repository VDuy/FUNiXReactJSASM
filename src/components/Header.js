import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import Jumbotron from 'react-bootstrap';
class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar dark expand color="primary">
                    <div className="container">
                        <NavbarToggler
                            onClick={this.toggleNav}
                        >
                        </NavbarToggler>
                        <NavbarBrand className="mr-auto" href="/" >
                            <img src='assets/images/logo.png'
                                height="30" width="41" alt='Quan ly nhan vien' />
                        </NavbarBrand>
                        <Collapse navbar isOpen={this.state.isNavOpen}    >
                            <Nav navbar>
                                <NavItem >
                                    <NavLink
                                        to="/staff"  className="nav-link ">
                                        <span className="fa fa-home fa-lg"></span> Nhân viên</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        to="/department" className="nav-link" >
                                        <span className="fa fa-info fa-lg"></span> Phòng Ban</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        to="/salary" className="nav-link" >
                                        <span className="fa fa-list fa-lg"></span> Bảng Lương</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;