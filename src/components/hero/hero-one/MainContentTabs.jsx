import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PersonalInfo from "../../about/PersonalInfo";
import Resume from "../../about/Resume";
import Portfolio from "../../portfolio/Portfolio";
import Service from "../../service/Service";
import Testimonial from "../../testimonial/Testimonial";
import Blog from "../../blog/Blog";
import Address from "../../Address";
import Contact from "../../Contact";
import Footer from "../../footer/Footer";

const tabMenuList = [
  { icon: "icon-archive", title: "Sobre mi" },
  { icon: "icon-contacs", title: "Educación" },
  { icon: "icon-briefcase", title: "Portafolio" },
  { icon: "icon-gear", title: "Lenguajes" },
  { icon: "icon-letter", title: "Contacto" },
  ,
];

const MainContentTabs = () => {
  return (
    <Tabs className="know_tm_hero ">
      <div className="main_menu">
        <TabList>
          {tabMenuList.map((menu, i) => (
            <Tab key={i}>
              <div className={`svg ${menu.icon}`}></div>
              <span>{menu.title}</span>
            </Tab>
          ))}
        </TabList>
      </div>

      <div className="know_tm_mainpart">
        <TabPanel>
          <div className="know_tm_main_section">
            <PersonalInfo />
          </div>
        </TabPanel>

        <TabPanel>
          
          <div className="know_tm_main_section">
            <Resume />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="know_tm_main_section">
            <Portfolio />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="know_tm_main_section">
            <Service />
          </div>
        </TabPanel>

        

        <TabPanel>
          <div className="know_tm_main_section">
            {/* <!-- CONTACT --> */}
            <div className="know_tm_contact">
              <div className="know_tm_main_title">
                <span>Contacto</span>
                <h3>Desarrolla tu página web o promocionar tu marca.</h3>
              </div>
              <div className="wrapper">
                <div
                  className="left"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <Address />
                </div>
                {/* End .left */}
                <div
                  className="right"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div className="fields">
                    <Contact />
                  </div>
                </div>
                {/* End .right */}
              </div>
            </div>
            {/* End .know_tm_contact */}

            {/* <!-- /CONTACT --> */}
          </div>
        </TabPanel>
      </div>

      {/* <!-- COPYRIGHT --> */}
      <div className="know_tm_copyright">
        <div className="container">
          <Footer />
        </div>
      </div>
      {/* <!-- /COPYRIGHT --> */}
    </Tabs>
  );
};

export default MainContentTabs;
