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
  /*   position: relative;
  display: block;
  padding: 50px 25px 15px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  &:before {
    content: "\f2f5";
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-family: "Font Awesome 5 Pro";
    font-weight: 900;
    font-size: 24px;
  } */
`;

export default withFirebase(SignOutButton);
