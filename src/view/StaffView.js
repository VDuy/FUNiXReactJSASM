import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from '../components/StaffListComponent';
import { STAFFS } from '../shared/staffs';
import '../App.css';
import Header from '../components/HeaderComponent';
class StaffView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mystaff: STAFFS
        };
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand >Ứng dụng quản lý nhân viên v1.0</NavbarBrand>
                    </div>
                    <Header></Header>
                </Navbar>
                <StaffList mystaff={this.state.mystaff} />
            </div>
        )
    }
}
export default StaffView;