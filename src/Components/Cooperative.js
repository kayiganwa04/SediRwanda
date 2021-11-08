import React from "react";
import { Container, Row, Col } from "reactstrap";
// import education from "./../Images/Health_Sanitation/health1.jpg";
import education1 from "./../Images/sewing.jpg";
import education2 from "./../Images/Health_Sanitation/health4.jpg";
import education3 from "./../Images/Health_Sanitation/mushrooms.jpg";
function Cooperative() {
  return (
    <React.Fragment>
      <section className="cooperative ">
        <div className="overlay">
          <Container>
            <Row className="justify-content-center text-center">
              <Col sm="12" md={{ size: 8, offset: 1 }}>
                <h1
                  class="headers display-3 text-center text-white font-weight-bold "
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  Social economic Integration
                </h1>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="economic py-6">
        <Container>
          <Row>
            <Col md={6}>
              <p className="lead py-4" data-aos="fade-up" data-aos-duration="2000">
                This program has been elaborated to strengthen the capacity of
                the community to create and manage the income generating
                activities through local anti-poverty clubs. 
              </p>
              <img
                src={education3}
                alt="school"
                className="rounded"
                data-aos="fade-up"
                data-aos-duration="3000"
                class="img-fluid shadow rounded"
              />
            </Col>
            <Col md={6}>
              <img
                src={education2}
                alt="school"
                className="rounded"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
                class="img-fluid shadow rounded"
              />
            </Col>
          </Row>
          <Row>
            <Col md={6} className="pt-4">
              <img
                src={education1}
                alt="school"
                className="rounded"
                data-aos="fade-up"
                data-aos-duration="3000"
                class="img-fluid shadow rounded"
              />
            </Col>
            <Col md={6}>
              
            <p className="lead" data-aos="fade-up" data-aos-duration="2000">
                The purposeful mission of this program is to ensure that the beneficiaries from
                the community know to be historically marginalized achieve their
                potential in terms of capacity building, increase access to
                health care, education, leadership skills, and income generating
                activities that help to regain their dignity and raise their
                standards of living, and lead to appropriate attitudes that help
                them to be integrated well into society.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
export default Cooperative;
