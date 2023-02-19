import React from 'react';
import { Link } from 'react-router-dom';
import MONGEPAY from '../../assets/img/logos/mongepay.png';

function Footer() {
  return (
    <div>
      <footer className="footer__1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 space-y-20">
              <div className="footer__logo">
                <Link to="/">
                  <img src={MONGEPAY} alt="logo" id="logo_js_f" />
                </Link>
              </div>
              <p className="footer__text">
                Mongepay Boton Pago
              </p>
              <div>
                <ul className="footer__social space-x-10 mb-40">
                  <li>
                  </li>
                  <li>
                  </li>
                  <li>
                  </li>
                  <li>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <h6 className="footer__title"></h6>
              <ul className="footer__list">
                <li>
                </li>
                <li>
                </li>
                <li>
                </li>
                <li>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6">
              <h6 className="footer__title"></h6>
              <ul className="footer__list">
                <li>
                </li>
                <li>
                </li>
                <li>
                </li>
                <li>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6">
              <h6 className="footer__title"></h6>
              <ul className="footer__list">
                <li>
                </li>
                <li>
                </li>
                <li>
                </li>
                <li>
                </li>
              </ul>
            </div>
          </div>
          <p className="copyright text-center">
            Copyright © 2023. Created by Deiby Mejia.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
