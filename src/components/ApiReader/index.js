import React from 'react';
import { countries } from './miscData.js';
import { apiKey, baseUrl, stockExchange } from '../../constants/urls';
import { filterSymbol } from './usStocks';
import { companyObjects, urlKeys, urlValues, hej, companyNamesFunc, companyObjectsFunc, stocklist } from './recommendationTrends.js'; // {AAPL: http...}
import { sendMessage } from '../../constants/functions';
import axios from 'axios';
import rateLimit from 'axios-rate-limit';
import Charts from '../Charts'
import StockCard from '../StockCard/index.js';
/* import UserStockList from '../UserStockList'; */
import { withFirebase } from '../Firebase';
import { unstable_batchedUpdates } from 'react-dom';
//const http = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 4000, maxRPS: 2 })
const http = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 1000, maxRPS: 2 })
http.getMaxRPS() // 2
let companySymbols = Object.keys(companyObjects); // ['AAPL',...]
let lastSymbol = companySymbols[companySymbols.length - 1];
let lastUrl = urlKeys[urlKeys.length - 1];
let urls = Object.values(companyObjects); // [['Http:...'...],['Http:...'...]]
let historyData = [];
let userStocks;
let lastSymbols;
class ApiReader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterObject: null,
            Loaded: false
        };
        this.companySymbols = companySymbols;
        this.lastSymbol = lastSymbol;
        this.lastUrl = lastUrl;
        this.buildMasterObject = this.buildMasterObject.bind(this);
        this.historyData = historyData;
        this.getSymbolData = this.getSymbolData.bind(this);
        //this.lastSymbols = lastSymbols;
        //this.changeTime = this.changeTime.bind(this)
    }
    buildMasterObject() {
        if (this.state.Loaded) {
            userStocks = this.state.masterObject;
            return userStocks
        }
    }
    componentDidMount() {
        if (this.props.uid) {

            /*  this.props.firebase.user(this.props.uid).once('value', snapshot => {
                 const initialStockObject = snapshot.val();
                 const initialStocklist = initialStockObject.stocklist;
                 if (initialStocklist) {
                     localStorage.setItem("data", JSON.stringify(initialStocklist))
                 } else { */




            this.props.firebase.user(this.props.uid).on('value', snapshot => {
                const stockObject = snapshot.val();
                const stocklist = stockObject.stocklist;
                //console.log()

                if (stocklist) {

                    const companyNames = companyNamesFunc(stocklist);
                    const companyObj = Object.assign({}, ...companyNames);
                    const companySymb = Object.keys(companyObj)
                    //urls = Object.values(companyObjects)
                    //console.log(urls)
                    this.getSymbolData(companyObj, companySymb);
                    lastSymbols = Object.keys(companyObj)[Object.keys(companyObj).length - 1];


                } else { /* localStorage.setItem("data", ["empty2"]) */ console.log('hej') }
            })



        } else { console.log('error') }



        /* stocklist.push({
            "description": "ATA CREATIVITY GLOBAL - ADR",
            "displaySymbol": "AACG",
            "symbol": "AACG"
        })
        console.log(stocklist)
        this.props.firebase.user(this.props.uid).update({ stocklist: stocklist }) */

    }
    componentWillUnmount() {
        this.props.firebase.user(this.props.uid).off();
    }
    async getSymbolData(companyObj, companySymb) {
        /*   console.log(companyObj)
          console.log(companySymb) */
        // todo: read users stocks from firebase
        /* let flattenedUrl = urls.flat();  */// [url,url,url]
        const masterObject = {}
        //const urlKeys = ['quotes', 'priceTargets', 'news', 'recs'];
        companySymb.forEach(symbol => { // ['AA', 'AAPL',]
            ////console.log (companyObjects[symbol])
            let urls = companyObj[symbol];
            urls.map(async (url, index) => {
                const legend = urlKeys[index];
                try {
                    const result = await http.get(url)
                    masterObject[symbol] = { ...masterObject[symbol], [legend]: result.data }
                    console.log(masterObject);
                    this.setState({
                        masterObject: masterObject,
                        Loaded: true
                    })
                } catch (error) {
                    console.log(error);
                }
            })
        })
    }
    /* CDM backup:
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
    */
    render() {
        /* const authUser = this.props.uid; */
        /* console.log(authUser); */
        console.log(lastSymbols)
        if (!this.state.masterObject) {
            return null
        }
        if (this.state.masterObject[lastSymbols]) {
            const LSdata = localStorage.getItem('data')
            if (LSdata) {
                if (Object.keys(JSON.parse(LSdata)).toString() !== Object.keys(this.state.masterObject).toString()) {
                    localStorage.setItem('data', JSON.stringify(this.state.masterObject));
                    console.log('local storage run')
                }
                else {
                    console.log('hello')
                }
            }
            else {
                //console.log("First run maybe LS set")
                localStorage.setItem('data', JSON.stringify(this.state.masterObject));
            }
        }
        /*  if (this.state.masterObject[lastSymbol]) {
             console.log(Object.keys(JSON.parse(localStorage.getItem('data'))).map(key => Object.keys(this.state.masterObject).some(e => e === key)))
         } else { console.log('local did not run') } */
        /* if (this.state.masterObject[lastSymbols]) {
            if (Object.keys(JSON.parse(localStorage.getItem('data'))).toString() !== Object.keys(this.state.masterObject).toString()) {
                localStorage.setItem('data', JSON.stringify(this.state.masterObject));
                console.log('local storage run')
            } else { console.log('hello') }
        }
        if (this.state.masterObject[lastSymbol]) {
            console.log(Object.keys(JSON.parse(localStorage.getItem('data'))).map(key => Object.keys(this.state.masterObject).some(e => e === key)))
        } */
        console.log(this.state.masterObject)
        if (/* this.state.masterObject[lastSymbol] */ this.state.Loaded) {
            /*    console.log(this.lastSymbol) */
            /*  let dataPoints = this.buildMasterObject();
             console.log(dataPoints) */
            /* console.log(this.state.masterObject.map(stock => stock)) */
            /*  console.log(dataPoints['AAPL']['quoteUrl'].h);
             console.log(Object.values(dataPoints));
             console.log(Object.keys(this.buildMasterObject()), Object.values(this.buildMasterObject()).map(data => data.priceTarget)) */
            /*    this.historyData.push(
                   {
                       A: dataPoints['A']['quoteUrl'],
                       date: dataPoints['A']['quoteUrl'].t
                   },
                   {
                       AA: dataPoints['AA']['quoteUrl'],
                       date: dataPoints['AA']['quoteUrl'].t
                   },
                   {
                       AAPL: dataPoints['AAPL']['quoteUrl'],
                       date: dataPoints['AAPL']['quoteUrl'].t
                   }) */
            /* console.log(historyData.forEach(data => console.log(data['A']))) */
            /*    let chartData = {
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
               }; */

            return (
                <div>
                    {this.state.masterObject[lastSymbols] ? this.state.masterObject[lastSymbols].hasOwnProperty('companyNewsUrl') ? <StockCard uid={this.props.uid} masterObject={this.state.masterObject} /> : '' : <StockCard uid={this.props.uid} />}
                    
                    <div onClick={() => localStorage.setItem('data', JSON.stringify(this.state.masterObject))} >SYNC LS AND masterObject!</div>
                </div>
            )
        } else {
            return ""
        }
    }
}
export default withFirebase(ApiReader);