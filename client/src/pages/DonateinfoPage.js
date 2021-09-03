import React, { useEffect } from 'react'
import { Donate } from '../components/Donate'
import M from 'materialize-css'
export const DonateinfoPage = (props) => {
  useEffect(() => {
    M.AutoInit()
  }, [props])
  return (
    <div className="row">
      <div className="col s8 offset-s2 card-panel">
        <h4 className="text">Описание привилегий</h4>
        <ul className="collapsible">
          {props.servers.map((server, id) => {
            return (
              <li key={id}>
                <div className="collapsible-header">
                  <h5>{server.name}</h5>
                </div>
                <div className="collapsible-body">
                  {server.donates.map((donate, id) => {
                    return (
                      <Donate
                        key={id}
                        name={donate.name}
                        cost={donate.cost}
                        permissions={donate.permissions}
                      />
                    )
                  })}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
