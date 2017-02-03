import { connect } from 'react-redux';
import { sendGreeting } from '../actions'
import Greeting from '../components/Greeting';

const mapStateToProps = (state) => {
  return {
    isSubmitted: state.isSubmitted,
    messages: state.messages,
  };
};

const mapDispatchToProps = (dispatch) => ({
  submitGreeting(message) {
    dispatch(sendGreeting(message));
  },
});

const GreetingContainer = connect(mapStateToProps,mapDispatchToProps)(Greeting);

export default GreetingContainer
