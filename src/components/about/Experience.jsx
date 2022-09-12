import React from "react";

const experienceContent = [
  {
    position: "UX DESIGNER",
    compnayName: "Interaction Design Foundation. Distinción: 'Mejor de la clase'",
    year: "   2020",
    details: `
    En este curso se aprende a crear personas, costumer journey, prototipos y demás técnicas para empatizar. Cómo pasar por las cinco etapas del proceso de "Design Thinking". Crear casos de estudios UX, generar puntos de vista que plateen problemas a tratar y trabajar como consultor de UX.`,
  },
  {
    position: "Design Thinking",
    compnayName: "Interaction Design Foundation. Distinción: 'Mejor de la clase'",
    year: "2020",
    details: ` Aprendizaje de uso de metodologías de entrevistas,co-creación, prototipos, testing y definición en cada una de las etapas de la técnica Design Thinking.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
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

export default Experience;
