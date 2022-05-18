import React, { Component } from "react";

import dateFormat from 'dateformat';
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import '../App.css';
class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffList: null,
            columnDefault: "col-6 col-md-4 col-lg-2 mt-1"
        };
    }
    onStaffList(staff) {
        this.setState({ staffList: staff });
    }

    onColumnSelect(col) {
        this.setState({ columnDefault: col });
    }
    
    renderDetail(staff) {
        if (staff != null) {
            return (
                <div className="col-12">
                    <Card className="staff-detail">
                        <CardImg width="100%" src={staff.image} alt={staff.name}></CardImg>
                        <CardBody>
                            <CardTitle>Họ và tên: {staff.name}</CardTitle>
                            <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                            <CardText>Phòng ban: {staff.department.name}</CardText>
                            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                            <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return <div></div>
        }
    }

    render() {
        const stafflist = this.props.mystaff.map((staff) => {
            return (
                <div className={this.state.columnDefault}>
                    <Card className="text-center" key={staff.id} onClick={() => this.onStaffList(staff)}>
                        <CardImg width="100%" src={staff.image} alt={staff.name}></CardImg>
                        <CardTitle >
                            {staff.name}
                        </CardTitle>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="col m-3">
                    <button onClick={() => this.onColumnSelect("col-md-2 mt-1")}
                        className="btn btn-success mr-3">6 Cột</button>
                    <button onClick={() => this.onColumnSelect("col-md-3 mt-1")}
                        className="btn btn-success mr-3">4 Cột</button>
                    <button onClick={() => this.onColumnSelect("col-md-4 mt-1")}
                        className="btn btn-success mr-3">3 Cột</button>
                    <button onClick={() => this.onColumnSelect("col-md-6 mt-1")}
                        className="btn btn-success mr-3">2 Cột</button>
                    <button onClick={() => this.onColumnSelect("col-md-12 mt-1")}
                        className="btn btn-success mr-3">1 Cột</button>
                </div>

                <div className="row">{stafflist}</div>
                <p>Bấm vào tên nhân sự để xem thông tin</p>

                <div className="col-12 col-md-5 m-1">
                    {this.renderDetail(this.state.staffList)}
                </div>
            </div>
        );
    }
}

export default StaffList;