import React, {Component} from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import {withFirebase} from '../Firebase';
import Navigation from '../users/Navigation/navigation';
import HomePage from "../users/views/Home/home";
import MenuPage from '../users/views/Menu/menu';
import PromotionPage from '../users/views/Promotion/promotion';
import ServicesPage from '../users/views/Services/services';
import AboutPage from '../users/views/About/about';
import ContactPage from '../users/views/Contact/contact';
import BlogPage from '../users/views/Blog/blog';
import Cart from '../users/views/Cart/cart';
import SignInPage from '../users/auth/SignIn/signin';
import SignUpPage from '../users/auth/SignUp/signup';
import PasswordForgetPage from '../users/auth/PasswordForget';
// import AccountPage from '../Account';
// import AdminPage from '../Admin';

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
                    ? this.setState({authUser})
                    : this.setState({authUser: null});
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
                    <Route path="/sign-up" component={SignUpPage}/>
                    <Route path="/sign-in" component={SignInPage}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/pw-forget" component={PasswordForgetPage}/>
                </div>
            </Router>
        );
    }
}

export default withFirebase(App);
