import React, { useReducer, useState } from 'react';
import styled from "styled-components";
import Charts from '../Charts/index.js';
import ApiReader, { buildMasterObject } from '../ApiReader/index.js';

let user = {
    stocks: [{ symbol: "AAPL", amount: 5 }, { symbol: "KIWI CO", amount: 74 },],
    bio: "I like walking my dog and becoming rich trading stocks",
    userID: 123
}

/* let chartData = {
    labels: ['A', 'AA', 'AAPL'],
    datasets: [
        {
            label: 'Quote',
            data: [2, 2, 3],
            backgroundColor: [
                'rgb(247, 166, 74)',
                'rgb(248, 182, 106)',
                'rgb(249, 198, 139)',
            ],
            fill: false,
            borderWidth: 2,
            backgroundColor: 'rgba(0, 240, 233, 1)',
            borderColor: 'rgba(0, 0, 250)',
            pointBorderWidth: 5
        }
    ]
};
 */
const StockCards = ({ data, history }) => {
    /* console.log(history.forEach(symbol => console.log(symbol))) */
    const makeDataArray = Object.keys(data).map(key => data[key].quoteUrl.c)
    let chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: 'Quote',
                data: makeDataArray,
                backgroundColor: [
                    'rgb(247, 166, 74)',
                    'rgb(248, 182, 106)',
                    'rgb(249, 198, 139)',
                ],
                fill: false,
                borderWidth: 2,
                backgroundColor: 'rgba(0, 240, 233, 1)',
                borderColor: 'rgba(0, 0, 250)',
                pointBorderWidth: 5
            }
        ]
    };


    return (
        <StockList>
            {user.stocks.map((stock, index) =>
                <StockItem key={index}>
                    <Symbol>{stock.symbol}</Symbol>
                    <Amount>{stock.amount}</Amount>
                    <StyledCharts chartData={chartData}></StyledCharts>
                </StockItem>
            )}

        </StockList>
    )
};

const StockList = styled.ul`
display: flex;
list-style: none;
margin: 0;
padding: 0;
`;

const StockItem = styled.li`
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

`;

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