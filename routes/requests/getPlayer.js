import { validationResult } from 'express-validator'
import donateInGroups from '../../servInform/donateInGroups.js'
import findPermission from '../../giveDonates/findPermission.js'

const getPlayer = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const msg = errors.array().map((now) => {
      return now.msg
    })
    return res.status(400).json({
      errors: msg,
      message: msg,
    })
  }
  try {
    if (req.headers.dongroup == 0) {
      res.status(200).json({ message: 'Chose server!' })
      return
    }
    const name = req.headers.name.toLocaleLowerCase()
    const { group } = await findPermission(name, req.headers.dongroup)
    console.log('group:', group)
    res.status(200).json({
      message: `Успешно`,
      val: donateInGroups[req.headers.dongroup][group].val,
      donateName: donateInGroups[req.headers.dongroup][group].name,
      donate: group,
      cost: donateInGroups[req.headers.dongroup][group].cost,
    })
  } catch (e) {
    console.log('err in /p', e)
    res.status(404).json({ message: 'error' })
  }
}

export default getPlayer
