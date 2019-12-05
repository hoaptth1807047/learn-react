import React from 'react';
import {Link} from 'react-router-dom';
import '../../../css/shopping-cart.css';

import SignOutButton from '../auth/SignOut/singout';

const Navigation = ({authUser}) => (
    <div>
        {authUser ? <NavigationAuth/> : <NavigationNonAuth/>}
    </div>
);


const NavigationAuth = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <div className="navbar-brand"><span
                    className="flaticon-pizza-1 mr-1"/>
                    <Link to="/home">Cowboy <br/><small>Jack</small></Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"/> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <div className="nav-link">
                                <Link to="/home">Home</Link></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/menu">Menu</Link></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/promotion">Promotion</Link></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/services">Services</Link></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/blog">Blog</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/about">About</Link></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/contact">Contact</Link></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/cart"><i className="icon-shopping_cart"/></Link></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <SignOutButton/>
                            </div>
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
                <div className="navbar-brand"><span
                    className="flaticon-pizza-1 mr-1"/>
                    <Link to="/home">Cowboy <br/><small>Jack</small></Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"/> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <div className="nav-link">
                                <Link to="/home">Home</Link></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/menu">Menu</Link></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/promotion">Promotion</Link></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/services">Services</Link></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/blog">Blog</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/about">About</Link></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/contact">Contact</Link></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/cart"><i className="icon-shopping_cart"/></Link></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/sign-in">Sign In</Link></div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);
export default Navigation;