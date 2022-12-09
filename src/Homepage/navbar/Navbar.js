import React from 'react';
import './navbar.css';
import searchIcon from '../../assets/images/search_icon.jpg';
import notification from '../../assets/images/notification.svg';
import setting from '../../assets/images/setting.svg';

export default function Navbar() {
  return (
    <div className=" nav-bar">
      <div className="container">
        <div className="d-flex nav-container">
          <div className=" d-flex ">
            <p className="fanisfun">FanisFun</p>
            <div className="search">
              <p className="search_text"> Search for </p>
              <img src={searchIcon} alt="search" className="icon" />
            </div>
          </div>
          <div className="d-flex upcoming-div">
            <p className="text-color">Upcoming Events </p>
            <p className="text-color">Team </p>
            <p className="text-color">Players </p>
          </div>
          <div className="d-flex right-icon ">
            <div className="div">
              <img
                src={notification}
                alt="search"
                className="notification-icon "
              />
              <img src={setting} alt="search" className="settings-icon" />
            </div>
            <button className="login-button">Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
}
