import React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'bulma/css/bulma.css'
import Home from './Home'
import Posts from './Posts'
import PostDetail from './PostDetail'
import Roster from './Roster'
import Schedule from './Schedule'
import Todo from './Todo'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import Auxx from '../hoc/Auxx'

const Main = () => (
  <Auxx>
      <div className="hero-body">
        <Switch>
          <Route exact path='/bulma-axios' component={Home}/>
          <Route path='/posts' component={Posts}/>
          <Route path='/postdetail' component={PostDetail}/>
          <Route path='/roster' component={Roster}/>
          <Route path='/schedule' component={Schedule}/>
          <Route path='/todo' component={Todo}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </div>
  </Auxx>
)

export default Main;
