import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { BuyPage } from './pages/BuyPage'
import { DonateinfoPage } from './pages/DonateinfoPage'
import { ContactsPage } from './pages/ContactsPage'
import { UserAgreementPage } from './pages/UserAgreementPage'
export const useRoutes = (donGroups, servers) => {
  return (
    <Switch>
      <Route path="/" exact>
        <BuyPage donGroups={donGroups} />
      </Route>
      <Route path="/info">
        <DonateinfoPage servers={servers} />
      </Route>
      <Route path="/contacts">
        <ContactsPage />
      </Route>
      <Route path="/useragreement">
        <UserAgreementPage />
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  )
}
