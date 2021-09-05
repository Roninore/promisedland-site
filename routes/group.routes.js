const Router = require('express')
const router = Router()
const { check } = require('express-validator')

const groupsInfo = require('./requests/groupsInfo.js')
router.get('/groupsinfo', groupsInfo)

const getDonates = require('./requests/getDonates.js')
router.get('/getdonates', getDonates)

const getPlayer = require('./requests/getPlayer.js')
router.get(
  '/getplayer',
  [
    check('name', 'Некорректный никнейм').isAlphanumeric('en-US', {
      ignore: '_',
    }),
  ],
  getPlayer
)

const buy = require('./requests/buy.js')
router.post(
  '/buy',
  [
    check('name', 'Некорректный никнейм').isAlphanumeric('en-US', {
      ignore: '_',
    }),
  ],
  buy
)

module.exports = router
