import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetail from "../components/DishDetailComponent";
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Routes, Route } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    }
  }



  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter(dish => dish.featured)[0]}
          promotion={this.state.promotions.filter(promo => promo.featured)[0]}
          leader={this.state.leaders.filter(leader => leader.featured)[0]}
        />
      )
    }

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.state.comments.filter((commemt) => commemt.id === parseInt(match.params.dishId, 10))[0]}
        />
      )
    }

    return (
      <div>
        <Header />
        <div>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            {/* <Route path="aboutus" element={<About leaders={this.props.leaders} />} /> */}
            <Route path="menu" element={<Menu dishes={this.props.dishes} />} />
            <Route path="menu/:dishId" element={<DishWithId />} />
            <Route path="contactus" element={<Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;