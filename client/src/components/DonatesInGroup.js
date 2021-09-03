import React, { useEffect, useState } from 'react'
import M from 'materialize-css'
export const DonatesInGroup = ({ donlist, cost, donate }) => {
  const [donates, setDonates] = useState([])
  useEffect(() => {
    if (donlist) {
      const newdonates = []
      for (let key in donlist) {
        if (donlist[key].val > donate.val)
          newdonates.push(
            <option key={donlist[key].val} value={donlist[key].val}>
              {donlist[key].name} | Цена: {donlist[key].cost - cost}р.
            </option>
          )
      }
      setDonates(newdonates)
    }
  }, [donlist, cost, donate])
  useEffect(() => {
    M.AutoInit()
  }, [donates])
  return (
    <>
      <option value="0" disabled>
        Выбери донат
      </option>
      {donates}
    </>
  )
}
