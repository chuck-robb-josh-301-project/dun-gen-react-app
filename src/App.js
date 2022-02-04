import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import axios from 'axios';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';
import HeroSelector from './HeroSelector.js';
import { Container, Button, Modal, Card } from 'react-bootstrap';
import Header from './Header';
import './App.css'
// import Book1 from './img/book1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import stairs from './img/stairs2.jpg'


const urlApi = `https://www.dnd5eapi.co`;
let currentMonster = [];
let currentWeapon = [];
let currentSpell = [];
let currentClass = [];
let currentRace = [];
let currentLanguage = [];
let currentSkill = [];
let loadCounter = 0;




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      monsterData: [],
      weapons: [],
      weaponData: [],
      spells: [],
      spellData: [],
      classes: [],
      classData: [],
      races: [],
      raceData: [],
      languages: [],
      languageData: [],
      skills: [],
      skillData: [],
      renderError: false,
      // aboutUs: false,
    }
  }

  //Getting Random Number
  getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };


  //Getting list of monsters
  getMonsters = async () => {
    try {
      let monsters = await axios.get(`${urlApi}/api/monsters`);
      this.setState({
        monsters: monsters.data,
      })
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `Uh Oh Error: ${error.response.status}, ${error.response.data.error}`
      })
    }
    this.loadMonster();
    console.log('this is monsters data', this.state.monsters)
  }


  //Generating a random number data via api call
  loadMonster = async () => {
    let monsterIndex = this.getRandomInt(331);
    currentMonster.push(this.state.monsters.results[monsterIndex])
    try {
      let monster = await axios.get(`${urlApi}${currentMonster[loadCounter].url}`);
      this.setState({
        monsterData: monster.data,
      })
      // console.log(this.state.monsterData);
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `Uh Oh Error: ${error.response.status}, ${error.response.data.error}`
      })
    }
    console.log('this is monsters data', this.state.monsterData)
  }

  //Getting list of weapons
  getWeapons = async () => {
    try {
      let weapons = await axios.get(`${urlApi}/api/equipment-categories/weapon`);
      this.setState({
        weapons: weapons.data,
      })
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `Uh Oh Error: ${error.response.status}, ${error.response.data.error}`
      })
    }
    this.loadWeapon();
    console.log('this is weapons data', this.state.weapons)
  }

  //Generating a random number data via api call
  loadWeapon = async () => {
    let weaponIndex = this.getRandomInt(63);
    currentWeapon.push(this.state.weapons.equipment[weaponIndex])
    try {
      let weapon = await axios.get(`${urlApi}${currentWeapon[loadCounter].url}`);
      this.setState({
        weaponData: weapon.data,
      })
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `Uh Oh Error: ${error.response.status}, ${error.response.data.error}`
      })
    }
    console.log('this is weapon loada data', this.state.weaponData)
  }

  //Getting list of spells
  getSpells = async () => {
    try {
      let spells = await axios.get(`${urlApi}/api/spells?school=evocation`);
      this.setState({
        spells: spells.data,
      })
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `Uh Oh Error: ${error.response.status}, ${error.response.data.error}`
      })
    }
    this.loadSpell();
    console.log('this is spells data', this.state.spells)
  }

  //Generating a random number data via api call
  loadSpell = async () => {
    let spellIndex = this.getRandomInt(59);
    currentSpell.push(this.state.spells.results[spellIndex])
    try {
      let spell = await axios.get(`${urlApi}${currentSpell[loadCounter].url}`);
      this.setState({
        spellData: spell.data,
      })
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `Uh Oh Error: ${error.response.status}, ${error.response.data.error}`
      })
    }
    console.log('this is spell load data', this.state.spellData)

  }
  //Getting list of classes
  getClasses = async () => {
    try {
      let classes = await axios.get(`${urlApi}/api/classes`);
      this.setState({
        classes: classes.data,
      })
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `Uh Oh Error: ${error.response.status}, ${error.response.data.error}`
      })
    }
    this.loadClass();
    console.log('this is classes data', this.state.classes)
  }

  //Generating a random number data via api call
  loadClass = async () => {
    let classIndex = this.getRandomInt(11);
    currentClass.push(this.state.classes.results[classIndex])
    try {
      //Can't use class as a variable because JS uses class
      let classApi = await axios.get(`${urlApi}${currentClass[loadCounter].url}`);
      this.setState({
        classData: classApi.data,
      })
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `Uh Oh Error: ${error.response.status}, ${error.response.data.error}`
      })
    }
    console.log('this is class load data', this.state.classData)

  }

  //Getting list of races
  getRaces = async () => {
    try {
      let races = await axios.get(`${urlApi}/api/races`);
      this.setState({
        races: races.data,
      })
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `Uh Oh Error: ${error.response.status}, ${error.response.data.error}`
      })
    }
    this.loadRace();
    console.log('this is races data', this.state.races)
  }

  //Generating a random number profile data via api call
  loadRace = async () => {
    let raceIndex = this.getRandomInt(8);
    currentRace.push(this.state.races.results[raceIndex])
    try {
      let race = await axios.get(`${urlApi}${currentRace[loadCounter].url}`);
      this.setState({
        raceData: race.data,
      })
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `Uh Oh Error: ${error.response.status}, ${error.response.data.error}`
      })
    }
    console.log('this is race load data', this.state.raceData)

  }

  //Getting list of languages
  getLanguages = async () => {
    try {
      let languages = await axios.get(`${urlApi}/api/languages`);
      this.setState({
        languages: languages.data,
      })
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `Uh Oh Error: ${error.response.status}, ${error.response.data.error}`
      })
    }
    this.loadLanguage();
    console.log('this is languages data', this.state.languages)
  }

  //Generating a random number profile data via api call
  loadLanguage = async () => {
    let languageIndex = this.getRandomInt(15);
    currentLanguage.push(this.state.languages.results[languageIndex])
    try {
      let language = await axios.get(`${urlApi}${currentLanguage[loadCounter].url}`);
      this.setState({
        raceData: language.data,
      })
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `Uh Oh Error: ${error.response.status}, ${error.response.data.error}`
      })
    }
    console.log('this is language load data', this.state.raceData)

  }

  //Getting list of skills
  getSkills = async () => {
    try {
      let skills = await axios.get(`${urlApi}/api/skills`);
      this.setState({
        skills: skills.data,
      })
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `Uh Oh Error: ${error.response.status}, ${error.response.data.error}`
      })
    }
    this.loadSkill();
    console.log('this is skills data', this.state.skills)
  }

  //Generating a random number profile data via api call
  loadSkill = async () => {
    let skillIndex = this.getRandomInt(16);
    currentSkill.push(this.state.skills.results[skillIndex])
    try {
      let skill = await axios.get(`${urlApi}${currentSkill[loadCounter].url}`);
      this.setState({
        skillData: skill.data,
      })
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `Uh Oh Error: ${error.response.status}, ${error.response.data.error}`
      })
    }
    loadCounter++;
    console.log('this is skill load data', this.state.skillData)

  }

  getAllThings = () => {
    this.getMonsters();
    this.getWeapons();
    this.getSpells();
    this.getClasses();
    this.getRaces();
    this.getLanguages();
    this.getSkills();
  }

  handleAbout = (e) => {
    e.preventDefault();
    this.setState({
      aboutUs: true,
    })
  }


  render() {
    console.log('app state', this.state);
    return (
      <div className='body'>

        <>
          <Header className="headClass" />
          {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
          {this.props.auth0.isAuthenticated ? <h2 className="welcome">Welcome {this.props.auth0.user.given_name} !</h2> : <h2>Please Log In!</h2>}
          <Button onClick={this.handleAbout}>About Us</Button>
          {this.props.auth0.isAuthenticated ?
            <Container>
              <HeroSelector
                getAllThings={this.getAllThings}
                monsterData={this.state.monsterData}
                weaponData={this.state.weaponData}
                spellData={this.state.spellData}
                classData={this.state.classData}
                raceData={this.state.raceData}
                languageData={this.state.languageData}
                skillData={this.state.skillData}
              />
              
            </Container>
            : <h2></h2>
          }

              <Card className="clear">
                <Card.Img
                src={stairs}
                />
              </Card>

          {
            this.state.aboutUs &&
            <Container>
              <Modal>
                <Modal.Body>
                  <img />
                  <p>Joshua is an Air Force veteran and budding software developer based out of Seattle. He discovered a deep interest in coding while working at National Oceanic and Atmospheric Administration in an effort to automate processes for remote work during COVID-19.
                  </p>
                  <img />
                  <p>I'm Robb Alexander: Most of my educational background is in philosophy and biology, but I love learning about new fields. I'm a student developer hoping to get into the Seattle-area tech workforce in the coming year. I'm excited to learn and apply more coding skills for a career that challenges my critical thinking.
                    GitHub:
                    LinkedIn:
                  </p>
                  <im />
                  <p>Chuck was born in Philadelphia PA, but spent the first 2 years of his life living in Saudi Arabia.  He was then raised in Pittsburgh, PA where he still resides.  Chuck has two undergraduate degrees that he has hardly used and is now in school to for software development. He became interested in software development while learning to program his raspberry pi as a hobby. Chuck’s interests include: Video games, Movies, TV, Woodworking, building projects with raspberry pis, and general tinkering.  After Code Fellows Chuck’s ultimate goal is to get a job working on video games, robotics, or a combination of the two.
                  </p>
                </Modal.Body>
              </Modal>
            </Container>
          }

        </>
        <footer className="foot">&copy; jor o'chu</footer>
      </div>

    )
  }
}

export default withAuth0(App);
