import React, { Component } from 'react';
import Slider from 'react-slick';
import { CarouselDiv, CarouselImages } from './style';

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

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      // speed: 2000,
      autoplaySpeed: 3000,
      cssEase: 'linear',
      centerMode: true,
      arrows: false
    };
    return (
      <CarouselDiv>
        <Slider {...settings}>
          <div>
            <CarouselImages src={img1} />
          </div>
          <div>
            <CarouselImages src={img2} />
          </div>
          <div>
            <CarouselImages src={img3} />
          </div>
          <div>
            <CarouselImages src={img4} />
          </div>
          <div>
            <CarouselImages src={img5} />
          </div>
          <div>
            <CarouselImages src={img6} />
          </div>
          <div>
            <CarouselImages src={img7} />
          </div>
          <div>
            <CarouselImages src={img8} />
          </div>
          <div>
            <CarouselImages src={img9} />
          </div>
          <div>
            <CarouselImages src={img10} />
          </div>
          <div>
            <CarouselImages src={img11} />
          </div>
          <div>
            <CarouselImages src={img12} />
          </div>
          <div>
            <CarouselImages src={img13} />
          </div>
          <div>
            <CarouselImages src={img14} />
          </div>
          <div>
            <CarouselImages src={img15} />
          </div>
          <div>
            <CarouselImages src={img16} />
          </div>
          <div>
            <CarouselImages src={img17} />
          </div>
        </Slider>
      </CarouselDiv>
    );
  }
}
