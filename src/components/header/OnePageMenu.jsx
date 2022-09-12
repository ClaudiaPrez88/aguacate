import React from "react";
import Scrollspy from "react-scrollspy";

// sidebar content
const sidebarContent = [
  {
    icon: "icon-squares",
    itemName: "Home",
    itemRoute: "#home",
    activeClass: "current",
  },
  {
    icon: "icon-archive",
    itemName: "About Me",
    itemRoute: "#about",
    activeClass: "",
  },
  {
    icon: "icon-contacs",
    itemName: "Resume",
    itemRoute: "#resume",
    activeClass: "",
  },
  {
    icon: "icon-briefcase",
    itemName: "Portfolio",
    itemRoute: "#portfolio",
    activeClass: "",
  },
  {
    icon: "icon-gear",
    itemName: "Service",
    itemRoute: "#service",
    activeClass: "",
  },
  {
    icon: "icon-writing",
    itemName: "Blog",
    itemRoute: "#news",
    activeClass: "",
  },
  {
    icon: "icon-letter",
    itemName: "Contact",
    itemRoute: "#contact",
    activeClass: "",
  },
];

const OnePageMenu = () => {
  return (
    <>
      <Scrollspy
        className="anchor_nav"
        items={[
          "home",
          "about",
          "resume",
          "portfolio",
          "service",
          "news",
          "contact",
        ]}
        currentClassName="current"
        offset={0}
      >
        {sidebarContent.map((val, i) => (
          <li className={val.activeClass} key={i}>
            <a className="iknow_tm_full_link" href={val.itemRoute}>
              <div className={`svg ${val.icon}`}></div>
              <span>{val.itemName}</span>
            </a>
          </li>
        ))}
      </Scrollspy>
    </>
  );
};

export default OnePageMenu;
