import React from 'react';
import { countries } from './miscData.js';

import { apiKey, baseUrl, stockExchange } from '../../constants/urls';

import { filterSymbol } from './usStocks';

import { companyObjects } from './recommendationTrends.js'; // {AAPL: http...}
import Charts from '../Charts'

class ApiReader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    buildMasterObject() {

    }
    componentDidMount() {
        const companySymbols = Object.keys(companyObjects); // ['AAPL',...]
        const urls = Object.values(companyObjects); // ['Http:...'...]
        console.log(companySymbols)
        return (

            Promise.all(urls.map((url, index) =>
                fetch(url)
                    .then(res => res.json())
                    .then(
                        (res) => {
                            const companySymbol = companySymbols[index];
                            this.setState({
                                [companySymbol]: res
                            });
                        },
                    ))
            )
        )

    }

    render() {

        if (this.state) {
            const stocks = Object.values(this.state);
            const companySymbols = Object.keys(this.state);

            console.log(companySymbols);
            let printThisGentleman = companySymbols.map(companySymbol => this.state[companySymbol]);
            let dataPoints = stocks.map(stock => stock.map(stock => stock.period));
            let dataPoints2 = stocks.map(stock => stock.map(stock => stock.buy));
            console.log(dataPoints[0]);
            console.log(printThisGentleman)
            /*
                        {APple: {2012-12-12: 23, ...},
                        Google: {}}
                        */

            let chartData = {
                labels: dataPoints[0],
                datasets: [
                    {
                        label: 'Apple',
                        data: dataPoints2[0],
                    }
                ]
            };




            console.log(chartData.labels);
            return (
                <div>
                    <Charts chartData={chartData} />
                </div>
            )

        } else {
            return ""
        }

        /*    if (this.state) {
               const { items } = this.state;
               const stocks = Object.values(this.state);
               const symbols = Object.keys(this.state);
   
               let printThisGentleman = symbols.map(symbol => this.state[symbol]).map(arr => arr.map((item) => <li key={item.symbol + item.period}>{item.buy} + {item.symbol}</li>));
   
               return (this.state && (
                   <ul>
                       {printThisGentleman}
   
                   </ul>)
               );
           } else {
               return '';
           } */
    }

}


export default ApiReader;