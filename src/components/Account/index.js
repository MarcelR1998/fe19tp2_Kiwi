import React from "react";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import { AuthUserContext, withAuthorization } from "../Session";
import styled from "styled-components";
import { FormTitle, FormDesc } from "../Styles";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <AccountWrapper>
          <AccountHeader>
            <UserImg src="https://66.media.tumblr.com/a667b9f6ba81810d3b608b5fd2dbdc19/c09b191bc35ed178-7b/s1280x1920/0c0ca5bdbfb10eb94f8a4f039e1d33479da22b79.jpg"></UserImg>
            <UserNames>{authUser.username}</UserNames>
            <UserEmail>{authUser.email}</UserEmail>
          </AccountHeader>
          <ResetPassword>
            {/* <PasswordForgetForm /> */}
            <PasswordChangeForm />
          </ResetPassword>
        </AccountWrapper>
        {/* <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm /> */}
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

const AccountWrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
`;

const AccountHeader = styled.div`
  padding: 25px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #00b0ff;
`;

const ResetPassword = styled.div`
  padding: 25px 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const UserImg = styled.img`
  height: 70px;
  width: 70px;
  padding: 10px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserNames = styled.span`
  font-size: 20px;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: 1px;
  color: #fff;
`;

const UserEmail = styled.div`
  font-size: 14px;
  color: #fff;
  opacity: 0.7;
`;

export default withAuthorization(condition)(AccountPage);
