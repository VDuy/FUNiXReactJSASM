import React from "react"
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';
function Header() {
  
    return (
        <div>
            <Navbar dark expand color="primary">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                    <Nav justified>
                        <NavbarBrand className="mr-auto" href="/" >
                            <img src='assets/images/logo.png'
                                height="30" width="41" alt='Quan ly nhan vien' />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen}></Collapse>
                        <NavItem className="white-text">
                            <NavLink 
                                className="nav-link " to="/staff">
                                <span className="fa fa-home fa-lg"></span> Nhân viên</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                className="nav-link" to='/department'>
                                <span className="fa fa-info fa-lg"></span> Phòng Ban</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                className="nav-link" to='/salary'>
                                <span className="fa fa-list fa-lg"></span> Bảng Lương</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        </div>
    )
}

export default Header;