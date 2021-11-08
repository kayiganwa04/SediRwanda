import React from "react";
import {
  Col,
  Container,
  Row
} from "reactstrap";
// import {  Stagger } from "react-animation-components";
// import local from "./../Images/team/team1.png";

import team1 from "./../Images/team/team.jpg";
import volunteers from "./../Images/team/volunteers.jpg";
// import local1 from "./../Images/team/team2.jpg";
// import localIcon2 from "./../Images/team1.jpg";
// import localIcon from "./../Images/imgIcon2 .jpg";
// import localIcon1 from "./../Images/teamIcon2.jpg";
// import local2 from "./../Images/teamIcon3.jpg";

export default class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      education: false,
      openModal1: false,
      openModal2: false,
      openModal3: false,
      openModal4: false,
      openModal5: false,
      openModal6: false,
      openModal7: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModal1 = this.toggleModal1.bind(this);
    this.toggleModal2 = this.toggleModal2.bind(this);
    this.toggleModal3 = this.toggleModal3.bind(this);
    this.toggleModal4 = this.toggleModal4.bind(this);
    this.toggleModal5 = this.toggleModal5.bind(this);
    this.toggleModal6 = this.toggleModal6.bind(this);
    this.toggleModal7 = this.toggleModal7.bind(this);
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
  toggleModal4() {
    this.setState({
      openModal4: !this.state.openModal4
    });
  }
  toggleModal5() {
    this.setState({
      openModal5: !this.state.openModal5
    });
  }
  toggleModal6() {
    this.setState({
      openModal6: !this.state.openModal6
    });
  }
  toggleModal7() {
    this.setState({
      openModal7: !this.state.openModal7
    });
  }

  render() {
    return (
      <div >
        {/* <section className="team1 overlay">
          
          
            <Container>
              <Stagger in>
                <Row>
                  <Col sm="12" md={{ size: 8, offset: 3 }}>
                      <h1
                        class="headers display-2 text-white font-weight-bold "
                        data-aos="fade-up"
                  data-aos-duration="3000"
                      >
                        Our Team
                      </h1>
                  </Col>
                </Row>
              </Stagger>
            </Container>
        </section> */}
        {/* <section className="team">
          <Container className="containers">
            <h3 className="text-center">MEET OUR TEAM</h3>
            <Row>
              <Col>
                <p className="text-center">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem <br/>aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.<br/> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia <br/>{" "}
                </p>
              </Col>
            </Row>
            
        
            <Row>
              <Col md={4} >
              <img
                src={local}
                alt="sedi-image3 "
                className="Home-img img-fluid bg-light"
              />
              <div className="text-center p-3 img-div text-warning" >
                
                  <h5 >VERITATIS ET QUANSI</h5>
                  <em className="text-white">
                  VERITATIS ET QUANSI
                  </em>
                  
                  <h6
                      
                    >
                      <button type="button" class="btn btn-link" onClick={this.toggleModal} >more details</button>
                    </h6>
                
              </div>
              </Col>
              <Col md={4} >
              <img
                src={local}
                alt="sedi-image3 "
                className="Home-img img-fluid bg-light"
              />
              <div className="text-center p-3 img-div text-warning" >
                
                  <h5 >VERITATIS ET QUANSI</h5>
                  <em className="text-white">
                  VERITATIS ET QUANSI
                  </em>
                  
                  <h6
                      
                    >
                      <button type="button" class="btn btn-link" onClick={this.toggleModal} >more details</button>
                    </h6>
                
              </div>
              </Col>
              <Col md={4} >
              <img
                src={local}
                alt="sedi-image3 "
                className="Home-img img-fluid bg-light"
              />
              <div className="text-center p-3 img-div text-warning" >
                
                  <h5 >VERITATIS ET QUANSI</h5>
                  <em className="text-white">
                  VERITATIS ET QUANSI
                  </em>
                  
                  <h6
                      
                    >
                      <button type="button" class="btn btn-link" onClick={this.toggleModal} >more details</button>
                    </h6>
                
              </div>
              </Col>
             
            </Row>
            <Row className="pt-3">
              <Col md={4} >
              <img
                src={local}
                alt="sedi-image3 "
                className="Home-img img-fluid bg-light"
              />
              <div className="text-center p-3 img-div text-warning" >
                
                  <h5 >VERITATIS ET QUANSI</h5>
                  <em className="text-white">
                  VERITATIS ET QUANSI
                  </em>
                  
                  <h6
                      
                    >
                      <button type="button" class="btn btn-link" onClick={this.toggleModal}>more details</button>
                    </h6>
                
              </div>
              </Col>
              <Col md={4} >
              <img
                src={local}
                alt="sedi-image3 "
                className="Home-img img-fluid bg-light"
              />
              <div className="text-center p-3 img-div text-warning" >
                
                  <h5 >VERITATIS ET QUANSI</h5>
                  <em className="text-white">
                  VERITATIS ET QUANSI
                  </em>
                  
                  <h6
                      
                    >
                      <button type="button" class="btn btn-link" onClick={this.toggleModal}>more details</button>
                    </h6>
                
              </div>
              </Col>
              <Col md={4} >
              <img
                src={local}
                alt="sedi-image3 "
                className="Home-img img-fluid bg-light"
              />
              <div className="text-center p-3 img-div text-warning" >
                
                  <h5 >VERITATIS ET QUANSI</h5>
                  <em className="text-white">
                  VERITATIS ET QUANSI
                  </em>
                  
                  <h6
                      
                    >
                      <button type="button" class="btn btn-link" onClick={this.toggleModal} >more details</button>
                    </h6>
                
              </div>
              </Col>
             
            </Row>
            <Modal isOpen={this.state.education} toggle={this.toggleModal}>
              <ModalBody className="modalbody">
                <Row>
                  <Col>
                  <img
                src={local}
                alt="sedi-image3 "
                className="Home-img img-fluid "
              />
                  </Col>
                  <Col>
                    <h6 className="pt-5 font-weight-bold">Veritatis Quasi</h6>
                    <p>Veritatis Quasi</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="pt-5">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis
                    </p>
                    <Button color="secondary" onClick={this.toggleModal}>Close</Button>
                  </Col>
                  
                </Row>
                
              </ModalBody>
            </Modal>
            <Modal isOpen={this.state.openModal1} toggle={this.toggleModal1}>
              <ModalBody className="modalbody">
                <Row>
                  <Col>
                  <img
                src={local}
                alt="sedi-image3 "
                className="Home-img img-fluid "
              />
                  </Col>
                  <Col>
                    <h6 className="pt-5 font-weight-bold">Veritatis Quasi</h6>
                    <p>Veritatis Quasi</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="pt-5">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis
                    </p>
                    <Button color="secondary" onClick={this.toggleModal1}>Close</Button>
                  </Col>
                </Row>
              </ModalBody>
            </Modal>
            <Modal isOpen={this.state.openModal2} toggle={this.toggleModal2}>
              <ModalBody className="modalbody">
                <Row>
                  <Col>
                  <img
                src={local}
                alt="sedi-image3 "
                className="Home-img img-fluid "
              />
                  </Col>
                  <Col>
                    <h6 className="pt-5 font-weight-bold">Veritatis Quasi</h6>
                    <p>Veritatis Quasi</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="pt-5">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis
                    </p>
                    <Button color="secondary" onClick={this.toggleModal2}>Close</Button>
                  </Col>
                </Row>
              </ModalBody>
            </Modal>
            <Modal isOpen={this.state.openModal3} toggle={this.toggleModal3}>
              <ModalBody className="modalbody">
                <Row>
                  <Col>
                  <img
                src={local}
                alt="sedi-image3 "
                className="Home-img img-fluid "
              />
                  </Col>
                  <Col>
                    <h6 className="pt-5 font-weight-bold">Veritatis Quasi</h6>
                    <p>Veritatis Quasi</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="pt-5">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis
                    </p>
                    <Button color="secondary" onClick={this.toggleModal3}>Close</Button>
                  </Col>
                </Row>
              </ModalBody>
            </Modal>
            <Modal isOpen={this.state.openModal4} toggle={this.toggleModal4}>
              <ModalBody className="modalbody">
                <Row>
                  <Col>
                  <img
                src={local}
                alt="sedi-image3 "
                className="Home-img img-fluid "
              />
                  </Col>
                  <Col>
                    <h6 className="pt-5 font-weight-bold">Veritatis Quasi</h6>
                    <p>Veritatis Quasi</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="pt-5">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis
                    </p>
                    <Button color="secondary" onClick={this.toggleModal4}>Close</Button>
                  </Col>
                </Row>
              </ModalBody>
            </Modal>
            <Modal isOpen={this.state.openModal5} toggle={this.toggleModal5}>
              <ModalBody className="modalbody">
                <Row>
                  <Col>
                  <img
                src={local}
                alt="sedi-image3 "
                className="Home-img img-fluid "
              />
                  </Col>
                  <Col>
                    <h6 className="pt-5 font-weight-bold">Veritatis Quasi</h6>
                    <p>Veritatis Quasi</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="pt-5">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis
                    </p>
                    <Button color="secondary" onClick={this.toggleModal5}>Close</Button>
                  </Col>
                </Row>
              </ModalBody>
            </Modal>
            <Modal isOpen={this.state.openModal6} toggle={this.toggleModal6}>
              <ModalBody className="modalbody">
                <Row>
                  <Col>
                  <img
                src={local}
                alt="sedi-image3 "
                className="Home-img img-fluid "
              />
                  </Col>
                  <Col>
                    <h6 className="pt-5 font-weight-bold">Veritatis Quasi</h6>
                    <p>Veritatis Quasi</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="pt-5">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis
                    </p>
                    <Button color="secondary" onClick={this.toggleModal6}>Close</Button>
                  </Col>
                </Row>
              </ModalBody>
            </Modal>
            <Modal isOpen={this.state.openModal7} toggle={this.toggleModal7}>
              <ModalBody className="modalbody">
                <Row>
                  <Col>
                  <img
                src={local}
                alt="sedi-image3 "
                className="Home-img img-fluid "
              />
                  </Col>
                  <Col>
                    <h6 className="pt-5 font-weight-bold">Veritatis Quasi</h6>
                    <p>Veritatis Quasi</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="pt-5">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis
                    </p>
                    <Button color="secondary" onClick={this.toggleModal7}>Close</Button>
                  </Col>
                </Row>
              </ModalBody>
            </Modal>
          </Container>
        </section>
         */}

      <section className="aboutteam bg-light">
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
      <section className="aboutteam bg-white">
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
}
