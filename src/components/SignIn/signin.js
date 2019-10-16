import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {withFirebase} from '../Firebase';
import * as ROUTES from '../constants/routes';
import '../../../src/css/signin.css'

const SignInPage = () => (
    <div>
        <SignInForm/>
    </div>
);
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {email, password} = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({error});
            });
        event.preventDefault();
    };
    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {email, password, error} = this.state;
        const isInvalid = password === '' || email === '';
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <section className="home-slider owl-carousel img signInPage">
                        <div className="slider-item">
                            <div className="container">
                                <div className="row slider-text justify-content-center align-items-center">
                                    <div className="signin">
                                        <h2>Sign In</h2>
                                        <input
                                            name="email"
                                            value={email}
                                            onChange={this.onChange}
                                            type="text"
                                            placeholder="Email Address"
                                        />
                                        <input
                                            name="password"
                                            value={password}
                                            onChange={this.onChange}
                                            type="password"
                                            placeholder="Password"
                                        />
                                        <button disabled={isInvalid} type="submit">
                                            Sign In
                                        </button>
                                        <div className="button-content">
                                            Don't have an account? <Link to={ROUTES.SIGN_UP}> Sign Up </Link>
                                        </div>
                                        {error && <p>{error.message}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </form>
            </div>
        );
    }
}

const SignInForm = compose(withRouter, withFirebase,)(SignInFormBase);
export default SignInPage;
export {SignInForm};