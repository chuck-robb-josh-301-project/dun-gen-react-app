import React from 'react';
// import axios from 'axios';
import { Accordion, Card, Container, Button } from 'react-bootstrap';


// let SERVER = process.env.REACT_APP_SERVER;

class HeroSelector extends React.Component {

  render() {
    return (
      <Container>
        <Card>
          <Accordion>
            <Accordion.Header>Hero name</Accordion.Header>
            <Accordion.Body>
              <Button variant="primary">Load</Button>
              <Button variant="danger">Delete</Button>
            </Accordion.Body>
          </Accordion>
        </Card>
      </Container>


    )
  }
};

export default HeroSelector;
