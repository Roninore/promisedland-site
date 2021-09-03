const config = require('config')
const QiwiBillPaymentsAPI = require('@qiwi/bill-payments-node-js-sdk')
const SECRET_KEY = config.get('secret_key')
const qiwiApi = new QiwiBillPaymentsAPI(SECRET_KEY)

module.exports = qiwiApi
