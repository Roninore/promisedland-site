const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const path = require('path')
const routes = require('./routes/group.routes.js')
const app = express()

app.use(express.json({ extended: true }))
app.use('/group', routes)
const PORT = config.get('port')
const URL = config.get('url')

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

async function start() {
  try {
    await mongoose.connect(config.get('mongoURI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    app.listen(PORT, () =>
      console.log(`Started, on port: ${PORT}, URL: ${URL}`)
    )
  } catch (e) {
    console.log('err', e)
  }
}

start()
