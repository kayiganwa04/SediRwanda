import React from "react";
import { Container, Row, Col } from "reactstrap";

import health from "./../Images/Health_Sanitation/health5.jpg";
import health1 from "./../Images/Health_Sanitation/akarima.jpg";
import health2 from "./../Images/Health_Sanitation/alimantation.jpg";
export default class Sport extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="health ">
          <div className="overlay">
            <Container>
              <Row>
                <Col sm="12" md={{ size: 12, offset: 2 }}>
                  <h1
                    class="headers display-3 text-white font-weight-bold "
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    Health and Sanitation
                  </h1>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
{/*         
        <section className="education2 bg-light">
          <Container
            
          >
             <h2 className="text-center font-weight-bold containers"> Health and Sanitation is the key ..... </h2>
            <Row>
           
              <Col>
                <p className="text-center lead" 
            data-aos="fade-up"
            data-aos-duration="3000">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  Nemo enim ipsam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam.{" "}
                </p>
              </Col>
            </Row>

          </Container>
        </section> */}
        <section className=" education2">
          <Container>
            <Row className="containers justify-content-center align-items-center">
              <Col md={6}>
                <p class="lead" data-aos="fade-up" data-aos-duration="2000">
                  People in Masoro have been received health insurances. Mothers
                  and children most vulnerable for illnesses and diseases have
                  got chance for medical care. They go to health center at right
                  time. No birth death yet. The life and health are better in
                  those families. People young and adults in Masoro learned
                  about washing hands, clean body, clean clothes, clean homes,
                  and clean dishes
                </p>
               
              </Col>
              <Col md={6}>
              <img
                  src={health}
                  alt="school"
                  className="rounded"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  class="img-fluid shadow rounded"
                />
              </Col>
            </Row>
          </Container>
      
        </section>
        <section className="bg-light">
          <Container>
            <Row className="containers justify-content-center align-items-center">
            <Col md={6}>
              <img
                  src={health1}
                  alt="school"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="img-fluid shadow mb-2 rounded"
                />
              </Col>
              <Col md={6}>
                <p class="lead" data-aos="fade-up" data-aos-duration="2000">
                Through the nutrition program, SEDI RWANDA and communities are working together to plant "kitchen gardens." The gardens are part of an effort to improve family nutrition by adding vegetables to the diet, while the excess produce can be sold prodiving a much-needed source of income
                </p>
               
              </Col>
             
            </Row>
            <Row className="py-4">
              <Col>
              
              <img
                    src={health2}
                    alt="school"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className="img-fluid shadow rounded"
                  /></Col>
            </Row>
          </Container>
      
        </section>
      </React.Fragment>
    );
  }
}
