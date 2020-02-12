import React from 'react';
import { stockList } from './stockExchange.js';

import { apiKey } from '../../constants/urls'

/*fetchAllCompanies = () => {
    const urlString = `/stock/profile?symbol=${company}&token=`
    const apiURL = 'https://finnhub.io/api/v1';
    const fetchUrl = urlString + apiKey
    console.log(fetchUrl);
}*/

/* fetchCompany = (company) => {

    const urlString = `/stock/profile?symbol=${company}&token=`
    const apiURL = 'https://finnhub.io/api/v1';

    const fetchUrl = urlString + apiKey
    console.log(fetchUrl);
} */

const socket = new WebSocket('wss://ws.finnhub.io?token=bp1bshfrh5r9majagbfg');


// Connection opened -> Subscribe
/* socket.addEventListener('open', function (event) {
    socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'AAPL' }))
    socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'BINANCE:BTCUSDT' }))
    socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'IC MARKETS:1' }))
}); */

// Listen for messages
socket.addEventListener('message', function (event) {
    //console.log('Message from server ', event.data);
});

// Unsubscribe
var unsubscribe = function (symbol) {
    socket.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': symbol }))
}


class ApiReader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {

        console.log(stockList);

        fetch(`${"https://finnhub.io/api/v1/stock/symbol?exchange=US&token=" + apiKey}`)
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        isLoaded: true,
                        items: res
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            /*  console.log(items.map(item => (
 
                 item.symbol
             ))); */
            return (

                /*  <ul>
                     <li key={items.symbol}>{items.symbol}</li>
                 </ul> */
                <ul>
                    {/*  {items.map(item => (
                        <li key={item.symbol}>
                            {item.symbol}
                        </li>
                    ))} */}
                    <li>Hello</li>
                </ul>
            );
        }
    }
}

export default ApiReader;