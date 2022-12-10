import React, { useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Card from "./card";
import { useNavigate } from "react-router-dom";
import celebrities from "../../mockApi/celebData";

SwiperCore.use([Navigation, Pagination]);

function PopularCarousel({ list = celebrities }) {
  // Reference to swiper
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // list length
  let listLength = list.length;

  // url location
  const navigate = useNavigate();

  // handle
  const goToProfile = (value) => {
    navigate(`/profile/${value}`);
  };

  if (listLength > 0) {
    let items = list.map((item, index) => (
      <SwiperSlide key={`slide-${index}`}>
        {
          <div onClick={() => goToProfile(item.id)}>
            <Card
              name={item.name}
              description={item.description}
              image={item.image}
              hoverable={true}
              extra={null}
            />
          </div>
        }
      </SwiperSlide>
    ));

    return (
      <div className={"carousel-wrapper px-3"}>
        {/* navigation buttons */}
        <nav
          className={`${
            listLength <= 3 ? "d-xl-none" : ""
          } d-none d-md-flex align-items-center justify-content-end z-2 carousel-nav mb-3`}
        >
          <span
            aria-label="prev"
            className={`p-2 text-black shadow-lg me-3`}
            ref={prevRef}
          >
            <LeftOutlined />
          </span>

          <span
            aria-label="next"
            className={`ms-3 p-2 text-black shadow-lg`}
            ref={nextRef}
          >
            <RightOutlined />
          </span>
        </nav>

        {/* swipers */}
        <Swiper
          autoHeight
          // pagination={{ clickable: true }}
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
              slidesPerView: 3.7,
              spaceBetween: 25,
            },
            // screens greater than >= 1024px
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {items}
        </Swiper>
      </div>
    );
  }

  return null;
}

export default PopularCarousel;
