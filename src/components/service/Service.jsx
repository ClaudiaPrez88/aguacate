import React, { useState } from "react";
import Modal from "react-modal";
import ModalFour from "./modal/ModalFour";
import ModalOne from "./modal/ModalOne";
import ModalThree from "./modal/ModalThree";
import ModalTwo from "./modal/ModalTwo";
import ModalFive from "./modal/ModalFive";
import ModalSix from "./modal/ModalSix";

Modal.setAppElement("#root");

const Service = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }

  return (
    <div className="know_tm_services">
      <div className="know_tm_main_title">
        <span>Lenguajes</span>
        <h3>Herramientas que utilizo para desarrollar mi trabajo son las siguientes.</h3>
      </div>
      {/* End .know_tm_main_title */}

      <div className="service_list">
        <ul>
          {/* Start Service Motion & Web Graphy */}
          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner" onClick={toggleModalOne}>
              <span className="icon">
                <img className="svg-2" src="/img/svg/react-2.svg"></img>
              </span>
              <h3 className="title">React</h3>
            </div>
          </li>
          {/* End Service Motion & Web Graphy */}

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="list_inner" onClick={toggleModalTwo}>
              <span className="icon">
              <img className="svg-2" src="/img/svg/logo-javascript.svg"></img>
              </span>
              <h3 className="title">Javascript</h3>
              
            </div>
          </li>
          {/* End Service Mobile App Design */}

          {/* Start Service Ui/Ux Consultancy */}
          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="list_inner" onClick={toggleModalThree}>
              <span className="icon">
                <span className="icon-web svg"></span>
              </span>
              <h3 className="title">HTML,Css y Bootstrap</h3>
            
            </div>
          </li>
          {/* End Service Ui/Ux Consultancy */}

          {/* Start Service Branding & Design */}
          <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="0">
            <div className="list_inner" onClick={toggleModalFour}>
              <span className="icon">
              <img className="svg-2" src="/img/svg/adobe-2.svg"></img>
              </span>
              <h3 className="title">Adobe Suite</h3>
              <p className="text">
              Photoshop, Illustrator, In Design, After Effects, Premiere & Adobe XD.
              </p>
            </div>
          </li>
          {/* End Service Branding & Design */}

          {/* Start Service Mobile App Design */}
          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="list_inner" onClick={toggleModalFive}>
              <span className="icon">
              <img className="svg-2" src="/img/svg/figma-1.svg"></img>
              </span>
              <h3 className="title">Figma</h3>
              <p className="text">
                Web development is the building and maintenance of websites.
                it’s the work that...
              </p>
            </div>
          </li>
          {/* End Service Mobile App Design */}
          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="list_inner" onClick={toggleModalSix}>
              <span className="icon">
              <img className="svg-2" src="/img/svg/camera.svg"></img>
              </span>
              <h3 className="title">Equipo profesional de grabación:</h3>
              <p className="text">
              Cámaras DSLR y equipos para grabración de sonido como Taskcam.
              </p>
            </div>
          </li>
          {/* End Service Mobile App Design */}
        </ul>
      </div>

      {/* Start Modal Motion Graphy */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox ">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap ">
              <ModalOne />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Motion Graphy */}

      {/* Start Modal Branding & Design */}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox ">
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap ">
              <ModalTwo />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Branding & Design */}

      {/* Start Modal Mobile App Design */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox ">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap ">
              <ModalThree />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Mobile App Design*/}

      {/* Start Modal Modal Ui/Ux Consultancy */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox ">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap">
              <ModalFour />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Ui/Ux Consultancy*/}
      {/* Start Modal Modal Ui/Ux Consultancy */}
      <Modal
        isOpen={isOpen5}
        onRequestClose={toggleModalFive}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox ">
          <button className="close-modal" onClick={toggleModalFive}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap">
              <ModalFive />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Ui/Ux Consultancy*/}
      {/* Start Modal Modal Ui/Ux Consultancy */}
      <Modal
        isOpen={isOpen6}
        onRequestClose={toggleModalSix}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox ">
          <button className="close-modal" onClick={toggleModalSix}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap">
              <ModalSix />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Ui/Ux Consultancy*/}
    </div>
  );
};

export default Service;
