import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  PageGrid,
  GridMain,
  GridNavBanner,
  GridNavUser,
  GridPageNav
} from "../Styles";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import SecretPage from "../Secret";
import StockPage from "../StockPage";

import * as ROUTES from "../../constants/routes";

import { withAuthentication, AuthUserContext } from "../Session";
import News from "../News";

const App = () => (
  <Router>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <PageGrid>
            <Navigation />
            <GridMain>
              <Route exact path={ROUTES.HOME} component={HomePage} />
              <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
              <Route path={ROUTES.SIGN_IN} component={SignInPage} />
              <Route
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForgetPage}
              />
              <Route path={ROUTES.ACCOUNT} component={AccountPage} />
              <Route path={ROUTES.ADMIN} component={AdminPage} />
              <Route path={ROUTES.SECRET} component={SecretPage} />
              <Route path={ROUTES.STOCKPAGE} component={StockPage} />
              <Route path={ROUTES.NEWS} component={News} />
            </GridMain>
          </PageGrid>
        ) : (
          <GridMain>
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route
              path={ROUTES.PASSWORD_FORGET}
              component={PasswordForgetPage}
            />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
            <Route path={ROUTES.SECRET} component={SecretPage} />
          </GridMain>
        )
      }
    </AuthUserContext.Consumer>

    {/* <PageContainer>
      <Main>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.SECRET} component={SecretPage} />
      </Main>
    </PageContainer> */}
  </Router>
);

export default withAuthentication(App);
