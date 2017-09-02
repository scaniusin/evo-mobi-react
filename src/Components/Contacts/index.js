import React, { Component } from 'react';
import './styles.css';
import phoneIcon from '../../static/img/phone.svg';
import addressIcon from  "../../static/img/adress.svg";
import mailIcon from  "../../static/img/mail.svg";

class Contacts extends Component {

  render() {


    return (
      <div className="container">
        <div className="row">
              <h2 className="contact-title">Свяжитесь с нами</h2>
              <div className="dotted-line"></div>
              <div className="">
                <div className="col-md-6">
                  <div className="contact-map">
                    <iframe className="contact-map__iframe" frameborder="0" src="https://point.md/ru/map/street/47.02886900000001/28.821518999999977/20/496737539?q=31%20&amp;number=98&amp;embed=1"></iframe>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-description">
                    <div className="contact-description__adress top">
                      <img className="contact-description__icon" src={addressIcon} alt="" />
                        <h3 className="contact-description__title">Адрес</h3>
                        <p className="contact-description__txt">Кишинёв, ул 31 августа 1989 ул 98</p>
                    </div>
                    <div className="contact-description__phone top">
                      <img className="contact-description__icon" src={phoneIcon} alt="" />
                        <h3 className="contact-description__title">Телефон</h3>
                        <p className="contact-description__txt">+373 78 900 900</p>
                    </div>
                    <div className="contact-description__email top">
                      <img className="contact-description__icon" src={mailIcon} alt="" />
                        <h3 className="contact-description__title">E-mail</h3>
                        <p className="contact-description__txt">masevomobi@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dotted-line"></div>
        </div>
      </div>
    );
  }
}

export default Contacts;
