import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetail from "../components/DishDetailComponent";
import About from "./AboutComponment";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
class Main extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const DishWithId = () => {
      let params = useParams();
      return (
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(params.dishId, 10))[0]}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(params.dishId, 10))} />
      );
    };

    return (
      <div>
        <Header />
        <div>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="aboutus" element={<About leaders={this.props.leaders} />} />
            <Route path="aboutus" element={<About leaders={this.props.leaders} />} />
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
export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    return <Component history={history} {...props} />;
  };
  return Wrapper;
};

export default withRouter(connect(mapStateToProps)(Main));
