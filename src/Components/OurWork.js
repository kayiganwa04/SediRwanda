import React from "react";
import { Container, Row, Col } from "reactstrap";

import { Fade } from "react-animation-components";
import student1 from "./../Images/basic_education/education.jpg";
import student2 from "./../Images/basic_education/education3.jpg";
import student3 from "./../Images/basic_education/education2.jpg";
import local2 from "./../Images/basic_education/education4.jpg";

export default class OurWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      education: false,
      openModal1: false,
      openModal2: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModal1 = this.toggleModal1.bind(this);
    this.toggleModal2 = this.toggleModal2.bind(this);
  }

  toggleModal() {
    this.setState({
      education: !this.state.education
    });
  }
  toggleModal1() {
    this.setState({
      openModal1: !this.state.openModal1
    });
  }
  toggleModal2() {
    this.setState({
      openModal2: !this.state.openModal2
    });
  }
  render() {
    return (
      <div>
        <section className="project">
          <div className="overlay">
            <Container>
              <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                  <h1
                    class="headers display-3 text-white font-weight-bold "
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    Nursery and Primary
                  </h1>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      
        <section className="project1">
          <Container className="pt-5">
            <h1 className="text-center">Irerero Nursery School </h1>
            <Row>
              <Col>
                <p className="text-center pad" data-aos="fade-up"
              data-aos-duration="2500">
                  In actual basic education facilitation program, SEDI provides
                  assistance to early child education
                  <br /> and basic education integration and reintegration.
                  Thus, the Irerero nursery schoolhas been
                  <br /> opened in Cyaruzinge cell, Karubibi village and it is
                  now well running <br /> its program with a number of 63 kids.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md="4">
              
                <img src={student1} alt="student" data-aos="fade-up"
                  data-aos-duration="3000" class="img-fluid shadow rounded"/>
              </Col>
              <Col md="4">
               
                <img src={student2} alt="student" data-aos="fade-up"
                  data-aos-duration="3000" class="img-fluid shadow rounded"/>
              </Col>
              <Col md="4">
                
                <img src={student3} alt="student" data-aos="fade-up"
                  data-aos-duration="3000" class="img-fluid shadow rounded"/>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="school1">
          <div className="container containers ">
            <h3
              className="text-center "
              
            >
              Basic education integration (nursery)
            </h3>

            <div class="row justify-content-center pad">
              <div class="col-sm">
                <p data-aos="fade-up"
              data-aos-duration="2500">
                  This nursery school has set up as mission related to
                  integration of kids from poor families, and more than 60% are
                  from the historically marginalized community (potters in
                  Cyaruzinge village). With the same vision, a number of 53
                  students in Masoro village, in every beginning of school year
                  receive school materials, uniforms; and they are paid for
                  parents’ contribution fees.
                </p>
                <p data-aos="fade-up"
              data-aos-duration="3000">
                  In providing this charity assistance, SEDI’s leaders believe
                  that education is a key for empowerment as it opens doors for
                  people of all backgrounds; education prepares individuals to
                  solve problems, teach others, function at a higher level and
                  implement transformational ideas. Reason why SEDI has
                  prioritized this opportunity as a way leading to positive
                  attitude towards sustainable development.
                </p>
              </div>

              <div class="col-sm">
                <img src={local2} data-aos="fade-down-left" alt="sedi" class="img-fluid shadow rounded"/>
              </div>
            </div>
          </div>
        </section>
        <section className="school">
          <Container>
            <Row className="containers">
              <Col className="" md={3}>
                <h1 className="text-center text-light"> Primary</h1>
                <h1 className="text-center text-light">1</h1>
              </Col>
              <Col md={3}>
                <h1 className="text-center text-light">Nursery</h1>
                <h1 className="text-center text-light">1</h1>
              </Col>
              <Col md={3}>
                <h1 className="text-center text-light">Students</h1>
                <h1 className="text-center text-light">63</h1>
              </Col>
              <Col md={3}>
                <h1 className="text-center text-light">Staff</h1>
                <h1 className="text-center text-light">27</h1>
              </Col>
            </Row>

            
          </Container>
        </section>

        {/* =====================where we work================ */}
        <section className="section-lg pt-5  bg-light school2">
          <Container>
            <Row>
              <Col>
                <Fade in>
                  <h1 className="text-center containers">Where We Work</h1>
                  <p className="text-center " data-aos="fade-up"
              data-aos-duration="2500">
                    SEDI RWANDA programs has started its pilot activities in
                    Masoro village(GASABO District), Cyaruzinge village(GASABO
                    District)
                    <br /> and Mushima village( KAMONYI District ) nearing the
                    city of Kigali but it is planned to bring the lesson and{" "}
                    <br /> experiences over various sectors surrounding Kigali
                    city.
                  </p>
                </Fade>
              </Col>
            </Row>
          
          </Container>
          <div className="section3 " />
        </section>
    <section className="testimony">
    <Container >
      <Row>
        <Col>
          <p className="text-center pad text-warning font-weight-bold">
            TESTIMONIALS
          </p>
          <h2 className="d-block text-center pad ">
            What parents of the students Say About Us
          </h2>
        </Col>
      </Row>
      <Row>
        <Col
          md={{ size: 6 }}
          className="bg-light border-right border-bottom"
        >
          <p
            className="p-4"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <i className="fa fa-quote-left fa-5x text-muted" />
            First of all, thank you. I have two children, one boy and one
            girl. My boy finished P3 and my daughter is in P2 . The best
            thing that I noticed is that the children had their minds opened
            to new ideas. Before they had fear of children from other
            villages.They had to learn Kinyarwanda and English. They feel
            more comfortable than staying at home first. In terms of
            learning, my son is in primary 2 now. Also, helped my daughter
            feel comfortable with other children. Now my daughter knows how
            to read and write. She can even know when her birthday is. If
            you ask “how old are you?” she can answer. If you ask her the
            name of her parents, she can answer. Before she could not answer
            those questions. Before she didn’t know the name of her parents
            but now she can even name the village where she lives. So we are
            happy for that. Right now she is saying that she will finish
            primary and continue to high school but before she didn’t know
            the difference between the two of them.
          </p>
          <h4>Turatsinze</h4>
        </Col>

        <Col md={{ size: 6 }} className="bg-light border-bottom">
          <p
            className="p-4"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <i className="fa fa-quote-left fa-5x text-muted" />
            School helped very much. First of all before they were not
            educated. The children of Masoro used to curse others but after
            getting to school they stopped. Even when someone curses
            accidentally the students say that they will tattle to the
            teacher. There learned that cursing is not appropriate. When the
            teacher catches the children cursing the teacher will punish
            them. In that way we noticed that the children improved. School
            helps to form a unity with other communities nearby. We can go
            sing together and feel as though we are the same people without
            pointing out who is from which village. We can also play
            together with those children without discrimination. Most of the
            time other communities came to accuse our children of cursing
            and bad behavior such as beating other children. But after going
            to school no one has been accusing us. It stopped those bad
            behaviors because they learned good culture from school. We find
            it to be a good thing that children will go to school . Other
            thing is that we have a good example of Bamurange who is
            finished primary and she is going to go to the high school,this
            is the miracles in our village.
          </p>
          <h4>Ufitese</h4>
        </Col>
      </Row>
    </Container>
  </section>
      </div>
    );
  }
}
