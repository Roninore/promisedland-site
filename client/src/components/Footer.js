import React from 'react'
import { NavLink } from 'react-router-dom'
export const Footer = () => {
  return (
    <footer className="page-footer black">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Promised land</h5>
            <p className="grey-text text-lighten-4">
              Все привилегии продаются навсегда
            </p>
            <p>Купленные привилегии доступны на Minecraft сервере</p>
            Все вопросы в{' '}
            <b>
              <a
                className="grey-text text-lighten-4"
                href="https://vk.com/prmsdland"
                target="_blank"
                rel="noreferrer"
              >
                группу ВК
              </a>{' '}
            </b>
            или <b>prmsdland@gmail.com</b>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Ссылки</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://vk.com/prmsdland"
                  target="_blank"
                  rel="noreferrer"
                >
                  Группа ВКонтакте
                </a>
              </li>
              <li>
                <NavLink
                  to="/useragreement"
                  className="grey-text text-lighten-3"
                >
                  Пользовательское соглашение
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts" className="grey-text text-lighten-3">
                  Контакты
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2021 Roninore</div>
      </div>
    </footer>
  )
}
