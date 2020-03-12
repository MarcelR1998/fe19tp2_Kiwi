import React from "react";
import styled from "styled-components";
import { urlKeys, companyNamesFunc } from "./recommendationTrends.js"; // {AAPL: http...}
import axios from "axios";
import rateLimit from "axios-rate-limit";
import StockCard from "../StockCard/index.js";
import { withFirebase } from "../Firebase";
import PieChart from "../StockCard/piechart.js";

const http = rateLimit(axios.create(), {
  maxRequests: 2,
  perMilliseconds: 1000,
  maxRPS: 2
});


let lastSymbols;

class ApiReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterObject: null,
      Loaded: false
    };

    this.getSymbolData = this.getSymbolData.bind(this);
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

          this.getSymbolData(companyObj, companySymb);
          lastSymbols = Object.keys(companyObj)[
            Object.keys(companyObj).length - 1
          ];
        } else {
          return;
        }
      });
    } else {
      console.log("error user not found");
    }
  }
  componentWillUnmount() {
    this.props.firebase.user(this.props.uid).off();
  }
  async getSymbolData(companyObj, companySymb) {
    const masterObject = {};

    companySymb.forEach(symbol => {
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
