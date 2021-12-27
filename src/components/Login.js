import React from 'react';
import PropTypes from "prop-types";

class Login extends React.Component {

  static propTypes = {
    authenticate: PropTypes.func.isRequired
  }
  render() {
    return (
      <nav className='login'>
        <h2>Login for inventory</h2>
        <button className='github' onClick={() => { this.props.authenticate('Github') }}>Log in with github</button>
      </nav>
    );
  }
}

export default Login;