import Router from 'express'
const router = Router()
import { check } from 'express-validator'

import groupsInfo from './requests/groupsInfo.js'
router.get('/groupsinfo', groupsInfo)

import getDonates from './requests/getDonates.js'
router.get('/getdonates', getDonates)

import getPlayer from './requests/getPlayer.js'
router.get(
  '/getplayer',
  [
    check('name', 'Некорректный никнейм').isAlphanumeric('en-US', {
      ignore: '_',
    }),
  ],
  getPlayer
)

import buy from './requests/buy.js'
router.post(
  '/buy',
  [
    check('name', 'Некорректный никнейм').isAlphanumeric('en-US', {
      ignore: '_',
    }),
  ],
  buy
)

export default router
