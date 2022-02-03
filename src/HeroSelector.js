import React from 'react';
import axios from 'axios';
import { Accordion, Card, Container, Button, Modal, Form } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSelector.css'
import bookPng from './img/book1.png'
import cave from './img/16279.jpg'
import swamp from './img/2202.jpg'
import bridge from './img/bridge-19513.jpg'
import forest from './img/forest-4099730.jpg'
import stairs from './img/stairs2.jpg'




const SERVER = process.env.REACT_APP_SERVER_URL;

class HeroSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heros: [],
      currentHero: {},
      showModal: false,
      showGameCard: false,
      showAccCard: true,
      showHero: false
    }
  }

  handleModal = (e) => {
    e.preventDefault();

    this.setState({
      showModal: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  renderCard = (e) => {
    e.preventDefault();
    this.setState({
      showGameCard: true,
      showAccCard: false,
      showHero: false
    })
  }

  getHerosInfo = async () => {
    if (this.props.auth0.isAuthenticated) {
      const responseFromAuth0 = await this.props.auth0.getIdTokenClaims();
      //Super Duper Important 
      const jwt = responseFromAuth0.__raw;
      //console.log(jwt);
      const config = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/heros',
        headers: { "Authorization": `Bearer ${jwt}` }
      }
      const heroResponse = await axios(config);
      this.setState({ heros: heroResponse.data })
    }
    // try {
    //   let heroData = await axios.get(`${SERVER}/heros`)
    //   this.setState({
    //     heros: heroData.data
    //   })
    // } catch (err) {
    //   console.error(err)
    // }
  }

  makeHero = async (newHero) => {
    let url = `${SERVER}/heros`;

    try {
      let heroResults = await axios.post(url, newHero);

      this.setState({
        heros: [...this.state.heros, heroResults.data]
      })
    } catch (err) {
      console.error(err);
    }
  }

  deleteHero = async (id) => {
    try {
      await axios.delete(`${SERVER}/heros/${id}`)
      this.getHerosInfo();
    } catch (err) {
      console.error(err);
    }
  }

  updateHero = async (heroUpdate) => {
    let url = `${SERVER}/heros`;
    let updatedHero = await axios.put(`${url}/${heroUpdate._id}`, heroUpdate);
    let updatedHeros = this.state.books.map(currHero => currHero._id === updatedHero.data._id ? updatedHero.data : currHero);
    this.setState({ books: updatedHeros })

  }

  handleHeroUpdate = (e) => {
    e.preventDefault();
    let heroUpdate = {
      name: e.target.name.value || this.state.currentHero.name,
      race: e.target.race.value || this.state.currentHero.race,
      class: e.target.class.value || this.state.currentHero.class,
      origin: e.target.origin.value || this.state.currentHero.origin,
      background: e.target.background.checked || this.state.currentHero.background,
      progress: e.target.progress.value || this.state.currentHero.progress,
      email: this.props.auth0.user.email,
      __v: this.state.currentHero.__v,
      _id: this.state.currentHero._id

    }
    console.log(heroUpdate)
    this.updateHero(heroUpdate);
  }

  componentDidMount() {
    this.getHerosInfo();
  }

  handleHeroSubmit = (e) => {
    e.preventDefault();
    let newHero = {
      name: e.target.name.value,
      // pronouns: JSON.parse(e.target.pronouns.value),
      race: e.target.race.value,
      class: e.target.class.value,
      villageName: e.target.villageName.value,
      email: this.props.auth0.user.email,
      progress: 1,
      health: 25
    }
    this.handleCloseModal();
    console.log(newHero);
    this.makeHero(newHero);
  }

  render() {
    console.log(this.props.auth0.user)

    let herosToRender = this.state.heros.map((hero, idx) =>

      <Accordion.Item key={idx} eventKey={idx}>
        <Accordion.Header><h2>{hero.name}</h2></Accordion.Header>
        <Accordion.Body className="accbod">
          {hero.race}
          {hero.class}
          {hero.villageName}
          {hero.progress}
          {hero.background}
          <Button variant="primary" onClick={() => this.setState({ currentHero: hero, showHero: true })}>Load</Button>
          <Button variant="danger" onClick={() => this.deleteHero(hero._id)}>Delete</Button>
        </Accordion.Body>
      </Accordion.Item>

    )
    console.log('This the current Hero', this.state.currentHero)
    return (
      <>

        {
          this.state.showHero &&
          <h2>{this.props.auth0.user.given_name} selected {this.state.currentHero.name}</h2>
        }
        {
          this.state.showAccCard &&

          <Container>
            <Card className="cardClass">
              <Card.Body>
                <Accordion className="accord">
                  {herosToRender}
                </Accordion>
                <Button onClick={this.handleModal}>Create New Hero</Button>
                <Button onClick={this.renderCard}>Start Game</Button>
              </Card.Body>
            </Card>
          </Container>
        }


        <Container>
          <Modal
            show={this.state.showModal}
            onHide={this.handleCloseModal}
            centered
            size="xl"
            className="modalClass"

          >

            <Modal.Header closeButton>
              <Modal.Title>Create Your Hero</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.handleHeroSubmit}>
                <Form.Group controlId="name">
                  <Form.Label >Give Your Hero a Name!</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="villageName">
                  <Form.Label className="forms">Enter your Hometown!</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="class">
                  <Form.Select className="forms" >
                    <option value="0">Choose a class</option>
                    <option value="Fighter">fighter</option>
                    <option value="Wizard">wizard</option>
                    <option value="Rogue">rogue</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="race">
                  <Form.Select className="forms2" >
                    <option value="0">Choose a Race</option>
                    <option value="Human">human</option>
                    <option value="Elf">elf</option>
                    <option value="Dragonborn">dragonborn</option>
                  </Form.Select>
                </Form.Group>
                {/* <Form.Group controlId="pronouns">
                <Form.Select  >
                  <option value="0">Choose pronouns</option>
                  <option value="He, Him, His">He, Him, His</option>
                  <option value="[She, Her, Hers]">She, Her, Hers</option>
                  <option value="[They, Them, Theirs]">They, Them, Theirs</option>
                </Form.Select>
                </Form.Group> */}
                <Button type="submit">Create!</Button>

              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleCloseModal}>Close</Button>
            </Modal.Footer>

          </Modal>
        </Container>
        {
          this.state.showGameCard &&
          <Container >
            <Card className="gameCard">
              <Card.Body>
                <Card.Img
                  src={forest}
                  alt='a book'
                />
                <Card.ImgOverlay className="gameCardText">
                  <Card.Title>Please Work</Card.Title>
                  <Card.Text>{this.state.currentHero.name}</Card.Text>
                </Card.ImgOverlay>
              </Card.Body>
            </Card>
          </Container>
        }

      </>

    )
  }
};


export default withAuth0(HeroSelector);
