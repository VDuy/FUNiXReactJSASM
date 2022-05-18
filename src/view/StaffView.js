import React, { useState } from 'react';
import StaffList from '../components/StaffListComponent';
import { STAFFS, DEPARTMENTS } from '../shared/staffs';
import '../App.css';
import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';
import { Route } from 'react-router-dom';

function StaffView() {
    const [staff, setStaff] = useState({
        mystaff: STAFFS,
        department: DEPARTMENTS
});

    return (
        <div>
            <Header></Header>
            <Route path="/staff" component={() => <StaffList mystaff={staff.mystaff}></StaffList>}></Route>
            <Footer></Footer>
        </div>
    )
}

export default StaffView;