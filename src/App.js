import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';
import HeroSelector from './heroSelect.js';
import { Container } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  handleOpen = () => {
    this.setState({
      showModal: true
    })
  }

  handleClose = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <>
        <h1>Dun.Gen()</h1>
        {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        {this.props.auth0.isAuthenticated ? <h2>Good Morning Chuck!</h2> : <h2>Please Log In!</h2>}
        {this.props.auth0.isAuthenticated ?
        <Container>
          <HeroSelector 
          show={this.state.showModal}
          onHide={this.state.handleclose}
          centered
          size="xl"
          />
        </Container> 
        : <h2></h2>
  }
      </>
    )
  }
}

export default withAuth0(App);

