import React from 'react';
import axios from 'axios';
import { Accordion, Card, Container, Button, Dropdown, Modal, Form } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';



const SERVER = process.env.REACT_APP_SERVER_URL;

class HeroSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heros: [],
      currentHero: {},
      showModal: false
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

  render() {
    console.log(this.props.auth0.user)
    let herosToRender = this.state.heros.map((hero, idx) =>

      <Accordion.Item key={idx} eventKey={idx}>
        <Accordion.Header>{hero.name}</Accordion.Header>
        <Accordion.Body>
          {hero.origin}
          {hero.progress}
          {hero.background}
          <Button variant="primary" onClick={() => this.setState({ currentHero: hero })}>Load</Button>
          <Button variant="danger" onClick={() => this.deleteHero(hero._id)}>Delete</Button>
        </Accordion.Body>
      </Accordion.Item>

    )

    return (
      <>
        <Container>
          <Card>
            <Card.Body>
              <Accordion>
                {herosToRender}
              </Accordion>
              <Button onClick={this.handleModal}>Creat New Hero</Button>
            </Card.Body>
          </Card>
        </Container>

        <Container>
          <Modal
            show={this.state.showModal}
            onHide={this.handleCloseModal}
            centered
            size="xl"
          >

            <Modal.Header closeButton>
              <Modal.Title>Create Your Hero</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Give Your Hero a Name!</Form.Label>
                  <Form.Control type="text" placeholder="Type Name Here" />
                </Form.Group>
              </Form>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">Choose Race</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">some template literal</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">some template literal</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">some template literal</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">some template literal</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">Choose Class</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">some template literal</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">some template literal</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">some template literal</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">some template literal</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Modal.Body>
            <Modal.Footer>
              <Button>Create!</Button>
              <Button onClick={this.handleCloseModal}>Close</Button>
            </Modal.Footer>

          </Modal>
        </Container>
      </>

    )
  }
};


export default withAuth0(HeroSelector);
