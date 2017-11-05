import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item is-hidden-desktop" href="https://github.com/Nattasak">
            <span className="icon" styles="color: #333;">
              <i className="fa fa-lg fa-github"></i>
            </span>
          </a>
          <a className="navbar-item is-hidden-desktop" href="">
            <span className="icon" styles="color: #55acee;">
              <i className="fa fa-lg fa-twitter"></i>
            </span>
          </a>
          <div className="navbar-burger burger" data-target="navMenuTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenuTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link  is-active" href="">
                Docs
              </a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item " href="">
                  Overview
                </a>
                <a className="navbar-item " href="">
                  Modifiers
                </a>
                <a className="navbar-item " href="">
                  Columns
                </a>
                <a className="navbar-item " href="">
                  Layout
                </a>
                <a className="navbar-item " href="">
                  Form
                </a>
                <a className="navbar-item " href="">
                  Elements
                </a>
                <a className="navbar-item is-active" href="">
                  Components
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div>
                    <p className="is-size-6-desktop"><strong>0.6.0</strong></p>
                    <small><a className="bd-view-all-versions" href="">View all versions</a></small>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link " href="">
                Blog
              </a>
              <div id="blogDropdown" className="navbar-dropdown is-boxed" data-styles="width: 18rem;">
                <a className="navbar-item" href="">
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-link">09 Oct 2017</small>
                    </p>
                    <p>Roses are red – Links are blue</p>
                  </div>
                </a>
                <a className="navbar-item" href="">
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-link">03 Aug 2017</small>
                    </p>
                    <p>New feature: list of tags</p>
                  </div>
                </a>
                <a className="navbar-item" href="">
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-link">01 Aug 2017</small>
                    </p>
                    <p>Bulma / Bootstrap comparison</p>
                  </div>
                </a>
                <a className="navbar-item" href="">
                  More posts
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div className="navbar-content">
                    <div className="level is-mobile">
                      <div className="level-left">
                        <div className="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div className="level-right">
                        <div className="level-item">
                          <a className="button bd-is-rss is-small" href="">
                            <span className="icon is-small">
                              <i className="fa fa-rss"></i>
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                More
              </div>
              <div id="moreDropdown" className="navbar-dropdown is-boxed">
                <a className="navbar-item " href="">
                  <p>
                    <strong>Bulma start</strong>
                    <br />
                    <small>A tiny npm package to get started</small>
                  </p>
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item " href="">
                  <p>
                    <strong>Made with Bulma</strong>
                    <br />
                    <small>The official community badge</small>
                  </p>
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item " href="">
                  <p>
                    <strong>Extensions</strong>
                    <br />
                    <small>Side projects to enhance Bulma</small>
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a className="navbar-item is-hidden-desktop-only" href="https://github.com/Nattasak">
            <span className="icon" styles="color: #333;">
              <i className="fa fa-lg fa-github"></i>
            </span>
          </a>
          <a className="navbar-item is-hidden-desktop-only" href="">
            <span className="icon" styles="color: #55acee;">
              <i className="fa fa-lg fa-twitter"></i>
            </span>
          </a>
        </div>
      </div>
    </nav>
  </div>
);
}
}

export default Header;
