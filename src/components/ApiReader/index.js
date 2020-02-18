import React from 'react';
import { countries } from './miscData.js';

import { apiKey, baseUrl, stockExchange } from '../../constants/urls';

import { filterSymbol } from './usStocks';

import { companyObjects as companyNames } from './recommendationTrends.js'; // {AAPL: http...}



class ApiReader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /* error: null,
            isLoaded: false, */
            /* items: [] */
        };
    }

    componentDidMount() {

        /*     const getCountry = (country) => {
    
                let exchangeCode = countries.find(item =>
                    item.name == country */
        /*   if (item.name == country) {
              console.log(item.code);
              return item.code */
        /*    )
           return exchangeCode.code;
       } */

        /* let countryCode = getCountry("US exchanges"); */

        /* let urls = companyNames.map(url => fetch(url)); */

        console.log(companyNames) // [{AAPL: http...},...]
        const symbols = Object.keys(companyNames); // ['AAPL',...]
        const urls = Object.values(companyNames); // ['Http:...'...]
        let newState = []
        return (

            Promise.all(urls.map((url, index) =>
                fetch(url)
                    .then(res => res.json())
                    .then(
                        (res) => {
                            const symbol = symbols[index];
                            this.setState({
                                [symbol]: res
                            });


                            /*  this.setState({
 
                                 items: {
                                     res
                                 }); */
                            //console.log(res);
                        },

                    )
            )
            )
        )
    }


    /*  getCompanyCode(companyName) {
     
         let companyCode = this.state.items.find(item =>
             item.description == companyName
             
         )
         console.log(companyCode);
         return companyCode;
     } */

    /* getStock(companyDescription) {
        const myVal = filterSymbol(companyDescription)[0];
        console.log(myVal);
        return myVal.symbol;
    } */
    render() {
        if (this.state) {
            const { items } = this.state;
            const symbols = Object.keys(this.state);
            const stocks = Object.values(this.state);
            const newArray = [this.state['A'], this.state['AA']];
            console.log(stocks);
            console.log(symbols);
            console.log(newArray);
            let flat = stocks.reduce((acc, it) => [...acc, ...it], []);

            console.log(stocks.forEach(item => console.log(item)));
            let printThisShit = flat.map((item) => <li key={item.symbol + item.period}>{item.buy} + {item.symbol}</li>)
            let printThisGentleman = symbols.map(symbol => this.state[symbol]).map(arr => arr.map((item) => <li key={item.symbol + item.period}>{item.buy} + {item.symbol}</li>));

            /* if (error) {
                return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
                return <div>Loading...</div>;
            } else { */
            return (this.state && (
                <ul>
                    {printThisGentleman}
                </ul>)
            );
        } else {
            return '';
        }
        /* (
            <ul>
                {
                    items.map(item => (
                        <li key={item.symbol}>
                            {item.symbol}
                        </li>
                    ))
                }
            </ul>
        ); */
    }
}


export default ApiReader;