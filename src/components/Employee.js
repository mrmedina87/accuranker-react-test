import React from 'react';

import { Row, Col, ModalHeader, ModalBody, Button } from 'reactstrap';

export default class Employee extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const flagName = this.props.data.nationality;
    const urlsvg = `./src/assets/img/${flagName}.svg`;
    return (
      <div>
        <ModalHeader toggle={this.props.toggle}>
          <span className="employee-name">{this.props.data.name}</span>
          <span className="flag">
            <img src={urlsvg} />
          </span>
        </ModalHeader>
        <ModalBody>
          <Row className="body-row">
            <Col sm="5">
              <h5>{this.props.data.role}</h5>
              <div>Description: {this.props.data.description}</div>
            </Col>
            <Col sm="7" className="right-column-employee">
              <img src={this.props.data.image} />
            </Col>
          </Row>
        </ModalBody>
      </div>
    );
  }
};