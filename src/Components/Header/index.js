import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import phoneIcon from '../../static/img/phone.svg';
import ruIcon from  "../../static/img/ru2.png";
import mdIcon from  "../../static/img/md2.png";
import './styles.css';


class Header extends Component {
  render() {
    return (
      <div className="Header">

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <a href="/" className="header-name">Evo Mobi</a>
              </div>
              <div className="col-md-6">
                <div className="header-contact">
                  <div className="header-contact__icon">
                    <img className="header-contact__img" src={phoneIcon} alt="" />
                  </div>
                  <h2 className="header-contact__phone">+373 78 900 900</h2>
                  <h3 className="header-contact__adress">masevomobi@gmail.com</h3>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="navigation" >
          <div className="container">
            <nav className="nav">
              <ul className="nav__ul">
                <li className="nav__li">
                  <Link className="nav__a" to='/'>Товары</Link>
                </li>

                <li className="nav__li">
                  <Link className="nav__a" to='/contacts'>Контакты</Link>
                </li>
              </ul>
            </nav>
            <div className="flex languages">
              <a className="flex" >
                <img className="languages__img" src={ruIcon} alt="" />
              </a>
              <a className="flex" >
                <img className="languages__img" src={mdIcon} />
              </a>
            </div>
          </div>
        </section>
        
        
      </div>
    );
  }
}

export default Header;
