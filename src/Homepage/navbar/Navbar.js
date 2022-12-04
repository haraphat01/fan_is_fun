import React from 'react';
import './navbar.css';
import searchIcon from '../../assets/images/search_icon.jpg';

export default function Navbar() {
  return (
    <div className=" nav-bar">
      <div className="container">
        <div className="d-flex nav-container">
          <div className=" d-flex">
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
          <div className="d-flex ">
            <p className="">Upcoming Events </p>
            <p className="">Team </p>
            <p className="">Log   in </p>
          </div>
        </div>
      </div>
    </div>
  );
}
