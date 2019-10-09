import React from 'react';
import {Link} from 'react-router-dom';

import SignOutButton from '../SignOut/singout';
import * as ROUTES from '../constants/routes';

const Navigation = ({authUser}) => (
    <div>{authUser ? <NavigationAuth/> : <NavigationNonAuth/>}</div>
);


const NavigationAuth = () => (
    <div>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
            <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
        <ul>
            <li>
                <SignOutButton/>
            </li>
        </ul>
    </div>
);

const NavigationNonAuth = () => (
    <div>
        <ul>
            <li>
                <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
            </li>
            <li>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
        </ul>
    </div>
);
export default Navigation;