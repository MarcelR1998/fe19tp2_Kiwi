import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import { withAuthorization } from "../Session";
import * as ROLES from "../../constants/roles";
import { SignUpLink } from "../SignUp";
import * as GLOBSTYLES from "../Styles";
import * as STYLES from "./styles";

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
      <GLOBSTYLES.MainWrapper>
        <GLOBSTYLES.PageTitleWrapper>
          <GLOBSTYLES.PageTitle>All Users</GLOBSTYLES.PageTitle>
          <GLOBSTYLES.PageDesc>Browse and manage users.</GLOBSTYLES.PageDesc>
          <SignUpLink />
        </GLOBSTYLES.PageTitleWrapper>

        <UserList users={users} />
        {loading && <div>Loading ...</div>}
      </GLOBSTYLES.MainWrapper>
    );
  }
}
const UserList = ({ users }) => (
  <STYLES.UsersListWrapper>
    <STYLES.ListOfUsers>
      {users.map(user => (
        <STYLES.UserItem key={user.uid}>
          <STYLES.UserPhoto src="https://i2.wp.com/airlinkflight.org/wp-content/uploads/2019/02/male-placeholder-image.jpeg?resize=500%2C500&ssl=1"></STYLES.UserPhoto>
          <STYLES.UserInfo>
            <STYLES.UserData>
              <STYLES.UserName>{user.username}</STYLES.UserName>
              <STYLES.UserEmail>{user.email}</STYLES.UserEmail>
            </STYLES.UserData>
            <STYLES.UserID>{user.uid}</STYLES.UserID>
          </STYLES.UserInfo>
          <GLOBSTYLES.StyledButton>Remove</GLOBSTYLES.StyledButton>
        </STYLES.UserItem>
      ))}
    </STYLES.ListOfUsers>
  </STYLES.UsersListWrapper>
);

const condition = authUser => authUser && authUser.roles.includes(ROLES.ADMIN);

export default compose(withAuthorization(condition), withFirebase)(AdminPage);
