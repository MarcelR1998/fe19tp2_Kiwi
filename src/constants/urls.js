export const apiKey = '&token=bp1bshfrh5r9majagbfg';

export const baseUrl = 'https://finnhub.io/api/v1/stock/';

export const stockExchange = 'symbol?exchange=';

export const stockRecommendation = function (companySymbol) {
    let companyRecommendation = 'recommendation?symbol=' + companySymbol
    return companyRecommendation;
}
