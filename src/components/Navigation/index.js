import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import UserNav from "../Navigation/UserNav";
import Search from "../Search";

import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import * as ROLES from "../../constants/roles";

import styled from "styled-components";
import {
  GridNavBanner,
  GridNavUser,
  GridPageNav,
  PageNavWrapper
} from "../Styles";

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
  <PageNavWrapper className="PageNavWrapper">
    <GridNavUser className="GridNavUser">
      <GridNavBanner>LOGO</GridNavBanner>
      <NavUser className="NavUser">
        <TopSearch>
          <Search uid={authUser.uid} />
        </TopSearch>
        <UserNav />
      </NavUser>
    </GridNavUser>
    <GridPageNav className="GridPageNav">
      <NavList>
        {/* <NavItem>
      <NavLink to={ROUTES.LANDING}>Landing</NavLink>
    </NavItem> */}
        <NavItem>
          <NavLink className="icon-home" to={ROUTES.HOME}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="icon-news" to={ROUTES.STOCKPAGE}>
            News
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="icon-portfolio" to={ROUTES.HOME}>
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem className="account-item">
          <NavLink className="icon-account" to={ROUTES.ACCOUNT}>
            Account
          </NavLink>
        </NavItem>
        {authUser.roles.includes(ROLES.ADMIN) && (
          <NavItem>
            <NavLink className="icon-admin" to={ROUTES.ADMIN}>
              Admin
            </NavLink>
          </NavItem>
        )}
        {/*         <NavItem>
          <SignOutButton />
        </NavItem> */}
      </NavList>
    </GridPageNav>
  </PageNavWrapper>
);
const NavigationNonAuth = () => (
  <div>
    <NavList>
      <NavLink>
        <NavLink to={ROUTES.LANDING}>Landing</NavLink>
      </NavLink>{" "}
      <NavItem>
        <NavLink signin to={ROUTES.SIGN_IN}>
          Sign In
        </NavLink>
      </NavItem>
    </NavList>
  </div>
);

const Nav = styled.div`
  /* background-color: #039be5; */
`;

const NavUser = styled.div`
  padding: 0 25px;
  position: relative;
  flex-grow: 1;
  height: 60px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    /* display: none; */
  }
`;

const TopSearch = styled.div`
  flex-grow: 1;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const NavItem = styled.li`
  margin-bottom: 15px;
  text-align: center;
  &:hover {
    background-color: #03a9f4;
    @media (max-width: 600px) {
      background-color: unset;
      opacity: 0.7;
    }
  }
  &:focus {
    @media (max-width: 600px) {
      background-color: unset;
      opacity: 0.7;
    }
  }
`;

const NavLink = styled(Link)`
  width: 70px;
  position: relative;
  display: block;
  padding: 50px 25px 15px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  @media (max-width: 600px) {
    padding: 50px 0px 0px;
    width: auto;
  }
  &:before {
    position: absolute;
    content: "";
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-family: "Font Awesome 5 Pro";
    font-weight: 900;
    font-size: 24px;
    @media (max-width: 600px) {
      top: 20px;
      font-size: 20px;
    }
  }
`;

export default Navigation;
