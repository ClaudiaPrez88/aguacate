import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
import "react-circular-progressbar/dist/styles.css";

const softwareContent = [
 
  {
    position: "SEO desde cero: posiciona en Google",
    compnayName: "Chreana",
    year: "2020",
    details: `En este curso se comprende los fundamentos y prácticas introductorias de SEO a través de su aplicación sobre contenido para un caso específico, asi como los fundamentos de marketing para buscadores, qué son las keywords y cuáles son las técnicas de SEO básicas..`,
  },
  {
    position: "Introducción al SEM: aprende Google Ads desde cero ",
    compnayName: "Domestika",
    year: "2020",
    details: `En este curso se comprende los conceptos básicos y las tendencias del Search Engine Marketing (SEM). Se comprende que es Quality Score, los criterios de Google para rankear y las técnicas para tener visibilidad. Los modelos de costes, poniendo foco en el CPC.
    Se explora la herramienta Google Adwords, aprendiendo a crear una campaña de Search Marketing, identificando los parámetros a tener en cuenta y parando en conceptos como Ad Groups, palabras claves o anuncios.`,
  },
];
const SoftwareSkills = () => {
  return (
    <ul>
    {softwareContent.map((val, i) => (
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

export default SoftwareSkills;
