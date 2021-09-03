import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { useError } from '../hooks/error.hook'
import { DonateGroups } from '../components/DonateGroups'
import { DonatesInGroup } from '../components/DonatesInGroup'
import M from 'materialize-css'
import validator from 'validator'
function checkName(name) {
  const res = validator.isAlphanumeric(name, 'en-US', { ignore: '_' })
  return res
}
export const BuyPage = ({ donGroups }) => {
  const msg = useError()
  let history = useHistory()
  const { loading, request, error, clearError } = useHttp()
  const [form, setForm] = useState({
    //Имя
    name: '',
  })
  const [dongroup, setDongroup] = useState(0) //Группа доната
  const [donate, setDonate] = useState({ name: 'неизвестно', val: -1, cost: 0 }) //Текущий донат
  const [donlist, setDonlist] = useState(null) //Список доната в группе
  const [wanted, setWanted] = useState(0) //value желаемого доната
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  const changeDongroup = (event) => {
    setDongroup(event.target.value)
    setWanted(0)
  }
  const fetchDonate = useCallback(async () => {
    try {
      if (dongroup === 0) {
        setDonate({ name: 'неизвестно', val: -1, cost: 0 })
        return
      }
      if (form.name === '') {
        setDonate({ name: 'неизвестно', val: -1, cost: 0 })
        console.log('Name is empty')
        return
      }
      if (!checkName(form.name)) {
        msg(['Некорректный ник'])
        return
      }
      const data = await request('/group/getplayer', 'GET', null, {
        name: form.name,
        dongroup: dongroup,
      })
      setDonate({ name: data.donateName, val: data.val, cost: data.cost })
    } catch (e) {}
  }, [request, dongroup, form])
  const fetchGroups = useCallback(async () => {
    try {
      if (dongroup === 0) {
        return
      }
      const data = await request('/group/getdonates', 'GET', null, {
        dongroup: dongroup,
      })
      delete data.default
      setDonlist(data)
    } catch (e) {}
  }, [request, dongroup])
  const buyHandler = useCallback(async () => {
    if (dongroup === 0) {
      return
    }
    const data = await request('/group/buy', 'POST', null, {
      name: form.name,
      dongroup: dongroup,
      wanted: wanted,
    })
    window.location.replace(data.url)
  }, [request, dongroup, form, wanted, donlist])
  const changeWanted = (event) => {
    setWanted(event.target.value)
  }

  useEffect(() => {
    fetchDonate()
    fetchGroups()
  }, [dongroup, donGroups])

  useEffect(() => {
    fetchDonate()
  }, [wanted])
  useEffect(() => {
    M.AutoInit()
    if (error) {
      const errors = error.split(',')
      msg(errors)
      clearError()
    }
  }, [error, msg, clearError])

  /////
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <div className="card" style={{ opacity: 0.93 }}>
          <div className="card-content">
            <span className="text card-title">Донат</span>

            <div className="row">
              <div className="input-field col s12">
                <select
                  className="text"
                  defaultValue="0"
                  onChange={changeDongroup}
                >
                  <option value="0" disabled>
                    Выбери режим/группу режимов
                  </option>
                  <DonateGroups groups={donGroups} />
                </select>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  id="name"
                  type="text"
                  className="white-input"
                  name="name"
                  value={form.name}
                  onChange={changeHandler}
                  onBlur={fetchDonate}
                />
                <label htmlFor="name">Введите ник</label>
              </div>
            </div>
            <div>
              {loading && <span className="text">Загрузка...</span>}

              {!loading && (
                <span className="text">Ваш донат: {donate.name}</span>
              )}
            </div>

            <div className="row">
              <div className="input-field col s12">
                <select
                  value={wanted}
                  disabled={loading || !dongroup || !form.name}
                  onChange={changeWanted}
                >
                  <DonatesInGroup
                    donlist={donlist}
                    cost={donate.cost}
                    donate={donate}
                  />
                </select>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn2 btn-large textopacity black"
              disabled={loading || !wanted}
              onClick={buyHandler}
            >
              Купить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
