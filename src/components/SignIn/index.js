import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { compose } from "recompose";
/* import { SignUpLink } from "../SignUp"; */
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import styled from "styled-components";
import image from "../../img/finance.svg";
import { AuthUserContext } from "../Session";
import {
  FormContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledButton
} from "../Styles";

const SignInPage = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <Redirect to="/home" />
      ) : (
        <PageWrapper>
          <Container>
            <FormWrapper>
              <h1>Sign in</h1>
              <FormContainer>
                <SignInGoogle />
                <Divider>
                  <DividerText>or</DividerText>
                </Divider>
                <SignInForm />
              </FormContainer>
              <PasswordForgetLink />
              {/* <SignUpLink /> */}
            </FormWrapper>
            <ImageWrapper>
              <Image src={image} alt="Image"></Image>
            </ImageWrapper>
          </Container>
        </PageWrapper>
      )
    }
  </AuthUserContext.Consumer>
);
const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
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
  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";
    return (
      <StyledForm onSubmit={this.onSubmit}>
        <StyledLabel htmlFor="email">Email Address</StyledLabel>
        <StyledInput
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        ></StyledInput>
        <StyledLabel htmlFor="password">Password</StyledLabel>
        <StyledInput
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        ></StyledInput>
        <StyledButton disabled={isInvalid} type="submit">
          Sign In
        </StyledButton>
        {error && <p>{error.message}</p>}
      </StyledForm>
    );
  }
}
class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  onSubmit = event => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.user.displayName,
          email: socialAuthUser.user.email,
          roles: []
        });
      })
      .then(socialAuthUser => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  render() {
    const { error } = this.state;
    return (
      <FormGoogle onSubmit={this.onSubmit}>
        <ButtonGoogle type="submit">Sign In with Google</ButtonGoogle>
        {error && <p>{error.message}</p>}
      </FormGoogle>
    );
  }
}
const SignInGoogle = compose(withRouter, withFirebase)(SignInGoogleBase);
const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);
const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const Container = styled.div`
  width: 70%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  @media (max-width: 1012px) {
    flex-direction: column;
  }
`;
const FormWrapper = styled.div`
  margin-right: 10%;
`;
const FormGoogle = styled(StyledForm)`
  margin-bottom: 3vmin;
`;
const ButtonGoogle = styled(StyledButton)`
  background-color: #334ecd;
  &:hover {
    background-color: #4760d2;
  }
`;
const ImageWrapper = styled.div`
  @media (max-width: 1012px) {
    order: 1;
  }
`;

const Image = styled.img`
  width: 30vw;
`;
const Divider = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;
  margin-bottom: 3vmin;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    border-top: solid 1px rgba(0, 0, 0, 0.2);
    z-index: -1;
  }
`;
const DividerText = styled.span`
  margin: 0;
  padding: 0 10px;
  background: #fff;
  display: inline-block;
`;
export default SignInPage;
export { SignInForm, SignInGoogle };
