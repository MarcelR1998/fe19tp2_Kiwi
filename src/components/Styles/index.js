import styled from "styled-components";
import { Link } from "react-router-dom";

/* Positioning */

export const TextRight = styled.p`
  text-align: right;
`;

/* FORM */

export const FormContainer = styled.div`
  width: 30vw;
  @media (max-width: 1012px) {
    width: 50vw;
  }
  @media (max-width: 768px) {
    width: 70vw;
  }
  @media (max-width: 500px) {
    width: 90vw;
  }
  margin-right: auto;
  margin-left: auto;
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
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

export const StyledLabel = styled.label`
  font-size: 12px;
  line-height: 21px;
`;

/* LINK */

export const StyledA = styled.a`
  color: #00b0ff;
  text-decoration: none;
  &:hover {
    color: #068ccc;
    transition: color 0.3s;
  }
`;
export const StyledLink = styled(Link)`
  color: #00b0ff;
  text-decoration: none;
  &:hover {
    color: #068ccc;
    transition: color 0.3s;
  }
`;

/* BUTTON */

export const StyledButton = styled.button`
  padding: 12px 15px;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  color: ${props => (props.disabled ? "#f2f2f2" : "#fff")};
  background-color: #00b0ff;
  border: 0;
  border-radius: 5px;
  opacity: ${props => (props.disabled ? "0.5" : "1")};
  cursor: ${props => (props.disabled ? "default" : "pointer")};

  &:hover {
    background-color: ${props => (props.disabled ? "" : "#009ee6")};
    transition: background-color 0.5s;
  }
`;
