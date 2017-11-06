import React from 'react'
import './Login.css'
import Auxx from '../hoc/Auxx'

const Login = () => (
  <Auxx>
    <div className="Login container has-text-centered">
      <div className="columns">
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-light">Login</h3>
          <p className="subtitle has-text-light">Please login to proceed.</p>
          <div className="box">
            <figure className="avatar">
              <img src="https://placehold.it/128x128" alt="" />
            </figure>
            <form>
              <div className="field">
                <div className="control">
                  <input className="input is-large" type="email" placeholder="Your Email" />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <input className="input is-large" type="password" placeholder="Your Password" />
                </div>
              </div>
              <div className="field">
                <label className="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <a className="button is-block is-info is-large">Login</a>
            </form>
          </div>
          <p className="has-text-light">
            <a href="https://nattasak.github.io/bulma-axios/">Sign Up</a> &nbsp;·&nbsp;
            <a href="https://nattasak.github.io/bulma-axios/">Forgot Password</a> &nbsp;·&nbsp;
            <a href="https://nattasak.github.io/bulma-axios/">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </Auxx>
)

export default Login;
