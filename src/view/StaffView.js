import React, { useState } from 'react';
import { STAFFS, DEPARTMENTS } from '../shared/staffs';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Route, Routes } from 'react-router-dom';
import StaffList from '../components/StaffList';
import StaffDetail from '../components/StaffDetail';
import Department from '../components/Department';
import Salary from '../components/Salary';

function StaffView() {
    const [staff] = useState({
        staffs: STAFFS,
        department: DEPARTMENTS,

    });

    const StaffWithId = ({ match }) => {
        return (
            <StaffDetail staff={staff.staffs.filter(item =>
                item.id === parseInt(match.params.staff_id, 10))[0]}></StaffDetail>
        )
    }
    return (
        <div>
            <Header />
            <Routes>
                <Route
                    exact path="/staff"
                    element={() => <StaffList staffs={staff.staffs}></StaffList>}></Route>
                <Route path="/staff/:staff_id" element={StaffWithId}></Route>
                <Route path="/department/" element={<Department dept={staff.department} />}></Route>
                <Route path="/salary/" element={<Salary salarys={staff.staffs}></Salary>}></Route>
            </Routes>
            <Footer />
        </div>
    )
}

export default StaffView;