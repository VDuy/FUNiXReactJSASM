import React, { Component } from "react";


import { Card, CardImg, CardTitle } from "reactstrap";
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
    render() {
        const stafflist = this.props.staffs.map((staff) => {
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
                {/* <div className="col m-3">
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
                </div> */}

                <div className="row">{stafflist}</div>

                {/* <div className="col-12 col-md-5 m-1">
                    {this.renderDetail(this.state.staffList)}
                </div> */}
            </div>
        );
    }
}

export default StaffList;
