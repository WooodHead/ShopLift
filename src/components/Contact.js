import React, { Component } from "react";
import Map from "./Map";
// import { Container, Row, Col } from 'reactstrap';
import { Grid,
         Row,
         Col,
         Form,
         FormGroup,
         ControlLabel,
         FormControl,
         Button } from 'react-bootstrap';

import "../App.css";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      feedback: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  nameInput(e) {
    this.setState({ name: e.target.value });
  };

  emailInput(e) {
    this.setState({ email: e.target.value });
  };



  messageInput(e) {
    this.setState({ message: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div style={{width:'80%', margin:'auto'}}>
        <Grid>
          <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
              <div className="contact">
                <h1 style={{fontWeight:"bold"}}>Contact Us</h1><br/>
                <h3>ShopLift Inc.</h3><br/>
                <h4>1 Washington Sq<br/><br/>
                    San Jose, CA 95192<br/><br/>
                    Phone: (408) 123-4567<br/><br/>
                    Email: info@shop_liftteam.com<br/>
                </h4>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Map />
            </Col>
          </Row>
          <br></br><br></br>
          <h3>Feedback</h3>

          <Form horizontal>
            <FormGroup controlId="formHorizontalText">
              <Col componentClass={ControlLabel} sm={2}>Name</Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="e.q. Stephanie" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>Email</Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="abc@example.com" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>Feedback</Col>
              <Col sm={10}>
                {/*<FormControl  type="textarea" placeholder="133 is a good class." rows="3"/>*/}
                <textarea class="form-control" rows="5" placeholder="MASTER BRUCE!"></textarea>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Button type="submit">Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </Grid>
      </div>
    );
  }
}


// <Row>
// <Col>
// <div>
//   <Map />
//   <div className="contact">
//     <h1> Contact Us </h1>
//     <br />
//     <h3> ShopLift Inc.</h3>
//     <h4> 1 Washington Sq</h4>
//     <h4> San Jose, CA 95192 </h4>
//     <h4> Phone: (408) 123-4567</h4>
//     <h4> Fax: (800) 987-LIFT </h4>
//     <h4> Email: info@shop_liftteam.com </h4>
//   </div>
//
//   <h1 className="contactheader">
//     "We're always here for you. Let me know what you want"
//   </h1>
//
//   <div class="contactName">
//     <input
//       name="contactName"
//       type="text"
//       value={this.state.name}
//       onChange={this.nameInput.bind(this)}
//       placeholder="Name"
//     />
//   </div>
//
//   <div class="contactEmail">
//     <input
//       name="contactEmail"
//       type="text"
//       value={this.state.email}
//       onChange={this.emailInput.bind(this)}
//       placeholder="Email"
//     />
//   </div>
//   <div class="contactsubject">
//     <input
//       type="text"
//       value={this.state.subject}
//       onChange={this.subjectInput.bind(this)}
//       placeholder="Subject"
//     />
//   </div>
//   <div class="contactMessage">
//     <textarea
//       type="text"
//       value={this.state.message}
//       onChange={this.messageInput.bind(this)}
//       placeholder="Message"
//     />
//   </div>
//   <button className="ContactSendButton" onSubmit={this.handleSubmit}>
//     Send
//   </button>
// </div>
// </Col>
// </Row>

// subjectInput(e) {
//   this.setState({ subject: e.target.value });
// };
