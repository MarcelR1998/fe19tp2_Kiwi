import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import { withAuthorization } from "../Session";
import * as ROLES from "../../constants/roles";
import { SignUpLink } from "../SignUp";
import { MainWrapper, PageTitleWrapper, PageTitle, PageDesc } from "../Styles";
import {
  UsersListWrapper,
  ListOfUsers,
  UserItem,
  UserInfo,
  UserPhoto,
  UserData,
  UserName,
  UserEmail,
  UserID
} from "./styles";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: []
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.users().on("value", snapshot => {
      const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      }));

      this.setState({
        users: usersList,
        loading: false
      });
    });
  }
  componentWillUnmount() {
    this.props.firebase.users().off();
  }
  render() {
    const { users, loading } = this.state;

    return (
      <MainWrapper>
        {/*         <h1>Admin</h1>
        <p>The Admin Page is accessible by every signed in admin user.</p>
 */}

        <PageTitleWrapper>
          <PageTitle>All Users</PageTitle>
          <PageDesc>Browse and manage users.</PageDesc>
          <SignUpLink />
        </PageTitleWrapper>

        <UserList users={users} />
        {loading && <div>Loading ...</div>}
      </MainWrapper>
    );
  }
}
const UserList = ({ users }) => (
  <UsersListWrapper>
    <ListOfUsers>
      {users.map(user => (
        <UserItem key={user.uid}>
          <UserPhoto src="https://i2.wp.com/airlinkflight.org/wp-content/uploads/2019/02/male-placeholder-image.jpeg?resize=500%2C500&ssl=1"></UserPhoto>
          <UserInfo>
            <UserData>
              <UserName>{user.username}</UserName>
              <UserEmail>{user.email}</UserEmail>
            </UserData>

            <UserID>{user.uid}</UserID>
          </UserInfo>
        </UserItem>
      ))}
    </ListOfUsers>
  </UsersListWrapper>
);
/* const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
      </li>
    ))}
  </ul>
); */

const condition = authUser => authUser && authUser.roles.includes(ROLES.ADMIN);

export default compose(withAuthorization(condition), withFirebase)(AdminPage);
