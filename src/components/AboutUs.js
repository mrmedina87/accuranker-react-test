import React from 'react';
import Header from './Header';
import PopUp from './PopUp';

import { Container, Row, Col, Alert} from 'reactstrap';

export default class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalType: 'About',
      modalData: props.about
    };

    this.toggle = this.toggle.bind(this);
    this.triggerModal = this.triggerModal.bind(this);
  }
  
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  triggerModal(ComponentName, data) {
    this.setState({
      modalType: ComponentName,
      modalData: data
    });
    this.toggle();
  }

  render() {
    let employeesList;
    if(!this.props.employees.error) {
      const emps = this.props.employees.items;
      employeesList = emps.map((employee, index) =>
        
        <Col sm="4" xs="12" key={ index } onClick={() => { this.triggerModal('Employee', employee) }}>
          <div className="employee-box">
            <div className="employee-img-wrapper">
              <img src={ employee.image } />
            </div>
            <span className="name">{ employee.name }</span>
          </div>
        </Col>

      );
    }
    else {
      const alertMessage = "Something went wrong while trying to get the list of employees. Please try again later";
      employeesList = <Alert color="danger">{alertMessage}</Alert>;
    }
    
    return (
      <div>
        <Header openModal={() => { this.triggerModal('About', this.props.about.about) }} />

        <Container className="body-aboutus">
          <Row>
            { employeesList }
          </Row>
        </Container>

        <PopUp isOpen={ this.state.modal } toggle={ this.toggle} modalType={ this.state.modalType } data={ this.state.modalData } />
      </div>
    );
  }
};