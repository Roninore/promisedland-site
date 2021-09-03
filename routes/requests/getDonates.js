import donateInGroups from '../../servInform/donateInGroups.js'

const getDonates = async (req, res) => {
  if (req.headers.dongroup)
    res.status(200).json(donateInGroups[req.headers.dongroup])
  else res.status(404).json({ message: 'Выбери сервер!' })
}

export default getDonates
