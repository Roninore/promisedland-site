const Mongo_user = require('../models/user.js')
const Hservers = require('../servInform/servers.js')

const findPermission = async (name, dongroup) => {
  let user = null
  user = await Mongo_user.findOne({ name })

  if (dongroup > 10) return { group: 'default', user }

  function checker() {
    const candidates = user.permissions.filter((permission) => {
      if (dongroup == 3) return permission.key == 'rainfall.whitelist'
      if (!permission.hasOwnProperty('context')) return false
      return (
        Hservers[permission.context[0].value] == dongroup &&
        permission.key.split('.')[0] != 'prefix'
      )
    })
    if (!candidates.length) return 'default'
    else return candidates[candidates.length - 1].key.split('.')[1]
  }
  const group = user == null ? 'default' : checker()
  return { group, user }
}

module.exports = findPermission
