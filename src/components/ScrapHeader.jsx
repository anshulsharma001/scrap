import React from "react";
import { Container } from "react-bootstrap";
import ScrapNav from "./ScrapNav";
import store from "../assets/img/svg/Store.svg";
import Links from "../assets/img/svg/Links.svg";
import SteAM from "../assets/img/svg/SteAM.svg";
import Twitter from "../assets/img/svg/Twitter.svg";
import Discord from "../assets/img/svg/Discord.svg";
import Discord2 from "../assets/img/svg/Discord-2.svg";
import Cart from "../assets/img/svg/cart.svg";
import HeroSlider1 from "../assets/img/png/hero-slider-1.png";
import Slider from "react-slick";
const ScrapHeader = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 4000,
    autoplay: true,
    slidesToShow: 1.65,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.0,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <header id="Marketplace" className="d-flex flex-column">
        <ScrapNav />
        <div className="d-flex align-items-center flex-grow-1">
          <div className="w-100">
            <Container>
              <h1
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="1100"
                className="fs_5xl fw_medium text-white ff_poppins text-center"
              >
                WELCOME TO{" "}
                <span className="hero_text ff_unbounded">SCRAPLAND</span>
              </h1>
              <p
                data-aos="zoom-in"
                data-aos-delay="500"
                data-aos-duration="1100"
                className="fs_base fw_regular ff_poppins text-white text-center pt-2 mb-4"
              >
                Check out our gamemodes and servers below
              </p>
              <div className="d-flex align-items-center justify-content-center gap-2 gap-sm-4 pt-1">
                <a
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="1100"
                  href="#"
                  className="text-center d-flex flex-column align-items-center hero_social_media"
                >
                  <img src={store} alt="store" />
                  <span className="opacity_03 fs_sm fw_regular text-white ff_poppins">
                    STORE
                  </span>
                </a>
                <a
                  data-aos="zoom-in"
                  data-aos-delay="600"
                  data-aos-duration="1100"
                  href="#"
                  className="text-center d-flex flex-column align-items-center hero_social_media"
                >
                  <img src={Links} alt="Links" />
                  <span className="opacity_03 fs_sm fw_regular text-white ff_poppins">
                    LINK
                  </span>
                </a>
                <a
                  data-aos="zoom-in"
                  data-aos-delay="700"
                  data-aos-duration="1100"
                  href="#"
                  className="text-center d-flex flex-column align-items-center hero_social_media"
                >
                  <img src={Discord} alt="Discord" />
                  <span className="opacity_03 fs_sm fw_regular text-white ff_poppins">
                    DISCORD
                  </span>
                </a>
                <a
                  data-aos="zoom-in"
                  data-aos-delay="800"
                  data-aos-duration="1100"
                  href="#"
                  className="text-center d-flex flex-column align-items-center hero_social_media"
                >
                  <img src={Twitter} alt="Twitter" />
                  <span className="opacity_03 fs_sm fw_regular text-white ff_poppins">
                    TWITTER
                  </span>
                </a>
                <a
                  data-aos="zoom-in"
                  data-aos-delay="900"
                  data-aos-duration="1100"
                  href="#"
                  className="text-center d-flex flex-column align-items-center hero_social_media"
                >
                  <img src={SteAM} alt="SteAM" />
                  <span className="opacity_03 fs_sm fw_regular text-white ff_poppins">
                    STEAM
                  </span>
                </a>
              </div>
            </Container>
            <div className="position-relative">
              <div className="blur_circle position-absolute"></div>
              <div className="blur_circle2 position-absolute"></div>
              <Slider {...settings} className="hero_slider">
                <div className="px-3 hero-slide my-5">
                  <div className="position-relative">
                    <div className="slide_overlay position-absolute w-100 h-100 top-0 start-0"></div>
                    <img
                      className="w-100 rounded-3"
                      src={HeroSlider1}
                      alt="HeroSlider1"
                    />
                    <div className="slider_text_overlay text-white fs_sm py-3 px-3 pt-sm-5 position-absolute bottom-0 start-0 w-100">
                      <div className="d-sm-flex">
                        <div className="d-flex align-items-baseline gap-2 w-50">
                          <span>
                            <svg
                              width="21"
                              height="22"
                              viewBox="0 0 21 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                opacity="0.1"
                                cx="10.5"
                                cy="11"
                                r="10.5"
                                fill="#00BFFF"
                              />
                              <circle
                                opacity="0.1"
                                cx="10.5"
                                cy="11"
                                r="6.5"
                                fill="#00BFFF"
                              />
                              <circle
                                cx="10.5"
                                cy="11"
                                r="3.5"
                                fill="#00BFFF"
                              />
                            </svg>
                          </span>
                          <div>
                            <p className="fs_2xl mb-0 ff_poppins fw_semibold text-white">
                              345
                            </p>
                            <p className="fs_sm fw_regular mb-0 ff_poppins text-white opacity_05">
                              PLAYERS ACTIVE
                            </p>
                          </div>
                        </div>
                        <p className="fs_sm w-100 fw_regular text-white opacity_07 ff_poppins">
                          Dignissim vitae integer odio posuere gravida sed dolor
                          purus id. Sed ipsum et amet etiam interdum amet aenean
                          gravida.
                        </p>
                        <div className="d-flex align-items-center gap-2">
                          <a
                            href="#"
                            className="text-center slider_social_media"
                          >
                            <img src={Cart} alt="Cart" />
                          </a>
                          <a
                            href="#"
                            className="text-center slider_social_media"
                          >
                            <img src={Discord2} alt="Discord2" />
                          </a>
                          <a
                            href="#"
                            className="server_btn fs_sm fw_semibold text-white rounded-pill d-inline-block"
                          >
                            SERVER
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3 hero-slide my-5">
                  <div className="position-relative">
                    <div className="slide_overlay position-absolute w-100 h-100 top-0 start-0"></div>
                    <img
                      className="w-100 rounded-3"
                      src={HeroSlider1}
                      alt="HeroSlider1"
                    />
                    <div className="slider_text_overlay text-white fs_sm py-3 px-3 pt-sm-5 position-absolute bottom-0 start-0 w-100">
                      <div className="d-sm-flex">
                        <div className="d-flex align-items-baseline gap-2 w-50">
                          <span>
                            <svg
                              width="21"
                              height="22"
                              viewBox="0 0 21 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                opacity="0.1"
                                cx="10.5"
                                cy="11"
                                r="10.5"
                                fill="#00BFFF"
                              />
                              <circle
                                opacity="0.1"
                                cx="10.5"
                                cy="11"
                                r="6.5"
                                fill="#00BFFF"
                              />
                              <circle
                                cx="10.5"
                                cy="11"
                                r="3.5"
                                fill="#00BFFF"
                              />
                            </svg>
                          </span>
                          <div>
                            <p className="fs_2xl mb-0 ff_poppins fw_semibold text-white">
                              345
                            </p>
                            <p className="fs_sm fw_regular mb-0 ff_poppins text-white opacity_05">
                              PLAYERS ACTIVE
                            </p>
                          </div>
                        </div>
                        <p className="fs_sm w-100 fw_regular text-white opacity_07 ff_poppins">
                          Dignissim vitae integer odio posuere gravida sed dolor
                          purus id. Sed ipsum et amet etiam interdum amet aenean
                          gravida.
                        </p>
                        <div className="d-flex align-items-center gap-2">
                          <a
                            href="#"
                            className="text-center slider_social_media"
                          >
                            <img src={Cart} alt="Cart" />
                          </a>
                          <a
                            href="#"
                            className="text-center slider_social_media"
                          >
                            <img src={Discord2} alt="Discord2" />
                          </a>
                          <a
                            href="#"
                            className="server_btn fs_sm fw_semibold text-white rounded-pill d-inline-block"
                          >
                            SERVER
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3 hero-slide my-5">
                  <div className="position-relative">
                    <div className="slide_overlay position-absolute w-100 h-100 top-0 start-0"></div>
                    <img
                      className="w-100 rounded-3"
                      src={HeroSlider1}
                      alt="HeroSlider1"
                    />
                    <div className="slider_text_overlay text-white fs_sm py-3 px-3 pt-sm-5 position-absolute bottom-0 start-0 w-100">
                      <div className="d-sm-flex">
                        <div className="d-flex align-items-baseline gap-2 w-50">
                          <span>
                            <svg
                              width="21"
                              height="22"
                              viewBox="0 0 21 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                opacity="0.1"
                                cx="10.5"
                                cy="11"
                                r="10.5"
                                fill="#00BFFF"
                              />
                              <circle
                                opacity="0.1"
                                cx="10.5"
                                cy="11"
                                r="6.5"
                                fill="#00BFFF"
                              />
                              <circle
                                cx="10.5"
                                cy="11"
                                r="3.5"
                                fill="#00BFFF"
                              />
                            </svg>
                          </span>
                          <div>
                            <p className="fs_2xl mb-0 ff_poppins fw_semibold text-white">
                              345
                            </p>
                            <p className="fs_sm fw_regular mb-0 ff_poppins text-white opacity_05">
                              PLAYERS ACTIVE
                            </p>
                          </div>
                        </div>
                        <p className="fs_sm w-100 fw_regular text-white opacity_07 ff_poppins">
                          Dignissim vitae integer odio posuere gravida sed dolor
                          purus id. Sed ipsum et amet etiam interdum amet aenean
                          gravida.
                        </p>
                        <div className="d-flex align-items-center gap-2">
                          <a
                            href="#"
                            className="text-center slider_social_media"
                          >
                            <img src={Cart} alt="Cart" />
                          </a>
                          <a
                            href="#"
                            className="text-center slider_social_media"
                          >
                            <img src={Discord2} alt="Discord2" />
                          </a>
                          <a
                            href="#"
                            className="server_btn fs_sm fw_semibold text-white rounded-pill d-inline-block"
                          >
                            SERVER
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="pt-sm-4 pb-4 pb-sm-5 hero_line_box d-flex justify-content-center">
              <span className="d-block hero_line"></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default ScrapHeader;
