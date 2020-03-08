import React from "react";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import { AuthUserContext, withAuthorization } from "../Session";
import styled from "styled-components";
import { MainWrapper } from "../Styles";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <MainWrapper>
        <AccountWrapper>
          <AccountHeader>
            <UserImg src="https://i2.wp.com/airlinkflight.org/wp-content/uploads/2019/02/male-placeholder-image.jpeg?resize=500%2C500&ssl=1"></UserImg>
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
      </MainWrapper>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

const AccountWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
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
