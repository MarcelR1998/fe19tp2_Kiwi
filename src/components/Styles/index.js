import styled from "styled-components";
import { Link } from "react-router-dom";

/* Basic Positioning */

export const TextRight = styled.p`
  text-align: right;
`;

/* Page Grid */

export const PageGrid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 120px auto;
  grid-template-areas: "navbanner usernav" "navpage main";
  @media (max-width: 700px) {
    height: auto;
    grid-template-rows: auto;
    grid-template-columns: auto;
    grid-template-areas: "navbanner" "usernav" "main" "navpage";
  }
`;

export const GridMain = styled.div`
  grid-area: main;
  overflow: scroll;
  @media (max-width: 700px) {
    overflow: auto;
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
`;

export const GridNavUser = styled.div`
  grid-area: navuser;
  display: flex;
`;

export const PageNavWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
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
  @media (max-width: 700px) {
    width: 100vw;
    height: 80px;
    position: fixed;
    bottom: 0;
    left: 0;
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
  @media (max-width: 500px) {
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
  margin-bottom: 45px;
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

/* STOCK LIST & STOCK ITEMS*/

export const StockListWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const StyledStockList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const StockListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 10px;
  @media (max-width: 1200px) {
    width: 29%;
  }
  @media (max-width: 1012px) {
    width: 45%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const StockItemMain = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px 20px 30px;
  border-radius: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
    transition: transform 0.4s;
  }
`;

export const StockItemData = styled.div`
  flex-grow: 1;
`;

export const StockItemButton = styled.div`
  width: 35px;
`;

export const StockItemGain = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 20px;
  width: 100%;
  margin: 0px;
  background-color: #8bc34a;
  border: 0;
  box-sizing: border-box;
  border-radius: 0px 0px 10px 10px;
`;

export const StockSymbol = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 5px;
  font-family: "Roboto";
  font-style: bold;
  font-weight: 900;
  font-size: 24px;
  color: #333;
`;

export const StockDesc = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 15px;
  color: #333;
  font-family: "Roboto";
  font-style: medium;
  font-size: 12px;
  color: #666;
  white-space: nowrap;
`;

export const StockValue = styled.p`
  margin: 0;
  padding: 0;
  font-family: "Roboto";
  font-style: bold;
  font-weight: 500;
  font-size: 40px;
  color: #333;
`;
