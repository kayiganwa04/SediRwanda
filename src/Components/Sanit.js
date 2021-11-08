import React from "react";
import { Container, Row, Col } from "reactstrap";

import health from "./../Images/sport_and_entertainment/karere2.jpg";
import health1 from "./../Images/sport_and_entertainment/karere.jpg";
import health2 from "./../Images/sport_and_entertainment/bwiza-dancers.jpg";
export default class Sport extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="sanitation ">
          <div className="overlay">
            <Container>
              <Row className="justify-items-center justify-content-center">
                <Col sm="12" md={{ size: 12, offset: 2 }}>
                  <h1
                    class="headers display-3 text-white font-weight-bold "
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    Sports and Entertainment
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
                Sport is a treasure trove when it comes to education, and that is particularly the case for children on whom life has not really smiled. Games and athletics enable children to regularly extend their own boundaries. The experience they gain builds their confidence, and more besides. It strengthens their immune systems and promotes friendship, solidarity and fair play. These are some of the many reasons why we make sport a priority – and because sometimes it simply works where words alone are not enough.
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
              <Col md={5}>
              
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
