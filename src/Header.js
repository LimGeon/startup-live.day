import React, { useEffect, useState } from 'react';
import './Header.css';
import Logo from './Img/logo.svg';
export default function Header() {
  const [activ, setActive] = useState(false);
  return (
    <div className="HeaderContent">
      <div className="Logo">
        <a href="#">
          <img className="LLogo" src={Logo} alt="Logo" />
        </a>
      </div>
      <div className={activ ? null : 'Bar-noActive'}>
        <ul className="Bar">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Open Chat</a>
          </li>
          <li>
            <a href="#">Content</a>
          </li>
          <li>
            <a href="#">Bookings</a>
          </li>
        </ul>
      </div>
      <div className="row cf">
        <div
          className="three col"
          onClick={(event) => {
            setActive((current) => !current);
          }}
        >
          <div
            className={activ ? 'hamburger is-active' : 'hamburger'}
            id="hamburger-5"
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
