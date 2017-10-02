const async = require('async');
const bittrex = require('node-bittrex-api');

const markets = [
  // 'USDT-BTC',
  // 'USDT-DASH',
  // 'USDT-ETH',
  // 'USDT-LTC',
  // 'USDT-OMG',
  'BTC-ANT',
  'BTC-REP',
  'BTC-BAT',
  'BTC-CVC',
  'BTC-DASH',
  'BTC-DCR',
  'BTC-ETH',
  'BTC-GNT',
  'BTC-LTC',
  'BTC-OMG',
  'BTC-QTUM',
];

bittrex.options({
  apikey: process.env.BITTREX_API_KEY,
  apisecret: process.env.BITTREX_API_SECRET,
});

module.exports = {
  getData: (cb) => {
    async.reduce(markets, [], (memo, market, next) => {
      bittrex.getmarkethistory({ market }, (err, data) => {
        if (!ticker.success) next(`Error retrieving ${market}.`);

        next(null, memo.concat(Object.assign({}, ticker, {
          market,
        })));
      });
    }, (err, result) => {
      if (err) return cb(err);

      return cb(null, result);
    });
  },
};
