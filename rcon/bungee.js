import config from 'config'
import Rcon from 'modern-rcon'

const rcon = new Rcon(
  config.get('rcon_adress'),
  Number(config.get('rcon_port')),
  config.get('rcon_pass')
)

export default rcon
