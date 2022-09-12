import React from "react";

const HeroThree = () => {
  return (
    <div>
      {/* <!-- HERO --> */}
      <div className="iknow_tm_hero_third" id="home">
        <div className="background">
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/hero/8.jpg"
              })`,
            }}
          ></div>
          <div className="overlay"></div>
        </div>
        <div className="content">
          <span className="hello">Hello, I'm</span>
          <h3 className="name">James Smith</h3>
          <p className="text">
            A passionate UI/UX Designer and Web Developer based In NYC, USA
          </p>
          <div className="know_tm_button">
            <a href="img/cv/1.jpg" download>
              Download CV
            </a>
          </div>
        </div>
        <div className="iknow_tm_down_arrow">
          <div className="down-icon white top_120 section10">
            <a className="anchor" href="#about">
              <span></span>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- /HERO --> */}
    </div>
  );
};

export default HeroThree;
