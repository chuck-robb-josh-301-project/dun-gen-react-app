import React from 'react';
// import axios from 'axios';
import { Accordion, Card, Container, Button, Dropdown, Modal, Form } from 'react-bootstrap';
// import HeroCreator from './HeroCreator.js';


// let SERVER = process.env.REACT_APP_SERVER;

class HeroSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
  
    return (
      <>
        <Container>
          <Card>
            <Accordion>
              <Accordion.Header>Hero name template literal</Accordion.Header>
              <Accordion.Body>
                <Button variant="primary">Load</Button>
                <Button variant="danger">Delete</Button>
              </Accordion.Body>
            </Accordion>
            <Card.Body>
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

export default HeroSelector;
