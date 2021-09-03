const getGiveCommand = (name, wantedperm, servers) => {
  const servId = servers.split('=')[1]
  switch (wantedperm.type) {
    case 'group':
      return [`lpb user ${name} group set ${wantedperm.perm} ${servers}`]

    case 'permission':
      return [`lpb user ${name} permission set ${wantedperm.perm} ${servers}`]

    case 'whitelist':
      return [
        `lpb user ${name} permission set ${wantedperm.perm} ${servers}`,
        `sctsbungee lobby lp user ${name} permission set ${wantedperm.perm} ${servers}`,
      ]

    case 'case':
      const caseName = wantedperm.perm.split('.')[0]
      const caseCount = wantedperm.perm.split('.')[1]
      return [
        `sctsbungee ${servId} cc give virtual ${caseName} ${caseCount} ${name}`,
      ]

    case 'unban':
      return [
        `gunban ${name}`,
        `sctsbungee surveasy eunbanip ${name}`,
        `sctsbungee surveasy eunban ${name}`,
      ]

    default:
      console.log('NO CASES!')
      return []
  }
}

module.exports = getGiveCommand
