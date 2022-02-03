import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import axios from 'axios';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';
import HeroSelector from './HeroSelector.js';
import { Container, Button } from 'react-bootstrap';
import Header from './Header';
import './App.css'
// import Book1 from './img/book1.png';


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
    }
  }
  
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
    console.log('this is monsters data', this.state.monsters)
  }

  //Getting Random Number
  getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  
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
  loadCounter ++;
  console.log('this is skill load data', this.state.skillData)

}


  render() {
    return (
      <>
        <Header />
        {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        {this.props.auth0.isAuthenticated ? <h2>Welcome {this.props.auth0.user.given_name} !</h2> : <h2>Please Log In!</h2>}
        {this.props.auth0.isAuthenticated ?
          <Container>
            <HeroSelector />
            <Button onClick={this.getMonsters}>Get Monsters</Button>
            <Button onClick={this.loadMonster}>Load Monster</Button>
            <Button onClick={this.getWeapons}>Get Weapons</Button>
            <Button onClick={this.loadWeapon}>Load Weapon</Button>
            <Button onClick={this.getSpells}>Get Spells</Button>
            <Button onClick={this.loadSpell}>Load Spell</Button>
            <Button onClick={this.getClasses}>Get Classes</Button>
            <Button onClick={this.loadClass}>Load Class</Button>
            <Button onClick={this.getRaces}>Get Races</Button>
            <Button onClick={this.loadRace}>Load Race</Button>
            <Button onClick={this.getLanguages}>Get Languages</Button>
            <Button onClick={this.loadLanguage}>Load Language</Button>
            <Button onClick={this.getSkills}>Get Skills</Button>
            <Button onClick={this.loadSkill}>Load Skill</Button>
          </Container>
          : <h2></h2>
        }

      </>
    )
  }
}

export default withAuth0(App);

