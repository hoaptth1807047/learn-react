import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Navigation from "../users/Navigation/navigation";
import HomePage from "../users/views/Home/home";
import MenuPage from "../users/views/Menu/menu";
import PromotionPage from "../users/views/Promotion/promotion";
import ServicesPage from "../users/views/Services/services";
import AboutPage from "../users/views/About/about";
import ContactPage from "../users/views/Contact/contact";
import BlogPage from "../users/views/Blog/blog";
import Cart from "../users/views/Cart/cart";
import StickyCart from "../users/views/Cart/sticky-cart";
import CategoryPage from "../users/views/Category/category";
import SignUpPage from "../users/auth/SignUp/signup";
import SignInPage from "../users/auth/SignIn/signin";
import PasswordForgetPage from "../users/auth/PasswordForget";
import {withFirebase} from "../Firebase";
import ShowModal from "../users/views/Modal";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(
            authUser => {
                authUser
                    ? this.setState({ authUser })
                    : this.setState({ authUser: null });
            });
    }
    componentWillUnmount() {
        this.listener();
    }

    render() {
        return (
            <Router>
                <div>
                    <Navigation authUser={this.state.authUser}/>
                </div>
                <div>
                    <Route path="/home" component={HomePage}/>
                    <Route path="/menu" component={MenuPage}/>
                    <Route path="/promotion" component={PromotionPage}/>
                    <Route path="/services" component={ServicesPage}/>
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/contact" component={ContactPage}/>
                    <Route path="/blog" component={BlogPage}/>
                    <Route path="/category" component={CategoryPage}/>
                    <Route path="/sign-up" component={SignUpPage}/>
                    <Route path="/sign-in" component={SignInPage}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/sticky-cart" component={StickyCart}/>
                    <Route path="/show-modal" component={ShowModal}/>
                    <Route path="/pw-forget" component={PasswordForgetPage}/>
                </div>
            </Router>
        );
    }
}

export default withFirebase(App);
