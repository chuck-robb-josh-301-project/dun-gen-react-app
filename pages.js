
const testHero = {
  name: 'Testy',
  progress: '',
  race: 'troll',
  class: 'coder',
};

let prologueOneA = `This is sample text about where ${testHero.name} came from, their(SG-pronouns?) motivations, or some such. ${testHero.name} is a ${testHero.race} working as a ${testHero.class} to get by in between adventures-- living treasure-chest-to-treasure-chest`;

let fullText = '';

let dragon = { name: "Dragon" };

let orc = { name: "Orc" };
let goblin = { name: "goblin" };

let monsterArr = [dragon, goblin, orc];

let currentMonster;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let rollMonster = () => {
  let monsterIndex = getRandomInt(monsterArr.length);
  currentMonster = monsterArr[monsterIndex];
};

rollMonster();

let adjArr = ['cool', 'hip', 'sick', 'feisty'];

let currentAdj;

let rollAdjective = () => {
  let adjIdx = getRandomInt(adjArr.length);
  currentAdj = adjArr[adjIdx];
};

let pageOne = `${prologueOneA}\n\nThis is sample text for ${testHero.name}. ${testHero.name} has encountered a big ol' ${currentMonster.name}!\n\n`;

fullText += pageOne;

console.log(pageOne)

rollAdjective();

rollMonster();

let pageTwo = `This is MORE ${currentAdj} sample text for ${testHero.name}. Here comes a ${currentMonster.name}!\n\n`;

let writePageOne = () => {
  return `<p>${pageOne}</p>`;
}

let writePageTwo = () => {
  return `<p>${pageTwo}</p>`;
}

writePageOne();
writePageTwo();

fullText += pageTwo;

console.log(fullText);
