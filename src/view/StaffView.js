import React, { useState } from 'react';
import { STAFFS, DEPARTMENTS } from '../shared/staffs';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Route, Switch } from 'react-router-dom';
import StaffList from '../components/StaffListComponent';
import StaffDetail from '../components/StaffDetail';

function StaffView() {
    const [staff, setStaff] = useState({
        staffs: STAFFS,
        department: DEPARTMENTS
    });

    const StaffWithId = ({ match }) => {
        return (
            <StaffDetail staff={staff.staffs.filter(item =>
                item.id === parseInt(match.params.staff_id, 10))[0]}></StaffDetail>
        )
    }
    return (
        <div>
            <Header></Header>
            <Switch>
                <Route exact path="/staff" component={() => <StaffList staffs={staff.staffs}></StaffList>}></Route>
                <Route path="/staff/:staff_id" component={StaffWithId}></Route>
            </Switch>
            <Footer></Footer>
        </div>
    )
}

export default StaffView;