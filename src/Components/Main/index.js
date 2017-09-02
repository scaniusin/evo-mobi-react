import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Content from '../Content'
import Contacts from '../Contacts'
import Detailed from '../Detailed'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Content}/>
      <Route path='/contacts' component={Contacts}/>
      <Route exact path='/:category' component={Content}/>
      <Route exact path='/product/:id' component={Detailed}/>
    </Switch>
  </main>
)

export default Main