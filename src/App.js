import React, { Component } from 'react';
//import './App.css';
import 'bulma/css/bulma.css';

// Components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Card from './Components/Card/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">Nattasak Lertpoompunya</h1>
                <h2 className="subtitle">React | Node.js</h2>
              </div>
            </div>
          </section>
          <Card />
          <br /><br />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
