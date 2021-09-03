import pkg from 'mongoose'
const { Schema, model } = pkg

const schema = Schema({
  _id: { type: Object },
  name: { type: String, required: true, unique: true },
  primaryGroup: { type: String },
  permissions: { type: Array },
})
export default model('user', schema)
