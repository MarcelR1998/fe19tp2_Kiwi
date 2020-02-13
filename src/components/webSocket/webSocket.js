fetchAllCompanies = () => {
    const urlString = `/stock/profile?symbol=${company}&token=`
    const apiURL = 'https://finnhub.io/api/v1';
    const fetchUrl = urlString + apiKey
    console.log(fetchUrl);
}

fetchCompany = (company) => {

    const urlString = `/stock/profile?symbol=${company}&token=`
    const apiURL = 'https://finnhub.io/api/v1';

    const fetchUrl = urlString + apiKey
    console.log(fetchUrl);
}

const socket = new WebSocket('wss://ws.finnhub.io?token=bp1bshfrh5r9majagbfg');


// Connection opened -> Subscribe
socket.addEventListener('open', function (event) {
    socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'AAPL' }))
    socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'BINANCE:BTCUSDT' }))
    socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'IC MARKETS:1' }))
});

// Listen for messages
socket.addEventListener('message', function (event) {
    //console.log('Message from server ', event.data);
});

// Unsubscribe
var unsubscribe = function (symbol) {
    socket.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': symbol }))
}