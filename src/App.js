import {withAuth0} from '@auth0/auth0-react';
import React from 'react';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';

class App extends React.Component {
  render() {
    return (
      <>
      <h1>Dun.Gen()</h1>
      {this.props.auth0.isAuthenticated ? <LogoutButton/> : <LoginButton/>}
      </>
    )
  }
}

export default withAuth0(App);

