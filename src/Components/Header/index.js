import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import phoneIcon from '../../static/img/phone.svg';
import ruIcon from  "../../static/img/ru2.png";
import mdIcon from  "../../static/img/md2.png";
import './styles.css';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    };
    // example how to bind object in React ES6
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {

    if (window.scrollY > 230) {
      console.log("should lock");
      this.setState({
        scrollingLock: true
      });
    } else if (window.scrollY < 230) {
      console.log("not locked" );
      this.setState({
        scrollingLock: false
      });
    }

  }

  render() {

    const navlock = {
      position: 'fixed',
      top: '0px',
      width: '100%'
    };
    const navunlock = {
      position: '',
      top: '-1000px',
      width: 'auto%'
    };
    return (
      <div className="Header">

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Link href="/" className="header-name">Evo Mobi</Link>
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

        <section className="navigation" style={ this.state.scrollingLock ? navlock : navunlock}>
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
