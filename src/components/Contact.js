import React from 'react'
import Auxx from '../hoc/Auxx'

const Contact = () => (
  <Auxx>
    <div className="container">
      <div className="columns">
        <div className="column is-4 is-offset-4">
          <div className="content">
            <h1 className="has-text-light">Contact</h1>
            <div className="field">
              <label className="label has-text-light">Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="Text input" />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-light">Username</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input is-success" type="text" placeholder="Text input" />
                <span className="icon is-small is-left">
                  <i className="fa fa-user"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fa fa-check"></i>
                </span>
              </div>
              <p className="help is-success">This username is available</p>
            </div>
            <div className="field">
              <label className="label has-text-light">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input is-danger" type="email" placeholder="Email input" />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fa fa-warning"></i>
                </span>
              </div>
              <p className="help is-danger">This email is invalid</p>
            </div>
            <div className="field">
              <label className="label has-text-light">Subject</label>
              <div className="control">
                <div className="select">
                  <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label has-text-light">Message</label>
              <div className="control">
                <textarea className="textarea" placeholder="Textarea"></textarea>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
              <div className="control">
                <button className="button is-text has-text-grey">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Auxx>
)

export default Contact
