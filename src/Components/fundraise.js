import React from "react";
import {
  Container,
  Col,
  Row,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
// import sponsor1 from "./../Images/sponsor1.jpg";
// import sponsor2 from "./../Images/sponsor2.jpg";
// import sponsor3 from "./../Images/sponsor3.jpg";
// import chatting from "./../Images/chatting.jpg";
// import map from "./../Images/map1.png";
export default function Fundraise() {
  return (
    <div>
      <section className="fundraise">
        <div>
          <Container>
            <Row>
              <Col sm="12" md={{ size: 12, offset: 0 }}>
                <p>
                {/* <h1
                  class=" containers display-4 text-white font-weight-bold"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                >
                  100% of your donation funds poor people
                </h1> */}
                <h1   class=" containers text-center text-white font-weight-bold"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic">
                  100% of the money you raise help poor<br/> people,  we’ll prove every project <br/> you fund with photos.<br/>
                  <Button color="primary" size="lg" className=" font-weight-bold">
                  <Link to="/compaign" className=" font-weight-bold text-white">SEE COMPAIGNS</Link>
              </Button>
                </h1>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* <section className="fundraise1 py-6">
        <Container>
          <Row className="py-4">
            <Col>
            <h1 className="text-center text-white font-weight-bold">
            Starting a fundraising campaign is easy
          </h1>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-between">
            <Col md={8}>
              <Button color="danger" size="lg">
                Step1
              </Button>
              <h3 className=" text-white font-weight-bold">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              </h3>
              <p className="text-white">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto
              </p>
            </Col>
            <Col md={4}>
            <img src={map} alt="sedi" className="img-fluid shadow colsize rounded"/>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="fundraise2">
        <Container className="containers">
          <Row className="align-items-center justify-content-between">
            <Col md={6}>
              <img src={chatting} alt="sedi" className="img-fluid shadow colsize rounded"/>
            </Col>
            <Col md={6}>
              <Button color="info" size="lg">
                Step2
              </Button>
              <h3 className=" text-white font-weight-bold">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              </h3>
              <p className="text-white">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="fundraise3">
        <Container className="containers">
          <Row className="align-items-center justify-content-between">
            <Col md={8}>
              <Button color="success" size="lg">
                Step3
              </Button>
              <h3 className=" text-white font-weight-bold">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              </h3>
              <p className="text-white">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto
              </p>
              <Link className=" text-white">
                Read? get your compaign started
              </Link>
            </Col>
            <Col md={4}>
              <img src={map} alt="sedi" className="img-fluid shadow colsize rounded"/>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-6">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center font-weight-bold">
                What will you do?
              </h1>
              <p className="text-center">
                You can do anything to raise money for helping! Need some
                inspiration?
                <br />
               Here are a few campaigns we’ll never forget.
              </p>
            </Col>
          </Row>
          <Row className="containers">
            <Col md={4} >
              <Card>
                <CardImg src={sponsor3} alt="picture" />
                <CardBody className="bg-primary">
                  <CardSubtitle>
                    <h6 className="text-white"> VERITATIS </h6>
                  </CardSubtitle>
                  <CardText>
                    <p className="text-white">
                      Celebrating her kid anniversary with a fundraiser
                    </p>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <CardImg src={sponsor1} alt="picture" />
                <CardBody className="bg-danger">
                  <CardSubtitle>
                    <h6 className="text-white"> VERITATIS </h6>
                  </CardSubtitle>
                  <CardText>
                    <p className="text-white">
                      Asked friends for donation instead of birth day gifts
                    </p>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <CardImg src={sponsor2} alt="picture" />
                <CardBody className="bg-info">
                  <CardSubtitle>
                    <h6 className="text-white"> VERITATIS ET QUANSI </h6>
                  </CardSubtitle>
                  <CardText>
                    <p className="text-white">Veritatis et quasi</p>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="text-center font-weight-bold">
                Sed ut perspiciatis unde omnis iste natus error sit<br/> voluptatem
              </h2>
              <p className="text-center">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                <br />  accusantium doloremque laudantium, totam rem aperiam
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={{ offset: 5 }} >
            <Button color="primary" size="lg" className=" font-weight-bold">
                  <Link to="/compaign" className=" font-weight-bold text-white">SEE COMPAIGNS</Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <hr /> */}
    </div>
  );
}
