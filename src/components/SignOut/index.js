import React from "react";
import { withFirebase } from "../Firebase";
import styled from "styled-components";

const SignOutButton = ({ firebase }) => (
  <StyledButton type="button" onClick={firebase.doSignOut}>
    Sign&nbsp;Out
  </StyledButton>
);

const StyledButton = styled.div`
  display: block;
  padding: 10px 15px;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
    transition: background-color 0.3s;
  }
  @media (max-width: 600px) {
    position: absolute;
    right: 10px;
    top: 10px;
    color: #fff;
    &:hover {
      background-color: transparent;
      opacity: 0.7;
      transition: opacity 0.4s;
    }
    &:after {
      content: "\f2f5";
      position: absolute;
      left: -15px;
      top: 50%;
      transform: translateY(-50%);
      font-family: "Font Awesome 5 Pro";
      font-weight: 900;
      font-size: 24px;
    }
  }
`;

export default withFirebase(SignOutButton);
