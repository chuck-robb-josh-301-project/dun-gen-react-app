import { render } from '@testing-library/react';
import React from 'react';
import { Card } from 'react-bootstrap';

const allDice = [];

class DTwenty extends React.Component {

  function Die(src, value) {
    this.src = `img/${src}`;
    this.value = value;
    allCards.push(this);
  
  }
  console.log(allCards);

  new Die('d1.png', 1);
  new Die('d2.png', 2);
  new Die('d3.png', 3);
  new Die('d4.png', 4);
  new Die('d5.png', 5);
  new Die('d6.png', 6);
  new Die('d7.png', 7);
  new Die('d8.png', 8);
  new Die('d9.png', 9);
  new Die('d10.png', 10);
  new Die('d11.png', 11);
  new Die('d12.png', 12);
  new Die('d13.png', 13);
  new Die('d14.png', 14);
  new Die('d15.png', 15);
  new Die('d16.png', 16);
  new Die('d17.png', 17);
  new Die('d18.png', 18);
  new Die('d19.png', 19);
  new Die('d20.png', 20);

function getRandomDie(){
  return Math.floor(Math.random()) * allDice.length);
}

function renderDie(){
  let randomDie = getRandomDie();
  
  dieOne = randomDie;
  
  imageOne.src = allDice[dieOne].src
  
  console.log(dieOne);
}

render(){
  return(


  )
}
