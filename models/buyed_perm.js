const pkg = require('mongoose')
const { Schema, model } = pkg
const schema = Schema({
  billId: { type: String, requied: true },
  username: { type: String, required: true },
  command: { type: String, require: true },
  date: { type: Date, required: true },
})
module.exports = model('buyed_perm', schema)
