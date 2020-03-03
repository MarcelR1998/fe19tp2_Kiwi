import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { SignOutLink } from "../SignOut";
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
                      <SignOutLink />
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
              <UserImg src="https://66.media.tumblr.com/a667b9f6ba81810d3b608b5fd2dbdc19/c09b191bc35ed178-7b/s1280x1920/0c0ca5bdbfb10eb94f8a4f039e1d33479da22b79.jpg"></UserImg>
              <UserName>{authUser.username}</UserName>
              <i class="fas fa-angle-down"></i>
            </UserBtn>
          </UserInfo>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const UserCard = styled.div``;

const CardWrapper = styled.div`
  position: absolute;
  top: 70px;
  right: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 10px 0;
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
  height: 40px;
  width: 40px;
  margin-right: 10px;
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

const UserName = styled.span`
  padding-right: 5px;
  font-size: 12px;
  line-height: 24px;
  font-weight: bold;
`;

export default UserNav;
