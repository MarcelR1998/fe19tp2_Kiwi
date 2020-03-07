import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import { StyledLink, TextRight } from "../Styles";
import styled from "styled-components";
import {
  FormContainer,
  StyledForm,
  StyledInput,
  FormTitle,
  FormDesc,
  StyledLabel,
  StyledButton
} from "../Styles";

const PasswordForgetPage = () => (
  <div>
    <PasswordForgetForm />
  </div>
);
const INITIAL_STATE = {
  email: "",
  error: null
};
class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;
    const isInvalid = email === "";
    return (
      <Wrapper>
        <FormContainer>
          <FormTitle>Restore Password</FormTitle>
          <FormDesc>Enter an email address you use to sign in.</FormDesc>
          <StyledForm onSubmit={this.onSubmit}>
            <StyledLabel htmlFor="email">Email Address</StyledLabel>
            <StyledInput
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            ></StyledInput>
            <StyledButton disabled={isInvalid} type="submit">
              Reset My Password
            </StyledButton>
            {error && <p>{error.message}</p>}
          </StyledForm>
        </FormContainer>
      </Wrapper>
    );
  }
}
const PasswordForgetLink = () => (
  <TextRight>
    <StyledLink to={ROUTES.PASSWORD_FORGET}>Forgot Password?</StyledLink>
  </TextRight>
);
export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

const Wrapper = styled.div`
  margin-top: 10vmin;
`;

export { PasswordForgetForm, PasswordForgetLink };
