import React from 'react';
import SportList from '../../components/sportlist';
import HeaderSlider from '../../components/headerSlider';
import PopularList from '../../components/popularList';
import img_signupbg from '../../assets/images/signup-bg.jpg';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
// import Faq from '../faq/Faq';
import {
  FileProtectOutlined,
  VideoCameraOutlined,
  ShopOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Home() {
  let [isSignedIn, setIsSignedIn] = useState(false);
  const logedIn = () => {
    if (localStorage.getItem('user')) {
      setIsSignedIn(true);
    } else {
    }
  };

  useEffect(() => {
    logedIn();
  }, []);
  return (
    <>
      {/* header */}
      <HeaderSlider />
      {/* main-section */}
      <div className="container">
        {/* sports */}
        <section className="mt-5">
          <h3 className="pb-3">Sport categories</h3>
          <SportList />
        </section>

        {/* signup call to action */}
        <Fade>
          <section className="mt-5 border rounded overflow-hidden">
            <div className="container">
              <div className="row" style={{ background: '#70f8e6' }}>
                <div className={'col-4 py-2'}>
                  <div className={'text-center my-5'}>
                    <span className="fs-1">+52000 Fans</span>
                    <h5>Join the fan community and have fun </h5>
                    <Button size="large" className={'mt-4'}>
                      Sign up
                    </Button>
                  </div>
                </div>
                <div
                  className={'col-8 py-2'}
                  style={{
                    background: `url(${img_signupbg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    minHeight: 320,
                  }}
                ></div>
              </div>
            </div>
          </section>
        </Fade>

        {/* activities */}
        <section className="mt-4 mb-5">
          <h3 className="pb-3">Activities</h3>
          <div className="container">
            <Slide direction="left">
              <div className="row  mb-3">
                <div
                  className={'col-4 py-2 text-center'}
                  style={{ background: '#cff1d1' }}
                >
                  {isSignedIn ? (
                    <Link
                      to="/#"
                      className="d-flex text-dark align-items-center justify-content-center"
                    >
                      <span>Daily sports news</span>
                      <FileProtectOutlined style={{ marginLeft: 15 }} />
                    </Link>
                  ) : (
                    'Sign in for access the news page'
                  )}
                </div>
                <div
                  className={'col-8 py-2 text-center'}
                  style={{ background: '#e07fe9' }}
                >
                  <Link
                    to="/#"
                    className="d-flex text-dark align-items-center justify-content-center"
                  >
                    <span>Offline events</span>
                    <HomeOutlined style={{ marginLeft: 15 }} />
                  </Link>
                </div>
              </div>
            </Slide>
            <Slide direction="right">
              <div className="row  ">
                <div
                  className={'col-7 py-2 text-center'}
                  style={{ background: '#d66f85' }}
                >
                  <Link
                    to="/#"
                    className="d-flex text-dark align-items-center justify-content-center"
                  >
                    <span>Video calls</span>
                    <VideoCameraOutlined style={{ marginLeft: 15 }} />
                  </Link>
                </div>
                <div
                  className={'col-5 py-2 text-center'}
                  style={{ background: '#f0d79e' }}
                >
                  <Link
                    to="/#"
                    className="d-flex text-dark align-items-center justify-content-center"
                  >
                    <span>Sports merchandise</span>
                    <ShopOutlined style={{ marginLeft: 15 }} />
                  </Link>
                </div>
              </div>
            </Slide>
          </div>
        </section>
        {/* popular */}
        <section className="mb-5">
          <h3>Popular athletes</h3>
          <PopularList />
        </section>
        {/* faq */}
        {/* <Faq /> */}
      </div>
    </>
  );
}
