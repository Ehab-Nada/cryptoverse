const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "50",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    "X-RapidAPI-Key": "d399e45a26msh3cbed6035c5b278p15fc57jsn38bb1f2d0a0e",
  },
};
export default options;
