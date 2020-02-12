import React from 'react';

let stockList;

class StockExchange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            stockList: []
        };
    }

    componentDidMount() {
        fetch("https://finnhub.io/api/v1/stock/exchange?token=bp1bshfrh5r9majagbfg")
            .then(res => res.json())
            .then(
                (res) => {
                    let stockExchange = res.map(stock => {
                        stockList = Object.assign({}, { name: stock.name, code: stock.code });
                        return (
                            <div key={stock.code}>{stock.code}</div>
                        )
                    })
                    this.setState({ items: stockExchange, stockList: stockList })
                    console.log(stockList);
                })
    }

    /*  componentDidMount() {
        fetch("https://finnhub.io/api/v1/stock/exchange?token=bp1bshfrh5r9majagbfg")
            .then(res => res.json())
            .then(
                (res) => {
                    let stockExchange = res.map(stock => {
                        stockList.push(stock);
                        return (
                            <div key={stock.code}>{stock.code}</div>
                        )
                    })
                    this.setState({ items: stockExchange, stockList: stockList })
                    console.log(stockList);
                })
    } */

    render() {
        return null;
    }

}

export default StockExchange
export { stockList };