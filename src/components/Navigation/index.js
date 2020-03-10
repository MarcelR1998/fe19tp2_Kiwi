import React from "react";
import UserNav from "../Navigation/UserNav";
import Search from "../Search";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import * as ROLES from "../../constants/roles";
import * as GLOBSTYLES from "../Styles";
import * as STYLES from "./styles";

const Navigation = () => (
  <STYLES.Nav>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <NavigationAuth authUser={authUser} />
        ) : (
          <NavigationNonAuth />
        )
      }
    </AuthUserContext.Consumer>
  </STYLES.Nav>
);

const NavigationAuth = ({ authUser }) => (
  <GLOBSTYLES.PageNavWrapper className="PageNavWrapper">
    <GLOBSTYLES.GridNavUser className="GridNavUser">
      <GLOBSTYLES.GridNavBanner>
        <STYLES.LogoImg src={GLOBSTYLES.Nordea} alt="Logo"></STYLES.LogoImg>
      </GLOBSTYLES.GridNavBanner>
      <STYLES.NavUser className="NavUser">
        <STYLES.TopSearch>
          <Search uid={authUser.uid} />
        </STYLES.TopSearch>
        <UserNav />
      </STYLES.NavUser>
    </GLOBSTYLES.GridNavUser>
    <GLOBSTYLES.GridPageNav className="GridPageNav">
      <STYLES.NavList>
        <STYLES.NavItem>
          <STYLES.NavLink className="icon-home" to={ROUTES.HOME}>
            Home
          </STYLES.NavLink>
        </STYLES.NavItem>
        <STYLES.NavItem>
          <STYLES.NavLink className="icon-news" to={ROUTES.NEWS}>
            News
          </STYLES.NavLink>
        </STYLES.NavItem>
        <STYLES.NavItem className="account-item">
          <STYLES.NavLink className="icon-account" to={ROUTES.ACCOUNT}>
            Account
          </STYLES.NavLink>
        </STYLES.NavItem>
      </STYLES.NavList>
      {authUser.roles.includes(ROLES.ADMIN) && (
        <STYLES.NavList>
          <STYLES.NavItem>
            <STYLES.NavLink className="icon-admin" to={ROUTES.ADMIN}>
              Admin
            </STYLES.NavLink>
          </STYLES.NavItem>
        </STYLES.NavList>
      )}
    </GLOBSTYLES.GridPageNav>
  </GLOBSTYLES.PageNavWrapper>
);
const NavigationNonAuth = () => (
  <div>
    <STYLES.NavList>
      <STYLES.NavLink>
        <STYLES.NavLink to={ROUTES.HOME}>Home</STYLES.NavLink>
      </STYLES.NavLink>
      <STYLES.NavItem>
        <STYLES.NavLink signin to={ROUTES.SIGN_IN}>
          Sign In
        </STYLES.NavLink>
      </STYLES.NavItem>
    </STYLES.NavList>
  </div>
);

export default Navigation;
