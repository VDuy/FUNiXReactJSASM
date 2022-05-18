import React from "react"
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';
function Header() {

    return (
        <div>
            <Navbar color="primary">
                <div className="container">
                    <Nav justified>
                        <NavbarBrand >
                            <img src='assets/images/logo.png'
                                height="30" width="41" alt='Quan ly nhan vien' />
                        </NavbarBrand>
                        <NavItem className="white-text">
                            <NavLink style={isActive => ({
                                color: isActive ? "lavender" : "white"
                            })} className="nav-link " to='/staff'>
                                <span className="fa fa-home fa-lg"></span> Nhân viên</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={isActive => ({
                                color: isActive ? "lavender" : "white"
                            })} className="nav-link" to='/department'>
                                <span className="fa fa-info fa-lg"></span> Phòng Ban</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={isActive => ({
                                color: isActive ? "lavender" : "white"
                            })} className="nav-link" to='/salary'>
                                <span className="fa fa-list fa-lg"></span> Bảng Lương</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        </div>
    )
}

export default Header;