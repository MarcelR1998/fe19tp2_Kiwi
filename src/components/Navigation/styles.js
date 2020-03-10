import styled from "styled-components";
import { Link } from "react-router-dom";
import * as UI from "../Styles/ui";

export const Nav = styled.div``;

export const NavUser = styled.div`
  padding: 0 25px;
  position: relative;
  flex-grow: 1;
  height: 60px;
  background-color: ${UI.lightgrey};
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    /* display: none; */
  }
`;

export const TopSearch = styled.div`
  flex-grow: 1;
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const NavItem = styled.li`
  margin-bottom: 15px;
  text-align: center;
  &:hover {
    background-color: ${UI.primaryhover};
    @media (max-width: 600px) {
      background-color: unset;
      opacity: 0.7;
    }
  }
  &:focus {
    @media (max-width: 600px) {
      background-color: unset;
      opacity: 0.7;
    }
  }
`;

export const NavLink = styled(Link)`
  width: 70px;
  position: relative;
  display: block;
  padding: 50px 25px 15px;
  font-size: ${UI.mainfontsize};
  color: ${UI.white};
  text-align: center;
  text-decoration: none;
  @media (max-width: 600px) {
    padding: 50px 0px 0px;
    width: auto;
  }
  &:before {
    position: absolute;
    content: "";
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-family: "Font Awesome 5 Pro";
    font-weight: 900;
    font-size: 24px;
    @media (max-width: 600px) {
      top: 20px;
      font-size: 20px;
    }
  }
`;

export const LogoImg = styled.img`
  width: 80%;
`;
