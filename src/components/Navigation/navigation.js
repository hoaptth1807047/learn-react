import React from 'react';
import {Link} from 'react-router-dom';

import SignOutButton from '../SignOut/singout';
import * as ROUTES from '../constants/routes';

const Navigation = ({authUser}) => (
    <div>
        {authUser ? <NavigationAuth/> : <NavigationNonAuth/>}
    </div>
);


const NavigationAuth = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar" style={{margin: "0 0 -33px 0"}}>
            <div className="container">
                <div className="navbar-brand"><span
                    className="flaticon-pizza-1 mr-1"/>
                    <a href="">
                        <Link to={ROUTES.HOME}>Cowboy <br/><small>Jack</small></Link>
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"/><Link to={ROUTES.MENU}>Menu</Link>
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        {/*Home*/}
                        {/*<li className="nav-item active"><a href={ROUTES.HOME} className="nav-link">*/}
                        {/*    Home</a></li>*/}
                        <li className="nav-item active"><div className="nav-link">
                            <Link to="/home">Home</Link></div></li>
                        {/*Menu*/}
                        <li className="nav-item"><div className="nav-link">
                            <Link to="/menu">Menu</Link></div></li>
                        {/*Services*/}
                        <li className="nav-item"><div className="nav-link">
                            <Link to="/services">Services</Link></div></li>
                        {/*Blog*/}
                        <li className="nav-item"><div className="nav-link">
                            <Link to="/blog">Blog</Link></div></li>
                        {/*Blog Single*/}
                        {/*<li className="nav-item"><div className="nav-link">*/}
                        {/*    <Link to="/blogsingle">Blog Single</Link></div></li>*/}
                        {/*About*/}
                        <li className="nav-item"><div className="nav-link">
                            <Link to="/about">About</Link></div></li>
                        {/*Contact*/}
                        {/*<li className="nav-item"><div className="nav-link">*/}
                        {/*    <Link to="/contact">Contact</Link></div></li>*/}
                        {/*Gallery*/}
                        <li className="nav-item"><div className="nav-link">
                            <Link to="/gallery">Gallery</Link></div>
                        </li>
                        {/*Nút Sign Out*/}
                        <li className="nav-item"><a className="nav-link">
                            <SignOutButton/></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

const NavigationNonAuth = () => (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar" style={{margin: "0 0 -33px 0"}}>
        <div className="container">
            <div className="navbar-brand"><span
                className="flaticon-pizza-1 mr-1"/>
                <a href="">
                    <Link to={ROUTES.HOME}>Cowboy <br/><small>Jack</small></Link>
                </a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                    aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="oi oi-menu"/><Link to={ROUTES.MENU}>Menu</Link>
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav ml-auto">
                    {/*Home*/}
                    {/*<li className="nav-item active"><a href={ROUTES.HOME} className="nav-link">*/}
                    {/*    Home</a></li>*/}
                    <li className="nav-item active"><div className="nav-link">
                        <Link to="/home">Home</Link></div></li>
                    {/*Menu*/}
                    <li className="nav-item"><div className="nav-link">
                        <Link to="/menu">Menu</Link></div></li>
                    {/*Services*/}
                    <li className="nav-item"><div className="nav-link">
                        <Link to="/services">Services</Link></div></li>
                    {/*Blog*/}
                    <li className="nav-item"><div className="nav-link">
                        <Link to="/blog">Blog</Link></div>
                    </li>
                    {/*Blog Single*/}
                    {/*<li className="nav-item"><div className="nav-link">*/}
                    {/*    <Link to="/blogsingle">Blog Single</Link></div></li>*/}
                    {/*About*/}
                    <li className="nav-item"><div className="nav-link">
                        <Link to="/about">About</Link></div></li>
                    {/*Contact*/}
                    <li className="nav-item"><div className="nav-link">
                        <Link to="/contact">Contact</Link></div></li>
                    {/*Gallery*/}
                    {/*<li className="nav-item"><div className="nav-link">*/}
                    {/*    <Link to="/gallery">Gallery</Link></div></li>*/}
                    {/*Sign In*/}
                    <li className="nav-item"><div className="nav-link">
                        <Link to="/signin">Sign In</Link></div>
                    </li>
                    {/*Sign Up*/}
                    <li className="nav-item"><div className="nav-link">
                        <Link to="/signup">Sign Up</Link></div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navigation;