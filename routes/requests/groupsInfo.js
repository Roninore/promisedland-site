const donateGroups = require('../../servInform/donateGroups.js')
const donateInfo = require('../../servInform/donateInfo.js')

const groupsInfo = async (req, res) => {
  try {
    res.status(200).json({ donateInfo, donateGroups })
  } catch (e) {
    console.log('errorr', e)
  }
}

module.exports = groupsInfo
