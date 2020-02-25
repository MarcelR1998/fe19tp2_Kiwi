import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";

import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import * as ROLES from "../../constants/roles";

import styled from "styled-components";

const Navigation = () => (
  <Nav>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <NavigationAuth authUser={authUser} />
        ) : (
          <NavigationNonAuth />
        )
      }
    </AuthUserContext.Consumer>
  </Nav>
);

const NavigationAuth = ({ authUser }) => (
  <NavList>
    <NavItem>
      <NavLink to={ROUTES.LANDING}>Landing</NavLink>
    </NavItem>
    <NavItem>
      <NavLink home to={ROUTES.HOME}>
        Home
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink account to={ROUTES.ACCOUNT}>
        Account
      </NavLink>
    </NavItem>
    {authUser.roles.includes(ROLES.ADMIN) && (
      <NavItem>
        <NavLink admin to={ROUTES.ADMIN}>
          Admin
        </NavLink>
      </NavItem>
    )}
    <NavItem>
      <SignOutButton />
    </NavItem>
  </NavList>
);
const NavigationNonAuth = () => (
  <NavList>
    <NavItem>
      <NavLink to={ROUTES.LANDING}>Landing</NavLink>
    </NavItem>{" "}
    <NavItem>
      <NavLink signin to={ROUTES.SIGN_IN}>
        Sign In
      </NavLink>
    </NavItem>
  </NavList>
);

const Nav = styled.div`
  position: fixed;
  height: 100vh;
  background-color: #039be5;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavItem = styled.li`
  margin-bottom: 15px;
  text-align: center;
  &:hover {
    background-color: #03a9f4;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  display: block;
  padding: 50px 25px 15px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  &:before {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-family: "Font Awesome 5 Pro";
    font-weight: 900;
    font-size: 24px;
    
    content: "${props => {
      if (props.home) {
        return "\f201";
      } else if (props.account) {
        return "\f007";
      } else if (props.admin) {
        return "\f502";
      } else if (props.signin) {
        return "\f2f6";
      } else {
        return "\f059";
      }
    }}";
  }
`;

export default Navigation;
