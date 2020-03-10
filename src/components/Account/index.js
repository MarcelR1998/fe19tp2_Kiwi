import React from "react";
/* import { PasswordForgetForm } from "../PasswordForget"; */
import PasswordChangeForm from "../PasswordChange";
import { AuthUserContext, withAuthorization } from "../Session";
import SignOutButton from "../SignOut";
import * as GLOBSTYLES from "../Styles";
import * as STYLES from "./styles";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <GLOBSTYLES.MainWrapper>
        <STYLES.AccountWrapper>
          <STYLES.AccountHeader>
            <STYLES.UserImg src="https://i2.wp.com/airlinkflight.org/wp-content/uploads/2019/02/male-placeholder-image.jpeg?resize=500%2C500&ssl=1"></STYLES.UserImg>
            <STYLES.UserNames>{authUser.username}</STYLES.UserNames>
            <STYLES.UserEmail>{authUser.email}</STYLES.UserEmail>
            <STYLES.SignoutWrapper>
              <SignOutButton />
            </STYLES.SignoutWrapper>
          </STYLES.AccountHeader>
          <STYLES.ResetPassword>
            {/* <PasswordForgetForm /> */}
            <PasswordChangeForm />
          </STYLES.ResetPassword>
        </STYLES.AccountWrapper>
        {/* <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm /> */}
      </GLOBSTYLES.MainWrapper>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
