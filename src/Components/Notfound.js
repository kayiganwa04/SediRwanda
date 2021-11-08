import React from "react";
import {
  Row,
  Col
} from "reactstrap";

class Notfound extends React.Component {
  
  render() {
    return (
      
      <div className="">
       
        <section className="donation py-5">
        <div className="container">
          <Row className="aboutRow justify-content-center align-items-center   ">
          <Col>
          <h2 className="text-white font-weight-bold"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic">
                  Page not found
                </h2>
            </Col>
        
          </Row>
          </div>
      </section>
      </div>
    );
  }
}
export default Notfound;
