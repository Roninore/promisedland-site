import React, { useState, useEffect } from 'react'
export const DonateGroups = ({ groups }) => {
  const [select, setSelect] = useState([])
  useEffect(() => {
    const temp = groups.map((group) => {
      return (
        <option key={group.value} value={group.value} disabled={group.disabled}>
          {group.name}
        </option>
      )
    })
    setSelect(temp)
  }, [groups])
  return <>{select}</>
}
