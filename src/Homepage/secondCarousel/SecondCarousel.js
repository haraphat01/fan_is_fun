import React from 'react';
import ReactBootstrapCarousel from 'react-bootstrap-carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import football from '../../assets/images/football.svg';
import hockey from '../../assets/images/hockey.svg';
import volleyball from '../../assets/images/volleyball.svg';
import basketball from '../../assets/images/basketball.svg';
import secondcarousel from './secondcarousel.css';

export default function SecondCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="div carousel-div1">
      
          <div className="container d-flex flex-column ">
          <p className="browse-by-sport">Browse by sport</p>
            <div className="d-flex justify-content-around">
           

              <div className="div-container2 ">
                <img className="football" src={football} alt="First slide" />
                <p className="football-text">Football</p>
              </div>
              <div className="div-container2">
                <img className="" src={hockey} alt="First slide" />
                <p className="football-text">Hockey</p>
              </div>
              <div className="div-container2">
                <img className="" src={volleyball} alt="First slide" />
                <p className="football-text">Volleyball</p>
              </div>
              <div className="div-container2">
                <img className="" src={basketball} alt="First slide" />
                <p className="football-text">Basketball</p>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
