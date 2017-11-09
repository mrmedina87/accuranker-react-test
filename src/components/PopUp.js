import React from 'react';

import { Button, Modal } from 'reactstrap';

import About from './About';
import Employee from './Employee';

export default class PopUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let modalBody;
    if( this.props.modalType === 'Employee' ) {
      modalBody = <Employee toggle={ this.props.toggle } data={ this.props.data }/>;  
    }
    else {
      modalBody = <About toggle={ this.props.toggle } data={ this.props.data }/>;
    }
    
    return (
      <Modal isOpen={ this.props.isOpen } toggle={ this.props.toggle }>
        { modalBody }
      </Modal>
    );
  }
};