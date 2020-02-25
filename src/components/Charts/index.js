import React, { Component } from 'react';
import { Bar, Line, Pie, Bubble } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }
    render() {
        return (
            <div className="chart">
                <Line
                    data={this.props.chartData}
                    options={{

                        title: {
                            display: false,

                        },
                        legend: {
                            display: false,
                            position: 'right'
                        }

                    }
                    }
                />
            </div>
        )
    }
}
export default Chart;

