import styled from "styled-components";
import { StyledLink } from "../Styles";

export const LinkBack = styled(StyledLink)`
  display: inline-block;
  margin: 20px 25px 0;
`;

export const StockChart = styled.div`
  width: 60%;
  margin: 0 auto;
  @media (max-width: 1012px) {
    width: 80%;
  }
  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const StockTitle = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2px;
  color: #333;
  text-align: center;
`;

export const StockDesc = styled.p`
  margin: 0;
  margin-bottom: 15px;
  padding: 0;
  font-size: 14px;
  letter-spacing: 2px;
  color: #888;
  text-align: center;
`;
