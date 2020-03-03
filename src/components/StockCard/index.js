import React, { useReducer, useState } from "react";
import styled from "styled-components";
import Charts from "../Charts/index.js";
import ApiReader from "../ApiReader";

let user = {
  stocks: [
    { symbol: "AAPL", amount: 5 },
    { symbol: "KIWI CO", amount: 74 }
  ],
  bio: "I like walking my dog and becoming rich trading stocks",
  userID: 123
};

let chartData = {
  labels: ["A", "AA", "AAPL"],
  datasets: [
    {
      label: "Quote",
      data: [2, 2, 3],
      backgroundColor: [
        "rgb(247, 166, 74)",
        "rgb(248, 182, 106)",
        "rgb(249, 198, 139)"
      ],
      fill: false,
      borderWidth: 2,
      backgroundColor: "rgba(0, 240, 233, 1)",
      borderColor: "rgba(0, 0, 250)",
      pointBorderWidth: 5
    }
  ]
};

const StockCards = props => {
  return (
    <StockList>
      {user.stocks.map(stock => (
        <StockItem key={user.userID}>
          <div>
            <Symbol key={user.stocks.bio}>{stock.symbol}</Symbol>
            <StyledCharts chartData={chartData}></StyledCharts>
          </div>
          <Amount key={user.bio}>{stock.amount}</Amount>
        </StockItem>
        /*         <StockItem key={user.userID}>
          <Symbol key={user.stocks.bio}>{stock.symbol}</Symbol>
          <Amount key={user.bio}>{stock.amount}</Amount>
          <StyledCharts chartData={chartData}></StyledCharts>
        </StockItem> */
      ))}
    </StockList>
  );
};

const StockList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StockItem = styled.li`
  display: flex;
`;

/* const StockItem = styled.li`
display: grid;
grid-template-columns: 1fr 2fr;
grid-template-rows: 1fr 1fr;
grid-template-areas:
"symbol chart"
"amount chart"
;
padding: 20px;
max-width: fit-content;
border-radius: 10px;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
margin: 1em;

`; */

const Symbol = styled.div`
  grid-area: symbol;
  display: flex;
  justify-content: center;
  padding-inline-start: 20px;
`;

const Amount = styled.div`
  grid-area: amount;
`;

const StyledCharts = styled(Charts)`
  grid-area: chart;
`;

export default StockCards;
