import { connect } from 'react-redux';
import AboutUs from '../components/AboutUs';

const mapStateToProps = state => {
  return {
    employees: state.employees,
    about: state.about
  };
};

const AboutUsWrapper = connect(
  mapStateToProps
)(AboutUs);

export default AboutUsWrapper;