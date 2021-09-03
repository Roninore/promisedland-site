import config from 'config'
import Rcon from 'modern-rcon'

const rcon = new Rcon(
  config.get('rainfall_rcon_adress'),
  Number(config.get('rainfall_rcon_port')),
  config.get('rainfall_rcon_pass')
)

export default rcon
