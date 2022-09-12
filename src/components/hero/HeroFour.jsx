import React from "react";

const HeroFour = () => {
  return (
    <div>
      {/* <!-- HERO --> */}
      <div className="iknow_tm_hero_third iknow_tm_hero_fifth" id="home">
        <div className="background">
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/hero/10.jpg"
              })`,
            }}
          ></div>
        </div>
        {/* End background */}

        <div className="content">
          <div className="avatar">
            <div
              className="main"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "img/hero/11.jpg"
                })`,
              }}
            ></div>
          </div>
          <span className="hello">Hello, I'm</span>
          <h3 className="name">Nayna Eva</h3>
          <p className="text">
            A passionate UI/UX Designer and Web Developer based In NYC, USA
          </p>
          <img className="sign" src="img/hero/sign.png" alt="hero" />
        </div>
        {/* End .content */}
      </div>
      {/* <!-- /HERO --> */}
    </div>
  );
};

export default HeroFour;
