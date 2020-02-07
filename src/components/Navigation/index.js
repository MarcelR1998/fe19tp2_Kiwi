import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';

import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import * as ROLES from '../../constants/roles';


const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? (
                    <NavigationAuth authUser={authUser} />
                ) : (
                        <NavigationNonAuth />
                    )
            }
        </AuthUserContext.Consumer>
    </div>);

const NavigationAuth = ({ authUser }) => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li> <li>
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        {authUser.roles.includes(ROLES.ADMIN) && (
            <li>
                <Link to={ROUTES.ADMIN}>Admin</Link>
            </li>
        )}
        <li>
            <SignOutButton />
        </li>
    </ul>);
const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li> <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
    </ul>);



export default Navigation;

