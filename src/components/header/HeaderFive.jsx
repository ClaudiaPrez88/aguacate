import React from "react";
import { Link } from "react-router-dom";
import SocialTwo from "../SocialTwo";

const HeaderFive = () => {
  return (
    // <!-- TOPBAR -->
    <div className="know_tm_topbar iknow_tm_topbar onepage">
      <div className="topbar_inner">
        <div className="logo">
          <Link to="/">
            {" "}
            <img src="img/logo/dark.png" alt="brand" />
          </Link>
        </div>
        <div className="right">
          <div className="social">
            <SocialTwo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderFive;
