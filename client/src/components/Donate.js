import React from 'react'
export const Donate = (props) => {
  return (
    <div>
      <h5>{props.name}</h5>
      <h6>| Цена: {props.cost}</h6>
      {props.permissions.map((permission, id) => {
        return <p key={id}>- {permission}</p>
      })}
    </div>
  )
}
