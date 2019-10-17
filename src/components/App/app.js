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
import ServicesPage from '../Services/services';
import AboutPage from '../About/about';
import ContactPage from '../Contact/contact';
import BlogPage from '../Blog/blog';
import BlogSinglePage from '../Blog/blogsingle';
import GalleryPage from '../Gallery/gallery';
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
                <Route path={ROUTES.HOME} component={HomePage}/>
                <Route path={ROUTES.MENU} component={MenuPage}/>
                <Route path={ROUTES.SERVICES} component={ServicesPage}/>
                <Route path={ROUTES.ABOUT} component={AboutPage}/>
                <Route path={ROUTES.CONTACT} component={ContactPage}/>
                <Route path={ROUTES.BLOG} component={BlogPage}/>
                <Route path={ROUTES.BLOGSINGLE} component={BlogSinglePage}/>
                <Route path={ROUTES.GALLERY} component={GalleryPage}/>
                <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
                <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
            </Router>
        );
    }
}

export default withFirebase(App);
