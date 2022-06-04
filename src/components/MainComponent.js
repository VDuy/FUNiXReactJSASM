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
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreator';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
const mapDispatchToProps = dispatch => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  // addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes()) },
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),

});

class MainComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const DishWithId = () => {
      let params = useParams();
      return (
        <DishDetail
          dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(params.dishId, 10))}
          commentsErrMess={this.props.comments.errMess}
          // addComment={this.props.addComment}
          postComment={this.props.postComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <div>
          <TransitionGroup>
            <CSSTransition
              // key={this.props.location.key}
              classNames="page" timeout={300}>
              <Routes location={this.props.location}>
                <Route index element={<HomePage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="aboutus" element={<About leaders={this.props.leaders} />} />
                <Route path="menu" element={<Menu dishes={this.props.dishes} />} />
                <Route path="menu/:dishId" element={<DishWithId />} />
                <Route path="contactus" element={<Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));
