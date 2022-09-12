import React from "react";

const Footer = () => {
  return (
    <>
      <div className="inner">
        <div className="left">
          <p>
            Claudia Perez &copy; {new Date().getFullYear()} {" "}
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
