import React from "react";
import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  CardSubtitle
} from "reactstrap";
import { Link } from "react-router-dom";
import vegetable from "./../Images/vegetable.jpg";
import porridge from "./../Images/Health_Sanitation/porridge.jpg";
import chicken from "./../Images/Health_Sanitation/mushroom.jpg";
export default function Compaign() {
  return (
    <div>
      <section className="bg-light">
        <Container className="containers py-4">
         <Row>
           <Col>
           <h3 className="text-center font-weight-bold">
             {/* SEDI RWANDA: has setting up Three programs */}
             Our area of focus
             </h3>
           <p className="text-center lead pad">
           SEDI RWANDA is proposing partners to support fight against Malnutrition,<br/> Chronicle poverty and food insecurity.
           </p>
           </Col>
           
         </Row>
        
          <Row className="containers">
            <Col md={4}>
              <Card>
              <img src={vegetable} alt="vegetable" />
                <CardBody>
                  <CardSubtitle className="py-2">
                    <Link to="/donate">
                      {" "}
                      <span className="font-weight-bold"> Agri-farming will help to eliminate poverty </span>
                    </Link>
                  </CardSubtitle>
                  <p>
                  Vegetables garden farming and mushroom gardens to provide the
                  beneficiaries the way to get money (selling the vegetables and
                  mushrooms) and reduce malnutrition.
                </p>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                
                <img src={porridge} alt="compaign" />
                <CardBody>
                  <CardSubtitle className="py-2">
                    <Link to="/donate">
                      {" "}
                      <span className="font-weight-bold"> Feed the school children and nursery kids  </span>
                    </Link>
                  </CardSubtitle>
                  <p>
                  SEDI RWANDA is proposing partners to support for one cup of
                  porridge every school day at 12:00
                </p>
                 
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                
                <img src={chicken} alt="compaign"  />
                <CardBody>
                  <CardSubtitle className="py-2">
                    <Link to="/donate">
                      {" "}
                      <span className="font-weight-bold"> Fight against poor and food insecurity  </span>
                    </Link>
                  </CardSubtitle>
                  <p>
                  Chicken farm and mushroom garden can help them to pay the rent of homes .
                </p>
                 
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
