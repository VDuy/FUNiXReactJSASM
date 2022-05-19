import React, { Component } from "react";
import {
    Breadcrumb, BreadcrumbItem,
    Card,
    CardBody, CardImg, CardText, CardTitle
} from "reactstrap";

class RenderDepartment extends Component {
    render() {
        return (
            <Card>
                <CardTitle className="m-2">
                    {this.props.dept.name}
                </CardTitle>
                <CardBody>
                    <CardText >
                        Số lượng nhân viên: {this.props.dept.numberOfStaff}
                    </CardText>
                </CardBody>
            </Card>
        );
    }
}

function Department(props) {
    const departments = props.dept.map((department) => {
        return (
            <div className="col-12 col-md-6 col-lg-4 mt-2 md-2">
                <RenderDepartment dept={department} />
            </div>
        )
    })

    return (
        <div>
            <dv className="container">
                <div className="row shadow m-3">
                    {departments}
                </div>
            </dv>
        </div>
    )

} export default Department;