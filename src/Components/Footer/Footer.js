import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                <strong>Bulma</strong> by <a href="">Jeremy Thomas</a>. The source code is licensed
                <a href="">MIT</a>. The website content
                is licensed <a href="">CC BY NC SA 4.0</a>.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
