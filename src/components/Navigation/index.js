import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import UserNav from "../Navigation/UserNav";

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
  <NavWrapper>
    <NavTop>
      <NavBanner>LOGO</NavBanner>
      <NavUser>
        <TopSearch>
          <SearchInput placeholder="Search"></SearchInput>
        </TopSearch>
        <UserNav />
        {/* <UserBtn>
            <UserImg src="https://via.placeholder.com/60"></UserImg>
            <UserName>{authUser.username}</UserName>
            <i class="fas fa-angle-down"></i>
          </UserBtn>
        </UserNav> */}
      </NavUser>
    </NavTop>
    <NavSide>
      <NavList>
        {/* <NavItem>
      <NavLink to={ROUTES.LANDING}>Landing</NavLink>
    </NavItem> */}
        <NavItem>
          <NavLink home to={ROUTES.HOME}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink news to={ROUTES.HOME}>
            News
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink portfolio to={ROUTES.HOME}>
            Portfolio
          </NavLink>
        </NavItem>
        {/*         <NavItem>
          <NavLink account to={ROUTES.ACCOUNT}>
            Account
          </NavLink>
        </NavItem> */}
        {authUser.roles.includes(ROLES.ADMIN) && (
          <NavItem>
            <NavLink admin to={ROUTES.ADMIN}>
              Admin
            </NavLink>
          </NavItem>
        )}
        {/*         <NavItem>
          <SignOutButton />
        </NavItem> */}
      </NavList>
    </NavSide>
  </NavWrapper>
);
const NavigationNonAuth = () => (
  <div>
    {/* <NavList>
    <NavItem>
      <NavLink to={ROUTES.LANDING}>Landing</NavLink>
    </NavItem>{" "}
    <NavItem>
      <NavLink signin to={ROUTES.SIGN_IN}>
        Sign In
      </NavLink>
    </NavItem>
  </NavList> */}
  </div>
);

const Nav = styled.div`
  /* position: fixed;
  height: 100vh; */
  background-color: #039be5;
`;

const NavWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const NavBanner = styled.div`
  grid-area: topbanner;
  width: 120px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-shrink: 0;
  background-color: #039be5;
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
`;

const NavTop = styled.div`
  grid-area: topnav;
  /* position: fixed;
  top: 0;
  right: 0;
  margin-left: 300px; */
  display: flex;
`;

const NavSide = styled.div`
  grid-area: navside;
  width: 120px;
  height: 100%;
  flex-grow: 1;
  background-color: #039be5;
`;

const TopSearch = styled.div`
  flex-grow: 1;
`;

const SearchInput = styled.input`
  /* width: 100%; */
  width: 20%;
  padding: 8px 15px;
  font-size: 14px;
  background-color: #fff;
  border: 0;
  border-radius: 10px;
  outline: 0;
  &:focus {
    width: 100%;
    transition: width 0.6s;
  }
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
        return "\f009";
      } else if (props.portfolio) {
        return "\f200";
      } else if (props.news) {
        return "\f1ea";
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

/* const UserInfo = styled.div`
  margin: 10px 0 10px 50px;
  display: flex;
`;

const UserImg = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
  border-radius: 50%;
`;

const UserBtn = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  background-color: #f2f2f2;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #666;
    transition: color 0.3s linear;
  }
`;

const UserName = styled.span`
  padding-right: 5px;
  font-size: 12px;
  line-height: 24px;
  font-weight: bold;
`; */

export default Navigation;
