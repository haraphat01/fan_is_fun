import React from 'react';
import Navbar from './navbar/Navbar';
import Carousel from './carousel/Carousel';
import SecondCarousel from './secondCarousel/SecondCarousel';
import Faqs from './faq/Faq';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <SecondCarousel />
      <Faqs />
    </div>
  );
}
