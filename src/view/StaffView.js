import React, { Component } from 'react';
import { STAFFS, DEPARTMENTS } from '../shared/staffs';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Route, Routes } from 'react-router-dom';
import StaffList from '../components/StaffList';
import StaffDetail from '../components/StaffDetail';
import Department from '../components/Department';
import Salary from '../components/Salary';

class StaffView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            department: DEPARTMENTS,

        }
    };
    render() {
        const StaffWithId = ({ match }) => {
            return (
                <StaffDetail staff={this.state.staffs.filter(item =>
                    item.id === parseInt(match.params.staff_id, 10))[0]}></StaffDetail>
            )
        }
        return (
            <div>
                <Header />
                <div>
                    <Routes>
                        <Route index path="/staff"
                            element={<StaffList staffs={this.state.staffs}></StaffList>}></Route>
                        <Route path="/staff/:staff_id" element={StaffWithId}></Route>
                        <Route path="/department/" element={<Department dept={this.state.department} />}></Route>
                        <Route path="/salary/" element={<Salary salarys={this.state.staffs}></Salary>}></Route>
                    </Routes>
                </div>
                <Footer />
            </div>
        )
    }
}
export default StaffView;