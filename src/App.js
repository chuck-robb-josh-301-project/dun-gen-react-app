import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';
import HeroSelector from './HeroSelector.js';
import { Container } from 'react-bootstrap';
import Header from './Header';
import './App.css'
// import Book1 from './img/book1.png';

// let backgroundImg = {
//   backgroungImage: `url(${Book1})`
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showModal: false
    }
  }


  render() {
    return (
      <>
        <Header/>
        {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        {this.props.auth0.isAuthenticated ? <h2>Welcome {this.props.auth0.user.given_name} !</h2> : <h2>Please Log In!</h2>}
        {this.props.auth0.isAuthenticated ?
        <Container>
          <HeroSelector/>
        </Container> 
        : <h2></h2>
        } 
        
      </>
    )
  }
}

export default withAuth0(App);

