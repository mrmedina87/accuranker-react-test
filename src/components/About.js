import React from 'react';

import { Row, Col, ModalHeader, ModalBody, Button } from 'reactstrap';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const urlsvg = `./src/assets/img/accuranker-logo.svg`;
    const mailto = `mailto:${this.props.data.email}`;
    return (
      <div>
        <ModalHeader className="about-accuranker-header">
          <span className="accuranker-logo">
            <img src={urlsvg} />
          </span>
        </ModalHeader>
        <ModalBody className="about-accuranker-body">
          <div className="aboutdesc">{this.props.data.description}</div>
          <Row>
            <Col sm="6">
              <div>{this.props.data.address}</div>
              <div>{this.props.data.country}</div>
              <div>VAT: {this.props.data.VAT}</div>
              <div>Phone: {this.props.data.phone}</div>
              <a href={mailto}>{this.props.data.email}</a>
            </Col>
            <Col sm="6" className="right-column-about">
              <a className="trialbutton btn btn-primary" target="_blank" href="https://app.accuranker.com/user/register/">Create trial</a>
              <Button className="button-hover" color="secondary" onClick={this.props.toggle}>Close</Button>
            </Col>
          </Row>
        </ModalBody>
      </div>
    );
  }
};