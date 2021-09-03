import config from 'config'
import QiwiBillPaymentsAPI from '@qiwi/bill-payments-node-js-sdk'
const SECRET_KEY = config.get('secret_key')
const qiwiApi = new QiwiBillPaymentsAPI(SECRET_KEY)

export default qiwiApi
