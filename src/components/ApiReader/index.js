import React from 'react';
import { countries } from './miscData.js';

import { apiKey, baseUrl, stockExchange } from '../../constants/urls';

import { filterSymbol } from './usStocks';

import { companyObjects, urlKeys, urlValues, hej } from './recommendationTrends.js'; // {AAPL: http...}
import { sendMessage } from '../../constants/functions';
import axios from 'axios';
import rateLimit from 'axios-rate-limit';

import Charts from '../Charts'

//const http = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 4000, maxRPS: 2 })
const http = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 1000, maxRPS: 2 })
http.getMaxRPS() // 2

class ApiReader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.buildMasterObject = this.buildMasterObject.bind(this)

    }

    buildMasterObject() {
        // för varje företag i statet ("a", "aa")

    }
    oldComponentDidMount() {
        const companySymbols = Object.keys(companyObjects); // ['AAPL',...]
        console.log(companySymbols);
        const urls = Object.values(companyObjects); // ['Http:...'...]
        /* let newList = [];
        urls.forEach(item => item.forEach(url => newList.push(url))); */
        console.log(companyObjects);

        let flattenedUrl = urls.flat();
        console.log(flattenedUrl);
        return (
            Promise.all(flattenedUrl.map((url, index) =>
                fetch(url)
                    .then(res => res.json())
                    .then(
                        (res) => {
                            const companySymbol = companySymbols[index];
                            console.log(companySymbol);
                            this.setState({
                                [companySymbol]: res
                            });
                        },
                    ))

            )
        )

    }
    componentDidMount() {
        const companySymbols = Object.keys(companyObjects); // ['AAPL',...]
        console.log(companySymbols);
        const urls = Object.values(companyObjects); // [['Http:...'...],['Http:...'...]]
        /* let newList = [];
        urls.forEach(item => item.forEach(url => newList.push(url))); */
        console.log(companyObjects); // ett objekt, med 3 keys, A, AA osv, där varje value är en array med 4 url.

        let flattenedUrl = urls.flat(); // [url,url,url]
        //console.log(flattenedUrl);
        const masterObject = {}
        companySymbols.forEach(symbol => { // ['AA', 'AAPL',]
            //console.log(companyObjects[symbol])
            const urls = companyObjects[symbol];

            urls.map((url, index) => {
                console.log(url, index, symbol)
                http.get(url)
                    .then(res => res.json())
                    .then(
                        (res) => {
                            console.log(res)
                            masterObject[symbol] = { ...masterObject[symbol], [index]: res }
                            console.log(masterObject);

                        }) // { AA: {1: res1, 2: res2}}

            })
            this.setState({ ...masterObject })
        })

        /*
                flattenedUrl.map((url, index) => // index gå från 0 till 12
                    http.get(url)
                        .then(res => res.json())
                        .then(
                            (res) => {
                                const companySymbol = companySymbols[index]; // 0-2 index
                                console.log(companySymbol);
                                this.setState({
                                    [companySymbol]: res
                                });
                            },
                        ).catch(error => console.log(error)))
        */
    }
    render() {

        if (this.state) {
            const stocks = Object.values(this.state);
            const companySymbols = Object.keys(this.state);

            console.log(stocks);
            /*    let printThisGentleman = companySymbols.map(companySymbol => this.state[companySymbol]); */
            /* let dataPoints = stocks.map(stock => stock.map(stock => stock.period));
            let dataPoints2 = stocks.map(stock => stock.map(stock => stock.buy));
            console.log(dataPoints[0]);
            console.log(printThisGentleman) */
            /*
                        {APple: {2012-12-12: 23, ...},
                        Google: {}}
                        */

            let chartData = {
                labels: [1, 2, 3],
                datasets: [
                    {
                        label: 'Apple',
                        data: [2, 3, 4],
                    }
                ]
            };



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