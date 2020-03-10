import styled from "styled-components";
import { Link } from "react-router-dom";
import handelsbanken from "../../img/handelsbanken.svg";
import nordea from "../../img/nordea.svg";
import * as UI from "../Styles/ui";

/* LOGO */

export const Nordea = nordea;
export const Handelsbanken = handelsbanken;

/* Basic Positioning */

export const TextRight = styled.p`
  text-align: right;
`;

export const MainWrapper = styled.div`
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
    grid-template-areas: "navuser" "main" "navpage";
  }
`;

export const GridMain = styled.div`
  /* grid-area: main; */
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
  color: ${UI.white};
  flex-shrink: 0;
  background-color: ${UI.primary};
  @media (max-width: 600px) {
    display: none;
  }
`;

export const GridNavUser = styled.div`
  grid-area: navuser;
  width: 100%;
  display: flex;
  z-index: 1000;
  @media (max-width: 600px) {
    position: fixed;
  }
`;

export const PageNavWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    height: auto;
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
  background-color: ${UI.primary};
  @media (max-width: 600px) {
    flex-grow: 0;
    width: 100vw;
    height: 80px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 500;
    background-color: ${UI.primary};
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
  font-size: ${UI.mainfontsize};
  margin-bottom: 30px;
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  font-size: ${UI.mainfontsize};
  padding: 15px 20px;
  margin-bottom: 2vmin;
  background-color: #f7f7f7;
  border: 1px solid ${UI.white};
  border-radius: 5px;
  outline: 0;
  &:hover {
    border: 1px solid ${UI.accent};
    transition: border 0.5s;
  }
  &:focus {
    background-color: ${UI.lightgrey};
    border: 1px solid ${UI.accent};
    box-shadow: 0px 0px 2px 0px ${UI.accent};
  }
`;

export const StyledLabel = styled.label`
  font-size: ${UI.smallfontsize};
  line-height: 21px;
`;

/* LINK */

export const StyledA = styled.a`
  color: ${UI.accent};
  text-decoration: none;
  &:hover {
    color: #068ccc;
    transition: color 0.3s;
  }
`;
export const StyledLink = styled(Link)`
  color: ${UI.accent};
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
  font-size: ${UI.mainfontsize};
  font-weight: bold;
  line-height: 21px;
  color: ${UI.white};
  background-color: ${UI.accent};
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
  font-size: ${UI.mainfontsize};
  font-weight: bold;
  line-height: 21px;
  color: ${UI.white};
  text-decoration: none;
  background-color: ${UI.accent};
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
  font-size: ${UI.largefontsize};
  font-weight: bold;
  line-height: 26px;
  letter-spacing: 2px;
  color: ${UI.black};
`;

export const PageDesc = styled.p`
  margin: 0;
  padding: 0;
  font-size: ${UI.mainfontsize};
  line-height: 26px;
  letter-spacing: 1px;
  color: ${UI.black};
  opacity: 0.8;
`;
