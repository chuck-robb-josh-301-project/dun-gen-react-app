import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import axios from 'axios';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';
import HeroSelector from './HeroSelector.js';
import { Container } from 'react-bootstrap';
import Header from './Header';
import './App.css'
// import Book1 from './img/book1.png';
import 'bootstrap/dist/css/bootstrap.min.css';


const urlApi = `https://www.dnd5eapi.co/api`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classData: {},
      renderError: false,
    }
  }


  getHero = async () => {
    try {
      let heroClass = await axios.get(`${urlApi}/classes`);
      this.setState({
        classData: heroClass,

      })
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `Uh Oh Error: ${error.response.status}, ${error.response.data.error}`
      })
    }
  }









  render() {
    return (
      <body>

        <>
          <Header className="headClass"/>
          {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
          {this.props.auth0.isAuthenticated ? <h2 className="welcome">Welcome {this.props.auth0.user.given_name}!</h2> : <h2>Please Log In!</h2>}
          {this.props.auth0.isAuthenticated ?
            <Container>
              <HeroSelector />
            </Container>
            : <h2></h2>
          }

        </>
      </body>
    )
  }
}

export default withAuth0(App);

