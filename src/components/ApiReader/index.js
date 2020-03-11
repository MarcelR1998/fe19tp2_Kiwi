import React from "react";
import { countries } from "./miscData.js";
import { apiKey, baseUrl, stockExchange } from "../../constants/urls";
import { filterSymbol } from "./usStocks";
import styled from "styled-components";
import {
  companyObjects,
  urlKeys,
  urlValues,
  hej,
  companyNamesFunc,
  companyObjectsFunc,
  stocklist
} from "./recommendationTrends.js"; // {AAPL: http...}
import { sendMessage } from "../../constants/functions";
import axios from "axios";
import rateLimit from "axios-rate-limit";
import Charts from "../Charts";
/* import StockValueData from '../StockCard/stockValueData.js'; */
import StockCard from "../StockCard/index.js";
/* import UserStockList from '../UserStockList'; */
import { withFirebase } from "../Firebase";
import { unstable_batchedUpdates } from "react-dom";
import PieChart from "../StockCard/piechart.js";
//const http = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 4000, maxRPS: 2 })
const http = rateLimit(axios.create(), {
  maxRequests: 2,
  perMilliseconds: 1000,
  maxRPS: 2
});
http.getMaxRPS(); // 2
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
  }
  buildMasterObject() {
    if (this.state.Loaded) {
      userStocks = this.state.masterObject;
      return userStocks;
    }
  }
  componentDidMount() {
    if (this.props.uid) {
      this.props.firebase.user(this.props.uid).on("value", snapshot => {
        const stockObject = snapshot.val();
        const stocklist = stockObject.stocklist;

        if (stocklist) {
          const companyNames = companyNamesFunc(stocklist);
          const companyObj = Object.assign({}, ...companyNames);
          const companySymb = Object.keys(companyObj);
          //urls = Object.values(companyObjects)

          this.getSymbolData(companyObj, companySymb);
          lastSymbols = Object.keys(companyObj)[
            Object.keys(companyObj).length - 1
          ];
        } else {
          console.log("hej");
        }
      });
    } else {
      console.log("error");
    }
  }
  componentWillUnmount() {
    this.props.firebase.user(this.props.uid).off();
  }
  async getSymbolData(companyObj, companySymb) {
    const masterObject = {};
    //const urlKeys = ['quotes', 'priceTargets', 'news', 'recs'];
    companySymb.forEach(symbol => {
      // ['AA', 'AAPL',]
      let urls = companyObj[symbol];
      urls.map(async (url, index) => {
        const legend = urlKeys[index];
        try {
          const result = await http.get(url);
          masterObject[symbol] = {
            ...masterObject[symbol],
            [legend]: result.data
          };

          this.setState({
            masterObject: masterObject,
            Loaded: true
          });
        } catch (error) {
          console.log(error);
        }
      });
    });
  }

  render() {
    /* if (!this.state.masterObject) {
            return null
        }
        if (this.state.masterObject[lastSymbols]) {
            const LSdata = localStorage.getItem('data')
            if (LSdata) {
                if (Object.keys(JSON.parse(LSdata)).toString() !== Object.keys(this.state.masterObject).toString()) {
                    localStorage.setItem('data', JSON.stringify(this.state.masterObject));

                }
            }
            else {
                //console.log("First run maybe LS set")
                localStorage.setItem('data', JSON.stringify(this.state.masterObject));
            }
        } */
    if (this.state.Loaded) {
      return (
        <Wrapper>
          {this.state.masterObject[lastSymbols] ? (
            this.state.masterObject[lastSymbols].hasOwnProperty("quoteUrl") ? (
              <StockCard
                key={200}
                uid={this.props.uid}
                masterObject={this.state.masterObject}
              />
            ) : (
              ""
            )
          ) : (
            <StockCard key={100} uid={this.props.uid} />
          )}
          {/* <div onClick={() => localStorage.setItem('data', JSON.stringify(this.state.masterObject))} >SYNC LS AND masterObject!</div> */}
          <PieChart uid={this.props.uid} />
        </Wrapper>
      );
    } else {
      return "";
    }
  }
}

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export default withFirebase(ApiReader);
