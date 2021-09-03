const config = require('config')
const Rcon = require('modern-rcon')

const rcon = new Rcon(
  config.get('rainfall_rcon_adress'),
  Number(config.get('rainfall_rcon_port')),
  config.get('rainfall_rcon_pass')
)

module.exports = rcon
