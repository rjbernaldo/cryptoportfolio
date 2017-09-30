require('dotenv').config();

const bittrex = require('node-bittrex-api');
const markets = [

];

bittrex.options({
  apikey: process.env.BITTREX_API_KEY,
  apisecret: process.env.BITTREX_API_SECRET,
});

bittrex.getmarketsummaries((data, err) => {
  if (err) return console.error(err);

  const marketsAvailable = data.result.reduce((acc, cur) => {
    if (cur.MarketName.indexOf('ANT') > -1) {
      return acc.concat(cur.MarketName);
    }

    return acc;
  }, []);

  console.log(marketsAvailable);
});
