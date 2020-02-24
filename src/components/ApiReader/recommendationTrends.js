import { baseUrl, apiKey, specificApiList, } from '../../constants/urls.js';

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
    {
        "description": "PERTH MINT PHYSICAL GOLD ETF",
        "displaySymbol": "AAAU",
        "symbol": "AAAU"
    },
]

export const urlKeys = Object.keys(specificApiList);
export const urlValues = Object.values(specificApiList);

let getURL = (company) => {
    let fetchUrl = [];
    urlValues.map(url => fetchUrl.push(baseUrl + url + company + apiKey))
    return fetchUrl;
}

export let companyNames = stocklist.map(des => {
    return { [des.symbol]: getURL(des.symbol) }
})
export const companyObjects = Object.assign({}, ...companyNames);






