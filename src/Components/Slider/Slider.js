import React from "react";
import Slider from "react-slick";
import bruceMars from "../Assets/bruce-mars.jpg";
import Mubariz from "../Assets/mubariz.jpg";
import andre from "../Assets/andre.jpg";
import DavidNicolai from "../Assets/david-nicolai.jpg";
import ovinuchi from "../Assets/ovinuchi.jpg";
import "./Slider.scss";

const settings = {
  autoplaySpeed: 2000,
  draggable: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  swipe: true,
  swipeToSlide: true,
};

export default function MultipleItems() {
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img className="slider-image" src={bruceMars} />
        </div>
        <div>
          <img className="slider-image" src={DavidNicolai} />
        </div>
        <div>
          <img className="slider-image" src={andre} />
        </div>
        <div>
          <img className="slider-image" src={Mubariz} />
        </div>
        <div>
          <img className="slider-image" src={ovinuchi} />
        </div>
      </Slider>
    </div>
  );
}
