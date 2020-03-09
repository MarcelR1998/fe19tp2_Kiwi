import styled from "styled-components";
import { Link } from "react-router-dom";

/* Basic Positioning */

export const TextRight = styled.p`
  text-align: right;
`;

export const MainWrapper = styled.p`
  margin-top: 60px;
  @media (max-width: 600px) {
    margin-top: 0;
  }
`;

/* Page Grid */

export const PageGrid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 120px auto;
  grid-template-areas: "navbanner usernav" "navpage main";
  overflow: hidden;
  @media (max-width: 600px) {
    height: auto;
    grid-template-rows: auto;
    grid-template-columns: auto;
    grid-template-areas: "navbanner" "usernav" "main" "navpage";
  }
`;

export const GridMain = styled.div`
  grid-area: main;
  overflow: auto;
  @media (max-width: 600px) {
    overflow: auto;
    margin-top: 0;
    margin-bottom: 120px;
  }
`;

export const GridNavBanner = styled.div`
  grid-area: navbanner;
  width: 120px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-shrink: 0;
  background-color: #039be5;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const GridNavUser = styled.div`
  grid-area: navuser;
  display: flex;
  z-index: 1000;
`;

export const PageNavWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 100vw;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const GridPageNav = styled.div`
  grid-area: navpage;
  width: 120px;
  height: 100%;
  flex-grow: 1;
  background-color: #039be5;
  @media (max-width: 600px) {
    width: 100vw;
    height: 80px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 500;
  }
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
  @media (max-width: 600px) {
    width: 90vw;
  }
  margin-right: auto;
  margin-left: auto;
`;

export const FormTitle = styled.h1`
  margin: 0;
  font-size: 26px;
`;

export const FormDesc = styled.p`
  font-size: 14px;
  margin-bottom: 30px;
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
  margin: 10px 0;
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

export const StyledButtonLink = styled(Link)`
  display: inline-block;
  margin: 10px 0;
  padding: 12px 15px;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  color: #fff;
  text-decoration: none;
  background-color: #00b0ff;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #009ee6;
    transition: background-color 0.5s;
  }
`;

/* Page Title */

export const PageTitleWrapper = styled.div`
  margin: 0;
  padding: 25px;
`;

export const PageTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-weight: bold;
  line-height: 26px;
  letter-spacing: 2px;
  color: #333;
`;

export const PageDesc = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 1px;
  color: #333;
  opacity: 0.8;
`;
