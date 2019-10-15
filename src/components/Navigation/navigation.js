import React from 'react';
import {Link} from 'react-router-dom';

import SignOutButton from '../SignOut/singout';
import * as ROUTES from '../constants/routes';

const Navigation = ({authUser}) => (
    <div>{authUser ? <NavigationAuth/> : <NavigationNonAuth/>}</div>
);


const NavigationAuth = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <div className="navbar-brand" href=""><span
                    className="flaticon-pizza-1 mr-1"/>
                    Cowboy <br/><small>Jack</small>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"/> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a className="nav-link">
                            <Link to={ROUTES.HOME}>Home</Link>
                        </a>
                        </li>
                        <li className="nav-item"><a href="" className="nav-link">Menu</a></li>
                        <li className="nav-item"><a href=""
                                                    className="nav-link">Services</a></li>
                        <li className="nav-item"><a href="" className="nav-link">Blog</a></li>
                        <li className="nav-item"><a href="" className="nav-link">About</a>
                        </li>
                        <li className="nav-item"><a href="" className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item"><a className="nav-link">
                            <SignOutButton/>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

const NavigationNonAuth = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
            <div className="navbar-brand" href=""><span
                className="flaticon-pizza-1 mr-1"/>
                Cowboy <br/><small>Jack</small>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                    aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="oi oi-menu"/> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><a className="nav-link">
                        <Link to={ROUTES.HOME}>Home</Link>
                    </a>
                    </li>
                    <li className="nav-item"><a href="" className="nav-link">Menu</a></li>
                    <li className="nav-item"><a href=""
                                                className="nav-link">Services</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Blog</a></li>
                    <li className="nav-item"><a href="" className="nav-link">About</a>
                    </li>
                    <li className="nav-item"><a href="" className="nav-link">Contact</a>
                    </li>
                    <li className="nav-item"><a className="nav-link">
                        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
);
export default Navigation;