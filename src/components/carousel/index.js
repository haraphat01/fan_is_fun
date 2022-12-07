import React, { useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);

function Carousel({ list = [] }) {
  // Reference to swiper
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // list length
  let listLength = list.length;

  if (listLength > 0) {
    let items = list.map((item, index) => (
      <SwiperSlide key={`slide-${index}`}>{item}</SwiperSlide>
    ));

    return (
      <div className={"carousel-wrapper px-3"}>
        {/* navigation buttons */}
        <nav
          className={`${
            listLength <= 3 ? "d-xl-none" : ""
          } d-none d-md-flex align-items-center justify-content-end z-2 carousel-nav`}
        >
          <span
            aria-label="prev"
            className={`p-2 text-black shadow-sm me-3`}
            ref={prevRef}
          >
            <LeftOutlined />
          </span>
          {/* swipers */}
          <Swiper
            autoHeight
            pagination={{ clickable: true }}
            spaceBetween={15}
            slidesPerView={1.2}
            lazy={{ loadPrevNext: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              // screens greater than >= 768px
              768: {
                slidesPerView: 2.2,
                spaceBetween: 15,
              },
              // screens greater than >= 1024px
              1024: {
                slidesPerView: 2.7,
                spaceBetween: 25,
              },
              // screens greater than >= 1024px
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {items}
          </Swiper>
          <span
            aria-label="next"
            className={`ms-3 p-2 text-black shadow-sm`}
            ref={nextRef}
          >
            <RightOutlined />
          </span>
        </nav>
      </div>
    );
  }
  return null;
}

export default Carousel;
