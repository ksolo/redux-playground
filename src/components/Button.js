import React, { Component, PropTypes } from 'react';


export default class Button extends Component {
  static propTypes = {
    toggle: PropTypes.func.isRequired,
    button:   PropTypes.string.isRequired,
  };

  render() {
    const { toggle, button } = this.props;
    return (
      <p>
        <button  onClick = { ()=>(toggle()) }>{ button }</button>
      </p>
    );
  }
}