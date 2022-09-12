import React from "react";
import { Link } from "react-router-dom";

const previewContent = [
  {
    name: "JAMES",
    sticker: "NEW",
    preview: [
      { img: "5", title: "Light Demo", routePath: "/home-four-light" },
      { img: "5-dark", title: "Dark Demo", routePath: "/home-four-dark" },
    ],
  },
  {
    name: "NAYNA",
    sticker: "NEW",
    preview: [
      { img: "7", title: "Light Demo", routePath: "/home-five-light" },
      { img: "7-dark", title: "Dark Demo", routePath: "/home-five-dark" },
    ],
  },
  {
    name: "TOM",
    sticker: "HOT",
    preview: [
      { img: "2", title: "Light Demo", routePath: "/home-three-light" },
      { img: "2-dark", title: "Dark Demo", routePath: "/home-three-dark" },
    ],
  },
  {
    name: "JESSICA",
    sticker: "HOT",
    preview: [
      { img: "1", title: "Light Demo", routePath: "/home-one-light" },
      { img: "1-dark", title: "Dark Demo", routePath: "/home-one-dark" },
    ],
  },
  {
    name: "SARAH",
    sticker: "HOT",
    preview: [
      { img: "3", title: "Light Demo", routePath: "/home-two-light" },
      { img: "3-dark", title: "Dark Demo", routePath: "/home-two-dark" },
    ],
  },
];

const Preview = () => {
  document.body.classList.add("preview");
  return (
    <div className="iknow_tm_intro">
      <div
        className="intro_bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "img/hero/4.jpg"})`,
        }}
      ></div>

      <div className="intro_content">
        <div className="intro_title">
          <span class="image_logo">
            <img src="img/logo/dark.png" alt="" />
            <span class="version">V 2.0</span>
          </span>
          <span>Modern CV / Resume / Portfolio / React Template</span>
        </div>

        <div className="demo">
          <ul>
            {previewContent.map((item, i) => (
              <li key={i}>
                <h3 className="name">
                  <span className="name_in">
                    {item.name}
                    <span className="new">{item.sticker}</span>
                  </span>
                </h3>
                <div className="list_inner">
                  {item.preview.map((val, i) => (
                    <div className="in" key={i}>
                      <Link
                        to={val.routePath}
                        className="iknow_tm_full_link"
                        target="_blank"
                      >
                        <img src={`img/intro/${val.img}.jpg`} alt="demo" />
                      </Link>
                      <h3 className="mini">{val.title}</h3>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <div className="coming">
            <h3>More are coming soon...</h3>
          </div>
        </div>
        <div className="intro_space"></div>
      </div>
    </div>
  );
};

export default Preview;
