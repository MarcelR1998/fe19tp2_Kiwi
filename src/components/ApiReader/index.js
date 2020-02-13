import React from 'react';
import { countries } from './miscData.js';

import { apiKey, baseUrl, stockExchange } from '../../constants/urls';

import { filterSymbol } from './usStocks';

class ApiReader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {

        const getCountry = (country) => {

            let exchangeCode = countries.find(item =>
                item.name == country
                /*   if (item.name == country) {
                      console.log(item.code);
                      return item.code */
            )
            return exchangeCode.code;
        }

        let countryCode = getCountry("US exchanges");

        let url = baseUrl + stockExchange + countryCode + apiKey;
        console.log(countryCode)
        console.log(url)
        this.setState({
            isLoaded: true,
        });
        return;
        fetch(url)
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        isLoaded: true,
                        items: res
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    getCompanyCode(companyName) {

        let companyCode = this.state.items.find(item =>
            item.description == companyName
            /*   if (item.name == country) {
                  console.log(item.code);
                  return item.code */
        )
        console.log(companyCode);
        return companyCode;
    }

    getStock() {
        const myVal = filterSymbol('QTUMUSDT')[0];
        console.log(myVal);
        return myVal.description
    }
    render() {

        const { error, isLoaded, items } = this.state;
        console.log(items);

        this.getCompanyCode("UBS-ETF MSCI CANADA/GBP")
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>HEJ!{this.getStock()}DÅ</div>
            )
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
}

export default ApiReader;