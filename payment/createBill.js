const getWantedPerm = require('../giveDonates/getWantedPerm.js')
const findPermission = require('../giveDonates/findPermission.js')
const donateInGroups = require('../servInform/donateInGroups.js')
const qiwiApi = require('./qiwiApi.js')

const createBill = async (name, dongroup, wanted) => {
  if (dongroup <= 0) return false

  const wantedperm = getWantedPerm(dongroup, wanted)
  const usr = await findPermission(name.toLocaleLowerCase(), dongroup)
  const userCost = donateInGroups[dongroup][usr.group].cost
  const finalCost = wantedperm.cost - userCost
  const billId = qiwiApi.generateId()
  const expirationDateTime = `${
    new Date(Date.now() + 1000 * 3600 * 3 + 1000 * 60 * 15)
      .toISOString()
      .split('.')[0]
  }+03:00`
  const fields = {
    amount: finalCost,
    currency: 'RUB',
    account: name,
    expirationDateTime,
    comment: `Покупка ${wantedperm.name} на сумму ${finalCost}р. игроку ${name}, Счет действителен в теч. 15 минут!`,
    customFields: {
      themeCode: 'Nykyta-KZTp8CXTGJ',
      dongroup,
      permission: wantedperm.perm,
      name,
    },
    successUrl: 'https://www.promised-land.ru/',
  }

  const request = await qiwiApi.createBill(billId, fields)
  console.log('Создана ссылка для оплаты', request.payUrl)
  return { url: request.payUrl, billId }
}

module.exports = createBill
