import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { MainWrapper, PageTitleWrapper, PageTitle } from "../Styles";
import { LinkBack, StockChart, StockTitle, StockDesc } from "./styles";
import { urlValues } from "../ApiReader/recommendationTrends";
import Charts from "../Charts/index.js";
import StockNews from "../News/applenews";

class StockPage extends React.Component {
  componentDidMount() {
    console.log(this.props.stock);
  }

  /* getDates(startDate, stopDate) {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push(moment(currentDate).format('YYYY-MM-DD'))
            currentDate = moment(currentDate).add(1, 'days');
        }
        return dateArray;

    } */

  render() {
    var startDate = new Date("2020-03-02"); //YYYY-MM-DD
    var endDate = new Date("2020-03-10"); //YYYY-MM-DD

    var getDateArray = function(start, end) {
      var arr = new Array();
      var dt = new Date(start);
      while (dt <= end) {
        arr.push(new Date(dt));
        dt.setDate(dt.getDate() + 1);
      }
      return arr;
    };

    var dateArr = getDateArray(startDate, endDate);

    const randomNumbers = () => {
      let values = [];
      for (let i = 0; i < 9; i++) {
        let value = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        values.push(value);
      }
      return values;
    };

    const dates = [
      "Mar 02, 2020",
      "Mar 03, 2020",
      "Mar 04, 2020",
      "Mar 05, 2020",
      "Mar 06, 2020",
      "Mar 09, 2020",
      "Mar 10, 2020"
    ];
    const historicalData = [
      282.28,
      303.67,
      296.44,
      295.52,
      282.0,
      263.75,
      277.14
    ];

    let chartData = {
      /* labels: dateArr.map(item => item.toString().slice(4, 15)), */
      labels: dates,
      datasets: [
        {
          label: "Quote",
          data: historicalData,
          /* data: randomNumbers(), */
          backgroundColor: ["rgba(0,176,255,0.5)"]
        }
      ]
    };
    return (
      <MainWrapper>
        {/* <h2>{this.props.stock}</h2> */}
        <LinkBack to={ROUTES.HOME}>
          <i className="fas fa-arrow-left"></i> Back
        </LinkBack>
        <PageTitleWrapper>
          <PageTitle>AAPL (Apple Inc.)</PageTitle>
        </PageTitleWrapper>
        <StockChart>
          <StockTitle>Historical Data</StockTitle>
          <StockDesc>Time Period: Mar 2, 2020 - Mar 10, 2020</StockDesc>
          <Charts chartData={chartData} />
        </StockChart>
        <StockNews />
      </MainWrapper>
    );
  }
}

export default StockPage;
