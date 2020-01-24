import React, { Component } from 'react';
import SupportBtn from '../CommonComponents/SupportBtn/index';
import './style.css';

export default class Privacy extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    return (
      <div className="main-container">
        <div className="container">
          <SupportBtn page_title=" الإتصال بنا " title_icon="fa fa-anchor" />
          <div className="white_container">
            <hr />
            <div className="row text-center">
              <div className="col-sm-2 text-center">
                <h4 className="nice_font">
                  <i className="fa fa-envelope fa-4x" />
                  <br /> بريد
                </h4>{' '}
                <ul className="no-list">
                  {' '}
                  <li>
                    <kbd>mail@pmngr.com</kbd>
                  </li>{' '}
                </ul>{' '}
              </div>{' '}
              <div className="col-sm-2">
                <a href="https://arabia.io/pmngr_com" target="_blank">
                  <img
                    width="96px"
                    height="96px"
                    src="https://pmngr.com/assets/images/social/arabia.png"
                    border="0"
                  />
                </a>
              </div>
              <div className="col-sm-2">
                <a href="https://plus.google.com/+pmngr-com" target="_blank">
                  <img
                    width="96px"
                    height="96px"
                    src="https://pmngr.com/assets/images/social/google+.png"
                    border="0"
                  />
                </a>{' '}
              </div>
              <div className="col-sm-2">
                <a href="https://twitter.com/pmngrcom" target="_blank">
                  <img
                    width="96px"
                    height="96px"
                    src="https://pmngr.com/assets/images/social/twitter.png"
                    border="0"
                  />
                </a>
              </div>
              <div className="col-sm-2">
                <a href="https://www.facebook.com/pmngrcom/" target="_blank">
                  <img
                    width="96px"
                    height="96px"
                    src="https://pmngr.com/assets/images/social/facebook.png"
                    border="0"
                  />
                </a>
              </div>
              <div className="col-sm-2 text-center">
                <h4 className="nice_font text-center">
                  <i className="fa fa-phone fa-4x" />
                  <br /> هاتف
                </h4>
                <ul className="no-list">
                  <li>
                    <kbd>00966543818192</kbd>
                  </li>
                </ul>
              </div>
            </div>
            <br />

            <hr />
            <br />
            <br />

            <h2 style={{ fontSize: '30px' }}>
              العنوان
              <i className="fas fa-map-marker-alt positon_icon" />
            </h2>
            <br />
            <div className="tahoma mb-20">
              الرياض , حى الملز , المملكة العربية السعودية
            </div>
          </div>
        </div>
      </div>
    );
  }
}
