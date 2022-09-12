import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import PersonalSkills from "./PersonalSkills";
import SoftwareSkills from "./SoftwareSkills";

const Resume = () => {
  return (
    // <!-- RESUME -->
    <>
      <div className="know_tm_resume" data-aos="fade-right">
        <div className="know_tm_main_title">
          <span>Educación</span>
          <h3>Soy licenciada en Artes Cinematográficas</h3>
          <p>Universidad Mayor</p>
          <p>Meción honorifica a mejor promedio de la promoción<br></br>
            Mención honorifica nota máxima en proyecto de Tesis</p>
            <a href="http://repositorio.umayor.cl/xmlui/handle/sibum/378">Liberen a la juventud, Proyecto de Tesis</a><br></br>
            <a href="https://www.youtube.com/watch?v=M4IbDxzBH_0&ab_channel=NTN24">Nota de prensa sobre Documental "Liberen a la juventud"</a>
        </div>
        {/* End  .know_tm_resume_title */}

        <div className="resume_inner">
          <div className="left">
            <div className="info_list">
              <div className="know_tm_resume_title">
                <h3>Cursos Frontend</h3>
                <span className="shape"></span>
              </div>
              {/* End  .know_tm_resume_title */}
              <Education />
            </div>
            <div className="info_list">
              <div className="know_tm_resume_title">
              <h3>Cursos adicionales</h3>
                <span className="shape"></span>
              </div>
              {/* End  .know_tm_resume_title */}
              <PersonalSkills />
            </div>
          </div>
          {/* End left */}

          <div className="right">
            <div className="info_list">
              <div className="know_tm_resume_title">
                <h3>Cursos UX/UI</h3>
                <span className="shape"></span>
              </div>
              {/* End  .know_tm_resume_title */}
              <Experience />
              
            </div>
            {/* End skills_list */}

            <div className="info_list">
              <div className="know_tm_resume_title">
                <h3>Cursos SEO / SEM</h3>
                <span className="shape"></span>
              </div>

              <SoftwareSkills />
            </div>
            {/* End skills_list */}
          </div>
        </div>
      </div>
    </>
    // <!-- /RESUME -->
  );
};

export default Resume;
