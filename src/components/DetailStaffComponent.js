import React, { Component } from "react";
import dateFormat from 'dateformat';
import { Card, CardImg, CardText } from "reactstrap";
import '../App.css';
class DetailStaffComponent extends Component {

    renderDetail(staff) {
        if (staff != null) {
            return (
                <div>
                    <Card className="staff-detail">
                        <h5>Họ và tên: {staff.name}</h5>
                        <CardImg width="100%" src={staff.image}></CardImg>
                        <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                        <CardText>Phòng ban: {staff.department.name}</CardText>
                        <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                        <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                    </Card>
                </div>
            );
        } else {
            return <div></div>
        }
    }
    render() {
        if (this.props.staff != null) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderDetail(this.props.staff)}
                    </div>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}
export default DetailStaffComponent;