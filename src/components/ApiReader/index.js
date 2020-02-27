import React from 'react';
import { countries } from './miscData.js';

import { apiKey, baseUrl, stockExchange } from '../../constants/urls';

import { filterSymbol } from './usStocks';

import { companyObjects, urlKeys, urlValues, hej } from './recommendationTrends.js'; // {AAPL: http...}
import { sendMessage } from '../../constants/functions';
import axios from 'axios';
import rateLimit from 'axios-rate-limit';
import StockCard from '../StockCard';

import Charts from '../Charts'



//const http = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 4000, maxRPS: 2 })
const http = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 1000, maxRPS: 2 })
http.getMaxRPS() // 2

const companySymbols = Object.keys(companyObjects); // ['AAPL',...]
const lastSymbol = companySymbols[companySymbols.length - 1];
const lastUrl = urlKeys[urlKeys.length - 1];
const urls = Object.values(companyObjects); // [['Http:...'...],['Http:...'...]]

class ApiReader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterObject: {}
        };
        this.companySymbols = companySymbols;
        this.lastSymbol = lastSymbol;
        this.lastUrl = lastUrl;
        this.buildMasterObject = this.buildMasterObject.bind(this)
        //this.changeTime = this.changeTime.bind(this)
    }

    buildMasterObject() {
        return this.state.masterObject
    }

    async componentDidMount() {
        // todo: read users stocks from firebase
        let flattenedUrl = urls.flat(); // [url,url,url]
        const masterObject = {}
        //const urlKeys = ['quotes', 'priceTargets', 'news', 'recs'];
        companySymbols.forEach(symbol => { // ['AA', 'AAPL',]
            ////console.log (companyObjects[symbol])
            const urls = companyObjects[symbol];

            urls.map(async (url, index) => {
                const legend = urlKeys[index];
                try {
                    const result = await http.get(url)
                    masterObject[symbol] = { ...masterObject[symbol], [legend]: result.data }
                    console.log(masterObject);
                    this.setState({ masterObject: masterObject })
                } catch (error) {
                    console.log(error);
                }
            })
        })
    }
    render() {

        if (this.state.masterObject[lastSymbol]) {
            console.log(this.lastSymbol)
            let dataPoints = this.state.masterObject;
            let AAPLData = dataPoints['AAPL'];
            console.log(dataPoints['AAPL']['quoteUrl'].h);
            console.log(Object.values(dataPoints));
            console.log(Object.keys(this.buildMasterObject()), Object.values(this.buildMasterObject()).map(data => data.priceTarget))


            let chartData = {
                labels: ['A', 'AA', 'AAPL'],
                datasets: [
                    {
                        label: 'Quote',
                        data: [dataPoints['A']['quoteUrl'].h, dataPoints['AA']['quoteUrl'].h, dataPoints['AAPL']['quoteUrl'].h],
                        backgroundColor: [
                            'rgb(247, 166, 74)',
                            'rgb(248, 182, 106)',
                            'rgb(249, 198, 139)',
                        ]
                    }
                ]
            };



            return (
                <div>
                    {this.state.masterObject[this.lastSymbol] ? this.state.masterObject[this.lastSymbol].hasOwnProperty(this.lastUrl) ? 'HEJ' : '' : ''}
                    <Charts chartData={chartData} />
                    <StockCard data={this.state.masterObject} />
                </div>
            )

        } else {
            return ""
        }
    }

}


export default ApiReader;