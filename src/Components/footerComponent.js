import React from "react";
import { Link } from "react-router-dom";
import {  Col, Row } from "reactstrap";
function Footer() {
  return (
    <div className="footer py-5">
      <div className="container">
        <div className="row justify-content-between align-content-center">
          <div className="col-md-4 col-sm-12">
            <h5 className="text-white">Contact</h5>
            <ul className="list-unstyled text-white">
              <li>
                  (+250)783656633, (+250)782892604
              </li>
              <li>
                  sedirwanda@gmail.com
              </li>
              <li>
                  Ndera Sector
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12">
            <h5 className="text-white">SEDI Rwanda</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/mission&vision" className="text-white">
                  Mission
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12">
            <h5 className="text-white">Project</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/education" className="text-white">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/cooperative" className="text-white">
                  Cooperative
                </Link>
              </li>
              <li>
                <Link to="/sport" className="text-white">
                  Sport
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-white " />

        <Row>
          <Col>
            <div className="text-center">
              <p > 
              <i className="text-white m-3" ><strong>FOLLOW US</strong></i>
                <a
                  href="https://m.facebook.com/RwandaSEDI"
                  className="text-white"
                >
                  <i className="fa fa-facebook fa-lg m-3" />
                </a>{" "}
                <a href="/" className="text-white">
                  {" "}
                  <i className="fa fa-twitter fa-lg m-3 " />
                </a>
               
                <a href="https://instagram.com/sedi_rwanda?igshid=1e7a81mkfcf8a" className="text-white">
                  <i className="fa fa-instagram fa-lg m-3" />
                </a>
              </p>
              <p className="text-white powered">&copy;&nbsp;SEDI RWANDA 2020&nbsp;|&nbsp;<a href="https://www.techenfold.com/" className="text-white">Powered by Techenfold</a></p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
