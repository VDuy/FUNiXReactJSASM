import React, { Component } from 'react';
import {
    Breadcrumb, BreadcrumbItem,
    Button, Form, FormGroup, Label, Input, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        console.log("Current State is: " + JSON.stringify(this.state));
        // alert("Current State is: " + JSON.stringify(this.state));
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Contact Us</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>

                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            45, Longbien<br />
                            Hanoi<br />
                            VIET NAM<br />
                            <i className="fa fa-phone fa-lg"></i>: +849 999 999<br />
                            <i className="fa fa-fax fa-lg"></i>: +849 999 999<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:">
                                Vduy@funix.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:0983 947 663">
                                <i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="https://www.facebook.com/">
                                <i className="fa fa-skype"></i> Facebook</a>
                            <a role="button" className="btn btn-success" href="mailto:">
                                <i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname"
                                        name="firstname" placeholder="First Name"
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname"
                                        name="lastname" placeholder="Last Name"
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange}></Input>

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="phone" md={2}>Tel. Number</Label>
                                <Col md={10}>
                                    <Input type="number" id="phone"
                                        name="phone" placeholder="Tel. Number"
                                        value={this.state.phone}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email"
                                        name="email" placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} />{' '}
                                            <strong>May be contact you</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange} >
                                        <option> Tel.</option>
                                        <option> Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message"
                                        name="message" row="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Contact;