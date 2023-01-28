import React, { useState } from "react";
import { Container, Nav, Row } from "react-bootstrap";
import PageLogo from "../assets/img/svg/footer-logo.svg";

const ScrapNav = () => {
  const [nav, setnav] = useState(false);
  if (nav) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <Nav className="nav_bg my-3 my-md-5 position-relative">
        <Container
        // data-aos="zoom-in"
        // data-aos-duration="1200"
        // data-aos-delay="3000"
        >
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center align-items-center">
              <a href="#" className="d-inline-bloack page-logo">
                <img
                  className="page_logo_img top-0 position-absolute"
                  src={PageLogo}
                  alt="PageLogo"
                />
              </a>
              <ul className="ps-5 mb-0 list-unstyled d-none d-lg-flex gap-4 align-items-center">
                <li>
                  <a className="d-inline-block  nav_links " href="#Store">
                    Store
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-block fs_md ff_gilroy_SemiBold tc_info nav_links "
                    href="#Marketplace"
                  >
                    Marketplace
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-block fs_md ff_gilroy_SemiBold tc_info nav_links "
                    href="#Bans"
                  >
                    Bans
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-block fs_md ff_gilroy_SemiBold tc_info nav_links "
                    href="#Servers"
                  >
                    Servers
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-block fs_md ff_gilroy_SemiBold tc_info nav_links "
                    href="#Schedule"
                  >
                    Schedule
                  </a>
                </li>
              </ul>
            </div>
            <a className="nav_links" href="">
              Login
            </a>
            <button
              onClick={() => setnav(true)}
              className="bg-transparent border-0 d-lg-none menu position-relative"
            >
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </button>
          </div>
          {/* responsive nav */}
          <div className={`${nav ? "show_nav" : "nav_hide"}`}>
            <div className="d-flex align-items-center gap-4 flex-column position-relative min-vh-100 w-100 justify-content-center d-lg-none">
              <button
                onClick={() => setnav(false)}
                className="btn btn-close btn-close-white fs-3 position-absolute top-0 end-0 mt-5 me-5"
              ></button>
              <ul className="ps-0 mb-0 list-unstyled d-flex flex-column gap-4 align-items-center">
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_md ff_gilroy_SemiBold tc_info nav_links "
                    href="#Store"
                  >
                    Store
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_md ff_gilroy_SemiBold tc_info nav_links ff_inter"
                    href="#Marketplace"
                  >
                    Marketplace
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_md ff_gilroy_SemiBold tc_info nav_links ff_inter"
                    href="#Bans"
                  >
                    Bans
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_md ff_gilroy_SemiBold tc_info nav_links ff_inter"
                    href="#Servers"
                  >
                    Servers
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_md ff_gilroy_SemiBold tc_info nav_links ff_inter"
                    href="#Schedule"
                  >
                    Schedule
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Nav>
    </>
  );
};

export default ScrapNav;
