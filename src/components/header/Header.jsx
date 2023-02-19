import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './Menu/MobileMenu';
import MegaMenu from './Menu/MegaMenu';
const HomesMenu = [
  {
    icon: 'home-smile-2',
    title: ' Home page 1',
    link: '/home-1',
  },
  {
    icon: 'home-2',
    title: ' Home page 2',
    link: '/home-2',
  },
  {
    icon: 'home-5',
    title: ' Home page 3',
    link: '/home-3',
  },
];
const PagesMenu = [
  {
    title: '',
    link: '',
  },
  {
    title: 'Pago Manual',
    link: '/manual',
  },
  {
    title: 'Ecommerce',
    link: '/',
  },
];

const Header = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div>

      <header className="header__1">
        <div className="container">
          <div className="wrapper js-header-wrapper">
            <div className="header__logo">
              <Link to="/">
                <img
                  className="header__logo"
                  id="logo_js"
                  src="src/assets/img/logos/mongepay.svg"
                  alt="logo"
                />
              </Link>
            </div>
            {/* ==================  */}
            <div className="header__menu">
              <ul className="d-flex space-x-20">

                {PagesMenu.map((val, i) => (
                  <li key={i}>
                    <Link className="color_black" to={val.link}>
                      {val.title}
                    </Link>
                  </li>
                ))}

              </ul>
            </div>
            {/* ================= */}
            <div className="header__search">
            </div>

            <div className="header__burger js-header-burger" onClick={toggleClass} />
            <div className={` header__mobile js-header-mobile  ${isActive ? 'visible' : null} `}>
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
