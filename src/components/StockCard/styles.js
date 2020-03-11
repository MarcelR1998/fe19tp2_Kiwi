import styled from "styled-components";

export const StockListWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  flex-grow: 1;
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
  width: 25%;
  padding: 10px;
  @media (max-width: 1200px) {
    width: 45%;
  }
  @media (max-width: 1012px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    width: 90%;
  }
`;

export const StockItemMain = styled.div`
  position: relative;
  min-height: 170px;
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
  font-size: 15px;
`;

export const StockItemGain = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 20px;
  width: 100%;
  margin: 0px;
  background-color: #8bc34a;
  background-color: ${props => (props.loose ? "#E53935" : "#8bc34a")};
  border: 0;
  box-sizing: border-box;
  border-radius: 0px 0px 10px 10px;
`;

export const StockSymbol = styled.span`
  padding-bottom: 5px;
  font-family: "Roboto";
  font-style: bold;
  font-weight: 900;
  font-size: 24px;
  color: #333;
`;

export const StockDesc = styled.span`
  position: absolute;
  top: 50px;
  left: 20px;
  padding-bottom: 15px;
  color: #333;
  font-family: "Roboto";
  font-style: medium;
  font-size: 12px;
  color: #666;
  white-space: nowrap;
`;

export const StockValue = styled.span`
  font-family: "Roboto";
  font-size: 30px;
  position: absolute;
  top: 103px;
  left: 20px;
  letter-spacing: 1px;
  color: #333;
`;
export const StockValueOwned = styled.span`
  font-family: "Roboto";
  font-size: 30px;
  position: absolute;
  top: 166px;
  left: 20px;
  font-weight: 600;
  line-height: 0.7;
  letter-spacing: 1px;
  color: #333;
  margin-bottom: 10px;
`;

export const StockLabel = styled.span`
  display: block;
  position: absolute;
  top: 89px;
  left: 20px;
  margin-bottom: 5px;
  font-family: "Roboto";
  font-size: 12px;
  color: #666;
`;
export const StockLabel2 = styled.span`
  display: block;
  position: absolute;
  top: 144px;
  left: 20px;
  margin-bottom: 5px;
  font-family: "Roboto";
  font-size: 12px;
  color: #666;
`;
export const StockLabel3 = styled.span`
  display: block;
  position: absolute;
  top: 144px;
  right: 18px;
  margin-bottom: 5px;
  font-family: "Roboto";
  font-size: 12px;
  color: #666;
`;

export const StockCurrency = styled.span`
  display: block;
  position: absolute;
  top: 108px;
  left: 12px;
  padding: 0 5px 0 0;
  font-family: "Roboto";
  font-size: 12px;
  vertical-align: top;
  color: #999;
`;
export const StockCurrency2 = styled.span`
  display: block;
  position: absolute;
  top: 164px;
  left: 12px;
  padding: 0 5px 0 0;
  font-family: "Roboto";
  font-size: 12px;
  vertical-align: top;
  color: #999;
`;

export const StockAmountInput = styled.input`
  width: 33px;
  height: 25px;
  position: absolute;
  top: 160px;
  right: 20px;
  line-height: 2;
  font-family: "Roboto";
  font-size: 14px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const StockValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const HrLine = styled.div`
  display: block;
  position: absolute;
  top: 76px;
  right: 20px;
  left: 20px;

  justify-content: center;
  max-width: 95%;

  border: 0.25px solid #c4c4c4;
`;
