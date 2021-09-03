const rcon = require('../../rcon/rainfall.js')
const wait = require('../../functions/wait.js')

const giveRainfall = async (name) => {
  await rcon.connect()
  await rcon.send(`easywl add ${name}`)
  await rcon.send(`say ${name} приобрел доступ к серверу!`)
  await wait(1000)
  await rcon.disconnect()
  console.log('Rainfall whitelist added')
}

module.exports = giveRainfall
