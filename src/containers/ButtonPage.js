import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../components/Button';
import * as ButtonActions from '../actions/button';


function mapStateToProps(state) {
  return {
    button: state.button,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ButtonActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Button);