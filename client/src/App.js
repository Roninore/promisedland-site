import React, { useState, useEffect, useCallback } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'materialize-css'
import { Navbar } from '../src/components/Navbar'
import { Footer } from './components/Footer'
import { useHttp } from './hooks/http.hook'
import { useRoutes } from './routes'
function App() {
  const [servers, setServers] = useState([])
  const { loading, request } = useHttp()
  const [donGroups, setDonGroups] = useState([]) //Список групп доната
  const routes = useRoutes(donGroups, servers)
  const getGroups = useCallback(async () => {
    try {
      const data = await request('/group/groupsinfo', 'GET', null, {})
      setServers(data.donateInfo)
      setDonGroups(data.donateGroups)
    } catch (e) {}
  }, [request])
  useEffect(() => {
    getGroups()
  }, [getGroups])
  return (
    <>
      <Router>
        <div className="content">
          <Navbar />
          {!loading && routes}
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
