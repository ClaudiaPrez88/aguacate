import React from "react";

const personalDetails = [
  { title: "Nombre", info: "Claudia Perez" },
  { title: "Email", info: "perezvelazquezclaudia@gmail.com" },
];

const aboutContentInfo = {
  meta: "Sobre mi",
  title: "Diseñadora Web y Frontend Developer",
  subTitle: "Me apasiona el diseño, la producción audiovisual y he volcado este interés en el desarrollo de páginas web.",
  description: `Mi experiencia mezcla conocimientos en lenguajes de código, diseño y creación audiovisual, dando una amplia gama para generar contenido digital interactivo, ya sea en páginas web o redes sociales.He realizado estudios en diseño de interfaces y experiencia de usuario basado en la metodología "Design Thinking" en la escuela Interaction Design Foundation. Manejo la mayoría de los programas de Adobe Suite (Photoshop, Illustrator, After Effects, Premiere,In Design), cámaras profesionales para editar y post-producir videos. Y lenguajes como Html, Css, bootstrap, Javascript y React para la creación de aplicaciones y páginas web.`,
};

const PersonalInfo = () => {
  return (
    <>
    <div className="know_tm_about">
      <div className="left" data-aos="fade-right">
        <div className="left_inner">
          <div className="image">
            <img src="img/thumbs/35-44.jpg" alt="" />
            <div
              className="main"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "img/about/banner.png"
                })`,
              }}
            ></div>
          </div>
          {/* End .image */}

          <div className="details">
            <ul>
              {personalDetails.map((value, i) => (
                <li key={i}>
                  <h3>{value.title}</h3>
                  <span>{value.info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* End .left */}

      <div className="right" data-aos="fade-right">
        <div className="know_tm_main_title">
          <span>{aboutContentInfo.meta}</span>
          <h3>{aboutContentInfo.title}</h3>
        </div>
        <div className="bigger_text">
          <p>{aboutContentInfo.subTitle}</p>
        </div>
      </div>
      {/* End .right */}
      
    </div>
    <div  className="sobre">
      <div className=" text">
        <p>{aboutContentInfo.description}</p>
      </div>
     
    </div>
    
    </>
  );
};

export default PersonalInfo;
