import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledButton,
  FormTitle,
  FormDesc
} from "../Styles";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { passwordOne } = this.state;
    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";
    return (
      <StyledForm onSubmit={this.onSubmit}>
        <FormTitle>Reset Password</FormTitle>
        <FormDesc>Enter a new password to change it.</FormDesc>
        <StyledLabel htmlFor="email">New Password</StyledLabel>
        <StyledInput
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="New Password"
        ></StyledInput>
        <StyledLabel htmlFor="email">Confirm New Password</StyledLabel>
        <StyledInput
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm New Password"
        ></StyledInput>
        <StyledButton disabled={isInvalid} type="submit">
          Reset My Password
        </StyledButton>
        {error && <p>{error.message}</p>}
      </StyledForm>
    );
  }
}
export default withFirebase(PasswordChangeForm);
