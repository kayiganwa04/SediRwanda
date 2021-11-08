import React from "react";
import {
  Button,
  ModalHeader,
  ModalBody,
  Modal,
  Row,
  Col
} from "reactstrap";
import { Fade } from "react-animation-components";
import { Link } from "react-router-dom";
import sports from "./../Images/status/sport.png";
import gender from "./../Images/gender.png";

// import Header from "./../Components/headerComponent";
import community from "./../Images/community1.png";
import experience from "./../Images/expirience.png";
import volunteer from "./../Images/status/volunter.png";
import care from "./../Images/status/care.jpg";
import sport from "./../Images/status/donation.png";
import education from "./../Images/basic_education/education.jpg";
import Container from "reactstrap/lib/Container";
import local2 from "./../Images/status/social.jpg";
import sanitation from "./../Images/Health_Sanitation/health.jpg";
import ContactUs from "./../pages/ContactUs";
// import field from "./../Video/field.mp4";
// import { Player } from 'video-react';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      education: false,
      openModal1: false,
      openModal2: false,
      openModal3: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModal1 = this.toggleModal1.bind(this);
    this.toggleModal2 = this.toggleModal2.bind(this);
    this.toggleModal3 = this.toggleModal3.bind(this);
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
  toggleModal3() {
    this.setState({
      openModal3: !this.state.openModal3
    });
  }
  render() {
    return (
      
      <div className="">
        <section>
          <div className="home">
            <Container>
              <Row class="layer-2">
              <Col sm="12" md={{ size: 12, offset: 0 }} >
                <h1
                    className="display-4 headers text-white font-weight-bold"
                    data-aos="zoom-in" data-aos-duration="2000"
                  >
                    
                    Sports and Education Development Initiative
                    
                    (SEDI RWANDA)
                  </h1>
                  <p className="text-light lead col-lg-10" data-aos="fade-up" data-aos-duration="3000" >
                    Values the contribution and collaboration of local communities and local authorities to develop projects that respond to and address their primary needs.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section className="bg-white ">
          <Container className="py-5 ">
            <Row className="align-items-center justify-content-center">
            <Col md="3" sm="6">
                <div
                  className="text-center mb-2"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="icon icon-xl">
                    <img alt="aboutus" src={sport} class="img-fluid  rounded" height="150"  width="120"/>
                  </div>
                  <h5><Link to="/donate" >Donation</Link></h5>
                 
                </div>
              </Col>
              <Col md="3" sm="6">
                <div
                  className="text-center mb-2"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="icon icon-xl">
                    <img alt="aboutus" src={volunteer} class="img-fluid  rounded" height="150"  width="120"/>
                  </div>
                  <h5><Link to="/" >Volunteer</Link></h5>
                 
                </div>
              </Col>
              <Col md="3" sm="6">
                <div
                  className="text-center mb-2"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="icon icon-xl">
                    <img alt="aboutus" src={care} class="img-fluid  rounded" height="150"  width="120"/>
                  </div>
                  <h5><Link to="/" >Poverty Eradication</Link></h5>
                 
                </div>
              </Col>
            
              <Col md="3" sm="6">
                <div
                  className="text-center mb-2"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="icon icon-xl">
                    <img alt="aboutus" src={sports} class="img-fluid  rounded" height="150"  width="120"/>
                  </div>
                  <h5><Link to="/">Sport and entertainment</Link></h5>
                 
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="donation py-5">
        <div className="container">
          <Row className="aboutRow justify-content-between align-items-center   ">
          <Col md={6}>
          <h2 className="text-white font-weight-bold"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic">
                  100% of the money you raise help to eraducate Poverty
                </h2>
            </Col>
        
            <Col md={4}>
            <Button
                    color="light"
                    size="lg" className="button"
                  ><Link className="button-link" to="/donate">Donate Now</Link></Button>
            </Col>
          </Row>
          </div>
      </section>
        <section className="py-4">
          <div className="container">
            <h2 className="text-center font-weight-bold">
              Prioritized activities of SEDI RWANDA 
              <hr className="bg-warning hr" />
            </h2>

            <div class="row justify-content-center align-items-center containers">
              <div class="col-sm">
                <h4 className="lead">Education facilitation </h4>
                <p data-aos="fade-up" data-aos-duration="3000">
                  Education is a key for empowerment as it opens doors for
                  people of all backgrounds; education prepares individuals to
                  solve problems, teach others function at a higher level and
                  implement transformational ideas.it is to be prioritized as a
                  way leading to positive attitude towards sustainable
                  development. Considering the importance of education, SEDI
                  RWANDA program is planning to establish one nursery school in
                  each pilote village. In choosing the beneficiaries of
                  education facilitation in this program, SEDI RWANDA targeted
                  children from the histor  ically marginalized families (potters)
                  together with the kids from poor families neighboring this
                  community so as to avoid segregation..................&nbsp;&nbsp;
                  <Link to="/education">More details</Link>
                </p>
              </div>

              <div class="col-sm">
                <img
                  src={education}
                  data-aos="fade-down-left"
                  className="img-fluid shadow rounded"
                  alt="home"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="home3 py-4">
          <div className="container">
            {/* <h3 className="text-center containers" data-aos="fade-up"
     data-aos-duration="3000">
            Sed ut perspiciatis unde omnis iste natus error
          </h3> */}

            <div class="row justify-content-center align-items-center containers">
              <div class="col-sm">
                <img
                  src={sanitation}
                  data-aos="fade-down-left"
                  class="img-fluid shadow rounded"
                  alt="hom1"
                />
              </div>
              <div class="col-sm">
                <h4 className="lead">Health and sanitation </h4>
                <p data-aos="fade-up" data-aos-duration="3000">
                  SEDI RWANDA prioritized health insurance assistance as the
                  most important and necessary for beneficiaries in Masoro. So,
                  as those people had had no means to get money, they were in
                  high risk of death because they used traditional medecines.
                  Their lives were in danger situation. Many of them especially
                  women and kids died at birth...................&nbsp;&nbsp;
                  <Link to="/health-and-sanitation">More details</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-4 mb-6">
          <div className="container ">
            {/* <h3 className="text-center containers" data-aos="fade-up"
     data-aos-duration="3000">
            Sed ut perspiciatis unde omnis iste natus error
          </h3> */}

            <div class="row justify-content-center align-items-center pad">
              <div class="col-sm">
                <h4 className="lead">
                  Social economic integration{" "}
                </h4>
                <p data-aos="fade-up" data-aos-duration="3000">
                  Empowering this community with trainings in income generating
                  activity is another priority because those beneficiaries have
                  no land, no education, no useful professional activities. But
                  this priority is to insist on business activity which does not
                  need skills, not small amount of money nor large land. That is
                  why the mushroom garden comes first as good response...................&nbsp;&nbsp;
                  <Link to="/social-economic-integration">More details</Link>
                </p>
              </div>

              <div class="col-sm">
                <img
                  src={local2}
                  data-aos="fade-down-left"
                  class="img-fluid shadow rounded"
                  alt="home2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="home3 py-4">
          <Container>
            <Row>
              <Col>
                <h3 className="text-center font-weight-bold pad">Core Values</h3>
                <Fade in>
                  <p
                    className="text-center h5"
                    data-aos="fade-up"
                    data-aos-duration="2500"
                  >
                    SEDI RWANDA is driven by respect for and promotion of four
                    core values, <br />
                    which we incorporate into all of our projects and
                    activities.
                  </p>
                </Fade>
              </Col>
            </Row>
            <Row className="m-3 py-2 align-items-center text-center justify-content-center">
              <Col md={4}>
                <img
                  src={community}
                  alt="community"
                  class="img-fluid shadow rounded-circle"
                />
                <h5 className=" text-primary">
                  Community Participation
                  <Button
                    color="light"
                    size="sm"
                    onClick={this.toggleModal}
                    className="fa fa-question-circle bg-light rounded-circle"
                  />
                </h5>
              </Col>
              <Col md={4}>
                <img src={gender} alt="gender" className="img-fluid shadow rounded-circle" />
                <h5 className=" text-primary">
                  Gender Equality
                  <Button
                    color="light"
                    size="sm"
                    onClick={this.toggleModal1}
                    className="fa fa-question-circle bg-light rounded-circle"
                  />
                </h5>
              </Col>
             
              <Col md={4}>
                <img
                  src={experience}
                  alt="expirience"
                  class="img-fluid shadow rounded-circle"
                />
                <h5 className=" text-primary">
                  Local experience and traditional knowledge
                  <Button
                    color="light"
                    size="sm"
                    onClick={this.toggleModal3}
                    className="fa fa-question-circle bg-light rounded-circle"
                  />
                </h5>
              </Col>
            </Row>

            <Modal isOpen={this.state.education} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>
                <h4>Community Participation</h4>
              </ModalHeader>
              <ModalBody className="modalbody">
                <p>
                  SEDI RWANDA values partnerships and strategies that empower
                  families and communities to participate in welfare promotion
                  of vulnerable groups in activities elaborated for their
                  promotion
                </p>
              </ModalBody>
            </Modal>
            <Modal isOpen={this.state.openModal1} toggle={this.toggleModal1}>
              <ModalHeader toggle={this.toggleModal1}>
                <h3> Gender Equality</h3>
              </ModalHeader>
              <ModalBody className="modalbody">
                <p>
                  SEDI RWANDA values an approach that understands and
                  prioritizes the equal needs and rights of women and girls
                  (equal chance between men and women, boys and girls).
                </p>
              </ModalBody>
            </Modal>
            <Modal isOpen={this.state.openModal2} toggle={this.toggleModal2}>
              <ModalHeader toggle={this.toggleModal2}>
                <h4>Human Rights and welfare</h4>
              </ModalHeader>
              <ModalBody className="modalbody">
                <p>
                  SEDI RWANDA values strategies that promote and protect child
                  rights, especially the right to welfare, to better health and
                  sanitation, and to basic education.
                </p>
              </ModalBody>
            </Modal>
            <Modal isOpen={this.state.openModal3} toggle={this.toggleModal3}>
              <ModalHeader toggle={this.toggleModal3}>
                <h4>Local experience and knowledge</h4>
              </ModalHeader>
              <ModalBody className="modalbody">
                <p>
                  SEDI RWANDA values the contribution and collaboration of local
                  communities and local authorities to develop projects that
                  respond to and address their primary needs.
                </p>
              </ModalBody>
            </Modal>
          </Container>
        </section>
        {/* <section className="section1">
        <Container class="justify-content-center align-items-center">
            <Row  data-aos="fade-up"
              data-aos-duration="2000">
              <Col md="6"  className="" >
    
              <Player className="video-containers">
                <source src={field} type="video/mp4"/>
              </Player>
              </Col>
              
              <Col md="6"   className="bg-light video-containers">
                <h2 className="p-5 font-weight-bold">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam
                </h2>
                <Link to="/" className="pt-5 ml-5">
               <Button outline color="primary"  size="lg">
                  MORE PROJECT
                </Button>
               </Link>
              </Col>
            </Row>
          </Container>
        </section> */}
     <section>
       
     </section>
       <ContactUs />
      </div>
    );
  }
}
export default Home;
