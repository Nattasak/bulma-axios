import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullRoster from './FullRoster'
import Player from './Player'
import Auxx from '../hoc/Auxx'

const Roster = () => (
  <Auxx>
    <div className="container">
      <div className="content">
        <h1 className="has-text-light">Roster</h1>
        <Switch>
          <Route exact path='/roster' component={FullRoster}/>
          <Route path='/roster/:number' component={Player}/>
        </Switch>
      </div>
    </div>
  </Auxx>
)

export default Roster
