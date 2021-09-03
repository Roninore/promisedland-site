import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav className="black" style={{ opacity: 0.9 }}>
      <div className="nav-wrapper">
        <div className="row">
          <div className="col 5">
            <h4 className="brand-logo white-text textopacity">Promised land</h4>
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="col">
              <b className="ip">promised-land.ru</b>
            </li>
            <li className="col">
              <NavLink to="/info" className="white-text navbutton">
                Список привилегий
              </NavLink>
            </li>
            <li className="col">
              <NavLink to="/" className="white-text navbutton">
                Купить
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
