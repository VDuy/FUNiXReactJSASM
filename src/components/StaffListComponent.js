import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

import DetailStaffComponent from "./DetailStaffComponent";
import '../App.css';
class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffList: null
        }
    }

    onStaffList(staff) {
        this.setState({ staffList: staff });
    }

    render() {
        const staffs = this.props.mystaff.map((staff) => {
            return (
                <div className="col-12 col-md-6 col-lg-4 mt-2 ">
                    <Button variant="light" key={staff.id}
                        onClick={() => this.onStaffList(staff)}>
                        {staff.name}
                    </Button>

                </div>
            );
        });

        return (

            <div className="container">
                <div className="row">
                    {staffs}
                    <p>Bấm vào tên nhân sự để xem thông tin</p>
                </div>
                
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <DetailStaffComponent staff={this.state.staffList}></DetailStaffComponent>
                    </div>
                </div>
            </div>

        );
    }
}


export default StaffList;