import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from '../components/MenuComponent';
import { DISHES } from '../shared/dishes';
class MenuDish extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }
    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Funix React App</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} />
            </div>
        )
    }
}
export default MenuDish;