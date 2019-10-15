import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Navigation from '../Navigation/navigation';
// import LandingPage from '../Landing';
import SignUpPage from '../SignUp/signup';
import SignInPage from '../SignIn/signin';
import { withFirebase } from '../Firebase';
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
                    <Route path={ROUTES.HOME} component={HomePage}/>
                    <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
                    <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
                </div>
            </Router>
        );
    }
}

export default withFirebase(App);
