import donateInGroups from '../servInform/donateInGroups.js'

const getWantedPerm = (dongroup, wanted) => {
  return Object.entries(donateInGroups[dongroup]).find(([donate, info]) => {
    return info.val == wanted
  })[1]
}

export default getWantedPerm
