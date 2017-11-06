import React from 'react'
import './Home.css'
import Auxx from '../hoc/Auxx'

const Home = () => (
  <Auxx>
    <div className="container has-text-centered">
      <div className="column is-6 is-offset-3">
        <h1 className="title">
          Coming Soon
        </h1>
        <h2 className="subtitle">
          Hi' My name is Nattasak Lertpoompunya. Nice to meet you.<br />
          Have a nice day !
        </h2>
        <div className="box">

          <div className="field is-grouped">
            <p className="control is-expanded">
              <input className="input" type="text" placeholder="Enter your email" />
            </p>
            <p className="control">
              <a className="button is-info">
                Notify Me
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Auxx>
)

export default Home
