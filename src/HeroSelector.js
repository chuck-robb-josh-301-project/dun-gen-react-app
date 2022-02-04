import React from 'react';
import axios from 'axios';
import { Accordion, Card, Container, Button, Modal, Form } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSelector.css'
import cave from './img/16279.jpg'
import swamp from './img/2202.jpg'
import bridge from './img/bridge-19513.jpg'
import forest from './img/forest-4099730.jpg'
import village from './img/village.jpg'
import stairs from './img/stairs2.jpg'
import niceVillage from './img/villageNice.jpg'
import fireVillage from './img/fireVillage.jpg'
import warrior from './img/warrior.jpg'
import destroyedVillage from './img/Destroyed-Village.jpg'
import d1 from "./img/d1.png"
import d2 from "./img/d2.png"
import d3 from "./img/d3.png"
import d4 from "./img/d4.png"
import d5 from "./img/d5.png"
import d6 from "./img/d6.png"
import d7 from "./img/d7.png"
import d8 from "./img/d8.png"
import d9 from "./img/d9.png"
import d10 from "./img/d10.png"
import d11 from "./img/d11.png"
import d12 from "./img/d12.png"
import d13 from "./img/d13.png"
import d14 from "./img/d14.png"
import d15 from "./img/d15.png"
import d16 from "./img/d16.png"
import d17 from "./img/d17.png"
import d18 from "./img/d18.png"
import d19 from "./img/d19.png"
import d20 from "./img/d20.png"

const imageObject = {
  forest,
  cave,
  swamp,
  bridge,
  village,
  stairs,
  niceVillage,
  fireVillage,
  warrior,
  destroyedVillage,
}

