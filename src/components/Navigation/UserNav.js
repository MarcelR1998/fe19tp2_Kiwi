import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import SignOutButton from "../SignOut";
import styled from "styled-components";
import { AuthUserContext } from "../Session";

class UserNav extends Component {
  state = {
    show: false
  };

  show = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <UserInfo>
            <UserCard>
              {this.state.show && (
                <CardWrapper>
                  <User>
                    <UserImg src="https://66.media.tumblr.com/a667b9f6ba81810d3b608b5fd2dbdc19/c09b191bc35ed178-7b/s1280x1920/0c0ca5bdbfb10eb94f8a4f039e1d33479da22b79.jpg"></UserImg>
                    <UserData>
                      <UserNames>{authUser.username}</UserNames>
                      <UserEmail>{authUser.email}</UserEmail>
                    </UserData>
                  </User>
                  <CardList>
                    <ListItem>
                      <CardLink account to={ROUTES.ACCOUNT}>
                        My Account
                      </CardLink>
                    </ListItem>
                    <ListItem>
                      <CardLink account to={ROUTES.ACCOUNT}>
                        Settings
                      </CardLink>
                    </ListItem>
                    <ListItem>
                      <SignOutButton />
                    </ListItem>
                  </CardList>
                </CardWrapper>
              )}
            </UserCard>
            <UserBtn
              onClick={() => {
                this.show();
              }}
            >
              <UserName>{authUser.username}</UserName>
              <i class="fas fa-angle-down"></i>
            </UserBtn>
          </UserInfo>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const UserCard = styled.div`
  z-index: 5000;
`;

const CardWrapper = styled.div`
  position: absolute;
  top: 70px;
  right: 15px;
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const User = styled.div`
  padding: 15px 25px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
`;

const UserData = styled.div``;

const UserNames = styled.span`
  padding-right: 5px;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  font-weight: bold;
`;

const UserName = styled.span`
  padding-right: 5px;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  font-weight: bold;
`;

const UserEmail = styled.div`
  font-size: 12px;
  color: #555;
`;

const CardList = styled.ul`
  background-color: #f8f8f8;
  list-style: none;
  margin: 0;
  padding: 0 0 10px;
  border-radius: 0 0 10px 10px;
`;

const ListItem = styled.li``;

const CardLink = styled(Link)`
  display: block;
  padding: 10px 15px;
  color: #333;
  text-decoration: none;
  &:hover {
    background-color: #f2f2f2;
    transition: background-color 0.3s;
  }
`;

const UserInfo = styled.div`
  margin: 10px 0 10px 50px;
  display: flex;
`;

const UserImg = styled.img`
  height: 70px;
  width: 70px;
  padding: 10px;
  border-radius: 50%;
  object-fit: cover;
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

export default UserNav;
