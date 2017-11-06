import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import Auxx from '../hoc/Auxx'
import logo from './logo.png'

const Header = () => (
  <Auxx>
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/bulma-axios"><img src={logo} alt="Logo" /></a>
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <NavLink className="navbar-item" activeClassName="is-active" exact to="/bulma-axios">Home</NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to="/posts">Posts</NavLink>
              {/*<NavLink className="navbar-item" activeClassName="is-active" to="/roster">Roster</NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to="/schedule">Schedule</NavLink>*/}
              <NavLink className="navbar-item" activeClassName="is-active" to="/todo">Todo</NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to="/about">About</NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to="/contact">Contact</NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to="/login">Login</NavLink>
              <span className="navbar-item">
                <a className="button is-white is-outlined is-small" href="https://github.com/Nattasak/bulma-axios">
                <span className="icon">  <i className="fa fa-github"></i></span>
                <span>View Source</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</Auxx>
)

export default Header;
