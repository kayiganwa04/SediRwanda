import React, { Component } from "react";
import { Row, Col } from "reactstrap";
// import axios from 'axios';
// import { connect } from "react-redux";

// const required = val => val && val.length;
// const maxLength = len => val => !val || val.length <= len;
// const minLength = len => val => val && val.length >= len;
// const isNumber = val => !isNaN(Number(val));
// const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
//   handleSubmit(e){
//     e.preventDefault();
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
//     axios({
//         method: "POST", 
//         url:"http://localhost:3030/send", 
//         data: {
//             name: name,   
//             email: email,  
//             message: message
//         }
//     }).then((response)=>{
//         if (response.data.msg === 'success'){
//             alert("Message Sent."); 
//             this.resetForm()
//         }else if(response.data.msg === 'fail'){
//             alert("Message failed to send.")
//         }
//     })
// }

// resetForm(){
//     document.getElementById('contact-form').reset();
// }
  render() {
    return (
      <div >
        <section className="contactBox  py-4">
            
        <div className="container">
             <div className="row"> 
             <h1 className="contact text-center"><b>We love making<br/> new friends</b></h1>
              <div className="col-md-6 col-sm-12 contactImage">
              </div>
              <div className="col-md-6 col-sm-12 bg-primary">
                <h3 className="text-center pt-4 text-white">
                  Send Us Message
                </h3>
                <form id="contact-form" method="POST">
                    <div className="form-group px-4">
                        <label for="name " className="text-white">Name</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group px-4">
                        <label for="exampleInputEmail1" className="text-white">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group px-4">
                        <label for="message" className="text-white">Message</label>
                        <textarea className="form-control" rows="3" id="message" required="true"></textarea>
                    </div>
                    <div className="px-4">
                    	<button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
                  <Row className="py-3 px-4">
                    <Col>
                      <p className="text-light">
                        Location: Ndera Sector
                        <br />
                        Email: sedirwanda@gmail.com <br />
                        call us on (+250)782892604
                        <br /> <a href="https://m.facebook.com/RwandaSEDI" className="text-white"><i className="fa fa-facebook fa-lg m-3" /></a>{" "}
                        <a href="/" className="text-white"> <i className="fa fa-twitter fa-lg m-3 " /></a>
                        {/* <a href="/" className="text-white"><i className="fa fa-linkedin fa-lg m-3" /></a>
                        <a href="/" className="text-white"> <i className="fa fa-youtube fa-lg m-3" /></a> */}
                        <a href="https://instagram.com/sedi_rwanda?igshid=1e7a81mkfcf8a" className="text-white"><i className="fa fa-instagram fa-lg m-3" /></a>{" "}
                      </p>
                    </Col>
                  </Row>
                
              </div>
            </div>
          </div>
        </section>
       
      </div>
    );
  }
}
export default Contact;
