import { Button } from "antd";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { SoundFilled, SettingFilled } from "@ant-design/icons";
import SearchBar from "../searchBar";

function Navbar({
  links = [
    {
      label: "Upcoming evevnts",
      url: "/events",
    },
    {
      label: "Teams",
      url: "/teams",
    },
    {
      label: "Players",
      url: "/players",
    },
  ],
}) {
  return (
    <div style={{ background: "#f1f1f1" }}>
      <div className="container">
        <nav className="navbar navbar-expand text-white">
          <div className="d-flex aling-items-center me-auto">
            <div className="d-flex align-items-center me-4">
              <img src={logo} height={30} className={"me-2"} />
              <Link to="/" className="brand-name me-auto">
                FanisFun
              </Link>
            </div>
            <SearchBar placeholder={"Type team name...."} />
          </div>

          <ul className="d-none d-md-flex navbar-nav">
            {links.length > 0 &&
              links.map((link, key) => (
                <li className="nav-link" key={key}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "navlink isActive" : "navlink"
                    }
                    to={link.url}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
          </ul>
          <div className="d-flex align-items-center ">
            <SoundFilled
              size={40}
              style={{ color: "black" }}
              className={"mx-3"}
            />
            <SettingFilled
              size={40}
              style={{ color: "black" }}
              className={"mx-3"}
            />

            <Button className="login-button">Log in</Button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
