import donateGroups from '../../servInform/donateGroups.js'
import donateInfo from '../../servInform/donateInfo.js'

const groupsInfo = async (req, res) => {
  try {
    res.status(200).json({ donateInfo, donateGroups })
  } catch (e) {
    console.log('errorr', e)
  }
}

export default groupsInfo
