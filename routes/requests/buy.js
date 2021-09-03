const { validationResult } = require('express-validator')
const createBill = require('../../payment/createBill.js')
const qiwiApi = require('../../payment/qiwiApi.js')
const givePermission = require('../../giveDonates/givePermission.js')

const buy = async (req, res) => {
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
    const { wanted, dongroup } = req.headers
    const name = req.headers.name
    if (!name) {
      res.status(200).json({ message: 'Enter name!' })
      return
    }

    //qiwi
    const data = await createBill(name, dongroup, wanted)
    res.status(200).json({ message: 'Успешно', url: data.url })
    async function checkStatus() {
      const newData = await qiwiApi.getBillInfo(data.billId)
      const status = newData.status.value
      if (status == 'WAITING') {
        return
      }
      if (status == 'REJECTED' || status == 'EXPIRED') {
        console.log(`Заказ ${data.billId} ${status} не оплачен`)
        clearInterval(t)
        return
      }
      if (status == 'PAID') {
        console.log(`Заказ ${data.billId} ${status} оплачен`)
        clearInterval(t)
        givePermission(dongroup, name, wanted, data.billId)
      }
    }
    var t = setInterval(checkStatus, 30000)
  } catch (e) {
    console.log('errorr in buy', e)
    res.status(201).json({ message: 'error' })
  }
}

module.exports = buy
