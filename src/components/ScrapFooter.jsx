import React from "react";
import { Container } from "react-bootstrap";
import footerLogo from "../assets/img/svg/footer-logo.svg";
import Twitter from "../assets/img/svg/Twitter.svg";
import Discord from "../assets/img/svg/Discord.svg";
const ScrapFooter = () => {
  return (
    <>
      <footer id="Servers" className="py-4 py-sm-5">
        <Container className="text-center pt-sm-5">
          <a href="#" className="d-inline-block mb-4">
            {" "}
            <img src={footerLogo} alt="footerLogo" />
          </a>
          <p className="fs_base fw_regular text-white mb-4 opacity_05 pt-2 ff_poppins text-center">
            Iaculis turpis phasellus dolor fringilla. Sed tristique erat
            accumsan est. Tortor morbi odio{" "}
            <span className="d-lg-block">
              nisl dictumst lectus elementum. Cras dictum pulvinar dolor diam
              pell.
            </span>
          </p>
          <ul className="ps-0 mb-0 d-flex justify-content-center gap-2 gap-md-5">
            <li>
              <a
                href="#"
                className="d-inline-block fs_base fw_regular text-uppercase text-white opacity_05 ff_p"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-inline-block fs_base fw_regular text-uppercase text-white opacity_05 ff_p"
              >
                Link
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-inline-block fs_base fw_regular text-uppercase text-white opacity_05 ff_p"
              >
                Bans
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-inline-block fs_base fw_regular text-uppercase text-white opacity_05 ff_p"
              >
                Leaderboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-inline-block fs_base fw_regular text-uppercase text-white opacity_05 ff_p"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-inline-block fs_base fw_regular text-uppercase text-white opacity_05 ff_p"
              >
                Applications
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center justify-content-center gap-4 mt-4">
            <a href="#" className="d-inline-block slider_social_media">
              <img className="w-100" src={Discord} alt="Discord" />
            </a>
            <a href="#" className="d-inline-block slider_social_media">
              <img className="w-100" src={Twitter} alt="Twitter" />
            </a>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default ScrapFooter;
