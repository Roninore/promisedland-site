import getWantedPerm from './getWantedPerm.js'
import getGiveCommand from './getGiveCommand.js'
import giveRainfall from './rainfall/giveRainfall.js'
import buyed_perm from '../models/buyed_perm.js'
import errored_perm from '../models/errored_perm.js'

const givePermission = async (dongroup, name, wanted, billId) => {
  if (dongroup <= 0) {
    console.log('Can`t give permission, incorrect dongroup')
    return
  }

  const wantedperm = getWantedPerm(dongroup, wanted)
  const servers = donateGroups.find((el) => {
    return el.value == dongroup
  }).servers

  const giveCommand = getGiveCommand(name, wantedperm, servers)
  console.log(`GIVE command: ${giveCommand}`)
  const nowDate = new Date(Date.now())
  const permission = {
    billId,
    username: name,
    command: giveCommand,
    date: nowDate,
  }
  try {
    if (dongroup == 3) giveRainfall()

    await rcon.connect()
    for (const cmd of giveCommand) await rcon.send(cmd)
    await rcon.disconnect()

    const buyed = new buyed_perm(permission)
    await buyed.save()
    console.log(`${billId} выдан на сервере`)
  } catch (e) {
    const errored = new errored_perm(permission)
    await errored.save()
    console.log(`${billId} НЕ выдан на сервере по ошибке: ${e}`)
  }
}

export default givePermission
