import React, { Component } from 'react';
import Slider from 'react-slick';
import { CarouselDiv, CarouselImages } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import img1 from '../img/1.JPG';
import img2 from '../img/2.JPG';
import img3 from '../img/3.JPG';
import img4 from '../img/4.JPG';
import img5 from '../img/5.JPG';
import img6 from '../img/6.JPG';
import img7 from '../img/7.JPG';
import img8 from '../img/8.JPG';
import img9 from '../img/9.JPG';
import img10 from '../img/10.JPG';
import img11 from '../img/11.JPG';
import img12 from '../img/12.JPG';
import img13 from '../img/13.JPG';
import img14 from '../img/14.JPG';
import img15 from '../img/15.JPG';
import img16 from '../img/16.JPG';
import img17 from '../img/17.JPG';

const breack = {
  200: {
    slidesPerView: 2.2,
  },
  320: {
    slidesPerView: 2.5,
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 3.2,
  },
  // when window width is >= 640px
  768: {
    slidesPerView: 3.5,
    spaceBetween: 10,
  },
  1024: {
    slidesPerView: 4,
  },
  1440: {
    slidesPerView: 5,
  },
};

export default () => {
  return (
    <CarouselDiv>
      <Swiper speed={500} loop={true} slidesPerView={4.5} breakpoints={breack}>
        <SwiperSlide>
          <CarouselImages src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImages src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImages src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImages src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImages src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImages src={img6} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImages src={img7} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImages src={img8} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImages src={img9} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImages src={img10} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImages src={img11} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImages src={img12} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImages src={img13} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImages src={img14} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImages src={img15} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImages src={img16} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImages src={img17} />
        </SwiperSlide>
        ...
      </Swiper>
    </CarouselDiv>
  );
};
