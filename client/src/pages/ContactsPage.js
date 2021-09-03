import React from 'react'
export const ContactsPage = () => {
  return (
    <div className="row">
      <div className="col s8 offset-s2 card-panel">
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>Контакты</h4>
          </li>
          <li className="collection-item">
            <h5>Группа вконтакте</h5>
            <a href="https://vk.com/prmsdland" target="_blank" rel="noreferrer">
              <b>vk.com/prmsdland</b>
            </a>
          </li>
          <li className="collection-item">
            <h5>Почта для связи</h5>
            <p>
              <b>prmsdland@gmail.com</b>
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
