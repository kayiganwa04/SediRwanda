import React from "react";
import { Jumbotron, Container, Row, Col, Media } from "reactstrap";
import { Fade, Stagger } from "react-animation-components";
import { Link } from "react-router-dom/cjs/react-router-dom";
import local from "./../Images/local.svg";
import person from "./../Images/person.jpg";
export function Water() {
  return (
    <div>
        <Jumbotron className="aboutsection">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8 ">
              <h1 className="text-center text-dark">Why Water?</h1>
              <h5 className="text-center text-dark">For people in developing countries, clean water can change everything.</h5>
            </div>
            <div className="col-4" />
          </div>
        </div>
      </Jumbotron>
    </div>
  )
}