import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import { Link, withRouter, Redirect } from "react-router-dom";
import { compose } from "recompose";
import { AuthUserContext } from "../Session";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import styled from "styled-components";
import { StyledButtonLink } from "../Styles";
import {
  FormContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledButton
} from "../Styles";

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  isAdmin: false,
  error: null
};

const SignUpPage = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <Redirect to="/home" />
      ) : (
        <FormContainer>
          <h1>Add a new user</h1>
          <SignUpForm />
        </FormContainer>
      )
    }
  </AuthUserContext.Consumer>
);

const stocklist = [
  {
    description: "APPLE INC",
    displaySymbol: "AAPL",
    symbol: "AAPL"
  },
  {
    description: "ALPHABET INC-CL A",
    displaySymbol: "GOOGL",
    symbol: "GOOGL"
  },
  {
    description: "SPOTIFY TECHNOLOGY SA",
    displaySymbol: "SPOT",
    symbol: "SPOT"
  }
];

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { username, email, passwordOne, isAdmin } = this.state;
    const roles = [];
    if (isAdmin) {
      roles.push(ROLES.ADMIN);
    }
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
          roles,
          stocklist
        });
      })
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };
  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAdmin,
      error
    } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";
    return (
      <StyledForm onSubmit={this.onSubmit}>
        <StyledLabel htmlFor="username">Full Name</StyledLabel>
        <StyledInput
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        ></StyledInput>
        <StyledLabel htmlFor="email">E-mail</StyledLabel>
        <StyledInput
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        ></StyledInput>
        <StyledLabel htmlFor="passwordOne">Password</StyledLabel>
        <StyledInput
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        ></StyledInput>
        <StyledLabel htmlFor="passwordTwo">Confirm Password</StyledLabel>
        <StyledInput
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        ></StyledInput>
        <StyledLabelAdmin>
          Admin:
          <input
            name="isAdmin"
            type="checkbox"
            checked={isAdmin}
            onChange={this.onChangeCheckbox}
          />
        </StyledLabelAdmin>
        <StyledButton disabled={isInvalid} type="submit">
          Add user
        </StyledButton>
        {error && <p>{error.message}</p>}
      </StyledForm>
    );
  }
}

const SignUpLink = () => (
  <div>
    <StyledButtonLink to={ROUTES.SIGN_UP}>
      <i class="fas fa-plus"></i> <span>Add User</span>
    </StyledButtonLink>
  </div>
  /* <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p> */
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

const StyledLabelAdmin = styled(StyledLabel)`
  font-size: 14px;
  padding: 0 0 20px;
`;

export default SignUpPage;
export { SignUpForm, SignUpLink };
