import React from "react";

const educationContent = [
  {
    degree: "Curso de React.js en Coderhouse",
    institute: "Coderhouse",
    year: "2022",
    details: `Este curso da los conocimientos para programar por componentes, mediante Javascript, JS, ES6. Se aplicá el manejo de rutas utilizando Firebase y el conocimiento para crear tus propias aplicaciones SPA, y se adquieren las condiciones de hacer cualquier desarrollo.`,
  },
  {
    degree: "Curso de Javscript",
    institute: "Coderhouse",
    year: "2021",
    details: `Fundamentos del lenguaje de programación con el cual es posible crear aplicaciones de todo tipo. Reconocimiento la utilidad de las librerías estudiando jQuery, y cómo aplicar técnicas de desarrollo para apps modernas con AJAX. Capacidad de crear soluciones web interactivas, y trasladar los conocimientos del curso a cualquier framework JavaScript.`,
  },
  {
    degree: "SEO desde cero: posiciona en Google",
    institute: "Chreana",
    year: "2022",
    details: `Fundamentos y prácticas introductorias de SEO a través de su aplicación sobre contenido para un caso específico, asi como los fundamentos de marketing para buscadores, qué son las keywords y cuáles son las técnicas de SEO básicas.`,
  },
  {
    degree: "Introducción al SEM: aprende Google Ads desde cero",
    institute: "Domestika",
    year: "2022",
    details: `Se comprende los conceptos básicos y las tendencias del Search Engine Marketing (SEM). Se comprende que es Quality Score, los criterios de Google para rankear y las técnicas para tener visibilidad. Los modelos de costes, poniendo foco en el CPC. Se explora la herramienta Google Adwords, aprendiendo a crear una campaña de Search Marketing, identificando los parámetros a tener en cuenta y parando en conceptos como Ad Groups, palabras claves o anuncios.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="list_inner">
            <div className="short">
              <div className="job">
                <h3>{val.degree}</h3>
                <span>{val.institute}</span>
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

export default Education;
