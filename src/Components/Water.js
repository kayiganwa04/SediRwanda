import React from "react";
import { Jumbotron, Col, Container, Row, Button } from "reactstrap";
import { Fade } from "react-animation-components";
import cross1 from "./../Images/cross.png";
import time from "./../Images/time.png";
import women from "./../Images/women.png";
import education from "./../Images/education.png";
export function Water() {
  return (
    <div>
      <Jumbotron className="watersection">
        <div className="container containers">
          <div className="row justify-content-center">
            <div className="col-12 ">
              <h1 className="text-center text-dark">Why Water?</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 ">
              <h4 className="text-center text-dark">
                For people in developing countries, clean water can change
                everything.
              </h4>
            </div>
          </div>
        </div>
      </Jumbotron>

      <section className="watersection1">
        <Container className="containers">
          <Row>
            <Col>
              <h1 className="text-center ">
                663 million people in the world
                <br /> live without clean water.1
              </h1>
              <Fade in>
                <p className="text-center p-3">
                  That’s nearly 1 in 10 people worldwide or ten times the
                  population of the UK. The majority live in
                  <br /> isolated rural areas and spend hours every day walking
                  to collect water for their family. Not only
                  <br /> does walking for water keep children out of school or
                  take up time that parents could be using to
                  <br /> earn money, but the water often carries diseases that
                  can make everyone sick.
                </p>
                <p className="text-center p-3">
                  But access to clean water means education, income and health -
                  especially for women and children.
                </p>
              </Fade>
            </Col>
          </Row>
        </Container>
      <hr/>
        <Container className="containers">
          <Row>
            <Col>
              <h1 className="text-center "> Clean water changes everything.</h1>
            </Col>
          </Row>
          <br />
          <Row className="pt-5">
            <Col md={{ span: 6, offset: 1 }}>
              <h3 class="text-left "><img src={cross1} alt="health"/> Health</h3>
              <h4 class="text-left ">
                Diseases from dirty water kill more <br />
                people every year than all forms of<br /> violence,
                 including war.
              </h4>
              <p class="text-left ">
                43% of those deaths are children under five years
                <br /> old. Access to clean water and basic sanitation can
                <br /> save around 16,000 lives every week.2
              </p>
            </Col>
            <Col md={{ span: 6, offset: 1 }}>
              <h3 class="text-left"><img src={time} alt="health"/>TIME</h3>
              <h4 class="text-left">
                In Africa alone, women spend 40
                <br /> billion hours a year walking
                <br /> for water.3 4
              </h4>
              <p class="text-left">
                Access to clean water gives communities more time
                <br /> to grow food, earn an income, and go to school --
                <br /> all of which fight poverty.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 1 }}>
              <h3 class="text-left"><img src={education} alt="health"/>EDUCATION</h3>
              <h4 class="text-left">
                Clean water helps keep kids in school,
                <br /> especially girls.
              </h4>
              <p class="text-left">
                Less time collecting water means more time in
                <br /> class. Clean water and proper toilets at school
                <br /> means teenage girls don’t have to stay home
                <br /> for a week out of every month.
              </p>
            </Col>
            <Col md={{ span: 6, offset: 1 }}>
              <h3 class="text-left"><img src={women} alt="health"/>WOMEN EMPOWERMENT</h3>
              <h4 class="text-left">
                Women are responsible for 72% of the
                <br /> water collected in Sub-Saharan Africa.5
              </h4>
              <p class="text-left">
                When a community gets water, women and girls get
                <br /> their lives back. They start businesses, improve
                <br /> their homes, and take charge of their own futures.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="waterCrisis">
        <Container className="containers">
          <Row>
            <Col>
              <h1 className="text-center pt-7">
                {" "}
                How do we tackle the water crisis?
              </h1>
              <p className="text-center ">
                We work with local experts and community members to find the
                best sustainable
                <br /> solution in each place where we work, whether it’s a
                well, a piped system, a<br /> BioSand Filter, or a system for
                harvesting rainwater. And with every water point we
                <br /> fund, our partners coordinate sanitation and hygiene
                training, and establish a local
                <br /> Water Committee to help keep water flowing for years to
                come.
              </p>
            </Col>
          </Row>
          <div class="row justify-content-center p-5 ">
            <div className="col" />
          </div>
        </Container>
      </section>
      <section>
        <Container className="containers">
          <Row>
            <Col>
              <h2 class="text-center">
                Access to clean water changed the lives of Hadjara, Umu,
                Natalia, and&nbsp;Devison.
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 3, offset: 2 }}>
              <img src={cross1} alt="icon" />
              HEALTH
            </Col>
            <Col md={{ span: 3, offset: 1 }}>
              <img src={time} alt="icon" />
              TIME
            </Col>
            <Col md={{ span: 3, offset: 1 }}>
              <img src={education} alt="icon" />
              EDUCATION
            </Col>
            <Col md={{ span: 3, offset: 1 }}>
              <img src={women} alt="icon" />
              WOMEN
            </Col>
          </Row>
          </Container>
          
         <div className="containers">
         <Row >
          <Col className="col1">
          <h6 class="text-white p-5">Hadjara learned about the importance of<br/> handwashing in school. Then she went home and<br/> taught her family about it, too. Now, her family is<br></br> healthier than ever.</h6>
            </Col>
            <Col className="col2">
              {/* <img className="rounded" alt="aboutus" src={person} /> */}
            </Col>
          </Row>
         </div>
        
      </section>
      <section className="watersection3">
        <div className="container containers">
          <Row>
            <Col md={{ span: 6, offset: 1 }}>
              <h2 className="text-left">
                Every £1 invested in clean water
                <br /> can yield £4–£12 in economic
                <br /> returns.6
              </h2>
              <h6 className="text-left">
                It’s a solid investment; access to clean water is perhaps the
                <br /> single most powerful tool for sparking economic growth
                <br /> that humanity has ever known.
              </h6>
              <p className="text-left">
                <Button outline color="dark" size="sm">
                  DONATE NOW
                </Button>
              </p>
            </Col>
            <Col md={{ span: 6, offset: 1 }} />
          </Row>
        </div>
      </section>
      <section className="watersection4">
        <div className="container containers">
          <Row>
            <Col>
              <h1 className="text-center">Here are three ways you can help.</h1>
              <p className="text-lg-center ">
                The craziest thing we can do is nothing.
              </p>
            </Col>
          </Row>
          
          <div class="row justify-content-center pt-5">
            <div class="col-sm offset-md-1 img4">
            <p className="text-center text-light pt-5">
                Sponsor a water project <br/> for £ 7,500 or more
                
              </p>
              <p className="text-center">
              <Button color="danger" size="lg">LEARN MORE</Button>
              </p>
            </div>
            <div class="col-sm offset-md-1 img6">
            <p className="text-center text-light pt-5">
                Sponsor a water project <br/> for £ 7,500 or more
                
              </p>
              <p className="text-center">
              <Button color="success" size="lg">LEARN MORE</Button>
              </p>
            </div>
            <div class="col-sm offset-md-1 img5">
            <p className="text-center text-light pt-5">
                Sponsor a water project <br/> for £ 7,500 or more
                
              </p>
              <p className="text-center">
              <Button color="primary" size="lg">LEARN MORE</Button>
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
}
