import { testimonialsData } from "@/src/utils/data";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
// prebuilt componet
const SlickSlider = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    touchMove: true,
    // this us for mobile screen touchMove true
    useCSS: true,
    responsive: [
      {
        breakpoint: 1024,
        // it means on 1024px screen
        setting: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1000,
        // it means on 1024px screen
        setting: {
            initialSlide: 2,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        // it means on 1024px screen
        setting: {

          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...setting}>
        {/*  ...settings is used to destruturing the porps */}
        {testimonialsData.map((testi, i) => (
          <div className="comment" key={i}>
            {/* upper sside */}
            <div className="c-content">
              <Image
                src={"/apos.svg"}
                className="apos-slider"
                alt="apos"
                width={40}
                height={30}
              />
              <span>{testi.comment}</span>
            </div>
            {/* lower */}
            <div className="c-info">
              <div className="c-avatar">{testi.name[0]}</div>
              <div className="c-person">
                <span>{testi.name}</span>
                <span>{testi.profession}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SlickSlider;
