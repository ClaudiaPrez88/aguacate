import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Portfolio = () => {
  // for popup video
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen5, setOpen5] = useState(false);
  const [isOpen6, setOpen6] = useState(false);
  const [isOpen7, setOpen7] = useState(false);
  // for modal

  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <div className="know_tm_main_section">
      <SimpleReactLightbox>
        <div className="know_tm_portfolio">
          <div className="know_tm_main_title">
            <span>Portafolio</span>
            <h3>Mis trabajos en diferentes áreas</h3>
          </div>

          <Tabs>
            <TabList className="portfolio_filter">
              <Tab>Todos</Tab>
              {/* All */}
              <Tab>UX / UI Desing</Tab>
              {/* For Vimeo */}
              <Tab>Frontend Develop</Tab>
              {/* For Youtube */}
              <Tab>Emails</Tab>
              {/* For Images */}
              <Tab>Redes Sociales</Tab>
              {/* For Popup Details */}
              <Tab>Sitios CMS</Tab>
               {/* For Sitios */}
              <Tab>Videos</Tab>
              <Tab>Revista</Tab>
              <Tab>Branding</Tab>
            </TabList>
            
            {/* END TABLIST */}

            <div className="portfolio_list">
              <TabPanel>
              <ul className=" gallery_zoom">
                  <li data-aos="fade-right">
                    <div className="list_inner">
                      <div className="image">
                        <a href="https://medium.com/@claudiaprezvelzquez" target="_blank">
                        <img
                          src="/img/portfolio/ux.png"
                          alt="UX"
                        /></a>
                      </div>
                      <div className="overlay"></div>
                      
                      <div className="details">
                        <span>UX</span>
                        <h3>Cristina Importaciones</h3>
                      </div>
                    </div>
                  </li>
                  {/* END UX */}

                </ul>
                <ul className=" gallery_zoom">
                  <li data-aos="fade-right">
                    <div className="list_inner">
                      <div className="image">
                        <a href="https://www.behance.net/gallery/77586197/UI-Desing" target="_blank">
                        <img
                          src="/img/portfolio/ui.png"
                          alt="UI" 
                        /></a>
                      </div>
                      <div className="overlay"></div>
                     
                      <div className="details">
                        <h3>UI</h3>
                      </div>
                    </div>
                  </li>
                  {/* END UI */}

                </ul>
                <ul className=" gallery_zoom">
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image">
                        <a href="https://claudialatam.com/javascript/" alt="" target="_blank">
                        <img
                          src="/img/portfolio/javascript.png"
                          alt="javascript"
                        /></a>
                      </div>
                      <div className="overlay"></div>
                     
                      <div className="details">
                        <span>Desarrollo</span>
                        <h3>en Javascript</h3>
                      </div>
                    </div>
                  </li>
                  {/* END javascript */}
                </ul>
                <ul className=" gallery_zoom">
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image">
                        <a href="https://react-coder-9253e.firebaseapp.com/" alt="" target="_blank">
                        <img
                          src="/img/portfolio/react.png"
                          alt="react"
                        /></a>
                      </div>
                      <div className="overlay"></div>
                      
                      <div className="details">
                        <span>Desarrollo</span>
                        <h3>en React</h3>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className=" gallery_zoom">
              
                <li data-aos="fade-right" data-aos-delay="200">
                  <div className="list_inner">
                    <div className="image">
                      <a href="https://www.behance.net/gallery/70965931/Email-Marketing" target="_blank" alt="email">
                        <img src="/img/portfolio/email.png" alt="Photo Shoot" />
                      </a>
                    </div>
                    <div className="overlay"></div>
                  
                    <div className="details">
                      <span>Diseño</span>
                      <h3>Emails</h3>
                    </div>
                  </div>
                </li>
                </ul>
                {/* <ul className=" gallery_zoom">
                  <li data-aos="fade-right" data-aos-delay="200">
                    <div className="list_inner">
                      <div className="image">
                        <a href="https://www.behance.net/gallery/70965931/Email-Marketing" target="_blank" alt="email">
                          <img src="/img/portfolio/email.png" alt="Photo Shoot" />
                        </a>
                      </div>
                      <div className="overlay"></div>
                    
                      <div className="details">
                        <span>Desarrollo</span>
                        <h3>Emails</h3>
                      </div>
                    </div>
                  </li>
                </ul> */}
                <ul className=" gallery_zoom">
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <a href="https://www.behance.net/gallery/70018535/Redes-Sociales" alt="Redes Sociales" target="_blank">
                      <div className="image">
                        <img src="/img/portfolio/redes.png" alt="Details" />
                      </div>
                      </a>
                      <div className="overlay"></div>
                      <div className="details">
                        <span>Diseño</span>
                        <h3>Redes Sociales</h3>
                      </div>
                    </div>
                  </li>
                 </ul>
                 <ul className=" gallery_zoom">
                  <li data-aos="fade-right" data-aos-delay="200">
                    <div className="list_inner">
                      <a href="https://www.behance.net/gallery/71242267/Adverts" alt="Adverts" target="_blank">
                      <div className="image">
                        <img src="/img/portfolio/add.png" alt="Adverts" />
                      </div>
                      </a>
                      <div className="overlay"></div>
                      <div className="details">
                        <span>Diseño</span>
                        <h3>Adverts</h3>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className=" gallery_zoom">
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <a href="https://filtros-kapta.cl/" target="_blank">
                      <div className="image">
                        <img src="/img/portfolio/kapta.png" alt="Filtros Kapta" />
                      </div>
                      </a>
                      <div className="overlay"></div>
                      <div className="details">
                        <span>Wordpress</span>
                        <h3>Filtros Kapta</h3>
                      </div>
                    </div>
                  </li>
                  {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="200">
                    <div className="list_inner">
                      <a href="http://cristinaimportaciones.cl/" target="_blank">
                      <div className="image">
                        <img src="/img/portfolio/cristina.png" alt="Details" />
                      </div>
                      </a>
                      <div className="overlay"></div>
                      <div className="details">
                        <span>Html & Wordpress</span>
                        <h3>Cristina Importaciones</h3>
                      </div>
                    </div>
                  </li>
                  {/* END Sitios */}
                </ul>
                <ul className=" gallery_zoom">
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image">
                        <img src="/img/portfolio/onafi.png" alt="Onafi"  onClick={() => setOpen(true)}  />
                      </div>
                      <div className="overlay"></div>
                      <div className="details">
                        <h3>Onafi</h3>
                      </div>
                    </div>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <div className="list_inner">
                      <div className="image">
                        <img src="/img/portfolio/raiz.png" alt="Details"  onClick={() => setOpen2(true)} />
                      </div>
                      <div className="overlay"></div>
                      <div className="details">
                        <h3>Tostaduría La Raiz</h3>
                      </div>
                    </div>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image">
                        <img src="/img/portfolio/mikrotik.png" alt="Filtros Kapta"  onClick={() => setOpen3(true)}  />
                      </div>
                      <div className="overlay"></div>
                      <div className="details">
                        <h3>Mikrotik Xperts</h3>
                      </div>
                    </div>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <div className="list_inner">
                      <div className="image">
                        <img src="/img/portfolio/cristina-importa.png" alt="Details"  onClick={() => setOpen5(true)} />
                      </div>
                      <div className="overlay"></div>
                      <div className="details">
                        <h3>Materia Prima & Cristina Importaciones</h3>
                      </div>
                    </div>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <div className="list_inner">
                      <div className="image">
                        <img src="/img/portfolio/zoom.png" alt="Details"  onClick={() => setOpen6(true)} />
                      </div>
                      <div className="overlay"></div>
                      <div className="details">
                        <h3>Academia Inpact</h3>
                      </div>
                    </div>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <div className="list_inner">
                      <div className="image">
                        <img src="/img/portfolio/cumple.png" alt="Details"  onClick={() => setOpen7(true)} />
                      </div>
                      <div className="overlay"></div>
                      <div className="details">
                        <h3>Academia Inpact</h3>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="gallery_zoom">
                  <li data-aos="fade-right">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalFour}>
                        
                        <img
                          src="/img/portfolio/revista.png"
                          alt="revista"
                        />
                      </div>
                      <div className="overlay"></div>
                      <div className="details">
                        <span>Revista Online</span>
                        <h3>Icimag</h3>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="gallery_zoom">
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <a href="https://www.behance.net/gallery/128153445/Branding-%28Imagen-marca%29" target="_blank">
                      <div className="image">
                        <img src="/img/portfolio/brand-inpact.png" alt="Inpact Brand" />
                      </div>
                      </a>
                      <div className="overlay"></div>
                      <div className="details">
                        <span>Productos</span>
                        <h3>Inpact</h3>
                      </div>
                    </div>
                  </li>
                  {/* brand Andes */}
                 
                </ul>
                {/* END PORTFOLIO LIST */}
              </TabPanel>
              {/* END ALL All */}

              <TabPanel>
                <ul className=" gallery_zoom">
                  <li data-aos="fade-right">
                    <div className="list_inner">
                      <div className="image">
                        <a href="https://medium.com/@claudiaprezvelzquez" target="_blank">
                        <img
                          src="/img/portfolio/ux.png"
                          alt="UX"
                        /></a>
                      </div>
                      <div className="overlay"></div>
                      
                      <div className="details">
                        <span>UX</span>
                        <h3>Cristina Importaciones</h3>
                      </div>
                    </div>
                  </li>
                  {/* END UX */}

                </ul>
                <ul className=" gallery_zoom">
                  <li data-aos="fade-right">
                    <div className="list_inner">
                      <div className="image">
                        <a href="https://www.behance.net/gallery/77586197/UI-Desing" target="_blank">
                        <img
                          src="/img/portfolio/ui.png"
                          alt="UI" 
                        /></a>
                      </div>
                      <div className="overlay"></div>
                     
                      <div className="details">
                        <h3>UI</h3>
                      </div>
                    </div>
                  </li>
                  {/* END UI */}

                </ul>

              </TabPanel>
              {/* END UX UI */}

              <TabPanel>
                <ul className=" gallery_zoom">
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image">
                        <a href="https://claudialatam.com/javascript/" alt="" target="_blank">
                        <img
                          src="/img/portfolio/javascript.png"
                          alt="javascript"
                        /></a>
                      </div>
                      <div className="overlay"></div>
                     
                      <div className="details">
                        <span>Desarrollo</span>
                        <h3>en Javascript</h3>
                      </div>
                    </div>
                  </li>
                  {/* END javascript */}
                </ul>
                <ul className=" gallery_zoom">
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image">
                        <a href="https://react-coder-9253e.firebaseapp.com/" alt="" target="_blank">
                        <img
                          src="/img/portfolio/react.png"
                          alt="react"
                        /></a>
                      </div>
                      <div className="overlay"></div>
                      
                      <div className="details">
                        <span>Desarrollo</span>
                        <h3>en React</h3>
                      </div>
                    </div>
                  </li>
                  {/* END React */}
                </ul>
               
              </TabPanel>
              {/* END Frontend */}

              <TabPanel>
                <ul className=" gallery_zoom">
              
                <li data-aos="fade-right" data-aos-delay="200">
                  <div className="list_inner">
                    <div className="image">
                      <a href="https://www.behance.net/gallery/70965931/Email-Marketing" target="_blank" alt="email">
                        <img src="/img/portfolio/email.png" alt="Photo Shoot" />
                      </a>
                    </div>
                    <div className="overlay"></div>
                  
                    <div className="details">
                      <span>Diseño</span>
                      <h3>Emails</h3>
                    </div>
                  </div>
                </li>
                </ul>
                {/* <ul className=" gallery_zoom">
                  <li data-aos="fade-right" data-aos-delay="0">
                    <div className="list_inner">
                      <div className="image">
                        <a href="/img/portfolio/6.jpg">
                          <img src="/img/portfolio/6.jpg" alt="Besh Award" />
                        </a>
                      </div>
                      <div className="overlay"></div>
                    
                      <div className="details">
                        <span>Desarrollo</span>
                        <h3>Emails</h3>
                      </div>
                    </div>
                  </li>
                </ul> */}
              </TabPanel>
              {/* END Emails */}

              <TabPanel>
                <ul className=" gallery_zoom">
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <a href="https://www.behance.net/gallery/70018535/Redes-Sociales" alt="Redes Sociales" target="_blank">
                      <div className="image">
                        <img src="/img/portfolio/redes.png" alt="Details" />
                      </div>
                      </a>
                      <div className="overlay"></div>
                      <div className="details">
                        <span>Diseño</span>
                        <h3>Redes Sociales</h3>
                      </div>
                    </div>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <div className="list_inner">
                      <a href="https://www.behance.net/gallery/71242267/Adverts" alt="Adverts" target="_blank">
                      <div className="image">
                        <img src="/img/portfolio/advert.png" alt="Details" />
                      </div>
                      </a>
                      <div className="overlay"></div>
                      <div className="details">
                        <span>Diseño</span>
                        <h3>Adverts</h3>
                      </div>
                    </div>
                  </li>
                </ul>
              </TabPanel>
              {/* END Redes sociales */}

              <TabPanel>
                <ul className=" gallery_zoom">
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <a href="https://filtros-kapta.cl/" target="_blank">
                      <div className="image">
                        <img src="/img/portfolio/kapta.png" alt="Filtros Kapta" />
                      </div>
                      </a>
                      <div className="overlay"></div>
                      <div className="details">
                        <span>Wordpress</span>
                        <h3>Filtros Kapta</h3>
                      </div>
                    </div>
                  </li>
                  {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="200">
                    <div className="list_inner">
                      <a href="http://cristinaimportaciones.cl/" target="_blank">
                      <div className="image">
                        <img src="/img/portfolio/cristina.png" alt="Details" />
                      </div>
                      </a>
                      <div className="overlay"></div>
                      <div className="details">
                        <span>Html & Wordpress</span>
                        <h3>Cristina Importaciones</h3>
                      </div>
                    </div>
                  </li>
                  {/* END Sitios */}
                </ul>
              </TabPanel>
              {/* END Sitios*/}

              <TabPanel>
                <ul className=" gallery_zoom">
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image">
                        <img src="/img/portfolio/onafi.png" alt="Onafi"  onClick={() => setOpen(true)}  />
                      </div>
                      <div className="overlay"></div>
                      <div className="details">
                        <h3>Onafi</h3>
                      </div>
                    </div>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <div className="list_inner">
                      <div className="image">
                        <img src="/img/portfolio/raiz.png" alt="Details"  onClick={() => setOpen2(true)} />
                      </div>
                      <div className="overlay"></div>
                      <div className="details">
                        <h3>Tostaduría La Raiz</h3>
                      </div>
                    </div>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image">
                        <img src="/img/portfolio/mikrotik.png" alt="Filtros Kapta"  onClick={() => setOpen3(true)}  />
                      </div>
                      <div className="overlay"></div>
                      <div className="details">
                        <h3>Mikrotik Xperts</h3>
                      </div>
                    </div>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <div className="list_inner">
                      <div className="image">
                        <img src="/img/portfolio/cristina-importa.png" alt="Details"  onClick={() => setOpen5(true)} />
                      </div>
                      <div className="overlay"></div>
                      <div className="details">
                        <h3>Materia Prima & Cristina Importaciones</h3>
                      </div>
                    </div>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <div className="list_inner">
                      <div className="image">
                        <img src="/img/portfolio/zoom.png" alt="Details"  onClick={() => setOpen6(true)} />
                      </div>
                      <div className="overlay"></div>
                      <div className="details">
                        <h3>Academia Inpact</h3>
                      </div>
                    </div>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <div className="list_inner">
                      <div className="image">
                        <img src="/img/portfolio/cumple.png" alt="Details"  onClick={() => setOpen7(true)} />
                      </div>
                      <div className="overlay"></div>
                      <div className="details">
                        <h3>Academia Inpact</h3>
                      </div>
                    </div>
                  </li>
                </ul>
              </TabPanel>
              {/* END Videos*/}
              
              <TabPanel>
                <ul className="gallery_zoom">
                  <li data-aos="fade-right">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalFour}>
                        
                        <img
                          src="/img/portfolio/revista.png"
                          alt="revista"
                        />
                      </div>
                      <div className="overlay"></div>
                      <div className="details">
                        <span>Revista Online</span>
                        <h3>Icimag</h3>
                      </div>
                    </div>
                  </li>
                </ul>
              </TabPanel>
              {/* END Revista */}
              
              <TabPanel>
                <ul className="gallery_zoom">
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <a href="https://www.behance.net/gallery/128153445/Branding-%28Imagen-marca%29" target="_blank">
                      <div className="image">
                        <img src="/img/portfolio/brand-inpact.png" alt="Inpact Brand" />
                      </div>
                      </a>
                      <div className="overlay"></div>
                      <div className="details">
                        <span>Productos</span>
                        <h3>Inpact</h3>
                      </div>
                    </div>
                  </li>
                  {/* brand Andes */}
                 
                </ul>
              </TabPanel>
              {/* END Branding*/}

            </div>
            {/* END LISTA*/}
          </Tabs>
        </div>
      </SimpleReactLightbox>

      {/* all modal video and popup goes here */}
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen}
        videoId="219427082"
        onClose={() => setOpen(false)}
      />
      {/* End Youtube Modal video */}
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="128803847"
        onClose={() => setOpen2(false)}
      />
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen3}
        videoId="227473370"
        onClose={() => setOpen3(false)}
      />
       <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen5}
        videoId="181661738"
        onClose={() => setOpen5(false)}
      />
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen6}
        videoId="664242553"
        onClose={() => setOpen6(false)}
      />
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen7}
        videoId="664242801"
        onClose={() => setOpen7(false)}
      />
      {/* End Vimeo Modal Video */}

     

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
                <div className="top_image">
                  <img src="img/thumbs/Banner_58.jpg" alt="thumbs" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/thumbs/Banner_58.jpg)",
                    }}
                  ></div>
                </div>
                <div className="portfolio_main_title ">
                  <span>Revista Online</span>
                  <h3>Icimag</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                          Mi trabajo dentro de la revista fué dedicarme del diseño y diagramación de la misma. Crear el material gráfico para la promoción en la página web, asi como cargar los artículos de la edición 58 en la página web. 
                        </p>
                        <a href="https://issuu.com/icimag/docs/icimag_58" target="_blank">Ver edición 58</a>
                        <br></br>
                        <a href="https://icimag.cl/index.php">Ir a sitio Web de Icimag</a>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/magazine.png" alt="Revista" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/thumbs/magazine.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/thumbs/articulo-3.jpg)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/thumbs/articulo-4.jpg)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </div>
  );
};

export default Portfolio;
