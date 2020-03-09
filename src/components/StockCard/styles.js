import styled from "styled-components";

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
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const StockItemMain = styled.div`
  min-height: 120px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StockItemButton = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
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
