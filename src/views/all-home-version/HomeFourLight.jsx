import React from "react";
import HeaderFive from "../../components/header/HeaderFive";
import Footer from "../../components/footer/Footer";
import HeroThree from "../../components/hero/HeroThree";
import PersonalInfoThree from "../../components/about/PersonalInfoThree";
import Resume from "../../components/about/Resume";
import Portfolio from "../../components/portfolio/Portfolio";
import Service from "../../components/service/Service";
import Testimonial from "../../components/testimonial/Testimonial";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/Contact";
import Address from "../../components/Address";
import Sidebar from "../../components/header/Sidebar";

const HomeFourLight = () => {
  return (
    <div className="iknow_tm_extra_demo">
      <span className="top_shape"></span>

      <div className="background_part">
        {/* <!-- Hero Shapes --> */}
        <div className="know_tm_hero_second">
          <span className="one anim_circle">
            <img className="svg" src="img/svg/shapes/11.svg" alt="shape" />
          </span>
          <span className="two anim_scale2">
            <img className="svg" src="img/svg/shapes/10.svg" alt="shape" />
          </span>
          <span className="three anim_scale2">
            <img className="svg" src="img/svg/shapes/6.svg" alt="shape" />
          </span>
          <span className="four anim_scale2">
            <img className="svg" src="img/svg/shapes/6.svg" alt="shape" />
          </span>
          <span className="five anim_circle">
            <img className="svg" src="img/svg/shapes/11.svg" alt="shape" />
          </span>
          <span className="six anim_scale2">
            <img className="svg" src="img/svg/shapes/10.svg" alt="shape" />
          </span>
          <span className="seven anim_scale2">
            <img className="svg" src="img/svg/shapes/6.svg" alt="shape" />
          </span>
          <span className="eight anim_scale2">
            <img className="svg" src="img/svg/shapes/10.svg" alt="shape" />
          </span>
          <span className="nine anim_scale2">
            <img className="svg" src="img/svg/shapes/6.svg" alt="shape" />
          </span>
          <span className="ten anim_scale2">
            <img className="svg" src="img/svg/shapes/10.svg" alt="shape" />
          </span>
          <span className="eleven anim_circle">
            <img className="svg" src="img/svg/shapes/11.svg" alt="shape" />
          </span>
          <span className="twelve anim_circle">
            <img className="svg" src="img/svg/shapes/11.svg" alt="shape" />
          </span>
          <span className="thirteen anim_scale2">
            <img className="svg" src="img/svg/shapes/6.svg" alt="shape" />
          </span>
          <span className="fourteen anim_circle">
            <img className="svg" src="img/svg/shapes/11.svg" alt="shape" />
          </span>
          <span className="fifteen anim_scale2">
            <img className="svg" src="img/svg/shapes/6.svg" alt="shape" />
          </span>
          <span className="sixteen anim_scale2">
            <img className="svg" src="img/svg/shapes/10.svg" alt="shape" />
          </span>
          <span className="seventeen anim_scale2">
            <img className="svg" src="img/svg/shapes/10.svg" alt="shape" />
          </span>
          <span className="eighteen anim_scale2">
            <img className="svg" src="img/svg/shapes/10.svg" alt="shape" />
          </span>
        </div>
        {/* <!-- /Hero Shapes --> */}
      </div>
      {/* end background_part */}

      <HeaderFive />
      {/* End header five */}

      <Sidebar />
      {/* End Sidebar */}

      <div className="iknow_tm_content_wrapper">
        {/* <!-- HERO --> */}
        <HeroThree />
        {/* <!-- /HERO --> */}

        {/* <!-- ABOUT --> */}
        <div className="iknow_tm_section_new" id="about">
          <div className="iknow_tm_about">
            <PersonalInfoThree />
          </div>
        </div>
        {/* <!-- /ABOUT --> */}

        {/* <!-- RESUME --> */}
        <div className="iknow_tm_section_new" id="resume">
          <div className="iknow_tm_resume">
            <Resume />
          </div>
        </div>
        {/* <!-- /RESUME --> */}

        {/* <!-- PORTFOLIO --> */}
        <div className="iknow_tm_section_new" id="portfolio">
          <div className="iknow_tm_portfolio">
            <Portfolio />
          </div>
        </div>
        {/* <!-- /PORTFOLIO --> */}

        {/* <!-- SERVICE --> */}
        <div className="iknow_tm_section_new" id="service">
          <div className="iknow_tm_services">
            <Service />
          </div>
        </div>
        {/* <!-- /SERVICE --> */}

        {/* <!-- TESTIMONIAL --> */}
        <div className="iknow_tm_section_new" id="testimonial">
          <div className="know_tm_testimonials">
            <div className="know_tm_main_title">
              <span>Testimonials</span>
              <h3>What people say about me</h3>
            </div>
            <div className="testimonials_list">
              <Testimonial />
            </div>
          </div>
        </div>
        {/* <!-- /TESTIMONIAL --> */}

        {/* <!-- BLOG --> */}
        <div className="iknow_tm_section_new" id="news">
          <div className="know_tm_news">
            <div className="know_tm_main_title">
              <span>Blog</span>
              <h3>Latest tips, tricks &amp; Updates</h3>
            </div>
            {/* End .know_tm_main_title */}
            <Blog />
          </div>
        </div>
        {/* <!-- /BLOG --> */}

        {/* <!-- CONTACT --> */}
        <div className="iknow_tm_section_new" id="contact">
          <div className="know_tm_contact">
            <div className="know_tm_main_title">
              <span>Contact Me</span>
              <h3>Contact me to get your work done</h3>
            </div>
            <div className="wrapper">
              <div
                className="left"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <Address />
              </div>
              {/* End .left */}
              <div
                className="right"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="fields">
                  <Contact />
                </div>
              </div>
              {/* End .right */}
            </div>
          </div>
          {/* End .know_tm_contact */}
        </div>
        {/* <!-- /CONTACT --> */}

        {/* <!-- COPYRIGHT --> */}
        <div className="know_tm_copyright iknow_tm_copyright onepage extra">
          <div className="container">
            <Footer />
          </div>
        </div>
        {/* <!-- /COPYRIGHT --> */}
        <span className="bottom_shape"></span>
      </div>
    </div>
  );
};

export default HomeFourLight;
