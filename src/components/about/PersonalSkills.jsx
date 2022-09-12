import React from "react";

const skillContent = [
  {
    position: "Community manager y manejo de la web 2.0",
    compnayName: "Instituto de Internet",
    year: "2016",
    details: `Gestiona las comunidades digitales e impulsa la lealtad hacia la marca generando contenido de valor para los clientes potenciales.`,
  },
];

const PersonalSkills = () => {
  return (
    <ul>
    {skillContent.map((val, i) => (
      <li key={i}>
        <div className="list_inner">
          <div className="short">
            <div className="job">
              <h3>{val.position}</h3>
              <span>{val.compnayName}</span>
            </div>
            <div className="year">
              <span>{val.year}</span>
            </div>
          </div>
          <div className="text">
            <p>{val.details}</p>
          </div>
        </div>
      </li>
    ))}
  </ul>
  );
};

export default PersonalSkills;
