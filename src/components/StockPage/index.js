import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { MainWrapper, PageTitleWrapper, PageTitle } from "../Styles";
import { LinkBack, StockChart, NewsWrapper } from "./styles";
import { urlValues } from "../ApiReader/recommendationTrends";
import Charts from "../Charts/index.js";
import News from "../News";

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
    var startDate = new Date("2020-03-01"); //YYYY-MM-DD
    var endDate = new Date("2020-03-09"); //YYYY-MM-DD

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

    let chartData = {
      labels: dateArr.map(item => item.toString().slice(4, 15)),
      datasets: [
        {
          label: "Quote",
          data: randomNumbers(),
          backgroundColor: [
            "rgb(247, 166, 74)",
            "rgb(248, 182, 106)",
            "rgb(249, 198, 139)"
          ]
        }
      ]
    };
    return (
      <MainWrapper>
        <h2>{this.props.stock}</h2>
        <LinkBack to={ROUTES.HOME}>
          <i className="fas fa-arrow-left"></i> Back
        </LinkBack>
        <PageTitleWrapper>
          <PageTitle>Stock Page</PageTitle>
        </PageTitleWrapper>
        <StockChart>
          <Charts chartData={chartData} />
        </StockChart>
        <NewsWrapper>
            <News />
        </NewsWrapper>
      </MainWrapper>
    );
  }
}

export default StockPage;
