import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withFirebase} from '../../../Firebase';
import '../../../../css/signin.css'

const PasswordForgetPage = () => (
    <div>
        <PasswordForgetForm/>
    </div>
);
const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {email} = this.state;
        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({...INITIAL_STATE});
                alert("Check your email!");
                window.location = "/sign-in"
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
        const {email, error} = this.state;
        const isInvalid = email === '';
        return (
            <form onSubmit={this.onSubmit}>
                <section className="home-slider owl-carousel img signInPage">
                    <div className="slider-item">
                        <div className="container">
                            <div className="row slider-text justify-content-center align-items-center">
                                <div className="signin">
                                    <h3>Forgot Password</h3>
                                    <input
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                        type="text"
                                        placeholder="Email Address"
                                    />
                                    <button disabled={isInvalid} type="submit">
                                        Reset My Password
                                    </button>
                                    <div>
                                        {error && <p>{error.message}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        );
    }
}

const PasswordForgetLink = () => (
    <p>
        <Link to="/pw-forget">Forgot Password?</Link>
    </p>
);
export default PasswordForgetPage;
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
export {PasswordForgetForm, PasswordForgetLink};