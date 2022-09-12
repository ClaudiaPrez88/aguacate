import React from "react";

const socialShare = [
  {
    img: "Linkedin",
    link: "https://www.linkedin.com/in/claudia-p%C3%A9rez-velazquez-928843b7/",
  },
];
const Social = () => {
  return (
    <ul>
      {socialShare.map((item, i) => (
        <li key={i}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img
              className="svg"
              src={`img/svg/social/${item.img}.svg`}
              alt="brand"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
