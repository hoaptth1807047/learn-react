import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import HomePage from '../users/views/Home/home';
import Navigation from '../users/Navigation/navigation';
import SignUpPage from '../users/auth/SignUp/signup';
import SignInPage from '../users/auth/SignIn/signin';
import { withFirebase } from '../Firebase';
import MenuPage from '../users/views/Menu/menu';
import PromotionPage from '../users/views/Promotion/promotion';
import ServicesPage from '../users/views/Services/services';
import AboutPage from '../users/views/About/about';
import ContactPage from '../users/views/Contact/contact';
import BlogPage from '../users/views/Blog/blog';
import CategoryPage from "../users/views/Category/category";
import Cart from '../users/views/Cart/cart';
import PasswordForgetPage from '../users/auth/PasswordForget/index';
// import BlogSinglePage from '../users/views/Blog/blogsingle';
// import GalleryPage from '../users/views/Gallery/gallery';
// import HomeLocal from '../HomeLocal/homelocal';
// import AccountPage from '../Account';
// import AdminPage from '../Admin';
// import HomePage from "../Home";

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
                    <Route path="/pw-forget" component={PasswordForgetPage}/>
                </div>
            </Router>
        );
    }
}

export default withFirebase(App);
