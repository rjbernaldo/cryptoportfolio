const bittrex = require('./bittrex');
const { messageWrapper, dataWrapper } = require('./utils');

module.exports = api;

function api(req, res) {
  bittrex.getData((err, data) => {
    if (err) res.json(messageWrapper(err));

    res.send(dataWrapper(data));
  });
}
