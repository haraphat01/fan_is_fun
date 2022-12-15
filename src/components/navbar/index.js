import { Button } from 'antd';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { SoundFilled, SettingFilled } from '@ant-design/icons';
import SearchBar from '../searchBar';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

function Navbar({
  links = [
    {
      label: 'Upcoming evevnts',
      url: '/events',
    },
    {
      label: 'Teams',
      url: '/teams',
    },
    {
      label: 'Players',
      url: '/players',
    },
  ],
}) {
  const responseGoogle = (response) => {
   
    let decode = jwt_decode(response.credential);
    localStorage.setItem('user', JSON.stringify(decode));
    const { name, picture, sub } = decode;
    console.log(decode);
  

    // client.createIfNotExists(doc).then(() => {
    //   navigate('/', { replace: true });
    // });
  };
  return (
    <div className="container">
      <nav className="navbar navbar-expand text-white">
        <div className="d-flex aling-items-center me-auto">
          <div className="d-flex align-items-center me-4">
            <img src={logo} height={30} className={'me-2'} />
            <Link to="/" className="brand-name me-auto">
              FanisFun
            </Link>
          </div>
          <SearchBar placeholder={'Type team name....'} />
        </div>

        <ul className="d-none d-md-flex navbar-nav">
          {links.length > 0 &&
            links.map((link, key) => (
              <li className="nav-link" key={key}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'navlink isActive' : 'navlink'
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
            style={{ color: 'black' }}
            className={'mx-3'}
          />
          <SettingFilled
            size={40}
            style={{ color: 'black' }}
            className={'mx-3'}
          />

          <GoogleLogin
            onSuccess={(response) => {
              // console.log(response);
              responseGoogle(response);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
