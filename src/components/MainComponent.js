import React, { Component } from 'react';

import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NavLink } from 'reactstrap';
class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,

    };
  }


  render() {
     
        const Homepage = () => {
          return (
            <Home></Home>
          )
        }
         return (
          <div>
        <Header></Header>
        <NavLink>
          <Route path="/home" component={Homepage}></Route>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} ></Route>
          <Redirect to="/home"></Redirect>

          {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
    <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
    <Footer></Footer> */}
        </NavLink>
      </div>
    )
  }
}
export default Main;