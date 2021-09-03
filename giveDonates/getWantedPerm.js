const donateInGroups = require('../servInform/donateInGroups.js')

const getWantedPerm = (dongroup, wanted) => {
  return Object.entries(donateInGroups[dongroup]).find(([donate, info]) => {
    return info.val == wanted
  })[1]
}

module.exports = getWantedPerm
