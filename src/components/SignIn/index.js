import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { compose } from "recompose";
import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import styled from "styled-components";
import image from "../../img/finance.svg";
import { AuthUserContext } from '../Session';
const SignInPage = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <Redirect to="/home" />) : <PageWrapper>
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
              <SignUpLink />
            </FormWrapper>
            <ImageWrapper>
              <Image src={image} alt="Image"></Image>
            </ImageWrapper>
          </Container>
        </PageWrapper>}
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
      <Form onSubmit={this.onSubmit}>
        <Label htmlFor="email">Email Address</Label>
        <Input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        ></Input>
        <Label htmlFor="password">Password</Label>
        <Input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        ></Input>
        <Button disabled={isInvalid} type="submit">
          Sign In
        </Button>
        {error && <p>{error.message}</p>}
      </Form>
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
`;
const FormWrapper = styled.div`
  margin-right: 10%;
`;
const FormContainer = styled.div`
  width: 30vw;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const FormGoogle = styled(Form)`
  margin-bottom: 3vmin;
`;
const Input = styled.input`
  font-size: 14px;
  padding: 15px 20px;
  margin-bottom: 2vmin;
  background-color: #f7f7f7;
  border: 1px solid #fff;
  border-radius: 5px;
  outline: 0;
  &:hover {
    border: 1px solid #00b0ff;
    transition: border 0.5s;
  }
  &:focus {
    background-color: #f2f2f2;
    border: 1px solid #00b0ff;
    box-shadow: 0px 0px 2px 0px #00b0ff;
  }
`;
const Label = styled.label`
  font-size: 12px;
  line-height: 21px;
`;
const Button = styled.button`
  padding: 12px 15px;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  color: #fff;
  background-color: #00b0ff;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #009ee6;
    transition: background-color 0.5s;
  }
`;
const ButtonGoogle = styled(Button)`
  background-color: #334ecd;
  &:hover {
    background-color: #4760d2;
  }
`;
const ImageWrapper = styled.div``;
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