const diceObject = {
  d1,
  d2,
  d3,
  d4,
  d5,
  d6,
  d7,
  d8,
  d9,
  d10,
  d11,
  d12,
  d13,
  d14,
  d15,
  d16,
  d17,
  d18,
  d19,
  d20
}
let possiblePronouns = ['they', 'them', 'their'];

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
      imageSrc: '',
      location: 'niceVillage',
      diceImgSrc: '',
      randDieNum: 'd18',
      showDieImg: false,
      showHero: false,
      showGameCard2: false,
      showGameCard3: false,
      showGameCard4: false,
      showGameCard5: false,
      secondLocation: '',


    }
  }

  handleImgChange = () => {
    this.setState({
      imageSrc: imageObject[this.state.location]
    })
  }

  handleDieImgChange = () => {
    this.setState({
      diceImgSrc: diceObject[this.state.randDieNum]
    })
  }

  handleRollDie = (e) => {
    e.preventDefault();
    this.setState({
      showDieImg: true,
      showGameCard: false,
      showGameCard2: true,
      secondLocation: fireVillage,

    })
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
    this.props.getAllThings();
  }

  renderCardThree = (e)=>{
    e.preventDefault();
    this.setState({
      showGameCard2: false,
      showGameCard3: true,
      secondLocation: village,
    })
  }
  
  renderCardFour = (e)=>{
    e.preventDefault();
    this.setState({
      showGameCard3: false,
      showGameCard4: true,
      secondLocation: destroyedVillage,
    })
  }
  renderCardFive = (e)=>{
    e.preventDefault();
    this.setState({
      showGameCard4: false,
      showGameCard5: true,
      secondLocation: warrior,
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
    // remove handleImgChange
    this.handleImgChange();
    this.handleDieImgChange();
  }

  handleHeroSubmit = (e) => {
    e.preventDefault();
    let newHero = {
      name: e.target.name.value,
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
    console.log(imageObject);

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
                    <option value="Fighter">Fighter</option>
                    <option value="Wizard">Wizard</option>
                    <option value="Rogue">Rogue</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="race">
                  <Form.Select className="forms2" >
                    <option value="0">Choose a Race</option>
                    <option value="Human">Human</option>
                    <option value="Elf">Elf</option>
                    <option value="Dragonborn">Dragonborn</option>
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
            <Card className="gameCard" >
              <Card.Body>
                <Card.Img
                  src={this.state.imageSrc}
                  alt={this.state.imageSrc}
                  className="cardimg"
                />
                <Card.ImgOverlay className="gameCardText">
                  
                  <Card.Text className="wallotext"> {`${this.state.currentHero.name} ends another day on the outskirts of the village of ${this.state.currentHero.villageName}. Born in this simple cottage, as much a local as ${possiblePronouns[2]} ${this.props.raceData.name} neighbors, ${possiblePronouns[0]} keeps to ${possiblePronouns[1]}self. Decades earlier, ${possiblePronouns[2]} parents had been travellers and chose ${this.state.currentHero.villageName} to settle down in--though for reasons lost on ${this.state.currentHero.name}. Raised with the skills ${possiblePronouns[2]} parents learned elsewhere, finding work in the village was easy and aimless, but interactions were terse and just shy of hostile.\n`}
                  </Card.Text>
{/* //  ${this.state.currentHero.name} awakes with a start to the smell of char. Smoke and shouting cloud ${possiblePronouns[2]} mind for a few moments, then ${possiblePronouns[0]} rushes to get clothed and investigate.\n
//  Following the noise, ${this.state.currentHero.name} bursts out of ${possiblePronouns[2]} home to see flames slithering up its far wall. Every few paces to the nearest house, fire dances in tight pools. Harried ${this.props.raceData.name}s ferry buckets of mud and well water to nearby buildings in the dim morning light. Spent torches litter the ground, as do smears of blood, scattered rags, and an orphaned boot. The baker pulls ${this.state.currentHero.name} by the arm away from the mud team with a plea: "Into town! Hurry!"\n 
//  The shouts and clatter lead into the center of ${this.state.currentHero.villageName}. On the way, a half-dozen still bodies lay on the cobblestones untended. A loose semicircle of villagers hold trembling pitchforks, scythes, and torches, their horrified faces exaggerated by the flickering light. Before them, the source of the commotion: a ${this.props.monsterData.name}. ${this.state.currentHero.name} readies what weapons are at hand and advances. The practiced movements and confident bearing are not lost on the ${this.props.monsterData.name}. 
//  Upon return, ${this.state.currentHero.name} sees only the buckling frame of ${possiblePronouns[2]} childhood home. A fit of grief sweeps through rage at the attackers, then suspicion at the neighbors, but settles into a dank quiet -- it was unlikely that the torch-wielding villagers would have lit the cottage other than in hapless desperation, though certainty found no purchase.\n
//  "${this.state.currentHero.race}!" a voice calls as it crests the hill behind you. It is the village elder, weary and determined, lurching at an angle against some sharp farming implement and a back satchel. The elder eyes ${this.state.currentHero.name}'s smoldering abode: "It seem we have both lost our ties to ${this.state.currentHero.villageName} this day." Taking stock of the chaos of the morning, ${this.state.currentHero.name} recalls the modest coloring on the clothing of several of the fallen among the drab of their fellows. "My remaining time was for my children, my remaining wealth for their children-to-be. If you can secure their justice, their inheritance will pay your way to a new home that is... more suitable for you." The elder reveals a solid case just large enough to still fit under an arm-- weathered but with faint filigree still showing, as well as an oddly marked disk small enough to fit in the palm of your hand. "Do you assent, ${this.state.currentHero.race}?"\n
//  ${this.state.currentHero.name} nods ${possiblePronouns[2]} head silently, bereft of reasons not to.\n
//  The elder scrapes an aged finger against the flat end of the bladed tool, pulling up a caked brown gunk-- perhaps blood, or something more sinister still-- rubbing it around the edge of the box's lid and along an axled arrow suspended above the disk. Inaudible whispers and a series of arching hand gestures follow, until the seam of the case disappears from view, leaving uninterrupted patterns. The elder then hands over the objects.
//  "Our contract is signed into the bounty. You need not return if your task is done."\n
//  The elder gives no explanation of the disk, but when ${this.state.currentHero.name} in With only the clothes on ${possiblePronouns[2]} back, some provisions from the elder, and the hardiest heirlooms that were salvaged from the fire, ${this.state.currentHero.name} leaves home for the first and final time.\n\n`} */}
                  

                  {
                    this.state.showDieImg &&
                    <Card.Img
                      src={this.state.diceImgSrc}
                      alt={this.state.diceImgSrc}

                      className="dieImg"
                    />
                  }
                  <Button onClick={this.handleRollDie} className="rollButton">Roll!</Button>

                </Card.ImgOverlay>
              </Card.Body>
            </Card>
          </Container>

        } 
         {
          this.state.showGameCard2 &&
          <Container >
            <Card className="gameCard" >
              <Card.Body>
                <Card.Img
                  src={this.state.secondLocation}
                  alt={this.state.imageSrc}
                  className="cardimg"
                />
                <Card.ImgOverlay className="gameCardText">
                  
                  <Card.Text className="wallotext"> 
                  {`${this.state.currentHero.name} awakes with a start to the smell of char. Smoke and shouting cloud ${possiblePronouns[2]} mind for a few moments, then ${possiblePronouns[0]} rushes to get clothed and investigate.\n Following the noise, ${this.state.currentHero.name} bursts out of ${possiblePronouns[2]} home to see flames slithering up its far wall. Every few paces to the nearest house, fire dances in tight pools. Harried ${this.props.raceData.name}s ferry buckets of mud and well water to nearby buildings in the dim morning light. Spent torches litter the ground, as do smears of blood, scattered rags, and an orphaned boot. The baker pulls ${this.state.currentHero.name} by the arm away from the mud team with a plea: "Into town! Hurry!"\n`}
                  </Card.Text>
                  <Button onClick={this.renderCardThree} className="rollButton">Roll!</Button>

                </Card.ImgOverlay>
              </Card.Body>
            </Card>
          </Container>   
           }
           {
          this.state.showGameCard3 &&
          <Container >
            <Card className="gameCard" >
              <Card.Body>
                <Card.Img
                  src={this.state.secondLocation}
                  alt={this.state.imageSrc}
                  className="cardimg"
                />
                <Card.ImgOverlay className="gameCardText">
                  
                  <Card.Text className="wallotext"> 
                  {`The shouts and clatter lead into the center of ${this.state.currentHero.villageName}. On the way, a half-dozen still bodies lay on the cobblestones untended. A loose semicircle of villagers hold trembling pitchforks, scythes, and torches, their horrified faces exaggerated by the flickering light. Before them, the source of the commotion: a ${this.props.monsterData.name}. ${this.state.currentHero.name} readies what weapons are at hand and advances. The practiced movements and confident bearing are not lost on the ${this.props.monsterData.name}. 
  Upon return, ${this.state.currentHero.name} sees only the buckling frame of ${possiblePronouns[2]} childhood home. A fit of grief sweeps through rage at the attackers, then suspicion at the neighbors, but settles into a dank quiet -- it was unlikely that the torch-wielding villagers would have lit the cottage other than in hapless desperation, though certainty found no purchase.\n`}
                  </Card.Text>
                  <Button onClick={this.renderCardFour} className="rollButton">Roll!</Button>


                </Card.ImgOverlay>
              </Card.Body>
            </Card>
          </Container>   
           }

{
          this.state.showGameCard4 &&
          <Container >
            <Card className="gameCard" >
              <Card.Body>
                <Card.Img
                  src={this.state.secondLocation}
                  alt={this.state.imageSrc}
                  className="cardimg"
                />
                <Card.ImgOverlay className="gameCardText">
                  
                  <Card.Text className="wallotext"> 
                  {`"${this.state.currentHero.race}!" a voice calls as it crests the hill behind you. It is the village elder, weary and determined, lurching at an angle against some sharp farming implement and a back satchel. The elder eyes ${this.state.currentHero.name}'s smoldering abode: "It seem we have both lost our ties to ${this.state.currentHero.villageName} this day." Taking stock of the chaos of the morning, ${this.state.currentHero.name} recalls the modest coloring on the clothing of several of the fallen among the drab of their fellows. "My remaining time was for my children, my remaining wealth for their children-to-be. If you can secure their justice, their inheritance will pay your way to a new home that is... more suitable for you." The elder reveals a solid case just large enough to still fit under an arm-- weathered but with faint filigree still showing, as well as an oddly marked disk small enough to fit in the palm of your hand. "Do you assent, ${this.state.currentHero.race}?"\n`}
                  </Card.Text>
                  <Button onClick={this.renderCardFive} className="rollButton">Roll!</Button>

                </Card.ImgOverlay>
              </Card.Body>
            </Card>
          </Container>   
           }

{
          this.state.showGameCard5 &&
          <Container >
            <Card className="gameCard" >
              <Card.Body>
                <Card.Img
                  src={this.state.secondLocation}
                  alt={this.state.imageSrc}
                  className="cardimg"
                />
                <Card.ImgOverlay className="gameCardText">
                  
                  <Card.Text className="wallotext"> 
                  {`${this.state.currentHero.name} nods ${possiblePronouns[2]} head silently, bereft of reasons not to.\n
  The elder scrapes an aged finger against the flat end of the bladed tool, pulling up a caked brown gunk-- perhaps blood, or something more sinister still-- rubbing it around the edge of the box's lid and along an axled arrow suspended above the disk. Inaudible whispers and a series of arching hand gestures follow, until the seam of the case disappears from view, leaving uninterrupted patterns. The elder then hands over the objects.
  "Our contract is signed into the bounty. You need not return if your task is done."\n
  The elder gives no explanation of the disk, but ${this.state.currentHero.name} in only the clothes on ${possiblePronouns[2]} back, some provisions from the elder, and the hardiest heirlooms that were salvaged from the fire, ${this.state.currentHero.name} leaves home for the first and final time.\n\n`}
                  </Card.Text>
                  {/* <Button onClick={this.handleRollDie} className="rollButton">Roll!</Button> */}

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
