import React from "react";

const addressContent = [
  {
    icon: "icon-letter",
    title: "Escríbeme",
    href: "mailto:perezvelazquezclaudia@gmail.com",
  },
];

const Address = () => {
  return (
    <ul>
      {addressContent.map((val, i) => (
        <li key={i}>
          <div className="list_inner">
            <span className="icon">
              <span className={`svg ${val.icon}`}></span>
            </span>
            <div className="short">
              <h3>{val.title}</h3>
              <span>
                <a href={val.href}>{val.info}</a>
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Address;
