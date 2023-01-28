import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import sliderImg from "../assets/img/png/slider-img1.png";
import sliderimgto from "../assets/img/png/earn.png";
import guns from "../assets/img/png/guns.png";

const ScrapSlider = () => {
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  var setting = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    speed: 500,
    slidesToShow: 3.13,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.2,
          autoplay: true,
          autoplaySpeed: 1500,
          pauseOnHover: false,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  var imagesslide = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,

    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  return (
    <div
      id="Store"
      className="py-5 d-flex flex-column align-items-center justify-content-center"
    >
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <h3 className="text-center position-relative fs_4xl ff_inter text-white fw_regular pb-4">
            OUR <span className="hero_text">FEATURES!</span>
          </h3>
          <div className="col-lg-6">
            <div className="vertical_slider_gradient">
              <Slider
                className="review_slider"
                asNavFor={nav2}
                ref={slider1}
                {...setting}
              >
                <div className="slider_vertical px-4 py-4">
                  <p className="m-0 ff_inter text-white fs_2xl fw_semibold">
                    REVIEW YOUR STATS!
                  </p>
                  <p className="m-0 ff_poppins text-white opacity_05 pt-2 fw_regular fs_md">
                    Tincidunt laoreet integer ut aenean rhoncus.
                  </p>
                </div>
                <div className="slider_vertical px-4 py-4">
                  <p className="m-0 ff_inter text-white fs_2xl fw_semibold">
                    PLAY TO EARN
                  </p>
                  <p className="m-0 ff_poppins text-white opacity_05 pt-2 fw_regular fs_md">
                    Tincidunt laoreet integer ut aenean rhoncus.
                  </p>
                </div>
                <div className="slider_vertical px-4 py-4">
                  <p className="m-0 ff_inter text-uppercase text-white fs_2xl fw_semibold">
                    Trade your items!
                  </p>
                  <p className="m-0 ff_poppins text-white opacity_05 pt-2 fw_regular fs_md">
                    Tincidunt laoreet integer ut aenean rhoncus.
                  </p>
                </div>
                <div className="slider_vertical px-4 py-4">
                  <p className="m-0 ff_inter text-white fs_2xl fw_semibold">
                    REVIEW YOUR STATS!
                  </p>
                  <p className="m-0 ff_poppins text-white opacity_05 pt-2 fw_regular fs_md">
                    Tincidunt laoreet integer ut aenean rhoncus.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="slider_bg_img">
              <Slider asNavFor={nav1} ref={slider2} {...imagesslide}>
                <div className="d-flex justify-content-center">
                  <img className="w-75" src={sliderImg} alt="sliderImg" />
                </div>
                <div className="d-flex justify-content-center">
                  <img className="w-75" src={guns} alt="sliderImg" />
                </div>
                <div className="d-flex justify-content-center">
                  <img className="w-75" src={sliderimgto} alt="sliderImg" />
                </div>
                <div className="d-flex justify-content-center">
                  <img className="w-75" src={sliderImg} alt="sliderImg" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrapSlider;
