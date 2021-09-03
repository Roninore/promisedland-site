const config = require('config')
const Rcon = require('modern-rcon')

const rcon = new Rcon(
  config.get('rcon_adress'),
  Number(config.get('rcon_port')),
  config.get('rcon_pass')
)

module.exports = rcon
