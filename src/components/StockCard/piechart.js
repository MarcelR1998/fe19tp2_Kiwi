import React, { Component } from "react";
import { Bar, Line, Pie, Bubble } from "react-chartjs-2";
import { withFirebase } from "../Firebase";
import styled from "styled-components";

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
      loading: true
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase
      .user(this.props.uid)
      .child("stocklist")
      .on("value", snapshot => {
        const userObject = snapshot.val();
        this.setState({
          stocklist: userObject,
          loading: false
          /*   storage: localStorage.getItem('data') */
        });
      });
  }

  render() {
    let labelVar = [];
    let dataVar = [];
    let color = [];

    if (this.state.loading != true && this.state.stocklist) {
      labelVar = this.state.stocklist.map(stock => stock.symbol);
      dataVar = this.state.stocklist.map(stock => stock.amount);

      //Pushar färgen blå till en array som används som färgdata
      for (let i = 0; i < this.state.stocklist.length; i++) {
        color.push("#039be5");
      }
    }

    let chartData = {
      labels: labelVar,
      datasets: [
        {
          label: "Your stocks",
          data: dataVar,
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ]
    };

    return (
      <pieChartDiv>
        <div className="chart">
          <Pie
            data={chartData}
            options={{
              title: {
                display: false
              },
              legend: {
                display: false,
                position: "top"
              },
              title: {
                display: true,
                text: "Your stocks"
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true
                    },
                    display: false
                  }
                ],
                xAxes: [
                  {
                    display: false //this will remove all the x-axis grid lines
                  }
                ]
              }
            }}
          />
        </div>
      </pieChartDiv>
    );
  }
}

const pieChartDiv = styled.div`
  width: 640px;
  height: 640px;

  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 20px;
  &:hover {
    transform: scale(1.03);
    transition: transform 0.3s;
  }
`;

export default withFirebase(PieChart);
