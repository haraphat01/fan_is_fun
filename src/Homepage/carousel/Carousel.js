import ReactBootstrapCarousel from 'react-bootstrap-carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import ronaldo from '../../assets/images/ronaldo.svg';
import carousel from './carousel.css';

export default function Carousels() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="div carousel-div">
          <div className="container d-flex ">
            <div className="div-container">
              <p className="div-text">
                Get Video Message from your favourite celebrity
              </p>
              <p className="try-it-now">Try now</p>
            </div>
            <div className="div">
              <img className=" ronaldo" src={ronaldo} alt="First slide" />
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="div carousel-div">
          <div className="container d-flex ">
            <div className="div-container">
              <p className="div-text">
                Get Video Message from your favourite celebrity
              </p>
              <p className="try-it-now">Try now</p>
            </div>
            <div className="div">
              <img className=" ronaldo" src={ronaldo} alt="First slide" />
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
