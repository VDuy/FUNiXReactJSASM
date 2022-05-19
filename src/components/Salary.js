import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const basicSalary = 3000000;
const hourSalary = 200000 / 8;

function RenderSalary({ salary }) {
    return (
        <Card>
            <CardTitle className="p-3 bg-white rounded m-2">
                {salary.name}
            </CardTitle>
            <CardBody>
                <CardText>Mã nhân viên: {salary.id} </CardText>
                <CardText>Mã số lương: {salary.salaryScale} </CardText>
                <CardText>Số giờ làm thêm: {salary.overTime} </CardText>
                <CardText className="bg-light p-2 shadow" >Lương:{" "}
                    {(salary.salaryScale * basicSalary + salary.overTime * hourSalary)
                        .toFixed(0)}
                </CardText>
            </CardBody>
        </Card>
    );
}

const Salary = (props) => {
    const salary = props.salarys.map((ss) => {
        // .sort( (a, b) => sortSalary ? a.salaryScale - b.salaryScale : b.salaryScale - a.salaryScale)

        return (
            <div className="col-12 col-md-6 col-lg-4 mt-2 md-2" key={ss.id}>
                <RenderSalary salary={ss} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/staff" >Nhân viên</Link>
                    </BreadcrumbItem >
                    <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
                </Breadcrumb>
              {salary}
                

            </div>
        </div>
    )
}
export default Salary;