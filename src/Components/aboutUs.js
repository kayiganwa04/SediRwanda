import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Fade } from "react-animation-components";
import vision from "./../Images/vision1.png";
import history from "./../Images/history.png";
import mission from "./../Images/mission.png";
// import education from "./../Images/educations.jpg";
import team1 from "./../Images/team/team.jpg";
import volunteers from "./../Images/team/volunteers.jpg";
// import team4 from "./../Images/img2.jpg";
import { Link } from "react-router-dom";
// import home from "./../Images/basic_education/homepage.jpg";
export function About() {
  return (
    <div>
      <section className="aboutjumbtron min-vh-50">
        <div className="overlay">
          <Container>
            <Row
              className="justify-content-center align-content-center justify-items-center align-items-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="2500"
            >
              <Col md={4}>
                <h4 className="display-4 text-white font-weight-bold ml-5 containers">
                  ABOUT US
                </h4>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    <section className="bg-light py-4">
        <div className="container ">

        <h2 className="font-weight-bold text-center">  </h2>
            <div className="row py-6 justify-content-center align-items-center">
              {/* <div className="col-md-6 col-sm-12" 
                 >
               <img src={home} alt="home" className="img-fluid rounded"/>
              </div> */}
              <div className=" col-md-11 text-center col-sm-12" data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="2500">
                <p className="lead">
                <span className="font-weight-bold">Sports and Education Development Initiative 
                    (SEDI RWANDA)</span> is working as non-profit organization created by a team of development activists , aiming at reaching to the most vulnerable families and communities with special focus on the historically marginalized people in Rwanda, integrate them in socio-economic development and help them to become actors and victors of a positive change for sustainable development, on base of  well management of the opportunities available in their social environment and gaining income from their  traditional  knowledge. SEDI RWANDA judges better Sports and entertainments as a key of school of social life which can provide contribution for social change.
                  </p>
              </div>
            </div>
          
          
          </div>
      </section> 
      <section className="justify-content-between">
        <div className="container py-6">
          <div className="row justify-content-center align-items-center">
              <div className="col-md-5">
                <h3 className="font-weight-bold">OUR MISSION</h3>
                <p>Poverty alleviation and improving the psycho-socio-economic life for the most vulnerable groups with particular emphasis on single mothers and their children.</p>
              </div>
              <div className="col-md-5">
              <h3 className="font-weight-bold">OUR VISION</h3>
              <p>Building a society without chronicle poverty where every citizen enjoys better living conditions with respect and psycho-socio-economic comfort especially women and kids</p>
              </div>
              {/* <div className="col-md-4">
              <h3 className="font-weight-bold">OUR VALUES</h3>
              </div> */}
            </div>
          </div>
      </section>
      {/* <section className="about2 overlay py-4">
        <div className="">
          <div className="container">
            <Row className="justify-content-center align-items-center">
              <Col>
                <p className="text-center fond-bold text-warning ">
                  Some facts
                </p>
                <h2 className="d-block text-center text-white ">
                  SEDI Rwanda Organization Activities
                </h2>
              </Col>
            </Row>
            <Row className="aboutRow justify-content-center align-items-center">
              <Col md={4}>
                <h5 className="h2 text-center text-white">Primary</h5>
                <h1 className=" display-4 text-white text-center font-weight-bold">
                  1
                </h1>
              </Col>
              <Col md={4}>
                <h5 className="h2 text-center text-white">Nursery</h5>
                <h1 className=" display-4 text-center text-white font-weight-bold">
                  2
                </h1>
              </Col>
              <Col md={4}>
                <h5 className="h2 text-center text-white">Students</h5>
                <h1 className=" display-4 text-center text-white font-weight-bold">
                  63
                </h1>
              </Col>
            </Row>
          </div>
        </div>
      </section> */}
      <section className="py-4">
        <Container>
          <div
            className="row align-items-md-center justify-content-center align-items-center"
            data-zanim-xs='{"delay":3,"animation":"slide-right"}'
          >
            <div className="col-lg-4 col-12 mb-5 mb-lg-0 ">
              <div className="text-center mb-5 mb-lg-0">
                <div className="icon icon-xl">
                  <img
                    class="img-fluid shadow rounded-circle text-left"
                    alt="our vision"
                    src={vision}
                  />
                </div>
                <h2 className="d-block text-center font-weight-light ">
                <Link to="#!" className="text-dark ">Vision</Link>
                </h2>
              </div>
            </div>
            <div className="col-lg-4 col-12 mb-5 mb-lg-0 ">
              <div className="text-center mb-5 mb-lg-0">
                <div className="icon icon-xl">
                  <img
                    className="img-fluid shadow rounded-circle"
                    alt="our mission"
                    src={mission}
                  />
                </div>
                <h2 className="d-block text-center font-weight-light ">
                <Link to="#!" className="text-dark ">Mission</Link>
                </h2>

                
              </div>
            </div>
            <div className="col-lg-4 col-12 mb-5 mb-lg-0 ">
              <div className="text-center mb-5 mb-lg-0">
                <div className="icon icon-xl">
                  <img
                    className="img-fluid shadow rounded-circle"
                    alt="viebeg quality"
                    src={history}
                  />
                </div>
                <h2 className="d-block text-center  font-weight-light ">
                <Link to="#!" className="text-dark ">History</Link>
                </h2>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="section-lg pt-5 about3">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <Fade in>
                <h3 className="text-center font-weight-bold pad">
                  Criterias of Identification of Pilote Zone
                </h3>
                <p
                  className="pt-4"
                  data-aos="fade-up"
                  data-aos-duration="2500"
                >
                  SEDI RWANDA has chosen to concentrate more efforts in areas
                  surrounding
                  Kigali city, where Historically marginalized communities are still living under
                  the marge of poverty considering to their neighbours.
                </p>
                <p
                  
                  data-aos="fade-up"
                  data-aos-duration="2500"
                >
                  Geographic, social, and economic barriers segregate them from
                  the services and opportunities of the rest of the country.
                  SEDI RWANDA has started planning to address these problems
                  through the use of strategic education facilitation, health
                  interventions in fighting against poor nutrition, and the 
                  improvement
                   of local agriculture and modern farming in order to provide to these recent poorest community
                  with a sustainable foundation upon which to grow and
                  thrive.
                </p>
              </Fade>
            </Col>
          </Row>
       
        </Container>
        
      </section>
      <section className="aboutteam bg-white">
        <Container className="pt-5">
          <Row className="py-4">
            <Col>
              <h1 className="d-block text-center font-weight-bold">Meet Our Team</h1>
            </Col>
          </Row>
          <Row>
            <Col md="12" className="colsize">
              <div
                className="text-center mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="my-4">
                  <img alt="aboutus" src={team1} className="img-responsive shadow colsize rounded" />
                </div>
                {/* <h4>Sed ut perspiciatis</h4>
                <p>
                  <Link to="/team">Learn more</Link>
                </p> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="aboutteam bg-light">
        <Container className="pt-5">
          <Row className="py-4">
            <Col>
              <h1 className="d-block text-center font-weight-bold">Meet Our Volunteers</h1>
            </Col>
          </Row>
          <Row>
            <Col md="12" className="colsize">
              <div
                className="text-center mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="my-4">
                  <img alt="aboutus" src={volunteers} className="img-responsive shadow colsize rounded" />
                </div>
                {/* <h4>Sed ut perspiciatis</h4>
                <p>
                  <Link to="/team">Learn more</Link>
                </p> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
