import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Navigation from '../Navigation/navigation';
// import HomeLocal from '../HomeLocal/homelocal';
import SignUpPage from '../SignUp/signup';
import SignInPage from '../SignIn/signin';
import { withFirebase } from '../Firebase';
import MenuPage from '../Menu/menu';
import PromotionPage from '../Promotion/promotion';
import ServicesPage from '../Services/services';
import AboutPage from '../About/about';
import ContactPage from '../Contact/contact';
import BlogPage from '../Blog/blog';
import BlogSinglePage from '../Blog/blogsingle';
import GalleryPage from '../Gallery/gallery';
import CartPage from '../Cart/cart';
// import PasswordForgetPage from '../PasswordForget';
// import HomePage from '../Home';
// import AccountPage from '../Account';
// import AdminPage from '../Admin';
import * as ROUTES from '../constants/routes';
import HomePage from "../Home";

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
                    <hr/>
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
