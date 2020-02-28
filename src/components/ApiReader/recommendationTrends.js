import { baseUrl, apiKey, specificApiList, } from '../../constants/urls.js';
import { withFirebase } from '../Firebase';





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
        "description": "APPLE INC",
        "displaySymbol": "AAPL",
        "symbol": "AAPL"
    },
]

export const urlKeys = Object.keys(specificApiList);
export const urlValues = Object.values(specificApiList);

let getURL = (company) => {
    let fetchUrl = [];
    urlValues.map(url => { if (url.includes("news")) { fetchUrl.push(baseUrl + url + company + "?" + apiKey) } else { fetchUrl.push(baseUrl + url + company + apiKey) } })
    return fetchUrl;
}

export let companyNames = stocklist.map(des => {
    return { [des.symbol]: getURL(des.symbol) }
})

export const companyNamesFunc = (stocklist) => stocklist.map(des => {
    return { [des.symbol]: getURL(des.symbol) }
});

export const companyObjects = Object.assign({}, ...companyNames);

export const companyObjectsFunc = (companyNames) => (Object.assign({}, ...companyNames));







