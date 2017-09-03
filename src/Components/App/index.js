import React from 'react'
import Header from '../Header'
import Main from '../Main'
import './styles.css'



const App = () => (
  <div>
    <Header />

    <Main />

    <footer className="footer">
      <div className="container">
        <a className="footer__by" href="http://positronbohemia.com/" target="_blank"> Positron Bohemia</a>
      </div>
    </footer>
  </div>
)

export default App
