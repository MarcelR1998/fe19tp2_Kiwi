let stocklist = [
    {
        "description": "AGILENT TECHNOLOGIES INC",
        "displaySymbol": "A",
        "symbol": "A"
    },
    {
        "description": "ALCOA CORP",
        "displaySymbol": "AA",
        "symbol": "AA"
    },
    /*     {
            "description": "PERTH MINT PHYSICAL GOLD ETF",
            "displaySymbol": "AAAU",
            "symbol": "AAAU"
        } */
]

let getURL = (company) => {
    let newURL = 'https://finnhub.io/api/v1/stock/' + 'recommendation?symbol=' + company + '&token=bp1bshfrh5r9majagbfg';
    return newURL
}

export let companyNames = stocklist.map(des => {
    return { [des.symbol]: getURL(des.symbol) }
})
export const companyObjects = Object.assign({}, ...companyNames);






